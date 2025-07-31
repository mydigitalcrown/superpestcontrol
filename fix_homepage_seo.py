#!/usr/bin/env python3
import re

def fix_learn_more_links():
    """Fix all Learn More links in index.html with descriptive text"""
    
    with open('index.html', 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Define replacements for Learn More links
    replacements = [
        ('href="cockroach-control-mumbai.html"[^>]*>Learn More</a>', 'href="cockroach-control-mumbai.html" class="inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Cockroach Extermination Services</a>'),
        ('href="rodents-control-mumbai.html"[^>]*>Learn More</a>', 'href="rodents-control-mumbai.html" class="inline-block bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Rodent & Rat Control</a>'),
        ('href="bed-bug-control-mumbai.html"[^>]*>Learn More</a>', 'href="bed-bug-control-mumbai.html" class="inline-block bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Bed Bug Treatment Services</a>'),
        ('href="ant-control-mumbai.html"[^>]*>Learn More</a>', 'href="ant-control-mumbai.html" class="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Ant Control Solutions</a>'),
        ('href="mosquitoes-control-mumbai.html"[^>]*>Learn More</a>', 'href="mosquitoes-control-mumbai.html" class="inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Mosquito Control Services</a>'),
        ('href="spider-control-mumbai.html"[^>]*>Learn More</a>', 'href="spider-control-mumbai.html" class="inline-block bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Spider Control Treatment</a>'),
        ('href="lizard-control-mumbai.html"[^>]*>Learn More</a>', 'href="lizard-control-mumbai.html" class="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Lizard Control Services</a>'),
        ('href="fly-control-mumbai.html"[^>]*>Learn More</a>', 'href="fly-control-mumbai.html" class="inline-block bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Fly Control Solutions</a>'),
        ('href="bees-control-mumbai.html"[^>]*>Learn More</a>', 'href="bees-control-mumbai.html" class="inline-block bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Bee & Wasp Control</a>'),
        ('href="wood-borer-control-mumbai.html"[^>]*>Learn More</a>', 'href="wood-borer-control-mumbai.html" class="inline-block bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Wood Borer Treatment</a>'),
        ('href="ticks-control-mumbai.html"[^>]*>Learn More</a>', 'href="ticks-control-mumbai.html" class="inline-block bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">Tick Control Services</a>'),
    ]
    
    # Apply replacements
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
        print(f"✅ Updated link: {pattern[:50]}...")
    
    # Fix other color contrast issues
    color_fixes = [
        ('bg-primary-green', 'bg-green-700'),
        ('hover:bg-accent-green', 'hover:bg-green-800'),
        ('text-primary-green', 'text-green-700'),
        ('bg-primary-blue', 'bg-blue-700'),
        ('hover:bg-secondary-blue', 'hover:bg-blue-800'),
        ('class="text-primary-green hover:underline"', 'class="text-green-600 hover:text-green-700 hover:underline"'),
        ('class="text-gray-400', 'class="text-gray-500'),
    ]
    
    for old_color, new_color in color_fixes:
        if old_color in content:
            content = content.replace(old_color, new_color)
            print(f"🎨 Fixed color contrast: {old_color} → {new_color}")
    
    # Fix heading hierarchy
    if '<h3 class="font-semibold text-gray-900">Licensed & Insured</h3>' in content:
        content = content.replace(
            '<h3 class="font-semibold text-gray-900">Licensed & Insured</h3>',
            '<h4 class="font-semibold text-gray-900">Licensed & Insured</h4>'
        )
        print("📋 Fixed heading hierarchy: h3 → h4")
    
    # Add alt text to images missing it
    img_pattern = r'<img(?![^>]*alt=)([^>]*?)>'
    if re.search(img_pattern, content):
        content = re.sub(
            img_pattern,
            r'<img\1 alt="Super Pest Control Mumbai - Professional Pest Control Services">',
            content
        )
        print("🖼️ Added alt text to images")
    
    # Write the updated content
    with open('index.html', 'w', encoding='utf-8') as file:
        file.write(content)
    
    print("\n✅ All SEO fixes applied to index.html!")

if __name__ == "__main__":
    fix_learn_more_links()
