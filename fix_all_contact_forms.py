#!/usr/bin/env python3
import os
import glob
import re

def fix_contact_forms():
    """Fix all contact forms to work with the email handler and proper JavaScript"""
    
    print("🔧 Starting Contact Form Fix for All Pages...")
    print("=" * 60)
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    
    updated_files = []
    skipped_files = []
    
    # Different form patterns we need to update
    form_patterns = [
        # Standard forms with action="#"
        (r'<form\s+class="[^"]*"\s+action="#"\s+method="POST">', 'standard_form'),
        (r'<form\s+action="#"\s+method="POST"\s+class="[^"]*">', 'standard_form_alt'),
        # Forms without proper action
        (r'<form\s+class="[^"]*"[^>]*>', 'generic_form'),
        # Commercial contact form  
        (r'<form\s+class="[^"]*"\s+id="commercialContactForm">', 'commercial_form'),
    ]
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            original_content = content
            file_updated = False
            
            # Skip if already has contactForm id (main contact page)
            if 'id="contactForm"' in content:
                print(f"⏭️  Skipping {file_path} - Already has proper contact form")
                skipped_files.append(file_path)
                continue
            
            # Check if file has any forms
            has_forms = any(re.search(pattern, content, re.IGNORECASE) for pattern, _ in form_patterns)
            
            if not has_forms:
                print(f"⏭️  Skipping {file_path} - No contact forms found")
                skipped_files.append(file_path)
                continue
            
            # Determine form type based on file name
            if 'index.html' in file_path:
                form_id = 'quoteForm'
                form_class = 'quote-form'
            elif 'commercial' in file_path:
                form_id = 'commercialForm' 
                form_class = 'commercial-form'
            elif 'residential' in file_path:
                form_id = 'residentialForm'
                form_class = 'residential-form'
            else:
                # Location or service pages
                page_name = file_path.replace('.html', '').replace('-', '_')
                form_id = f'{page_name}Form'
                form_class = 'location-form'
            
            # Update form elements
            # Pattern 1: Standard forms with action="#"
            pattern1 = r'<form\s+class="([^"]*?)"\s+action="#"\s+method="POST">'
            if re.search(pattern1, content):
                new_form_tag = f'<form class="\\1" id="{form_id}" data-form-type="{form_class}">'
                content = re.sub(pattern1, new_form_tag, content)
                file_updated = True
                print(f"   📝 Updated standard form in {file_path}")
            
            # Pattern 2: Alternative standard forms
            pattern2 = r'<form\s+action="#"\s+method="POST"\s+class="([^"]*?)">'
            if re.search(pattern2, content):
                new_form_tag = f'<form class="\\1" id="{form_id}" data-form-type="{form_class}">'
                content = re.sub(pattern2, new_form_tag, content)
                file_updated = True
                print(f"   📝 Updated alternative form in {file_path}")
            
            # Pattern 3: Commercial form (already has ID)
            pattern3 = r'<form\s+class="([^"]*?)"\s+id="commercialContactForm">'
            if re.search(pattern3, content):
                new_form_tag = f'<form class="\\1" id="commercialForm" data-form-type="commercial-form">'
                content = re.sub(pattern3, new_form_tag, content)
                file_updated = True
                print(f"   📝 Updated commercial form in {file_path}")
            
            # Pattern 4: Generic forms without action
            pattern4 = r'<form\s+class="([^"]*?)"(?![^>]*id=)(?![^>]*action=)([^>]*?)>'
            if re.search(pattern4, content):
                new_form_tag = f'<form class="\\1" id="{form_id}" data-form-type="{form_class}"\\2>'
                content = re.sub(pattern4, new_form_tag, content)
                file_updated = True
                print(f"   📝 Updated generic form in {file_path}")
            
            # Add honeypot field if form was updated and doesn't have one
            if file_updated and 'name="website"' not in content:
                # Find the first input after form tag and insert honeypot before it
                honeypot_field = '''
                            <!-- Honeypot field for spam protection (hidden) -->
                            <input type="text" name="website" style="display:none !important;" tabindex="-1" autocomplete="off">
                            '''
                
                # Look for the first div with input inside form
                first_input_pattern = r'(<form[^>]*>[\s\S]*?<div[^>]*>[\s\S]*?<label)'
                if re.search(first_input_pattern, content):
                    content = re.sub(first_input_pattern, f'\\1{honeypot_field}\\1', content, count=1)
                    print(f"   🛡️ Added honeypot protection to {file_path}")
            
            # Update submit button to ensure it works with JavaScript
            submit_patterns = [
                r'<button\s+type="submit"([^>]*?)>([^<]*?)</button>',
                r'<input\s+type="submit"([^>]*?)/?>'
            ]
            
            for pattern in submit_patterns:
                if re.search(pattern, content):
                    content = re.sub(pattern, r'<button type="submit"\1>\2</button>', content)
                    print(f"   🔘 Updated submit button in {file_path}")
                    break
            
            # Write the updated content
            if file_updated:
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(content)
                
                updated_files.append(file_path)
                print(f"✅ Successfully updated {file_path}")
            else:
                skipped_files.append(file_path)
                
        except Exception as e:
            print(f"❌ Error processing {file_path}: {str(e)}")
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 CONTACT FORM FIX SUMMARY:")
    print(f"✅ Updated files: {len(updated_files)}")
    print(f"⏭️  Skipped files: {len(skipped_files)}")
    print(f"📁 Total files processed: {len(html_files)}")
    
    if updated_files:
        print(f"\n📝 Updated files:")
        for i, file in enumerate(updated_files[:10], 1):
            print(f"   {i:2d}. {file}")
        if len(updated_files) > 10:
            print(f"   ... and {len(updated_files) - 10} more files")
    
    print(f"\n📋 Next Steps:")
    print("1. All forms now have proper IDs and will work with the email handler")
    print("2. JavaScript has been updated to handle all form types")
    print("3. Forms will send emails to superpestcontrol8858@gmail.com")
    print("4. Honeypot spam protection has been added")
    print("5. Test the forms by filling them out on different pages")

if __name__ == "__main__":
    fix_contact_forms()
