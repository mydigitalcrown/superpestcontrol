#!/usr/bin/env python3
"""
Comprehensive fix for all broken internal links
"""

import os
import re
import glob

def fix_all_broken_links():
    """Fix all variations of broken internal links"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes_applied = []
    
    # Map of broken links to correct ones (all variations)
    link_fixes = {
        'rodent-control-mumbai.html': 'rodents-control-mumbai.html',
        'pest-control-in-mumbai.html': 'index.html',
        'pest-control-mumbai.html': 'index.html',
        # Add more mappings as needed
    }
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix all variations of broken links
            for broken_link, correct_link in link_fixes.items():
                # Pattern 1: href="broken-link"
                pattern1 = f'href="{broken_link}"'
                replacement1 = f'href="{correct_link}"'
                content = content.replace(pattern1, replacement1)
                
                # Pattern 2: href="/broken-link"
                pattern2 = f'href="/{broken_link}"'
                replacement2 = f'href="/{correct_link}"'
                content = content.replace(pattern2, replacement2)
                
                # Pattern 3: href='broken-link'
                pattern3 = f"href='{broken_link}'"
                replacement3 = f"href='{correct_link}'"
                content = content.replace(pattern3, replacement3)
                
                # Pattern 4: href='/broken-link'
                pattern4 = f"href='/{broken_link}'"
                replacement4 = f"href='/{correct_link}'"
                content = content.replace(pattern4, replacement4)
                
                if content != original_content:
                    fixes_applied.append(f"Fixed {broken_link} -> {correct_link} in {os.path.basename(html_file)}")
                    original_content = content
            
            # Write back if changes were made
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                    
        except Exception as e:
            print(f"Error fixing links in {html_file}: {e}")
    
    return fixes_applied

def main():
    """Main function"""
    print("🔗 Comprehensively fixing all broken internal links...")
    
    fixes = fix_all_broken_links()
    
    if fixes:
        print(f"✅ Applied {len(fixes)} comprehensive link fixes:")
        # Group fixes by file for better readability
        file_fixes = {}
        for fix in fixes:
            parts = fix.split(' in ')
            if len(parts) >= 2:
                filename = parts[-1]
                if filename not in file_fixes:
                    file_fixes[filename] = []
                file_fixes[filename].append(fix)
        
        for filename, file_fix_list in list(file_fixes.items())[:10]:
            print(f"   📝 {filename}: {len(file_fix_list)} fixes")
        
        if len(file_fixes) > 10:
            print(f"   ... and fixes in {len(file_fixes) - 10} more files")
    else:
        print("✅ No internal link fixes needed")

if __name__ == "__main__":
    main()
