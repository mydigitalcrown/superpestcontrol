# Contact Form Setup Guide for Super Pest Control

## Overview
Your contact form is now configured to send emails to `superpestcontrol8858@gmail.com` with multiple delivery methods and fallback options.

## Files Created

### 1. contact-handler.php
- Basic contact form handler using PHP mail() function
- Sends emails to your specified address
- Includes spam protection and validation

### 2. contact-handler-enhanced.php
- Advanced version with SMTP support
- Better spam protection and rate limiting
- Auto-reply functionality
- Logging system

### 3. test-email.php
- Email configuration test script
- Run this to verify your server can send emails

## Quick Setup Steps

1. **Test Email Configuration**
   - Visit: `https://yourdomain.com/test-email.php`
   - This will test if your server can send emails

2. **Choose Contact Handler**
   - For basic setup: Use `contact-handler.php`
   - For advanced features: Use `contact-handler-enhanced.php`

3. **Update JavaScript**
   - The JavaScript in `assets/js/main.js` has been updated
   - It now sends data to `/contact-handler.php`

## Configuration Options

### Basic Configuration (contact-handler.php)
The form will send emails to: `superpestcontrol8858@gmail.com`

### Enhanced Configuration (contact-handler-enhanced.php)
Edit the configuration section:

```php
$config = [
    'recipient_email' => 'superpestcontrol8858@gmail.com',
    'use_smtp' => false, // Set to true for SMTP
    'smtp_host' => 'smtp.gmail.com',
    'smtp_username' => 'superpestcontrol8858@gmail.com',
    'smtp_password' => '', // Your email password or app password
];
```

## Features Included

### ✅ Email Delivery
- Sends formatted emails to your inbox
- Auto-reply to customers
- Fallback to WhatsApp if email fails

### ✅ Spam Protection
- Honeypot field to catch bots
- Rate limiting (1 submission per minute per IP)
- Content filtering for common spam patterns

### ✅ Validation
- Required field validation
- Email format validation
- Phone number validation
- Message length limits

### ✅ User Experience
- Loading states during submission
- Success/error messages
- WhatsApp fallback option
- Accessibility features

## Troubleshooting

### If emails aren't being received:

1. **Check Server Mail Configuration**
   - Run `test-email.php` to diagnose issues
   - Contact your hosting provider about mail setup

2. **Use SMTP Instead**
   - Set `use_smtp => true` in enhanced handler
   - Configure Gmail SMTP settings
   - Use App Password for Gmail authentication

3. **Check Spam Folder**
   - Form emails might go to spam initially
   - Add your domain to safe senders

4. **Hosting Provider Requirements**
   - Some hosts require SMTP authentication
   - Others need specific mail server settings

### Common Solutions by Hosting Type:

**Shared Hosting (cPanel/Hostgator/GoDaddy):**
- Usually works with basic PHP mail()
- May need to configure sendmail path

**VPS/Dedicated Servers:**
- Often need to install and configure sendmail or postfix
- May need to set up SMTP relay

**Cloud Hosting (AWS/DigitalOcean):**
- Usually need SMTP service like SendGrid or Amazon SES
- Basic mail() often blocked to prevent spam

## Email Content

### What gets sent to you:
- Customer name, email, phone
- Selected service type
- Urgency level
- Customer message
- Submission timestamp and IP

### What customer receives:
- Confirmation of submission
- Summary of their request
- Your contact information
- Expected response time

## Security Features

- XSS protection headers
- Input sanitization
- Spam detection
- Rate limiting
- Honeypot trap
- CSRF protection via origin validation

## Backup Methods

If email fails, the form will:
1. Show error message to user
2. Offer WhatsApp as alternative
3. Log the attempt for debugging

## Monitoring

- All submissions are logged to `contact_log.txt`
- Check this file to monitor form activity
- Failed attempts are also logged

## Need Help?

If you encounter issues:
1. Run `test-email.php` first
2. Check server error logs
3. Contact your hosting provider about mail configuration
4. Consider using a third-party email service

## Next Steps

1. Test the form by submitting a test inquiry
2. Check your email at `superpestcontrol8858@gmail.com`
3. Verify auto-reply is working
4. Monitor the logs for any issues

The form is now ready to receive customer inquiries and send them directly to your email!
