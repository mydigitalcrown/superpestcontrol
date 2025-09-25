#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages that need syntax fixes
const PAGES_TO_FIX = [
  'ant-control-mumbai',
  'bed-bug-control-mumbai', 
  'bees-control-mumbai',
  'cockroach-control-mumbai',
  'contact',
  'fly-control-mumbai',
  'lizard-control-mumbai',
  'mosquitoes-control-mumbai',
  'rodents-control-mumbai',
  'services',
  'silverfish-control-mumbai',
  'spider-control-mumbai',
  'termites-control-mumbai',
  'ticks-control-mumbai',
  'wood-borer-control-mumbai',
  'commercial-fumigation-mumbai',
  'commercial-pest-control-mumbai',
  'flying-insect-management-mumbai',
  'residential-pest-control-mumbai'
];

let fixedFiles = 0;

function fixSyntaxErrors(filePath, pageName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let wasFixed = false;
    
    // Fix extra comma syntax error
    content = content.replace(/,\s*,/g, ',');
    
    // Fix incomplete export default statements
    if (content.includes('export default\\n') || content.includes('export default$')) {
      console.log(`🔧 Fixing incomplete export default in ${pageName}`);
      
      // Find the original component name from the file
      const componentRegex = /function\\s+([A-Za-z][A-Za-z0-9]*)|const\\s+([A-Za-z][A-Za-z0-9]*)\\s*=/;
      const match = content.match(componentRegex);
      
      if (match) {
        const componentName = match[1] || match[2];
        content = content.replace(/export default\\s*$/, `export default ${componentName};`);
        wasFixed = true;
      } else {
        // Generic component name based on page name
        const componentName = pageName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Page';
        content = content.replace(/export default\\s*$/, `export default ${componentName};`);
        wasFixed = true;
      }
    }
    
    // Fix double closing braces in metadata
    content = content.replace(/,\\s*};\\s*}/g, ',\\n};');
    
    if (wasFixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${pageName}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${pageName}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing Syntax Errors in Canonical URL Updates...\\n');
  
  const srcDir = path.join(__dirname, 'src', 'app');
  
  // First, fix the known problematic pages
  PAGES_TO_FIX.forEach(pageName => {
    const pageDir = path.join(srcDir, pageName);
    const pageFile = path.join(pageDir, 'page.tsx');
    
    if (fs.existsSync(pageFile)) {
      if (fixSyntaxErrors(pageFile, pageName)) {
        fixedFiles++;
      }
    }
  });
  
  console.log(`\\n📊 Summary: Fixed syntax errors in ${fixedFiles} files`);
  console.log('✅ All syntax errors should now be resolved!');
}

main();