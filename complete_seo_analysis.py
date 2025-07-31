#!/usr/bin/env python3
import os
import glob
import re
from collections import defaultdict

def analyze_all_pages_seo_vso_aso():
    """Comprehensive SEO, VSO, and ASO analysis for all HTML pages"""
    
    print("🔍 Complete SEO, VSO & ASO Analysis for Super Pest Control Website")
    print("=" * 70)
    print("📝 Note: ASO = Answer Search Optimization (not App Store Optimization)")
    print("=" * 70)
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    html_files.sort()
    
    print(f"\n📁 Found {len(html_files)} HTML files to analyze")
    
    # Initialize counters
    total_seo_score = 0
    total_vso_score = 0
    total_aso_score = 0
    total_pages = len(html_files)
    
    # Categorize pages
    main_pages = []
    service_pages = []
    location_pages = []
    other_pages = []
    
    for page in html_files:
        if page in ['index.html', 'services.html', 'about.html', 'contact.html']:
            main_pages.append(page)
        elif 'control' in page and 'mumbai' in page:
            service_pages.append(page)
        elif 'pest-control-in-' in page:
            location_pages.append(page)
        else:
            other_pages.append(page)
    
    print(f"📄 Main Pages: {len(main_pages)}")
    print(f"🛠️ Service Pages: {len(service_pages)}")  
    print(f"📍 Location Pages: {len(location_pages)}")
    print(f"📋 Other Pages: {len(other_pages)}")
    
    # Detailed analysis for each category
    categories = [
        ("Main Pages", main_pages),
        ("Service Pages", service_pages[:5]),  # Sample first 5
        ("Location Pages", location_pages[:5]),  # Sample first 5
        ("Other Pages", other_pages)
    ]
    
    category_scores = {}
    
    for category_name, pages in categories:
        if not pages:
            continue
            
        print(f"\n{'='*20} {category_name.upper()} {'='*20}")
        
        cat_seo_total = 0
        cat_vso_total = 0
        cat_aso_total = 0
        cat_pages_count = len(pages)
        
        for page in pages:
            try:
                with open(page, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                print(f"\n📄 {page.upper()}:")
                
                # SEO Analysis
                seo_score = 0
                seo_checks = 10
                
                # 1. Title Tag
                title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
                if title_match:
                    title = title_match.group(1).strip()
                    title_len = len(title)
                    if 30 <= title_len <= 60:
                        print(f"   ✅ Title: Optimal ({title_len} chars)")
                        seo_score += 1
                    else:
                        print(f"   ⚠️ Title: {title_len} chars (aim 30-60)")
                else:
                    print("   ❌ Title: Missing")
                
                # 2. Meta Description
                desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', content, re.IGNORECASE)
                if desc_match:
                    desc = desc_match.group(1).strip()
                    desc_len = len(desc)
                    if 120 <= desc_len <= 160:
                        print(f"   ✅ Meta Desc: Optimal ({desc_len} chars)")
                        seo_score += 1
                    else:
                        print(f"   ⚠️ Meta Desc: {desc_len} chars (aim 120-160)")
                else:
                    print("   ❌ Meta Desc: Missing")
                
                # 3-10. Other SEO factors (simplified for bulk analysis)
                if re.search(r'<h1[^>]*>', content, re.IGNORECASE):
                    seo_score += 1
                if re.search(r'<h2[^>]*>', content, re.IGNORECASE):
                    seo_score += 1
                if 'alt=' in content:
                    seo_score += 1
                if 'schema.org' in content:
                    seo_score += 1
                if 'og:' in content:
                    seo_score += 1
                if 'canonical' in content:
                    seo_score += 1
                if 'viewport' in content:
                    seo_score += 1
                if 'loading="lazy"' in content:
                    seo_score += 1
                
                seo_percentage = (seo_score / seo_checks) * 100
                print(f"   📊 SEO: {seo_score}/{seo_checks} ({seo_percentage:.1f}%)")
                
                # VSO Analysis (Voice Search Optimization)
                vso_score = 0
                vso_checks = 5
                
                # Question patterns for voice search
                question_patterns = [r'what\s+is', r'how\s+to', r'why\s+do', r'when\s+should', r'where\s+can']
                questions_found = 0
                for pattern in question_patterns:
                    questions_found += len(re.findall(pattern, content, re.IGNORECASE))
                
                if questions_found >= 2:
                    vso_score += 1
                
                # FAQ sections
                if 'faq' in content.lower() or 'frequently asked' in content.lower():
                    vso_score += 1
                
                # Local voice terms
                local_terms = ['mumbai', 'near me', 'local', 'area', 'best', 'top']
                local_count = 0
                for term in local_terms:
                    local_count += len(re.findall(r'\b' + term + r'\b', content, re.IGNORECASE))
                
                if local_count >= 5:
                    vso_score += 1
                
                # Conversational tone
                conv_words = ['you', 'your', 'we', 'our', 'help', 'need', 'want', 'can', 'will']
                conv_count = 0
                for word in conv_words:
                    conv_count += len(re.findall(r'\b' + word + r'\b', content, re.IGNORECASE))
                
                if conv_count >= 10:
                    vso_score += 1
                
                # Natural language structure
                if 'how' in content.lower() and 'why' in content.lower():
                    vso_score += 1
                
                vso_percentage = (vso_score / vso_checks) * 100
                print(f"   🗣️ VSO: {vso_score}/{vso_checks} ({vso_percentage:.1f}%)")
                
                # ASO Analysis (Answer Search Optimization)
                aso_score = 0
                aso_checks = 6
                
                # Direct answer patterns
                answer_patterns = [
                    r'the answer is',
                    r'the solution is',
                    r'the best way',
                    r'you should',
                    r'to solve this',
                    r'here\'s how',
                    r'the reason is',
                    r'because',
                    r'therefore',
                    r'as a result'
                ]
                
                answer_count = 0
                for pattern in answer_patterns:
                    answer_count += len(re.findall(pattern, content, re.IGNORECASE))
                
                if answer_count >= 3:
                    aso_score += 1
                
                # Structured answers (lists, steps)
                if '<ol>' in content or '<ul>' in content:
                    aso_score += 1
                
                # Clear headings that answer questions
                heading_answers = 0
                headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', content, re.IGNORECASE | re.DOTALL)
                for heading in headings:
                    if any(word in heading.lower() for word in ['how', 'what', 'why', 'when', 'where', 'best', 'top']):
                        heading_answers += 1
                
                if heading_answers >= 2:
                    aso_score += 1
                
                # Concise paragraphs (good for featured snippets)
                paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
                concise_paras = 0
                for para in paragraphs:
                    text = re.sub(r'<[^>]+>', '', para).strip()
                    if 50 <= len(text) <= 200:  # Ideal for snippets
                        concise_paras += 1
                
                if concise_paras >= 3:
                    aso_score += 1
                
                # Tables and structured data
                if '<table>' in content or 'itemscope' in content:
                    aso_score += 1
                
                # Contact and business info for local answers
                if 'phone' in content.lower() and 'address' in content.lower():
                    aso_score += 1
                
                aso_percentage = (aso_score / aso_checks) * 100
                print(f"   🎯 ASO: {aso_score}/{aso_checks} ({aso_percentage:.1f}%)")
                
                # Add to category totals
                cat_seo_total += seo_percentage
                cat_vso_total += vso_percentage
                cat_aso_total += aso_percentage
                
            except Exception as e:
                print(f"   ❌ Error analyzing {page}: {str(e)}")
                cat_pages_count -= 1
        
        # Category averages
        if cat_pages_count > 0:
            cat_seo_avg = cat_seo_total / cat_pages_count
            cat_vso_avg = cat_vso_total / cat_pages_count
            cat_aso_avg = cat_aso_total / cat_pages_count
            
            category_scores[category_name] = {
                'seo': cat_seo_avg,
                'vso': cat_vso_avg,
                'aso': cat_aso_avg,
                'pages': cat_pages_count
            }
            
            print(f"\n📊 {category_name} Average Scores:")
            print(f"   🔍 SEO: {cat_seo_avg:.1f}%")
            print(f"   🗣️ VSO: {cat_vso_avg:.1f}%")
            print(f"   🎯 ASO: {cat_aso_avg:.1f}%")
    
    # Analyze remaining pages in bulk
    remaining_service_pages = service_pages[5:] if len(service_pages) > 5 else []
    remaining_location_pages = location_pages[5:] if len(location_pages) > 5 else []
    
    if remaining_service_pages or remaining_location_pages:
        print(f"\n{'='*20} BULK ANALYSIS {'='*20}")
        
        all_remaining = remaining_service_pages + remaining_location_pages
        bulk_seo = 0
        bulk_vso = 0
        bulk_aso = 0
        
        for page in all_remaining:
            try:
                with open(page, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Quick scoring
                page_seo = 0
                if re.search(r'<title>', content): page_seo += 2
                if re.search(r'meta.*description', content): page_seo += 2
                if re.search(r'<h1>', content): page_seo += 2
                if 'schema.org' in content: page_seo += 2
                if 'viewport' in content: page_seo += 2
                
                page_vso = 0
                if 'mumbai' in content.lower(): page_vso += 2
                if any(word in content.lower() for word in ['how', 'what', 'best']): page_vso += 3
                if len(re.findall(r'\byou\b|\byour\b', content, re.IGNORECASE)) >= 5: page_vso += 3
                if 'near me' in content.lower(): page_vso += 2
                
                page_aso = 0
                if '<ul>' in content or '<ol>' in content: page_aso += 2
                if 'because' in content.lower(): page_aso += 2
                if len(re.findall(r'<h[1-6][^>]*>.*?(how|what|best)', content, re.IGNORECASE)) >= 1: page_aso += 3
                if 'phone' in content.lower(): page_aso += 2
                if len(re.findall(r'<p[^>]*>(.{50,200})</p>', content, re.IGNORECASE)) >= 2: page_aso += 1
                
                bulk_seo += min(page_seo, 10) * 10  # Convert to percentage
                bulk_vso += min(page_vso, 10) * 10
                bulk_aso += min(page_aso, 10) * 10
                
            except:
                continue
        
        if len(all_remaining) > 0:
            bulk_seo_avg = bulk_seo / len(all_remaining)
            bulk_vso_avg = bulk_vso / len(all_remaining)
            bulk_aso_avg = bulk_aso / len(all_remaining)
            
            print(f"📄 Remaining {len(all_remaining)} pages analyzed:")
            print(f"   🔍 SEO: {bulk_seo_avg:.1f}%")
            print(f"   🗣️ VSO: {bulk_vso_avg:.1f}%")
            print(f"   🎯 ASO: {bulk_aso_avg:.1f}%")
    
    # Final Summary
    print(f"\n{'='*25} FINAL SUMMARY {'='*25}")
    
    for category, scores in category_scores.items():
        print(f"\n📂 {category} ({scores['pages']} pages):")
        print(f"   🔍 SEO: {scores['seo']:.1f}%")
        print(f"   🗣️ VSO: {scores['vso']:.1f}%")
        print(f"   🎯 ASO: {scores['aso']:.1f}%")
        avg_score = (scores['seo'] + scores['vso'] + scores['aso']) / 3
        print(f"   📊 Average: {avg_score:.1f}%")
    
    # Overall website score
    total_seo = sum(scores['seo'] for scores in category_scores.values())
    total_vso = sum(scores['vso'] for scores in category_scores.values())
    total_aso = sum(scores['aso'] for scores in category_scores.values())
    total_categories = len(category_scores)
    
    if total_categories > 0:
        overall_seo = total_seo / total_categories
        overall_vso = total_vso / total_categories
        overall_aso = total_aso / total_categories
        overall_score = (overall_seo + overall_vso + overall_aso) / 3
        
        print(f"\n🎯 OVERALL WEBSITE SCORES:")
        print(f"🔍 SEO (Search Engine Optimization): {overall_seo:.1f}%")
        print(f"🗣️ VSO (Voice Search Optimization): {overall_vso:.1f}%")
        print(f"🎯 ASO (Answer Search Optimization): {overall_aso:.1f}%")
        print(f"📊 OVERALL SCORE: {overall_score:.1f}%")
        
        if overall_score >= 80:
            print("✅ EXCELLENT: Your website is exceptionally well optimized!")
        elif overall_score >= 70:
            print("⚠️ VERY GOOD: Your website is well optimized with minor improvements needed")
        elif overall_score >= 60:
            print("⚠️ GOOD: Your website is fairly optimized but needs improvements")
        else:
            print("❌ NEEDS WORK: Your website needs significant optimization")
    
    # Recommendations
    print(f"\n💡 OPTIMIZATION RECOMMENDATIONS:")
    print("-" * 40)
    print("🔍 SEO Improvements:")
    print("   • Optimize title tags to 30-60 characters")
    print("   • Keep meta descriptions 120-160 characters")
    print("   • Add schema markup to all pages")
    print("   • Ensure all images have descriptive alt text")
    
    print("\n🗣️ VSO Improvements:")
    print("   • Add FAQ sections with natural questions")
    print("   • Include 'How to', 'What is', 'Why' content")
    print("   • Use more conversational language")
    print("   • Add local voice search terms")
    
    print("\n🎯 ASO Improvements:")
    print("   • Create direct answer formats")
    print("   • Use numbered/bulleted lists")
    print("   • Write concise 50-200 character paragraphs")
    print("   • Structure content for featured snippets")
    print("   • Answer questions directly in headings")
    
    print(f"\n✨ Total pages analyzed: {len(html_files)}")
    print("🚀 Continue optimizing for better search rankings!")

if __name__ == "__main__":
    analyze_all_pages_seo_vso_aso()
