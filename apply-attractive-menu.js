#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 APPLYING ATTRACTIVE MENU TO ALL PAGES');
console.log('==========================================');

// Pages that need the attractive menu applied
const pagesToUpdate = [
  // New location pages that need menu
  'src/app/pest-control-in-vile-parle/page.tsx',
  'src/app/pest-control-in-vikhroli/page.tsx', 
  'src/app/pest-control-in-navi-mumbai/page.tsx',
  'src/app/pest-control-in-vasai/page.tsx',
  'src/app/pest-control-in-vashi/page.tsx',
  'src/app/pest-control-in-pune/page.tsx',
  'src/app/pest-control-in-wadala/page.tsx',
  'src/app/pest-control-in-virar/page.tsx',
  'src/app/pest-control-in-viman-nagar/page.tsx',
  'src/app/pest-control-in-urse/page.tsx',
  'src/app/pest-control-in-mira-road/page.tsx',
  'src/app/pest-control-in-nerul/page.tsx',
  'src/app/pest-control-in-wakad/page.tsx',
  'src/app/pest-control-in-worli/page.tsx',
  'src/app/pest-control-mumbai/page.tsx',
  'src/app/pest-control-pune/page.tsx',
  'src/app/pest-control-navi-mumbai/page.tsx',
  'src/app/pest-control-pcmc/page.tsx',
  
  // Existing pages that need menu update
  'src/app/pest-control-in-naigaon/page.tsx',
  'src/app/pest-control-in-andheri/page.tsx',
  'src/app/pest-control-aundh/page.tsx',
  
  // Utility pages
  'src/app/terms/page.tsx',
  'src/app/privacy/page.tsx'
];

function updatePageWithHeader(filePath) {
  try {
    console.log(`📝 Processing: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`   ❌ File not found: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has the modern header
    if (content.includes('backdrop-blur-xl border-b border-gray-100/50')) {
      console.log(`   ✅ Already has modern header: ${filePath}`);
      return true;
    }
    
    // Check if it's a 'use client' component
    const isClientComponent = content.includes("'use client';");
    
    // Add Header import if not present
    if (!content.includes('import Header from')) {
      const importMatch = content.match(/import[^;]+from[^;]+;/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        const importIndex = content.indexOf(lastImport) + lastImport.length;
        content = content.slice(0, importIndex) + '\nimport Header from "../../../components/Header";' + content.slice(importIndex);
      }
    }
    
    // Find the location name for subtitle
    const locationMatch = filePath.match(/pest-control(?:-in)?-([^\/]+)\/page\.tsx$/);
    let locationName = '';
    let subtitle = "Mumbai's #1 Choice";
    
    if (locationMatch) {
      locationName = locationMatch[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      if (locationName.includes('Mumbai')) {
        subtitle = "Mumbai's Pest Control Experts";
      } else if (locationName.includes('Pune')) {
        subtitle = "Pune's Premier Pest Control";
      } else if (locationName.includes('Navi Mumbai')) {
        subtitle = "Navi Mumbai Specialists";
      } else {
        subtitle = `${locationName} Pest Control Experts`;
      }
    }
    
    // Handle Terms and Privacy pages
    if (filePath.includes('/terms/') || filePath.includes('/privacy/')) {
      subtitle = "Professional Pest Control Services";
    }
    
    // Replace the simple hero section with Header component + hero
    const oldHeroPattern = /<div className="min-h-screen bg-gray-50">\s*<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">/s;
    const newHeroStart = `<div className="min-h-screen bg-gray-50">
      <Header subtitle="${subtitle}" />
      
      {/* Hero Section with proper spacing for fixed header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 pt-32">`;
    
    // Apply the replacement
    if (content.includes('bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16')) {
      content = content.replace(
        '<div className="min-h-screen bg-gray-50">',
        '<div className="min-h-screen bg-gray-50">\n      <Header subtitle="' + subtitle + '" />\n      \n      {/* Hero Section with proper spacing for fixed header */}'
      );
      
      // Update the section to have proper top padding
      content = content.replace(
        'className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"',
        'className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 pt-32"'
      );
    }
    
    // For pages that don't have the standard hero section, find the main container and add header
    else if (content.includes('<div className="min-h-screen bg-')) {
      const mainDivMatch = content.match(/<div className="min-h-screen bg-[^"]+">/)
      if (mainDivMatch) {
        content = content.replace(
          mainDivMatch[0],
          mainDivMatch[0] + '\n      <Header subtitle="' + subtitle + '" />\n'
        );
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`   ✅ Updated successfully: ${filePath}`);
    return true;
    
  } catch (error) {
    console.log(`   ❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Process all pages
let successCount = 0;
let totalCount = pagesToUpdate.length;

console.log(`\n📊 Processing ${totalCount} pages...\n`);

pagesToUpdate.forEach(filePath => {
  if (updatePageWithHeader(filePath)) {
    successCount++;
  }
});

console.log('\n' + '='.repeat(50));
console.log(`📊 SUMMARY:`);
console.log(`✅ Successfully updated: ${successCount}/${totalCount} pages`);
console.log(`❌ Failed or skipped: ${totalCount - successCount}/${totalCount} pages`);
console.log('\n🎉 Attractive menu application complete!');

if (successCount > 0) {
  console.log('\n🚀 Next steps:');
  console.log('   1. Run `npm run build` to test compilation');  
  console.log('   2. Test the attractive menu on updated pages');
  console.log('   3. Commit changes to git');
}