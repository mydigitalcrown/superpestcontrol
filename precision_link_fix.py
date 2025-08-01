#!/usr/bin/env python3
"""
Precision fix for broken links - fix the over-replacement issue
"""

import os
import re
import glob

def fix_over_replacement():
    """Fix the over-replacement issue where valid links were broken"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes_applied = []
    
    # Fix the over-replacements that created new broken links
    precision_fixes = {
        'commercial-index.html': 'commercial-pest-control-mumbai.html',
        'residential-index.html': 'residential-pest-control-mumbai.html',
        'termites-index.html': 'termites-control-mumbai.html',
        'cockroach-index.html': 'cockroach-control-mumbai.html',
        'ant-index.html': 'ant-control-mumbai.html',
        'bed-bug-index.html': 'bed-bug-control-mumbai.html',
        'rodents-index.html': 'rodents-control-mumbai.html',
        'commercial-fumigation-index.html': 'commercial-fumigation-mumbai.html',
    }
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    total_fixes = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            file_fixes = 0
            
            # Fix over-replacements
            for broken_link, correct_link in precision_fixes.items():
                count_before = content.count(broken_link)
                
                if count_before > 0:
                    content = content.replace(broken_link, correct_link)
                    file_fixes += count_before
                    fixes_applied.append(f"Fixed over-replacement: {count_before} instances of '{broken_link}' -> '{correct_link}' in {os.path.basename(html_file)}")
            
            # Write back if changes were made
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                total_fixes += file_fixes
                    
        except Exception as e:
            print(f"Error fixing over-replacements in {html_file}: {e}")
    
    return fixes_applied, total_fixes

def fix_specific_broken_links():
    """Fix specific remaining broken links with exact patterns"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes_applied = []
    
    # Only fix exact broken patterns, not partial matches
    exact_fixes = {
        'href="pest-control-mumbai.html"': 'href="index.html"',
        "href='pest-control-mumbai.html'": "href='index.html'",
        'href="/pest-control-mumbai.html"': 'href="/index.html"',
        "href='/pest-control-mumbai.html'": "href='/index.html'",
    }
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    total_fixes = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            file_fixes = 0
            
            # Apply exact pattern fixes
            for pattern, replacement in exact_fixes.items():
                count_before = content.count(pattern)
                
                if count_before > 0:
                    content = content.replace(pattern, replacement)
                    file_fixes += count_before
                    fixes_applied.append(f"Exact fix: {count_before} instances of pattern in {os.path.basename(html_file)}")
            
            # Write back if changes were made
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                total_fixes += file_fixes
                    
        except Exception as e:
            print(f"Error applying exact fixes in {html_file}: {e}")
    
    return fixes_applied, total_fixes

def main():
    """Main function"""
    print("🔧 Fixing over-replacement issues and applying precision fixes...")
    
    # First fix over-replacements
    print("\n1. Fixing over-replacements...")
    over_fixes, over_count = fix_over_replacement()
    
    if over_fixes:
        print(f"✅ Fixed {over_count} over-replacement issues:")
        for fix in over_fixes[:10]:
            print(f"   📝 {fix}")
        if len(over_fixes) > 10:
            print(f"   ... and {len(over_fixes) - 10} more")
    else:
        print("✅ No over-replacement issues found")
    
    # Then apply exact pattern fixes
    print("\n2. Applying exact pattern fixes...")
    exact_fixes, exact_count = fix_specific_broken_links()
    
    if exact_fixes:
        print(f"✅ Applied {exact_count} exact pattern fixes")
    else:
        print("✅ No exact pattern fixes needed")
    
    print(f"\n🎯 Total fixes: {over_count + exact_count}")

if __name__ == "__main__":
    main()
