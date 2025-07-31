#!/usr/bin/env python3
import re

# Read the contact.html file
with open('contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the old services pattern (only 4 services)
old_services = '''                <!-- Services -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Our Services</h4>
                    <ul class="space-y-3">
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Termite Control</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Cockroach Control</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Rodent Control</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Ant Control</a></li>
                    </ul>
                </div>'''

# Define the new services with all 14 services
new_services = '''                <!-- Services -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Our Services</h4>
                    <ul class="space-y-3">
                        <li><a href="commercial-pest-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Commercial Pest Control</a></li>
                        <li><a href="residential-pest-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Residential Pest Control</a></li>
                        <li><a href="termites-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Termite Control</a></li>
                        <li><a href="cockroach-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Cockroach Control</a></li>
                        <li><a href="rodents-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Rodent Control</a></li>
                        <li><a href="bed-bug-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Bed Bug Control</a></li>
                        <li><a href="ant-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Ant Control</a></li>
                        <li><a href="mosquitoes-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Mosquito Control</a></li>
                        <li><a href="spider-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Spider Control</a></li>
                        <li><a href="lizard-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Lizard Control</a></li>
                        <li><a href="fly-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Fly Control</a></li>
                        <li><a href="bees-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Bee & Wasp Control</a></li>
                        <li><a href="wood-borer-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Wood Borer Control</a></li>
                        <li><a href="ticks-control-mumbai.html" class="text-gray-400 hover:text-white transition-colors duration-200">Tick Control</a></li>
                    </ul>
                </div>'''

# Replace the old services with new services
updated_content = content.replace(old_services, new_services)

# Also need to fix Quick Links - add Privacy Policy and Terms of Service
old_quick_links = '''                        <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                        <li><a href="about.html" class="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>'''

new_quick_links = '''                        <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                        <li><a href="about.html" class="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>'''

updated_content = updated_content.replace(old_quick_links, new_quick_links)

# Add social media icons to company info if missing
if 'data-lucide="facebook"' not in updated_content:
    # Find company info section and add social media
    company_pattern = r'(Mumbai\'s trusted pest control experts with over 15 years of experience\. Licensed, insured, and committed to protecting your home and business\.\s*</p>\s*</div>)'
    replacement = '''Mumbai's trusted pest control experts with over 15 years of experience. Licensed, insured, and committed to protecting your home and business.
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
                </div>'''
    updated_content = re.sub(company_pattern, replacement, updated_content)

# Write the updated content back to the file
with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("✅ Contact page footer updated successfully!")
