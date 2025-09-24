#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 FIXING HEADER IMPORT PATHS');
console.log('===============================');

const pagesToFix = [
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
  'src/app/pest-control-in-naigaon/page.tsx',
  'src/app/pest-control-in-andheri/page.tsx',
  'src/app/pest-control-aundh/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/privacy/page.tsx'
];

function fixImportPath(filePath) {
  try {
    console.log(`📝 Fixing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the import path
    content = content.replace(
      'import Header from "../../../components/Header";',
      'import Header from "../../components/Header";'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`   ✅ Fixed: ${filePath}`);
    return true;
    
  } catch (error) {
    console.log(`   ❌ Error: ${filePath}`, error.message);
    return false;
  }
}

pagesToFix.forEach(fixImportPath);

console.log('\n✅ Import path fixes complete!');