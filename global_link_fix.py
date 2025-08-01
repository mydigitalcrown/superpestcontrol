#!/usr/bin/env python3
"""
Complete fix for all broken internal links with global replacement
"""

import os
import re
import glob

def fix_remaining_broken_links():
    """Fix all remaining broken links with global replacement"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes_applied = []
    
    # Updated comprehensive mapping
    link_fixes = {
        'rodent-control-mumbai.html': 'rodents-control-mumbai.html',
        'pest-control-in-mumbai.html': 'index.html',
        'pest-control-mumbai.html': 'index.html',
    }
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    total_fixes = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            file_fixes = 0
            
            # Use global replacement for each broken link
            for broken_link, correct_link in link_fixes.items():
                # Count occurrences before replacement
                count_before = content.count(broken_link)
                
                if count_before > 0:
                    # Replace all occurrences globally
                    content = content.replace(broken_link, correct_link)
                    file_fixes += count_before
                    fixes_applied.append(f"Replaced {count_before} instances of '{broken_link}' with '{correct_link}' in {os.path.basename(html_file)}")
            
            # Write back if changes were made
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                total_fixes += file_fixes
                    
        except Exception as e:
            print(f"Error fixing links in {html_file}: {e}")
    
    return fixes_applied, total_fixes

def main():
    """Main function"""
    print("🔗 Performing global replacement of all broken internal links...")
    
    fixes, total_count = fix_remaining_broken_links()
    
    if fixes:
        print(f"✅ Applied {total_count} total link replacements across {len(fixes)} operations:")
        for fix in fixes[:15]:  # Show first 15
            print(f"   📝 {fix}")
        if len(fixes) > 15:
            print(f"   ... and {len(fixes) - 15} more operations")
    else:
        print("✅ No broken links found to fix")
    
    print(f"\n🎯 Total link fixes applied: {total_count}")

if __name__ == "__main__":
    main()
