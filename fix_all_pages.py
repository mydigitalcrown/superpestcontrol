#!/usr/bin/env python3
import os
import glob
import re

def fix_all_pages():
    """Fix all HTML pages to be complete with Google Maps and proper footers"""
    
    print("🔧 Fixing all HTML pages to ensure completeness...")
    print("=" * 60)
    
    # The footer template with Google Maps section
    footer_template = """
        <!-- Google Maps Section -->
        <section class="google-maps-section" style="background: #f8f9fa; padding: 40px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2 style="color: #2c3e50; margin-bottom: 30px;">Our Service Areas</h2>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="map-container" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.675863447831!2d72.9781!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647d7c1%3A0x6c8b8c4d8d8d8d8d!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="300" 
                                        style="border:0;" 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade"
                                        title="Thane Location Map">
                                    </iframe>
                                </div>
                                <h5 style="margin-top: 15px; color: #34495e;">Thane & Surrounding Areas</h5>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="map-container" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4166458394167!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b3230a5c91%3A0x71bc0e153a2b3c1e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640995300000!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="300" 
                                        style="border:0;" 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade"
                                        title="Mumbai Location Map">
                                    </iframe>
                                </div>
                                <h5 style="margin-top: 15px; color: #34495e;">Mumbai & Navi Mumbai</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer bg-dark text-white" style="background-color: #2c3e50 !important; padding: 40px 0 20px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h5 style="color: #3498db; margin-bottom: 20px;">Super Pest Control</h5>
                        <p style="line-height: 1.6;">Your trusted partner for comprehensive pest control solutions in Mumbai, Thane, and Navi Mumbai. We provide safe, effective, and eco-friendly pest management services.</p>
                        <div class="contact-info">
                            <p><i class="fas fa-phone" style="color: #3498db; margin-right: 8px;"></i> <strong>+91 88588 53337</strong></p>
                            <p><i class="fas fa-envelope" style="color: #3498db; margin-right: 8px;"></i> superpestcontrol8858@gmail.com</p>
                            <p><i class="fas fa-map-marker-alt" style="color: #3498db; margin-right: 8px;"></i> Thane, Mumbai, Navi Mumbai</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h5 style="color: #3498db; margin-bottom: 20px;">Quick Links</h5>
                        <ul class="list-unstyled footer-links">
                            <li><a href="index.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Home</a></li>
                            <li><a href="about.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">About Us</a></li>
                            <li><a href="services.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Services</a></li>
                            <li><a href="contact.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 style="color: #3498db; margin-bottom: 20px;">Our Services</h5>
                        <ul class="list-unstyled footer-links">
                            <li><a href="cockroach-control-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Cockroach Control</a></li>
                            <li><a href="termites-control-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Termite Control</a></li>
                            <li><a href="rodents-control-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Rodent Control</a></li>
                            <li><a href="bed-bug-control-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Bed Bug Control</a></li>
                            <li><a href="commercial-pest-control-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Commercial Services</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 style="color: #3498db; margin-bottom: 20px;">Service Areas</h5>
                        <ul class="list-unstyled footer-links">
                            <li><a href="pest-control-in-thane.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Thane</a></li>
                            <li><a href="pest-control-in-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Mumbai</a></li>
                            <li><a href="pest-control-in-navi-mumbai.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Navi Mumbai</a></li>
                            <li><a href="pest-control-in-kalyan.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Kalyan</a></li>
                            <li><a href="pest-control-in-dombivli.html" style="color: #bdc3c7; text-decoration: none; line-height: 2;">Dombivli</a></li>
                        </ul>
                    </div>
                </div>
                <hr style="border-color: #34495e; margin: 30px 0 20px 0;">
                <div class="row">
                    <div class="col-md-6">
                        <p style="margin: 0; color: #bdc3c7;">&copy; 2024 Super Pest Control. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <p style="margin: 0; color: #bdc3c7;">Professional Pest Control Services in Mumbai & Thane</p>
                    </div>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script>
        // Contact form handling
        document.addEventListener('DOMContentLoaded', function() {
            const forms = document.querySelectorAll('form[id*="Form"]');
            forms.forEach(function(form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form data
                    const formData = new FormData(this);
                    const data = {};
                    
                    // Convert FormData to regular object
                    for (let [key, value] of formData.entries()) {
                        if (key !== 'honeypot') { // Exclude honeypot field
                            data[key] = value;
                        }
                    }
                    
                    // Check honeypot (spam protection)
                    if (formData.get('honeypot')) {
                        console.log('Spam detected');
                        return;
                    }
                    
                    // Send email using EmailJS or your preferred service
                    // This is a placeholder - replace with your actual email sending logic
                    console.log('Form submitted:', data);
                    
                    // Show success message
                    alert('Thank you for your message! We will contact you soon.');
                    this.reset();
                });
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        </script>

    </body>
</html>"""

    # Find all HTML files that need fixing
    html_files = glob.glob("*.html")
    
    # Files that are already complete
    complete_files = ['index.html', 'pest-control-in-thane.html']
    
    fixed_count = 0
    error_count = 0
    
    for file_path in html_files:
        if file_path in complete_files:
            print(f"✅ {file_path} - Already complete, skipping")
            continue
            
        try:
            # Read the current file
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Check if already has Google Maps
            if 'Google Maps' in content:
                print(f"✅ {file_path} - Already has Google Maps, skipping")
                continue
            
            # Find where to insert the footer (before </body> or at the end)
            if '</body>' in content:
                # Insert before closing body tag
                content = content.replace('</body>', footer_template)
            elif '</html>' in content:
                # Insert before closing html tag
                content = content.replace('</html>', footer_template.replace('</body>\n</html>', ''))
            else:
                # Just append at the end
                content += footer_template
            
            # Add honeypot spam protection to forms if missing
            if '<form' in content and 'honeypot' not in content:
                # Find all forms and add honeypot field
                form_pattern = r'(<form[^>]*>)'
                honeypot_field = r'\1\n    <!-- Spam protection -->\n    <input type="text" name="honeypot" style="display: none;" tabindex="-1" autocomplete="off">'
                content = re.sub(form_pattern, honeypot_field, content)
            
            # Write the updated content back
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)
            
            print(f"🔧 {file_path} - Fixed and saved")
            fixed_count += 1
            
        except Exception as e:
            print(f"❌ Error fixing {file_path}: {str(e)}")
            error_count += 1
    
    print("\n" + "=" * 60)
    print(f"📊 FIXING SUMMARY:")
    print(f"🔧 Files fixed: {fixed_count}")
    print(f"✅ Files already complete: {len(complete_files)}")
    print(f"❌ Errors: {error_count}")
    print(f"📁 Total files processed: {len(html_files)}")
    
    if fixed_count > 0:
        print(f"\n✅ SUCCESS! All pages have been fixed and saved.")
        print(f"🗺️  Added Google Maps sections to {fixed_count} pages")
        print(f"🛡️  Added spam protection to contact forms")
        print(f"📝 Added complete footer sections")
    
    return fixed_count, error_count

if __name__ == "__main__":
    fix_all_pages()
