#!/usr/bin/env python3
import os
import glob
import re

def add_google_maps_section():
    """Add Google Maps section above footer for all HTML pages"""
    
    # Google Maps section HTML
    maps_section = '''        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.310749496621!2d72.96869747520805!3d19.181625082044818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8de3fffffff%3A0xd21d174cb4307f65!2sSuper%20Herbal%20power%20Pest%20Control!5e0!3m2!1sen!2sin!4v1732785369917!5m2!1sen!2sin"
                            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.171700772662!2d72.95716230115573!3d19.193327412566138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9bf21d997db%3A0xd77137379f669074!2sSuper%20Pest%20Control!5e0!3m2!1sen!2sin!4v1732785483845!5m2!1sen!2sin"
                            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

'''
    
    # Find all HTML files in current directory
    html_files = glob.glob("*.html")
    
    updated_files = []
    skipped_files = []
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Check if maps section already exists
            if 'google.com/maps/embed' in content:
                print(f"⏭️  Skipping {file_path} - Google Maps already exists")
                skipped_files.append(file_path)
                continue
            
            # Different footer patterns to look for
            footer_patterns = [
                r'<!--Site Footer Start-->',
                r'<footer class="site-footer">',
                r'<footer class="bg-gray-900',
                r'<footer[^>]*>'
            ]
            
            # Try each pattern to find footer
            footer_found = False
            for pattern in footer_patterns:
                matches = list(re.finditer(pattern, content))
                if matches:
                    # Insert maps section before the first footer match
                    footer_start = matches[0].start()
                    
                    # Insert the maps section before footer
                    new_content = content[:footer_start] + maps_section + content[footer_start:]
                    
                    # Write updated content
                    with open(file_path, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    
                    print(f"✅ Updated {file_path}")
                    updated_files.append(file_path)
                    footer_found = True
                    break
            
            if not footer_found:
                print(f"⚠️  Warning: No footer found in {file_path}")
                
        except Exception as e:
            print(f"❌ Error processing {file_path}: {str(e)}")
    
    print(f"\n📊 Summary:")
    print(f"✅ Updated files: {len(updated_files)}")
    print(f"⏭️  Skipped files: {len(skipped_files)}")
    print(f"📁 Total files processed: {len(html_files)}")
    
    if updated_files:
        print(f"\n📝 Updated files:")
        for file in updated_files[:10]:  # Show first 10
            print(f"   • {file}")
        if len(updated_files) > 10:
            print(f"   ... and {len(updated_files) - 10} more files")

if __name__ == "__main__":
    add_google_maps_section()
