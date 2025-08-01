#!/usr/bin/env python3
"""
Fix broken internal links in Super Pest Control website
"""

import os
import re
import glob

def fix_broken_internal_links():
    """Fix common broken internal links"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes_applied = []
    
    # Map of broken links to correct ones
    link_fixes = {
        'rodent-control-mumbai.html': 'rodents-control-mumbai.html',
        'pest-control-in-mumbai.html': 'index.html',  # Since no mumbai-specific page exists
        'pest-control-mumbai.html': 'index.html',
    }
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix broken links
            for broken_link, correct_link in link_fixes.items():
                # Fix href attributes
                pattern = f'href="{broken_link}"'
                replacement = f'href="{correct_link}"'
                content = content.replace(pattern, replacement)
                
                # Also fix any variations with leading slash
                pattern = f'href="/{broken_link}"'
                replacement = f'href="/{correct_link}"'
                content = content.replace(pattern, replacement)
                
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
    print("🔗 Fixing broken internal links...")
    
    fixes = fix_broken_internal_links()
    
    if fixes:
        print(f"✅ Applied {len(fixes)} link fixes:")
        for fix in fixes[:10]:  # Show first 10
            print(f"   📝 {fix}")
        if len(fixes) > 10:
            print(f"   ... and {len(fixes) - 10} more")
    else:
        print("✅ No internal link fixes needed")

if __name__ == "__main__":
    main()
