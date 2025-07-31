#!/usr/bin/env python3
import os
import glob
import re

def fix_page_speed_issues():
    """Fix Google Page Speed issues across all HTML pages"""
    
    print("🚀 Starting Page Speed Optimization for All Pages...")
    print("=" * 60)
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    
    updated_files = []
    issues_fixed = {
        'descriptive_links': 0,
        'heading_order': 0,
        'contrast_issues': 0,
        'mobile_menu_fix': 0,
        'render_blocking': 0
    }
    
    # Service-specific descriptive link text mapping
    service_links = {
        'commercial-pest-control-mumbai.html': 'Learn More About Commercial Pest Control Services',
        'residential-pest-control-mumbai.html': 'Learn More About Residential Pest Control Services',
        'termites-control-mumbai.html': 'Learn More About Termite Control & Treatment',
        'cockroach-control-mumbai.html': 'Learn More About Cockroach Control Solutions',
        'rodents-control-mumbai.html': 'Learn More About Rodent Control & Removal',
        'bed-bug-control-mumbai.html': 'Learn More About Bed Bug Control Treatment',
        'ant-control-mumbai.html': 'Learn More About Ant Control Services',
        'mosquitoes-control-mumbai.html': 'Learn More About Mosquito Control Solutions',
        'spider-control-mumbai.html': 'Learn More About Spider Control Services',
        'lizard-control-mumbai.html': 'Learn More About Lizard Control & Removal',
        'fly-control-mumbai.html': 'Learn More About Fly Control Solutions',
        'bees-control-mumbai.html': 'Learn More About Bee Control & Removal',
        'wood-borer-control-mumbai.html': 'Learn More About Wood Borer Control Treatment',
        'ticks-control-mumbai.html': 'Learn More About Tick Control Services',
        'silverfish-control-mumbai.html': 'Learn More About Silverfish Control Services'
    }
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            original_content = content
            file_updated = False
            
            # 1. Fix descriptive link text issues
            print(f"\n🔗 Fixing descriptive links in {file_path}...")
            
            # Fix generic "Learn More" links with specific service descriptions
            for service_file, description in service_links.items():
                pattern = rf'<a href="{re.escape(service_file)}"([^>]*?)>Learn More</a>'
                if re.search(pattern, content):
                    replacement = f'<a href="{service_file}"\\1>{description}</a>'
                    content = re.sub(pattern, replacement, content)
                    issues_fixed['descriptive_links'] += 1
                    file_updated = True
                    print(f"   ✅ Updated link to {service_file}")
            
            # Fix other generic "Learn More" links based on context
            generic_learn_more = re.findall(r'<a href="([^"]+)"([^>]*?)>Learn More</a>', content)
            for link_url, attributes in generic_learn_more:
                if any(service in link_url for service in ['pest-control', 'control']):
                    # Create descriptive text based on URL
                    if 'commercial' in link_url:
                        new_text = 'Learn More About Commercial Pest Control'
                    elif 'residential' in link_url:
                        new_text = 'Learn More About Residential Pest Control'
                    elif 'termite' in link_url:
                        new_text = 'Learn More About Termite Control'
                    elif 'cockroach' in link_url:
                        new_text = 'Learn More About Cockroach Control'
                    elif 'rodent' in link_url:
                        new_text = 'Learn More About Rodent Control'
                    else:
                        # Extract service name from URL
                        service_name = link_url.replace('-', ' ').replace('.html', '').title()
                        new_text = f'Learn More About {service_name}'
                    
                    old_pattern = f'<a href="{re.escape(link_url)}"{re.escape(attributes)}>Learn More</a>'
                    new_link = f'<a href="{link_url}"{attributes}>{new_text}</a>'
                    content = content.replace(old_pattern, new_link)
                    issues_fixed['descriptive_links'] += 1
                    file_updated = True
            
            # 2. Fix heading order issues (h3 without h2)
            print(f"📝 Fixing heading order in {file_path}...")
            
            # Find h3 elements that should be h2
            h3_without_h2_pattern = r'<h3 class="font-semibold text-gray-900">([^<]*)</h3>'
            h3_matches = re.findall(h3_without_h2_pattern, content)
            
            if h3_matches and '<h2' not in content:
                # Convert first h3 to h2 if no h2 exists
                content = re.sub(h3_without_h2_pattern, r'<h2 class="font-semibold text-gray-900 text-xl">\1</h2>', content, count=1)
                issues_fixed['heading_order'] += 1
                file_updated = True
                print(f"   ✅ Fixed heading hierarchy")
            
            # 3. Fix contrast issues by improving button and link styling
            print(f"🎨 Fixing contrast issues in {file_path}...")
            
            # Improve button contrast
            contrast_patterns = [
                # Green buttons with better contrast
                (r'class="([^"]*bg-primary-green[^"]*)"', r'class="\1 shadow-lg border border-green-800"'),
                (r'class="([^"]*bg-emerald-600[^"]*)"', r'class="\1 shadow-lg border border-emerald-800"'),
                (r'class="([^"]*bg-green-600[^"]*)"', r'class="\1 shadow-lg border border-green-800"'),
                # Orange buttons with better contrast
                (r'class="([^"]*bg-orange-600[^"]*)"', r'class="\1 shadow-lg border border-orange-800"'),
                (r'class="([^"]*bg-yellow-600[^"]*)"', r'class="\1 shadow-lg border border-yellow-800"'),
                (r'class="([^"]*bg-amber-600[^"]*)"', r'class="\1 shadow-lg border border-amber-800"'),
            ]
            
            for pattern, replacement in contrast_patterns:
                if re.search(pattern, content):
                    content = re.sub(pattern, replacement, content)
                    issues_fixed['contrast_issues'] += 1
                    file_updated = True
            
            # Fix footer link contrast
            footer_link_pattern = r'<a href="https://mydigitalcrown\.in/" target="_blank" rel="noopener" class="text-primary-green hover:underline">'
            if re.search(footer_link_pattern, content):
                new_footer_link = '<a href="https://mydigitalcrown.in/" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 hover:underline font-medium">'
                content = re.sub(footer_link_pattern, new_footer_link, content)
                issues_fixed['contrast_issues'] += 1
                file_updated = True
            
            # 4. Fix mobile menu JavaScript error
            print(f"📱 Checking mobile menu in {file_path}...")
            
            # Add proper mobile menu structure if missing
            if 'initializeMobileMenu' in content and 'mobile-menu-button' not in content:
                # Add mobile menu button if missing
                nav_pattern = r'(<nav[^>]*>.*?</nav>)'
                if re.search(nav_pattern, content, re.DOTALL):
                    mobile_button = '''
                    <!-- Mobile menu button -->
                    <button id="mobile-menu-button" class="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    '''
                    # Find nav end and insert mobile button before it
                    content = re.sub(r'(</nav>)', mobile_button + r'\1', content)
                    issues_fixed['mobile_menu_fix'] += 1
                    file_updated = True
            
            # 5. Fix render-blocking resources
            print(f"⚡ Optimizing render-blocking resources in {file_path}...")
            
            # Move CSS to be non-render blocking where possible
            css_patterns = [
                # Make custom CSS non-blocking
                (r'<link rel="stylesheet" href="assets/css/custom\.css">', 
                 '<link rel="preload" href="assets/css/custom.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet" href="assets/css/custom.css"></noscript>'),
            ]
            
            for pattern, replacement in css_patterns:
                if re.search(pattern, content):
                    content = re.sub(pattern, replacement, content)
                    issues_fixed['render_blocking'] += 1
                    file_updated = True
            
            # Defer JavaScript loading
            js_patterns = [
                # Defer lucide.js
                (r'<script src="https://unpkg\.com/lucide@latest/dist/umd/lucide\.js"></script>', 
                 '<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" defer></script>'),
                # Defer main.js
                (r'<script src="assets/js/main\.js"></script>', 
                 '<script src="assets/js/main.js" defer></script>'),
            ]
            
            for pattern, replacement in js_patterns:
                if re.search(pattern, content):
                    content = re.sub(pattern, replacement, content)
                    issues_fixed['render_blocking'] += 1
                    file_updated = True
            
            # Add preconnect for external resources
            head_pattern = r'(<head[^>]*>)'
            if re.search(head_pattern, content) and 'preconnect' not in content:
                preconnect_tags = '''
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://unpkg.com">
    <link rel="preconnect" href="https://cdn.tailwindcss.com">
    <link rel="dns-prefetch" href="https://unpkg.com">
    <link rel="dns-prefetch" href="https://cdn.tailwindcss.com">'''
                content = re.sub(head_pattern, f'\\1{preconnect_tags}', content)
                issues_fixed['render_blocking'] += 1
                file_updated = True
            
            # Write the updated content
            if file_updated:
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(content)
                
                updated_files.append(file_path)
                print(f"✅ Successfully optimized {file_path}")
            else:
                print(f"⏭️  No issues found in {file_path}")
                
        except Exception as e:
            print(f"❌ Error processing {file_path}: {str(e)}")
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"🚀 PAGE SPEED OPTIMIZATION SUMMARY:")
    print(f"✅ Updated files: {len(updated_files)}")
    print(f"📁 Total files processed: {len(html_files)}")
    print(f"\n📊 Issues Fixed:")
    print(f"   🔗 Descriptive links: {issues_fixed['descriptive_links']}")
    print(f"   📝 Heading order: {issues_fixed['heading_order']}")
    print(f"   🎨 Contrast issues: {issues_fixed['contrast_issues']}")
    print(f"   📱 Mobile menu: {issues_fixed['mobile_menu_fix']}")
    print(f"   ⚡ Render blocking: {issues_fixed['render_blocking']}")
    
    if updated_files:
        print(f"\n📝 Optimized files:")
        for i, file in enumerate(updated_files[:10], 1):
            print(f"   {i:2d}. {file}")
        if len(updated_files) > 10:
            print(f"   ... and {len(updated_files) - 10} more files")
    
    print(f"\n📋 Optimizations Applied:")
    print("1. ✅ Fixed non-descriptive 'Learn More' links with specific service descriptions")
    print("2. ✅ Fixed heading hierarchy (h2, h3 order)")
    print("3. ✅ Improved button and link contrast with borders and shadows")
    print("4. ✅ Added mobile menu button structure where needed")
    print("5. ✅ Made CSS non-render blocking with preload")
    print("6. ✅ Deferred JavaScript loading")
    print("7. ✅ Added preconnect and dns-prefetch for external resources")
    
    print(f"\n🔧 Additional Manual Steps Needed:")
    print("1. Consider minifying main.js (currently 7.8 KiB)")
    print("2. Consider hosting Tailwind CSS locally to reduce external dependency")
    print("3. Review unused Tailwind CSS classes to reduce bundle size")
    print("4. Test mobile menu functionality after JavaScript deferrals")

if __name__ == "__main__":
    fix_page_speed_issues()
