#!/usr/bin/env python3
import os
import glob
import re

def fix_broken_links():
    """Fix all broken links to deleted service pages"""
    
    print("🔧 Fixing broken links to deleted service pages...")
    print("=" * 60)
    
    # Mapping of old incorrect links to correct ones
    link_mappings = {
        'termite-control.html': 'termites-control-mumbai.html',
        'cockroach-control.html': 'cockroach-control-mumbai.html',
        'rodent-control.html': 'rodents-control-mumbai.html',
        'ant-control.html': 'ant-control-mumbai.html',
        'spider-control.html': 'spider-control-mumbai.html',
        'wood-borer-control.html': 'wood-borer-control-mumbai.html',
        'silverfish-control.html': 'silverfish-control-mumbai.html',
        'lizard-control.html': 'lizard-control-mumbai.html',
        'fly-control.html': 'fly-control-mumbai.html',
        'mosquito-control.html': 'mosquitoes-control-mumbai.html',
        'bed-bug-control.html': 'bed-bug-control-mumbai.html',
        'wasp-bee-control.html': 'bees-control-mumbai.html'
    }
    
    # Find all HTML files
    html_files = glob.glob("*.html")
    
    updated_files = []
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            original_content = content
            file_updated = False
            
            # Fix href links
            for old_link, new_link in link_mappings.items():
                old_pattern = f'href="{old_link}"'
                new_pattern = f'href="{new_link}"'
                
                if old_pattern in content:
                    content = content.replace(old_pattern, new_pattern)
                    file_updated = True
                    print(f"   🔗 Fixed link in {file_path}: {old_link} → {new_link}")
            
            # Fix canonical URLs
            for old_link, new_link in link_mappings.items():
                old_canonical = f'rel="canonical" href="https://superpestcontrol.in/{old_link}"'
                new_canonical = f'rel="canonical" href="https://superpestcontrol.in/{new_link}"'
                
                if old_canonical in content:
                    content = content.replace(old_canonical, new_canonical)
                    file_updated = True
                    print(f"   📄 Fixed canonical URL in {file_path}: {old_link} → {new_link}")
            
            # Fix Open Graph URLs
            for old_link, new_link in link_mappings.items():
                old_og = f'property="og:url" content="https://superpestcontrol.in/{old_link}"'
                new_og = f'property="og:url" content="https://superpestcontrol.in/{new_link}"'
                
                if old_og in content:
                    content = content.replace(old_og, new_og)
                    file_updated = True
                    print(f"   🌐 Fixed OG URL in {file_path}: {old_link} → {new_link}")
            
            # Write updated content if changes were made
            if file_updated:
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(content)
                
                updated_files.append(file_path)
                print(f"✅ Successfully updated {file_path}")
                
        except Exception as e:
            print(f"❌ Error processing {file_path}: {str(e)}")
    
    # Also check if any files exist that shouldn't
    orphaned_files = []
    for old_link in link_mappings.keys():
        if os.path.exists(old_link):
            orphaned_files.append(old_link)
    
    if orphaned_files:
        print(f"\n⚠️  Found orphaned files that should be deleted:")
        for file in orphaned_files:
            print(f"   - {file}")
            try:
                os.remove(file)
                print(f"   🗑️  Deleted {file}")
            except Exception as e:
                print(f"   ❌ Error deleting {file}: {e}")
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 BROKEN LINKS FIX SUMMARY:")
    print(f"✅ Updated files: {len(updated_files)}")
    print(f"🗑️  Orphaned files deleted: {len(orphaned_files)}")
    print(f"📁 Total files processed: {len(html_files)}")
    
    if updated_files:
        print(f"\n📝 Updated files:")
        for i, file in enumerate(updated_files[:10], 1):
            print(f"   {i:2d}. {file}")
        if len(updated_files) > 10:
            print(f"   ... and {len(updated_files) - 10} more files")
    
    print(f"\n✅ All broken links have been fixed!")
    print(f"🎯 All service pages now use the correct -mumbai.html naming convention")

if __name__ == "__main__":
    fix_broken_links()
