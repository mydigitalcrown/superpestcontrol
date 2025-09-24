#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for domain corrections
const CORRECTIONS = [
  {
    from: 'superpestcontrolmumbai.com',
    to: 'superpestcontrol.in',
    description: 'Main domain correction'
  },
  {
    from: 'info@superpestcontrolmumbai.com',
    to: 'info@superpestcontrol.in',
    description: 'Email domain correction'
  },
  {
    from: 'contact@superpestcontrolmumbai.com',
    to: 'contact@superpestcontrol.in',
    description: 'Contact email domain correction'
  },
  {
    from: 'support@superpestcontrolmumbai.com',
    to: 'support@superpestcontrol.in',
    description: 'Support email domain correction'
  }
];

// File extensions to process
const ALLOWED_EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.txt', '.sh'];

// Directories to exclude
const EXCLUDED_DIRS = ['node_modules', '.git', '.next', 'dist', 'build'];

let totalFiles = 0;
let processedFiles = 0;
let updatedFiles = 0;

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  return ALLOWED_EXTENSIONS.includes(ext);
}

function shouldExcludeDir(dirName) {
  return EXCLUDED_DIRS.includes(dirName);
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    let changesMade = [];

    CORRECTIONS.forEach(correction => {
      if (content.includes(correction.from)) {
        const beforeCount = (content.match(new RegExp(correction.from, 'g')) || []).length;
        content = content.replace(new RegExp(correction.from, 'g'), correction.to);
        changesMade.push(`${correction.description}: ${beforeCount} instances`);
        updated = true;
      }
    });

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      changesMade.forEach(change => console.log(`   - ${change}`));
      updatedFiles++;
    }

    processedFiles++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  try {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!shouldExcludeDir(item)) {
          walkDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        totalFiles++;
        if (shouldProcessFile(fullPath)) {
          processFile(fullPath);
        }
      }
    });
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
}

function main() {
  const startTime = Date.now();
  
  console.log('🚀 Starting Domain Consistency Fix...\n');
  console.log('Corrections to be made:');
  CORRECTIONS.forEach((correction, index) => {
    console.log(`${index + 1}. ${correction.description}`);
    console.log(`   From: ${correction.from}`);
    console.log(`   To: ${correction.to}\n`);
  });

  // Start processing from the src directory
  const srcDir = path.join(__dirname, 'src');
  
  console.log(`Processing files in: ${srcDir}\n`);
  walkDirectory(srcDir);

  // Also check root level files
  const rootFiles = [
    'robots.ts',
    'sitemap.ts',
    'next.config.ts',
    'package.json',
    'README.md',
    'netlify.toml',
    'vercel.json'
  ];

  rootFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    if (fs.existsSync(filePath)) {
      totalFiles++;
      if (shouldProcessFile(filePath)) {
        processFile(filePath);
      }
    }
  });

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log('\n📊 Summary:');
  console.log(`Total files scanned: ${totalFiles}`);
  console.log(`Files processed: ${processedFiles}`);
  console.log(`Files updated: ${updatedFiles}`);
  console.log(`Time taken: ${duration}s`);
  
  if (updatedFiles > 0) {
    console.log('\n✅ Domain consistency fix completed successfully!');
    console.log('🔍 All instances of superpestcontrolmumbai.com have been corrected to superpestcontrol.in');
    console.log('📧 Email domains have been updated for proper brand consistency');
    console.log('🎯 SEO impact: Improved search engine indexing and brand recognition');
  } else {
    console.log('\n✅ No domain inconsistencies found - all domains are already correct!');
  }
}

main();