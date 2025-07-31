#!/usr/bin/env python3
import os
import glob
import re

def ensure_all_pages_complete():
    """Ensure all HTML pages are properly saved and complete"""
    
    print("🔍 Checking all HTML pages for completeness...")
    print("=" * 60)
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    
    incomplete_files = []
    completed_files = []
    
    required_elements = [
        ('</body>', 'Closing body tag'),
        ('</html>', 'Closing html tag'),
        ('<footer', 'Footer section'),
        ('Google Maps', 'Google Maps section'),
        ('Super Pest Control', 'Company branding'),
    ]
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            missing_elements = []
            
            for element, description in required_elements:
                if element not in content:
                    missing_elements.append(description)
            
            if missing_elements:
                incomplete_files.append((file_path, missing_elements))
                print(f"⚠️  {file_path} - Missing: {', '.join(missing_elements)}")
            else:
                completed_files.append(file_path)
                print(f"✅ {file_path} - Complete")
                
        except Exception as e:
            print(f"❌ Error checking {file_path}: {str(e)}")
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 PAGE COMPLETENESS SUMMARY:")
    print(f"✅ Complete files: {len(completed_files)}")
    print(f"⚠️  Incomplete files: {len(incomplete_files)}")
    print(f"📁 Total files checked: {len(html_files)}")
    
    if incomplete_files:
        print(f"\n⚠️  FILES NEEDING ATTENTION:")
        for file_path, missing in incomplete_files[:10]:  # Show first 10
            print(f"   • {file_path}: {', '.join(missing)}")
        if len(incomplete_files) > 10:
            print(f"   ... and {len(incomplete_files) - 10} more files")
    
    # Check file sizes for unusually small files
    print(f"\n📏 CHECKING FILE SIZES:")
    small_files = []
    
    for file_path in html_files:
        try:
            file_size = os.path.getsize(file_path)
            if file_size < 10000:  # Less than 10KB might be incomplete
                small_files.append((file_path, file_size))
        except Exception as e:
            print(f"❌ Error checking size of {file_path}: {str(e)}")
    
    if small_files:
        print(f"⚠️  Small files (possibly incomplete):")
        for file_path, size in sorted(small_files, key=lambda x: x[1]):
            print(f"   • {file_path}: {size:,} bytes")
    else:
        print("✅ All files have reasonable sizes")
    
    # Check for proper form structure
    print(f"\n📋 CHECKING CONTACT FORMS:")
    form_issues = []
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Skip files that shouldn't have forms
            if any(skip in file_path for skip in ['about.html', 'services.html']):
                continue
            
            issues = []
            if '<form' in content:
                if 'id=' not in content or 'Form' not in content:
                    issues.append('Missing form ID')
                if 'contact-handler' not in content and 'action="#"' in content:
                    issues.append('Form action not configured')
                if 'honeypot' not in content:
                    issues.append('Missing spam protection')
            elif file_path not in ['about.html', 'services.html']:
                issues.append('No contact form found')
            
            if issues:
                form_issues.append((file_path, issues))
                
        except Exception as e:
            print(f"❌ Error checking forms in {file_path}: {str(e)}")
    
    if form_issues:
        print(f"⚠️  Form issues found in {len(form_issues)} files:")
        for file_path, issues in form_issues[:5]:  # Show first 5
            print(f"   • {file_path}: {', '.join(issues)}")
        if len(form_issues) > 5:
            print(f"   ... and {len(form_issues) - 5} more files")
    else:
        print("✅ All contact forms properly configured")
    
    print(f"\n📋 RECOMMENDATIONS:")
    if incomplete_files:
        print("1. 🔧 Complete missing elements in incomplete files")
    if small_files:
        print("2. 📏 Review small files for missing content")
    if form_issues:
        print("3. 📋 Fix contact form configurations")
    
    print("4. 💾 Commit all changes to GitHub")
    print("5. 🧪 Test website functionality")
    print("6. 🚀 Run Google PageSpeed Insights again")
    
    return len(completed_files), len(incomplete_files)

if __name__ == "__main__":
    ensure_all_pages_complete()
