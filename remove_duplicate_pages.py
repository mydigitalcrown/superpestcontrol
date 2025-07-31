#!/usr/bin/env python3
import os
import glob

def remove_duplicate_service_pages():
    """Remove incorrectly named service pages that duplicate the -mumbai.html versions"""
    
    print("🗑️ Removing Duplicate Service Pages...")
    print("=" * 50)
    
    # Define the incorrect service page patterns that should be removed
    incorrect_pages = [
        'rodent-control.html',           # Correct: rodents-control-mumbai.html
        'cockroach-control.html',        # Correct: cockroach-control-mumbai.html
        'mosquito-control.html',         # Correct: mosquitoes-control-mumbai.html
        'ant-control.html',              # Correct: ant-control-mumbai.html
        'spider-control.html',           # Correct: spider-control-mumbai.html
        'wood-borer-control.html',       # Correct: wood-borer-control-mumbai.html
        'silverfish-control.html',       # Correct: silverfish-control-mumbai.html
        'lizard-control.html',           # Correct: lizard-control-mumbai.html
        'wasp-bee-control.html',         # Correct: bees-control-mumbai.html
        'bed-bug-control.html',          # Correct: bed-bug-control-mumbai.html
        'fly-control.html',              # Correct: fly-control-mumbai.html
        'termite-control.html',          # Correct: termites-control-mumbai.html
        'tick-control.html',             # Correct: ticks-control-mumbai.html
    ]
    
    removed_files = []
    missing_files = []
    
    for page in incorrect_pages:
        if os.path.exists(page):
            try:
                os.remove(page)
                removed_files.append(page)
                print(f"✅ Removed: {page}")
            except Exception as e:
                print(f"❌ Error removing {page}: {str(e)}")
        else:
            missing_files.append(page)
            print(f"⏭️ Already gone: {page}")
    
    print(f"\n📊 Summary:")
    print(f"✅ Removed files: {len(removed_files)}")
    print(f"⏭️ Already missing: {len(missing_files)}")
    
    if removed_files:
        print(f"\n🗑️ Removed files:")
        for file in removed_files:
            print(f"   • {file}")
    
    # Verify the correct pages still exist
    print(f"\n✅ Verifying correct pages exist:")
    correct_pages = [
        'rodents-control-mumbai.html',
        'cockroach-control-mumbai.html',
        'mosquitoes-control-mumbai.html',
        'ant-control-mumbai.html',
        'spider-control-mumbai.html',
        'wood-borer-control-mumbai.html',
        'silverfish-control-mumbai.html',
        'lizard-control-mumbai.html',
        'bees-control-mumbai.html',
        'bed-bug-control-mumbai.html',
        'fly-control-mumbai.html',
        'termites-control-mumbai.html',
        'ticks-control-mumbai.html',
        'commercial-pest-control-mumbai.html',
        'residential-pest-control-mumbai.html',
        'commercial-fumigation-mumbai.html'
    ]
    
    existing_correct = []
    missing_correct = []
    
    for page in correct_pages:
        if os.path.exists(page):
            existing_correct.append(page)
            print(f"   ✅ {page}")
        else:
            missing_correct.append(page)
            print(f"   ❌ MISSING: {page}")
    
    print(f"\n📋 Final Status:")
    print(f"✅ Correct service pages: {len(existing_correct)}")
    print(f"❌ Missing service pages: {len(missing_correct)}")
    
    if missing_correct:
        print(f"\n⚠️ WARNING: These correct pages are missing:")
        for page in missing_correct:
            print(f"   • {page}")

if __name__ == "__main__":
    remove_duplicate_service_pages()
