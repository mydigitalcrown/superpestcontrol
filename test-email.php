<?php
// Test email configuration for Super Pest Control
// Run this script to test if your server can send emails

echo "<h1>Email Configuration Test</h1>\n";

// Test basic PHP mail function
if (function_exists('mail')) {
    echo "<p>✅ PHP mail() function is available</p>\n";
} else {
    echo "<p>❌ PHP mail() function is NOT available</p>\n";
    exit;
}

// Test email sending
$to = 'superpestcontrol8858@gmail.com';
$subject = 'Test Email from Super Pest Control Website';
$message = "This is a test email to verify that the contact form is working properly.\n\n";
$message .= "Test details:\n";
$message .= "Date/Time: " . date('Y-m-d H:i:s') . "\n";
$message .= "Server: " . $_SERVER['SERVER_NAME'] . "\n";
$message .= "IP: " . $_SERVER['SERVER_ADDR'] . "\n";

$headers = [];
$headers[] = 'From: Super Pest Control Website <noreply@superpestcontrol.in>';
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$headers_string = implode("\r\n", $headers);

echo "<p>Attempting to send test email to: <strong>$to</strong></p>\n";

$result = mail($to, $subject, $message, $headers_string);

if ($result) {
    echo "<p>✅ Test email sent successfully!</p>\n";
    echo "<p>Please check your inbox at <strong>$to</strong></p>\n";
} else {
    echo "<p>❌ Failed to send test email</p>\n";
    echo "<p>This could be due to:</p>\n";
    echo "<ul>\n";
    echo "<li>Server mail configuration issues</li>\n";
    echo "<li>Missing SMTP server setup</li>\n";
    echo "<li>Firewall blocking outgoing mail</li>\n";
    echo "<li>Need to configure sendmail or similar service</li>\n";
    echo "</ul>\n";
}

// Show PHP mail configuration
echo "<h2>PHP Mail Configuration</h2>\n";
echo "<table border='1' cellpadding='5'>\n";
echo "<tr><td><strong>sendmail_path</strong></td><td>" . ini_get('sendmail_path') . "</td></tr>\n";
echo "<tr><td><strong>SMTP</strong></td><td>" . ini_get('SMTP') . "</td></tr>\n";
echo "<tr><td><strong>smtp_port</strong></td><td>" . ini_get('smtp_port') . "</td></tr>\n";
echo "<tr><td><strong>sendmail_from</strong></td><td>" . ini_get('sendmail_from') . "</td></tr>\n";
echo "</table>\n";

// Show server information
echo "<h2>Server Information</h2>\n";
echo "<table border='1' cellpadding='5'>\n";
echo "<tr><td><strong>Server</strong></td><td>" . $_SERVER['SERVER_SOFTWARE'] . "</td></tr>\n";
echo "<tr><td><strong>PHP Version</strong></td><td>" . phpversion() . "</td></tr>\n";
echo "<tr><td><strong>Operating System</strong></td><td>" . php_uname() . "</td></tr>\n";
echo "</table>\n";

echo "<hr>\n";
echo "<p><strong>Instructions:</strong></p>\n";
echo "<ol>\n";
echo "<li>If the test email was sent successfully, your contact form should work</li>\n";
echo "<li>If the test failed, contact your hosting provider to configure email sending</li>\n";
echo "<li>You may need to set up SMTP authentication or configure sendmail</li>\n";
echo "<li>Some shared hosting providers require using their SMTP servers</li>\n";
echo "</ol>\n";

echo "<p><strong>Alternative Solutions:</strong></p>\n";
echo "<ul>\n";
echo "<li>Use a third-party email service like SendGrid, Mailgun, or Amazon SES</li>\n";
echo "<li>Configure SMTP authentication in the contact handler</li>\n";
echo "<li>Use a contact form plugin if using a CMS</li>\n";
echo "</ul>\n";
?>
