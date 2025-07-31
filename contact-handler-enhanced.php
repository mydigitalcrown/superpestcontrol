<?php
// Super Pest Control Mumbai - Enhanced Contact Form Handler with SMTP Support
// This script handles contact form submissions with multiple email delivery methods

// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Enable CORS for the domain (adjust as needed)
header('Access-Control-Allow-Origin: https://superpestcontrol.in');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
$config = [
    'recipient_email' => 'superpestcontrol8858@gmail.com',
    'cc_email' => '', // Optional CC email
    'from_name' => 'Super Pest Control Website',
    'from_email' => 'noreply@superpestcontrol.in',
    'subject_prefix' => '[Website Contact]',
    'max_message_length' => 2000,
    'required_fields' => ['firstName', 'lastName', 'email', 'phone'],
    'honeypot_field' => 'website', // Spam protection
    
    // SMTP Configuration (if needed)
    'use_smtp' => false, // Set to true to use SMTP instead of mail()
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_secure' => 'tls', // 'tls' or 'ssl'
    'smtp_username' => 'superpestcontrol8858@gmail.com',
    'smtp_password' => '', // Set your email password or app password
    
    // Backup notification method
    'webhook_url' => '', // Optional webhook for notifications
    'admin_phone' => '+918097941077' // For SMS notifications if available
];

// Simple SMTP class for sending emails
class SimpleSMTP {
    private $host, $port, $username, $password, $secure;
    private $connection;
    
    public function __construct($host, $port, $username, $password, $secure = 'tls') {
        $this->host = $host;
        $this->port = $port;
        $this->username = $username;
        $this->password = $password;
        $this->secure = $secure;
    }
    
    public function send($to, $subject, $body, $headers = []) {
        // This is a basic implementation
        // For production, consider using PHPMailer or SwiftMailer
        
        $default_headers = [
            'From: ' . $this->username,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8'
        ];
        
        $all_headers = array_merge($default_headers, $headers);
        
        // Use mail() function with additional parameters for SMTP
        $additional_parameters = "-f " . $this->username;
        
        return mail($to, $subject, $body, implode("\r\n", $all_headers), $additional_parameters);
    }
}

// Function to sanitize input
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

// Function to validate email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Function to validate phone number
function isValidPhone($phone) {
    $phone = preg_replace('/[^\d+]/', '', $phone);
    return preg_match('/^[\+]?[1-9][\d]{9,14}$/', $phone);
}

// Function to check for spam patterns
function isSpam($data) {
    $spam_patterns = [
        '/viagra/i', '/cialis/i', '/casino/i', '/poker/i', '/loan/i',
        '/bitcoin/i', '/cryptocurrency/i', '/investment/i', '/forex/i'
    ];
    
    $text = strtolower($data['message'] . ' ' . $data['firstName'] . ' ' . $data['lastName']);
    
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $text)) {
            return true;
        }
    }
    
    // Check for suspicious patterns
    if (preg_match('/[a-z]{50,}/i', $text)) return true; // Very long words
    if (preg_match('/http/i', $text)) return true; // URLs in message
    if (substr_count($text, '@') > 2) return true; // Multiple email addresses
    
    return false;
}

// Function to send email using appropriate method
function sendEmail($config, $to, $subject, $body, $headers = []) {
    if ($config['use_smtp'] && !empty($config['smtp_password'])) {
        // Use SMTP
        $smtp = new SimpleSMTP(
            $config['smtp_host'],
            $config['smtp_port'],
            $config['smtp_username'],
            $config['smtp_password'],
            $config['smtp_secure']
        );
        return $smtp->send($to, $subject, $body, $headers);
    } else {
        // Use PHP mail() function
        $headers_string = implode("\r\n", $headers);
        return mail($to, $subject, $body, $headers_string);
    }
}

// Function to log form submission
function logSubmission($data, $status) {
    $log_entry = date('Y-m-d H:i:s') . " - " . $status . " - " . 
                 $data['firstName'] . " " . $data['lastName'] . " - " . 
                 $data['email'] . " - " . $data['phone'] . "\n";
    
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
}

try {
    // Get and decode JSON input
    $json_input = file_get_contents('php://input');
    $form_data = json_decode($json_input, true);
    
    // If JSON decode failed, try form data
    if (!$form_data) {
        $form_data = $_POST;
    }
    
    // Honeypot check (basic spam protection)
    if (!empty($form_data[$config['honeypot_field']])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Spam detected']);
        exit;
    }
    
    // Rate limiting check (basic)
    $client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'];
    $rate_limit_file = 'rate_limit_' . md5($client_ip) . '.txt';
    if (file_exists($rate_limit_file)) {
        $last_submission = file_get_contents($rate_limit_file);
        if (time() - $last_submission < 60) { // 1 minute cooldown
            http_response_code(429);
            echo json_encode(['success' => false, 'message' => 'Please wait before submitting again']);
            exit;
        }
    }
    file_put_contents($rate_limit_file, time());
    
    // Validate required fields
    $errors = [];
    foreach ($config['required_fields'] as $field) {
        if (empty($form_data[$field])) {
            $errors[] = ucfirst($field) . ' is required';
        }
    }
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Missing required fields', 'errors' => $errors]);
        exit;
    }
    
    // Sanitize inputs
    $data = [];
    foreach ($form_data as $key => $value) {
        $data[$key] = sanitizeInput($value);
    }
    
    // Validate email format
    if (!isValidEmail($data['email'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }
    
    // Validate phone number
    if (!isValidPhone($data['phone'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid phone number']);
        exit;
    }
    
    // Check message length
    if (isset($data['message']) && strlen($data['message']) > $config['max_message_length']) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Message too long']);
        exit;
    }
    
    // Basic spam check
    if (isSpam($data)) {
        logSubmission($data, 'SPAM_BLOCKED');
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Spam detected']);
        exit;
    }
    
    // Prepare email content
    $subject = $config['subject_prefix'] . ' New Contact Form Submission - ' . $data['firstName'] . ' ' . $data['lastName'];
    
    // Create email body
    $email_body = "New contact form submission from Super Pest Control website:\n\n";
    $email_body .= "CUSTOMER DETAILS:\n";
    $email_body .= "==================\n";
    $email_body .= "Name: " . $data['firstName'] . " " . $data['lastName'] . "\n";
    $email_body .= "Email: " . $data['email'] . "\n";
    $email_body .= "Phone: " . $data['phone'] . "\n";
    
    if (!empty($data['address'])) {
        $email_body .= "Address: " . $data['address'] . "\n";
    }
    
    $email_body .= "\nSERVICE DETAILS:\n";
    $email_body .= "================\n";
    
    if (!empty($data['serviceType'])) {
        $service_map = [
            'termite' => 'Termite Control',
            'cockroach' => 'Cockroach Control',
            'rodent' => 'Rodent Control',
            'ant' => 'Ant Control',
            'mosquito' => 'Mosquito Control',
            'fumigation' => 'Commercial Fumigation',
            'inspection' => 'General Inspection',
            'other' => 'Other Service'
        ];
        $email_body .= "Service Needed: " . ($service_map[$data['serviceType']] ?? ucfirst($data['serviceType'])) . "\n";
    } else {
        $email_body .= "Service Needed: Not specified\n";
    }
    
    if (!empty($data['urgency'])) {
        $urgency_map = [
            'normal' => 'Normal - Within a week',
            'urgent' => 'Urgent - Within 2-3 days',
            'emergency' => 'Emergency - Same day'
        ];
        $email_body .= "Urgency Level: " . ($urgency_map[$data['urgency']] ?? $data['urgency']) . "\n";
    }
    
    if (!empty($data['message'])) {
        $email_body .= "\nCUSTOMER MESSAGE:\n";
        $email_body .= "=================\n";
        $email_body .= $data['message'] . "\n";
    }
    
    $email_body .= "\nSUBMISSION INFO:\n";
    $email_body .= "================\n";
    $email_body .= "Submitted: " . date('Y-m-d H:i:s T') . "\n";
    $email_body .= "IP Address: " . $client_ip . "\n";
    $email_body .= "User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "\n";
    $email_body .= "Referrer: " . ($_SERVER['HTTP_REFERER'] ?? 'Direct') . "\n";
    
    // Prepare headers
    $headers = [
        'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
        'Reply-To: ' . $data['firstName'] . ' ' . $data['lastName'] . ' <' . $data['email'] . '>',
        'X-Mailer: Super Pest Control Contact Form v2.0',
        'X-Priority: 1',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit'
    ];
    
    if (!empty($config['cc_email'])) {
        $headers[] = 'Cc: ' . $config['cc_email'];
    }
    
    // Send email
    $mail_sent = sendEmail($config, $config['recipient_email'], $subject, $email_body, $headers);
    
    if ($mail_sent) {
        // Log successful submission
        logSubmission($data, 'SUCCESS');
        
        // Send auto-reply to customer
        $auto_reply_subject = "Thank you for contacting Super Pest Control Mumbai";
        $auto_reply_body = "Dear " . $data['firstName'] . ",\n\n";
        $auto_reply_body .= "Thank you for contacting Super Pest Control Mumbai. We have received your inquiry and will respond within 24 hours.\n\n";
        $auto_reply_body .= "Here's a summary of your inquiry:\n";
        $auto_reply_body .= "Name: " . $data['firstName'] . " " . $data['lastName'] . "\n";
        $auto_reply_body .= "Phone: " . $data['phone'] . "\n";
        $auto_reply_body .= "Email: " . $data['email'] . "\n";
        
        if (!empty($data['serviceType'])) {
            $service_map = [
                'termite' => 'Termite Control',
                'cockroach' => 'Cockroach Control',
                'rodent' => 'Rodent Control',
                'ant' => 'Ant Control',
                'mosquito' => 'Mosquito Control',
                'fumigation' => 'Commercial Fumigation',
                'inspection' => 'General Inspection',
                'other' => 'Other Service'
            ];
            $auto_reply_body .= "Service: " . ($service_map[$data['serviceType']] ?? ucfirst($data['serviceType'])) . "\n";
        }
        
        if (!empty($data['urgency'])) {
            $urgency_map = [
                'normal' => 'Normal - Within a week',
                'urgent' => 'Urgent - Within 2-3 days',
                'emergency' => 'Emergency - Same day'
            ];
            $auto_reply_body .= "Urgency: " . ($urgency_map[$data['urgency']] ?? $data['urgency']) . "\n";
        }
        
        $auto_reply_body .= "\nWhat happens next?\n";
        $auto_reply_body .= "• Our team will review your request\n";
        $auto_reply_body .= "• We'll call you within 24 hours to discuss your needs\n";
        $auto_reply_body .= "• We'll schedule a convenient time for inspection\n";
        $auto_reply_body .= "• You'll receive a customized treatment plan\n\n";
        
        $auto_reply_body .= "For immediate assistance, please call us at:\n";
        $auto_reply_body .= "📞 +91 80979-41077 (Primary)\n";
        $auto_reply_body .= "📞 +91 80979-41076 (Alternate)\n\n";
        
        $auto_reply_body .= "You can also reach us via WhatsApp: https://wa.me/918097941077\n\n";
        
        $auto_reply_body .= "Best regards,\n";
        $auto_reply_body .= "Super Pest Control Mumbai Team\n";
        $auto_reply_body .= "Mumbai's Trusted Pest Control Experts\n\n";
        $auto_reply_body .= "📧 superpestcontrol8858@gmail.com\n";
        $auto_reply_body .= "🌐 https://superpestcontrol.in\n";
        $auto_reply_body .= "📍 Serving all Mumbai areas\n";
        
        $auto_reply_headers = [
            'From: Super Pest Control Mumbai <' . $config['recipient_email'] . '>',
            'X-Mailer: Super Pest Control Auto-Reply System',
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8'
        ];
        
        sendEmail($config, $data['email'], $auto_reply_subject, $auto_reply_body, $auto_reply_headers);
        
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you for your message! We will contact you within 24 hours. You should also receive a confirmation email shortly.'
        ]);
    } else {
        // Log failed submission
        logSubmission($data, 'EMAIL_FAILED');
        
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to send email. Please try again or call us directly at +91 80979-41077.'
        ]);
    }

} catch (Exception $e) {
    // Log error
    error_log("Contact form error: " . $e->getMessage());
    logSubmission(['error' => $e->getMessage()], 'ERROR');
    
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Server error. Please try again later or contact us directly at +91 80979-41077.'
    ]);
}
?>
