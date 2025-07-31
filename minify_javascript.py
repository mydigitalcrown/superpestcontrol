#!/usr/bin/env python3
import os
import re

def minify_js():
    """Create a minified version of main.js"""
    
    print("🗜️  Minifying JavaScript file...")
    
    input_file = 'assets/js/main.js'
    output_file = 'assets/js/main.min.js'
    
    try:
        with open(input_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Simple minification (remove comments and extra whitespace)
        # Remove single-line comments
        content = re.sub(r'//.*?$', '', content, flags=re.MULTILINE)
        
        # Remove multi-line comments
        content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
        
        # Remove extra whitespace and newlines
        content = re.sub(r'\s+', ' ', content)
        
        # Remove spaces around operators and brackets
        content = re.sub(r'\s*([{}();,=+\-*/<>!&|])\s*', r'\1', content)
        
        # Remove trailing semicolons before closing braces
        content = re.sub(r';\s*}', '}', content)
        
        # Write minified version
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(content.strip())
        
        # Get file sizes
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        savings = original_size - minified_size
        savings_percent = (savings / original_size) * 100
        
        print(f"✅ JavaScript minification complete!")
        print(f"   📏 Original size: {original_size:,} bytes")
        print(f"   📏 Minified size: {minified_size:,} bytes")
        print(f"   💾 Savings: {savings:,} bytes ({savings_percent:.1f}%)")
        print(f"   📄 Minified file: {output_file}")
        
        return output_file
        
    except Exception as e:
        print(f"❌ Error minifying JavaScript: {str(e)}")
        return None

def update_html_files_to_use_minified():
    """Update all HTML files to use the minified JavaScript"""
    
    print("\n🔄 Updating HTML files to use minified JavaScript...")
    
    import glob
    html_files = glob.glob("*.html")
    updated_files = []
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Replace main.js with main.min.js
            if 'assets/js/main.js' in content:
                content = content.replace('assets/js/main.js', 'assets/js/main.min.js')
                
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(content)
                
                updated_files.append(file_path)
                
        except Exception as e:
            print(f"❌ Error updating {file_path}: {str(e)}")
    
    print(f"✅ Updated {len(updated_files)} HTML files to use minified JavaScript")
    return updated_files

if __name__ == "__main__":
    minified_file = minify_js()
    if minified_file:
        update_html_files_to_use_minified()
        print(f"\n🎉 JavaScript optimization complete!")
        print(f"📋 Next steps:")
        print(f"1. Test website functionality with minified JavaScript")
        print(f"2. Run Google PageSpeed Insights again to see improvements")
