#!/usr/bin/env python3
import os
import glob
import re
from urllib.parse import urlparse

def analyze_seo_optimization():
    """Analyze website for SEO, VSO, and ASO optimization"""
    
    print("🔍 SEO, VSO & ASO Analysis for Super Pest Control Website")
    print("=" * 60)
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    main_pages = ['index.html', 'services.html', 'about.html', 'contact.html']
    
    # Overall analysis
    seo_score = 0
    vso_score = 0
    total_checks = 0
    
    print(f"\n📁 Found {len(html_files)} HTML files")
    print(f"🎯 Analyzing main pages: {', '.join(main_pages)}")
    
    # SEO Analysis
    print("\n🔍 SEO (Search Engine Optimization) Analysis:")
    print("-" * 50)
    
    for page in main_pages:
        if page in html_files:
            with open(page, 'r', encoding='utf-8') as f:
                content = f.read()
            
            print(f"\n📄 {page.upper()}:")
            page_seo = 0
            page_checks = 0
            
            # 1. Title Tag
            title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
            if title_match:
                title = title_match.group(1).strip()
                title_len = len(title)
                if 30 <= title_len <= 60:
                    print(f"   ✅ Title Tag: Optimal length ({title_len} chars)")
                    page_seo += 1
                elif title_len < 30:
                    print(f"   ⚠️ Title Tag: Too short ({title_len} chars) - recommended 30-60")
                else:
                    print(f"   ⚠️ Title Tag: Too long ({title_len} chars) - recommended 30-60")
            else:
                print("   ❌ Title Tag: Missing")
            page_checks += 1
            
            # 2. Meta Description
            desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', content, re.IGNORECASE)
            if desc_match:
                desc = desc_match.group(1).strip()
                desc_len = len(desc)
                if 120 <= desc_len <= 160:
                    print(f"   ✅ Meta Description: Optimal length ({desc_len} chars)")
                    page_seo += 1
                elif desc_len < 120:
                    print(f"   ⚠️ Meta Description: Too short ({desc_len} chars) - recommended 120-160")
                else:
                    print(f"   ⚠️ Meta Description: Too long ({desc_len} chars) - recommended 120-160")
            else:
                print("   ❌ Meta Description: Missing")
            page_checks += 1
            
            # 3. H1 Tag
            h1_count = len(re.findall(r'<h1[^>]*>', content, re.IGNORECASE))
            if h1_count == 1:
                print("   ✅ H1 Tag: Single H1 found")
                page_seo += 1
            elif h1_count == 0:
                print("   ❌ H1 Tag: Missing")
            else:
                print(f"   ⚠️ H1 Tag: Multiple H1s found ({h1_count}) - should be 1")
            page_checks += 1
            
            # 4. Heading Structure
            h2_count = len(re.findall(r'<h2[^>]*>', content, re.IGNORECASE))
            h3_count = len(re.findall(r'<h3[^>]*>', content, re.IGNORECASE))
            if h2_count > 0:
                print(f"   ✅ Heading Structure: H2({h2_count}), H3({h3_count})")
                page_seo += 1
            else:
                print("   ⚠️ Heading Structure: No H2 tags found")
            page_checks += 1
            
            # 5. Image Alt Text
            img_total = len(re.findall(r'<img[^>]*>', content, re.IGNORECASE))
            img_with_alt = len(re.findall(r'<img[^>]*alt=["\'][^"\']*["\'][^>]*>', content, re.IGNORECASE))
            if img_total > 0:
                alt_percentage = (img_with_alt / img_total) * 100
                if alt_percentage >= 90:
                    print(f"   ✅ Image Alt Text: {img_with_alt}/{img_total} images ({alt_percentage:.1f}%)")
                    page_seo += 1
                else:
                    print(f"   ⚠️ Image Alt Text: {img_with_alt}/{img_total} images ({alt_percentage:.1f}%) - aim for 90%+")
            else:
                print("   ℹ️ Image Alt Text: No images found")
                page_seo += 1
            page_checks += 1
            
            # 6. Schema Markup
            if 'schema.org' in content:
                print("   ✅ Schema Markup: Found structured data")
                page_seo += 1
            else:
                print("   ❌ Schema Markup: Missing structured data")
            page_checks += 1
            
            # 7. Open Graph Tags
            og_count = len(re.findall(r'<meta\s+property=["\']og:', content, re.IGNORECASE))
            if og_count >= 3:
                print(f"   ✅ Open Graph: {og_count} OG tags found")
                page_seo += 1
            else:
                print(f"   ⚠️ Open Graph: Only {og_count} OG tags - add more")
            page_checks += 1
            
            # 8. Canonical URL
            if 'rel="canonical"' in content:
                print("   ✅ Canonical URL: Found")
                page_seo += 1
            else:
                print("   ❌ Canonical URL: Missing")
            page_checks += 1
            
            # 9. Mobile Viewport
            if 'viewport' in content and 'width=device-width' in content:
                print("   ✅ Mobile Viewport: Configured")
                page_seo += 1
            else:
                print("   ❌ Mobile Viewport: Missing or incorrect")
            page_checks += 1
            
            # 10. Loading Optimization
            lazy_loading = len(re.findall(r'loading=["\']lazy["\']', content, re.IGNORECASE))
            if lazy_loading > 0:
                print(f"   ✅ Loading Optimization: {lazy_loading} lazy-loaded elements")
                page_seo += 1
            else:
                print("   ⚠️ Loading Optimization: No lazy loading found")
            page_checks += 1
            
            seo_score += page_seo
            total_checks += page_checks
            
            print(f"   📊 Page SEO Score: {page_seo}/{page_checks} ({(page_seo/page_checks)*100:.1f}%)")
    
    # VSO Analysis
    print("\n🗣️ VSO (Voice Search Optimization) Analysis:")
    print("-" * 50)
    
    vso_checks = 0
    
    # Check for question-based content
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. FAQ Section
    if 'faq' in content.lower() or 'frequently asked' in content.lower():
        print("   ✅ FAQ Section: Found")
        vso_score += 1
    else:
        print("   ❌ FAQ Section: Missing")
    vso_checks += 1
    
    # 2. Natural Language Questions
    question_patterns = [r'what\s+is', r'how\s+to', r'why\s+do', r'when\s+should', r'where\s+can']
    questions_found = 0
    for pattern in question_patterns:
        questions_found += len(re.findall(pattern, content, re.IGNORECASE))
    
    if questions_found >= 3:
        print(f"   ✅ Natural Language: {questions_found} question patterns found")
        vso_score += 1
    else:
        print(f"   ⚠️ Natural Language: Only {questions_found} question patterns - add more")
    vso_checks += 1
    
    # 3. Local SEO for Voice
    local_terms = ['mumbai', 'near me', 'local', 'area']
    local_mentions = 0
    for term in local_terms:
        local_mentions += len(re.findall(term, content, re.IGNORECASE))
    
    if local_mentions >= 10:
        print(f"   ✅ Local Voice Terms: {local_mentions} local references")
        vso_score += 1
    else:
        print(f"   ⚠️ Local Voice Terms: {local_mentions} local references - add more")
    vso_checks += 1
    
    # 4. Conversational Tone
    conversational_words = ['you', 'your', 'we', 'our', 'help', 'need', 'want']
    conv_count = 0
    for word in conversational_words:
        conv_count += len(re.findall(r'\b' + word + r'\b', content, re.IGNORECASE))
    
    if conv_count >= 20:
        print(f"   ✅ Conversational Tone: {conv_count} conversational words")
        vso_score += 1
    else:
        print(f"   ⚠️ Conversational Tone: {conv_count} conversational words - make more conversational")
    vso_checks += 1
    
    # ASO Analysis (for mobile/app considerations)
    print("\n📱 ASO (App Store Optimization) Analysis:")
    print("-" * 50)
    print("   ℹ️ This is a website, not an app. ASO considerations for mobile web:")
    
    aso_score = 0
    aso_checks = 0
    
    # 1. Mobile-First Design
    if 'responsive' in content.lower() or 'mobile' in content.lower():
        print("   ✅ Mobile-First: Mobile considerations found")
        aso_score += 1
    else:
        print("   ⚠️ Mobile-First: Add mobile-specific content")
    aso_checks += 1
    
    # 2. App-like Features
    if 'click to call' in content.lower() or 'tel:' in content:
        print("   ✅ App-like Features: Click-to-call functionality")
        aso_score += 1
    else:
        print("   ❌ App-like Features: Missing click-to-call")
    aso_checks += 1
    
    # 3. Local Business Optimization
    if 'address' in content.lower() and 'phone' in content.lower():
        print("   ✅ Local Business: Contact info optimized")
        aso_score += 1
    else:
        print("   ⚠️ Local Business: Improve contact visibility")
    aso_checks += 1
    
    # Overall Scores
    print("\n📊 OVERALL OPTIMIZATION SCORES:")
    print("=" * 40)
    
    overall_seo = (seo_score / total_checks) * 100 if total_checks > 0 else 0
    overall_vso = (vso_score / vso_checks) * 100 if vso_checks > 0 else 0
    overall_aso = (aso_score / aso_checks) * 100 if aso_checks > 0 else 0
    
    print(f"🔍 SEO Score: {seo_score}/{total_checks} ({overall_seo:.1f}%)")
    print(f"🗣️ VSO Score: {vso_score}/{vso_checks} ({overall_vso:.1f}%)")
    print(f"📱 ASO Score: {aso_score}/{aso_checks} ({overall_aso:.1f}%)")
    
    average_score = (overall_seo + overall_vso + overall_aso) / 3
    print(f"\n🎯 OVERALL SCORE: {average_score:.1f}%")
    
    if average_score >= 80:
        print("✅ EXCELLENT: Your website is well optimized!")
    elif average_score >= 60:
        print("⚠️ GOOD: Your website is fairly optimized with room for improvement")
    else:
        print("❌ NEEDS WORK: Your website needs significant optimization")
    
    # Recommendations
    print("\n💡 RECOMMENDATIONS:")
    print("-" * 30)
    
    if overall_seo < 80:
        print("• Improve meta descriptions and title tags")
        print("• Add more schema markup")
        print("• Optimize image alt texts")
    
    if overall_vso < 80:
        print("• Add FAQ section with voice-friendly Q&A")
        print("• Include more natural language questions")
        print("• Use more conversational tone")
    
    if overall_aso < 80:
        print("• Enhance mobile user experience")
        print("• Add more app-like features")
        print("• Improve local business visibility")
    
    print("\n🎯 Website has good foundation - continue optimizing for better rankings!")

if __name__ == "__main__":
    analyze_seo_optimization()
