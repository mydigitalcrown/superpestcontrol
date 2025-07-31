<?php
// Super Pest Control Mumbai - Contact Form Handler
// This script handles contact form submissions and sends emails

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
    'subject_prefix' => '[Website Contact]',
    'max_message_length' => 2000,
    'required_fields' => ['firstName', 'lastName', 'email', 'phone'],
    'honeypot_field' => 'website' // Spam protection
];

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
        '/viagra/i',
        '/cialis/i',
        '/casino/i',
        '/poker/i',
        '/loan/i',
        '/bitcoin/i',
        '/cryptocurrency/i'
    ];
    
    $text = strtolower($data['message'] . ' ' . $data['firstName'] . ' ' . $data['lastName']);
    
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $text)) {
            return true;
        }
    }
    
    return false;
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
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Spam detected']);
        exit;
    }
    
    // Prepare email content
    $subject = $config['subject_prefix'] . ' New Contact Form Submission';
    
    // Create email body
    $email_body = "New contact form submission from Super Pest Control website:\n\n";
    $email_body .= "Name: " . $data['firstName'] . " " . $data['lastName'] . "\n";
    $email_body .= "Email: " . $data['email'] . "\n";
    $email_body .= "Phone: " . $data['phone'] . "\n";
    
    if (!empty($data['address'])) {
        $email_body .= "Address: " . $data['address'] . "\n";
    }
    
    if (!empty($data['serviceType'])) {
        $email_body .= "Service Needed: " . ucfirst($data['serviceType']) . "\n";
    }
    
    if (!empty($data['urgency'])) {
        $urgency_map = [
            'normal' => 'Normal - Within a week',
            'urgent' => 'Urgent - Within 2-3 days',
            'emergency' => 'Emergency - Same day'
        ];
        $email_body .= "Urgency: " . ($urgency_map[$data['urgency']] ?? $data['urgency']) . "\n";
    }
    
    if (!empty($data['message'])) {
        $email_body .= "\nMessage:\n" . $data['message'] . "\n";
    }
    
    $email_body .= "\n---\n";
    $email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    $email_body .= "IP Address: " . ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR']) . "\n";
    $email_body .= "User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "\n";
    
    // Prepare headers
    $headers = [];
    $headers[] = 'From: ' . $config['from_name'] . ' <noreply@superpestcontrol.in>';
    $headers[] = 'Reply-To: ' . $data['email'];
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: 8bit';
    
    if (!empty($config['cc_email'])) {
        $headers[] = 'Cc: ' . $config['cc_email'];
    }
    
    $headers_string = implode("\r\n", $headers);
    
    // Send email
    $mail_sent = mail($config['recipient_email'], $subject, $email_body, $headers_string);
    
    if ($mail_sent) {
        // Log successful submission (optional)
        error_log("Contact form submission sent to " . $config['recipient_email'] . " from " . $data['email']);
        
        // Send auto-reply to customer
        $auto_reply_subject = "Thank you for contacting Super Pest Control Mumbai";
        $auto_reply_body = "Dear " . $data['firstName'] . ",\n\n";
        $auto_reply_body .= "Thank you for contacting Super Pest Control Mumbai. We have received your inquiry and will respond within 24 hours.\n\n";
        $auto_reply_body .= "Your inquiry details:\n";
        $auto_reply_body .= "Name: " . $data['firstName'] . " " . $data['lastName'] . "\n";
        $auto_reply_body .= "Phone: " . $data['phone'] . "\n";
        if (!empty($data['serviceType'])) {
            $auto_reply_body .= "Service: " . ucfirst($data['serviceType']) . "\n";
        }
        $auto_reply_body .= "\nFor immediate assistance, please call us at +91 80979-41077\n\n";
        $auto_reply_body .= "Best regards,\n";
        $auto_reply_body .= "Super Pest Control Mumbai Team\n";
        $auto_reply_body .= "Phone: +91 80979-41077\n";
        $auto_reply_body .= "Email: superpestcontrol8858@gmail.com\n";
        $auto_reply_body .= "Website: https://superpestcontrol.in\n";
        
        $auto_reply_headers = [];
        $auto_reply_headers[] = 'From: Super Pest Control Mumbai <superpestcontrol8858@gmail.com>';
        $auto_reply_headers[] = 'X-Mailer: PHP/' . phpversion();
        $auto_reply_headers[] = 'MIME-Version: 1.0';
        $auto_reply_headers[] = 'Content-Type: text/plain; charset=UTF-8';
        
        mail($data['email'], $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));
        
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you for your message! We will contact you within 24 hours.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again or call us directly.']);
    }

} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
?>
