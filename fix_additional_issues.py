#!/usr/bin/env python3
"""
Additional fixes for PageSpeed Insights errors
"""

import os
import re
import glob

def check_external_resources():
    """Check if external resources are properly loaded"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    
    # Common external resources that might cause issues
    potentially_problematic = [
        'bootstrap',  # Found in analysis
        'cdnjs',
        'googleapis',
        'gtag',
        'analytics'
    ]
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    issues = []
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check for problematic external resources
            for resource in potentially_problematic:
                if resource in content.lower():
                    # Extract the full URL for analysis
                    pattern = rf'(?:src|href)=["\']([^"\']*{resource}[^"\']*)["\']'
                    matches = re.findall(pattern, content, re.IGNORECASE)
                    for match in matches:
                        issues.append({
                            'file': os.path.basename(html_file),
                            'resource': match,
                            'type': resource
                        })
                        
        except Exception as e:
            print(f"Error checking {html_file}: {e}")
    
    return issues

def remove_unused_bootstrap():
    """Remove unused Bootstrap reference found in analysis"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes = []
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Remove Bootstrap CDN reference
            bootstrap_patterns = [
                r'<script[^>]*bootstrap[^>]*></script>',
                r'<link[^>]*bootstrap[^>]*>',
                r'https://cdn\.jsdelivr\.net/npm/bootstrap@[^"\']*'
            ]
            
            for pattern in bootstrap_patterns:
                new_content = re.sub(pattern, '', content, flags=re.IGNORECASE)
                if new_content != content:
                    fixes.append(f"Removed Bootstrap reference from {os.path.basename(html_file)}")
                    content = new_content
            
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                    
        except Exception as e:
            print(f"Error processing {html_file}: {e}")
    
    return fixes

def main():
    """Main function"""
    print("🔍 Checking for additional PageSpeed issues...")
    
    # Check external resources
    print("\n1. Analyzing external resources...")
    external_issues = check_external_resources()
    
    if external_issues:
        print(f"⚠️  Found {len(external_issues)} potential external resource issues:")
        for issue in external_issues[:5]:
            print(f"   📡 {issue['file']}: {issue['resource'][:60]}...")
    else:
        print("✅ No problematic external resources found")
    
    # Remove unused Bootstrap
    print("\n2. Removing unused Bootstrap references...")
    bootstrap_fixes = remove_unused_bootstrap()
    
    if bootstrap_fixes:
        print("🔧 Bootstrap cleanup:")
        for fix in bootstrap_fixes:
            print(f"   ✅ {fix}")
    else:
        print("✅ No Bootstrap references to remove")
    
    print("\n🎯 Additional fixes complete!")

if __name__ == "__main__":
    main()
