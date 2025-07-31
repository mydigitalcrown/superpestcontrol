#!/usr/bin/env python3
import os
import glob
import re

def fix_google_maps_urls():
    """Fix the invalid Google Maps URL in all HTML files"""
    
    # The problematic URL pattern (missing !1m3!)
    problematic_pattern = r'https://www\.google\.com/maps/embed\?pb=!1m18!1m12!1d15072\.171700772662'
    
    # The corrected URL with proper parameters
    corrected_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.171700772662!2d72.95716230115573!3d19.193327412566138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9bf21d997db%3A0xd77137379f669074!2sSuper%20Pest%20Control!5e0!3m2!1sen!2sin!4v1732785483845!5m2!1sen!2sin'
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    
    fixed_files = []
    error_files = []
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Check if file contains the problematic URL pattern
            if re.search(problematic_pattern, content):
                # Replace the entire src attribute with the corrected one
                new_content = re.sub(
                    r'src="https://www\.google\.com/maps/embed\?pb=!1m18!1m12!1d15072\.171700772662[^"]*"',
                    f'src="{corrected_url}"',
                    content
                )
                
                # Only write if content actually changed
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    
                    print(f"✅ Fixed Google Maps URL in {file_path}")
                    fixed_files.append(file_path)
            
        except Exception as e:
            print(f"❌ Error processing {file_path}: {str(e)}")
            error_files.append(file_path)
    
    print(f"\n📊 Summary:")
    print(f"✅ Fixed files: {len(fixed_files)}")
    print(f"❌ Error files: {len(error_files)}")
    print(f"📁 Total files checked: {len(html_files)}")
    
    if fixed_files:
        print(f"\n📝 Fixed files:")
        for file in fixed_files[:10]:  # Show first 10
            print(f"   • {file}")
        if len(fixed_files) > 10:
            print(f"   ... and {len(fixed_files) - 10} more files")

if __name__ == "__main__":
    fix_google_maps_urls()
