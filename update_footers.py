#!/usr/bin/env python3
"""
Script to update footers in all location pages to match the standardized format
"""

import os
import re
import glob

# Standard footer template
STANDARD_FOOTER = '''    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div>
                    <div class="flex items-center mb-6">
                        <i data-lucide="bug" class="h-8 w-8 text-green-500 mr-3"></i>
                        <div>
                            <h3 class="text-xl font-bold">Super Pest Control</h3>
                            <p class="text-green-500">Mumbai</p>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Professional pest control services with 15+ years of experience. We provide comprehensive solutions for residential and commercial properties.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white" aria-label="Facebook">
                            <i data-lucide="facebook" class="h-6 w-6"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white" aria-label="Instagram">
                            <i data-lucide="instagram" class="h-6 w-6"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white" aria-label="Twitter">
                            <i data-lucide="twitter" class="h-6 w-6"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Our Services -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Our Services</h4>
                    <ul class="space-y-3">
                        <li><a href="residential-pest-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Residential Pest Control</a></li>
                        <li><a href="commercial-pest-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Commercial Pest Control</a></li>
                        <li><a href="termites-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Termite Control</a></li>
                        <li><a href="cockroach-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Cockroach Control</a></li>
                        <li><a href="rodent-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Rodent Control</a></li>
                        <li><a href="ant-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Ant Control</a></li>
                    </ul>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                        <li><a href="about.html" class="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Contact Info</h4>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <i data-lucide="phone" class="h-5 w-5 text-green-500 mr-3 flex-shrink-0"></i>
                            <div>
                                <p class="text-gray-400">Call Us</p>
                                <a href="tel:+918097941077" class="text-white hover:text-green-500">+91 80979-41077</a>
                                <p class="text-gray-400 text-sm">Available 24/7</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="mail" class="h-5 w-5 text-green-500 mr-3 flex-shrink-0"></i>
                            <div>
                                <p class="text-gray-400">Email Us</p>
                                <a href="mailto:superpestcontrol8858@gmail.com" class="text-white hover:text-green-500">superpestcontrol8858@gmail.com</a>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i data-lucide="map-pin" class="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"></i>
                            <div>
                                <p class="text-gray-400">Service Area</p>
                                <p class="text-white">All Mumbai Areas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © 2025 Super Pest Control Mumbai. All rights reserved.
                    </p>
                    <div class="flex items-center space-x-6 mt-4 md:mt-0">
                        <div class="flex items-center text-sm text-gray-400">
                            <i data-lucide="shield-check" class="h-4 w-4 text-green-500 mr-2"></i>
                            Licensed & Insured
                        </div>
                        <div class="flex items-center text-sm text-gray-400">
                            <i data-lucide="award" class="h-4 w-4 text-green-500 mr-2"></i>
                            15+ Years Experience
                        </div>
                        <div class="flex items-center text-sm text-gray-400">
                            Powered by <a href="https://digitalmarketingcompanyinmumbai.in/" class="text-green-500 hover:text-white ml-1">Digital Marketing Company In Mumbai</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>'''

def update_footer_in_file(file_path):
    """Update footer in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match footer section - more flexible regex
        footer_pattern = r'(\s*<!-- Footer -->\s*<footer.*?</footer>)'
        
        # Find the footer section
        match = re.search(footer_pattern, content, re.DOTALL)
        
        if match:
            # Replace the footer
            new_content = content.replace(match.group(1), STANDARD_FOOTER)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ Updated: {os.path.basename(file_path)}")
            return True
        else:
            print(f"❌ No footer found: {os.path.basename(file_path)}")
            return False
            
    except Exception as e:
        print(f"❌ Error updating {os.path.basename(file_path)}: {str(e)}")
        return False

def main():
    """Main function to update all location pages"""
    # Find all pest-control-in-*.html files
    pattern = "pest-control-in-*.html"
    files = glob.glob(pattern)
    
    # Skip already updated files
    updated_files = [
        "pest-control-in-mira-bhayandar.html",
        "pest-control-in-ambarnath.html", 
        "pest-control-in-diva.html",
        "pest-control-in-kamothe.html"
    ]
    
    files_to_update = [f for f in files if os.path.basename(f) not in updated_files]
    
    print(f"Found {len(files)} total location pages")
    print(f"Already updated: {len(updated_files)} pages")
    print(f"Remaining to update: {len(files_to_update)} pages")
    print("-" * 50)
    
    success_count = 0
    failed_count = 0
    
    for file_path in files_to_update:
        if update_footer_in_file(file_path):
            success_count += 1
        else:
            failed_count += 1
    
    print("-" * 50)
    print(f"Summary:")
    print(f"✅ Successfully updated: {success_count} pages")
    print(f"❌ Failed: {failed_count} pages")
    print(f"📊 Total processed: {success_count + failed_count} pages")

if __name__ == "__main__":
    main()
