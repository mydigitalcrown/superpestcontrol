#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all pages that still need header updates
function findPagesWithOldHeaders() {
  const srcDir = path.join(__dirname, 'src', 'app');
  const pagesWithOldHeaders = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      
      if (fs.statSync(fullPath).isDirectory() && item.startsWith('pest-control-')) {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const content = fs.readFileSync(pageFile, 'utf8');
          
          // Check if it has the old header but not the new Header component
          if (content.includes('Ultra Modern E10-Style Header') && !content.includes('import Header from')) {
            pagesWithOldHeaders.push({
              path: pageFile,
              folder: item,
              relativePath: relativePath
            });
          }
        }
      }
    }
  }
  
  scanDirectory(srcDir);
  return pagesWithOldHeaders;
}

// Extract location name from folder name
function getLocationFromFolder(folderName) {
  const locationMap = {
    'pest-control-in-jogeshwari': 'Jogeshwari',
    'pest-control-in-nahur': 'Nahur',
    'pest-control-ghansoli': 'Ghansoli',
    'pest-control-in-byculla': 'Byculla',
    'pest-control-in-juhu': 'Juhu',
    'pest-control-in-powai': 'Powai',
    'pest-control-in-bandra': 'Bandra',
    'pest-control-in-ulhasnagar': 'Ulhasnagar',
    'pest-control-in-ambarnath': 'Ambarnath',
    'pest-control-in-malad': 'Malad',
    'pest-control-in-borivali': 'Borivali',
    'pest-control-in-chembur': 'Chembur',
    'pest-control-in-new-panvel': 'New Panvel',
    'pest-control-in-parel': 'Parel',
    'pest-control-in-kamothe': 'Kamothe',
    'pest-control-in-karjat': 'Karjat',
    'pest-control-in-seawoods': 'Seawoods',
    'pest-control-in-panvel': 'Panvel',
    'pest-control-in-kanjurmarg': 'Kanjurmarg',
    'pest-control-in-cbd-belapur': 'CBD Belapur',
    'pest-control-in-kalyan': 'Kalyan',
    'pest-control-in-juinagar': 'Juinagar',
    'pest-control-in-thane': 'Thane',
    'pest-control-in-dombivli': 'Dombivli',
    'pest-control-in-badlapur': 'Badlapur',
    'pest-control-in-fort': 'Fort',
    'pest-control-in-ghatkopar': 'Ghatkopar',
    'pest-control-in-goregaon': 'Goregaon',
    'pest-control-in-kandivali': 'Kandivali',
    'pest-control-in-kurla': 'Kurla',
    'pest-control-in-lokhandwala': 'Lokhandwala',
    'pest-control-in-lower-parel': 'Lower Parel',
    'pest-control-in-mulund': 'Mulund',
    'pest-control-in-oshiwara': 'Oshiwara',
    'pest-control-in-santacruz': 'Santacruz',
    'pest-control-in-dadar': 'Dadar',
    'pest-control-in-bhandup': 'Bhandup',
    'pest-control-bhayander': 'Bhayander',
    'pest-control-boisar': 'Boisar'
  };
  
  return locationMap[folderName] || folderName.replace(/pest-control-in-|pest-control-/g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Update a page with the Header component
function updatePageWithHeader(pageInfo) {
  const { path: pagePath, folder } = pageInfo;
  const location = getLocationFromFolder(folder);
  
  console.log(`🔄 Updating ${folder} with Header component...`);
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Add Header import at the top
  const importRegex = /^('use client';\s*\n)(import.*\n)*/m;
  const match = content.match(importRegex);
  
  if (match) {
    const imports = match[0];
    const headerImport = `import Header from "../../components/Header";\n`;
    
    // Check if Header import already exists
    if (!imports.includes('import Header from')) {
      const newImports = imports.replace(/('use client';\s*\n)/, `$1\n${headerImport}`);
      content = content.replace(imports, newImports);
    }
  }
  
  // Replace the old header with Header component
  const oldHeaderRegex = /\{\/\* Ultra Modern E10-Style Header \*\/\}[\s\S]*?<\/header>/;
  const headerReplacement = `<Header subtitle="Professional Pest Control in ${location}" />`;
  
  if (oldHeaderRegex.test(content)) {
    content = content.replace(oldHeaderRegex, headerReplacement);
    
    // Write the updated content
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✅ Successfully updated ${folder}`);
    return true;
  } else {
    console.log(`⚠️  Could not find old header pattern in ${folder}`);
    return false;
  }
}

// Main function
function main() {
  console.log('🚀 Starting Attractive Menu Consistency Update...\n');
  
  const pagesWithOldHeaders = findPagesWithOldHeaders();
  
  if (pagesWithOldHeaders.length === 0) {
    console.log('✅ All pages already have the attractive Header component!');
    return;
  }
  
  console.log(`📋 Found ${pagesWithOldHeaders.length} pages that need header updates:`);
  pagesWithOldHeaders.forEach((page, index) => {
    console.log(`${index + 1}. ${page.folder}`);
  });
  
  console.log('\n🔧 Updating pages with Header component...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const pageInfo of pagesWithOldHeaders) {
    try {
      const success = updatePageWithHeader(pageInfo);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (error) {
      console.error(`❌ Error updating ${pageInfo.folder}:`, error.message);
      failCount++;
    }
  }
  
  console.log('\n📊 Update Summary:');
  console.log(`✅ Successfully updated: ${successCount} pages`);
  console.log(`❌ Failed to update: ${failCount} pages`);
  console.log(`📝 Total processed: ${pagesWithOldHeaders.length} pages`);
  
  if (successCount > 0) {
    console.log('\n🎉 Menu consistency update completed!');
    console.log('🔍 All updated pages now have the attractive homepage menu');
    console.log('✨ Professional, consistent branding across all location pages');
  }
}

main();