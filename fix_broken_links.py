#!/usr/bin/env python3
"""
Fix broken links and 404 errors in Super Pest Control website
Identifies and fixes common issues that cause PageSpeed Insights errors
"""

import os
import re
import glob
import urllib.parse
from pathlib import Path

def check_file_exists(file_path, base_dir):
    """Check if a referenced file actually exists"""
    # Remove leading slash for relative path checking
    if file_path.startswith('/'):
        file_path = file_path[1:]
    
    full_path = os.path.join(base_dir, file_path)
    return os.path.exists(full_path)

def find_broken_links():
    """Find all broken internal links in HTML files"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    broken_links = []
    
    # Patterns to match various resource links
    patterns = [
        r'src=["\']([^"\']+\.(?:js|css|png|jpg|jpeg|gif|svg|ico))["\']',
        r'href=["\']([^"\']+\.(?:js|css|png|jpg|jpeg|gif|svg|ico|html))["\']',
        r'content=["\']([^"\']+\.(?:png|jpg|jpeg|gif|svg|ico))["\']'
    ]
    
    # Get all HTML files
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            filename = os.path.basename(html_file)
            
            for pattern in patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                
                for match in matches:
                    # Skip external URLs (http/https)
                    if match.startswith(('http://', 'https://', '//', 'data:', 'mailto:', 'tel:')):
                        continue
                    
                    # Check if file exists
                    if not check_file_exists(match, base_dir):
                        broken_links.append({
                            'file': filename,
                            'broken_link': match,
                            'full_path': html_file
                        })
                        
        except Exception as e:
            print(f"Error processing {html_file}: {e}")
    
    return broken_links

def check_common_404_sources():
    """Check for common sources of 404 errors"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    issues = []
    
    # Check for common files that might be missing
    common_files = [
        'favicon.ico',
        'apple-touch-icon.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'mstile-150x150.png'
    ]
    
    for file in common_files:
        file_path = os.path.join(base_dir, file)
        if not os.path.exists(file_path):
            issues.append(f"Missing common file: {file}")
    
    return issues

def analyze_html_for_external_resources():
    """Analyze HTML files for external resources that might fail"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    external_resources = set()
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find external scripts and stylesheets
            external_patterns = [
                r'src=["\']https?://[^"\']+["\']',
                r'href=["\']https?://[^"\']+\.css["\']'
            ]
            
            for pattern in external_patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                for match in matches:
                    url = match.split('"')[1] if '"' in match else match.split("'")[1]
                    external_resources.add(url)
                    
        except Exception as e:
            print(f"Error analyzing {html_file}: {e}")
    
    return list(external_resources)

def create_missing_favicon():
    """Create a basic favicon.ico if missing"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    favicon_path = os.path.join(base_dir, 'favicon.ico')
    
    if not os.path.exists(favicon_path):
        # Check if favicon.svg exists to copy it
        svg_favicon = os.path.join(base_dir, 'favicon.svg')
        if os.path.exists(svg_favicon):
            print("favicon.svg exists, but favicon.ico is missing")
            print("Consider converting favicon.svg to favicon.ico for better browser compatibility")
            return True
    
    return False

def fix_path_issues():
    """Fix common path issues in HTML files"""
    base_dir = '/Users/mydigital/Documents/superpestcontrol'
    fixes_applied = []
    
    html_files = glob.glob(os.path.join(base_dir, '*.html'))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix common path issues - ensure leading slash for absolute paths
            # This helps with subdirectory deployments
            fixes = [
                # Fix asset paths that might be missing leading slash
                (r'src="assets/', 'src="/assets/'),
                (r'href="assets/', 'href="/assets/'),
                # Ensure favicon has leading slash
                (r'href="favicon\.', 'href="/favicon.'),
                (r'src="favicon\.', 'src="/favicon.'),
            ]
            
            for pattern, replacement in fixes:
                new_content = re.sub(pattern, replacement, content)
                if new_content != content:
                    fixes_applied.append(f"Fixed path in {os.path.basename(html_file)}: {pattern}")
                    content = new_content
            
            # Write back if changes were made
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                    
        except Exception as e:
            print(f"Error fixing paths in {html_file}: {e}")
    
    return fixes_applied

def main():
    """Main function to run all checks and fixes"""
    print("🔍 Analyzing website for broken links and 404 errors...")
    print("=" * 60)
    
    # Find broken internal links
    print("\n1. Checking for broken internal links...")
    broken_links = find_broken_links()
    
    if broken_links:
        print(f"❌ Found {len(broken_links)} broken internal links:")
        for link in broken_links[:10]:  # Show first 10
            print(f"   📄 {link['file']}: {link['broken_link']}")
        if len(broken_links) > 10:
            print(f"   ... and {len(broken_links) - 10} more")
    else:
        print("✅ No broken internal links found")
    
    # Check common 404 sources
    print("\n2. Checking for common missing files...")
    missing_files = check_common_404_sources()
    
    if missing_files:
        print("❌ Missing common files:")
        for file in missing_files:
            print(f"   📁 {file}")
    else:
        print("✅ All common files present")
    
    # Analyze external resources
    print("\n3. Analyzing external resources...")
    external_resources = analyze_html_for_external_resources()
    
    if external_resources:
        print(f"📡 Found {len(external_resources)} external resources:")
        for resource in external_resources[:5]:  # Show first 5
            print(f"   🌐 {resource}")
        if len(external_resources) > 5:
            print(f"   ... and {len(external_resources) - 5} more")
    
    # Check favicon
    print("\n4. Checking favicon...")
    favicon_issue = create_missing_favicon()
    if favicon_issue:
        print("⚠️  favicon.ico missing but favicon.svg exists")
    else:
        print("✅ Favicon configuration looks good")
    
    # Fix path issues
    print("\n5. Fixing common path issues...")
    path_fixes = fix_path_issues()
    
    if path_fixes:
        print("🔧 Applied fixes:")
        for fix in path_fixes:
            print(f"   ✅ {fix}")
    else:
        print("✅ No path issues found")
    
    print("\n" + "=" * 60)
    print("🎯 Analysis complete!")
    
    # Summary
    total_issues = len(broken_links) + len(missing_files)
    if total_issues == 0:
        print("🎉 No critical issues found! Your website should have minimal 404 errors.")
    else:
        print(f"⚠️  Found {total_issues} potential issues that could cause 404 errors.")
        print("💡 Recommendations:")
        
        if broken_links:
            print("   • Fix broken internal links listed above")
        
        if missing_files:
            print("   • Create missing common files (favicon.ico, touch icons)")
        
        print("   • Test your website with a local server")
        print("   • Run PageSpeed Insights again after fixes")

if __name__ == "__main__":
    main()