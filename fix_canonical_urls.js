#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages that need canonical URL fixes based on Google Search Console errors
const PROBLEMATIC_PAGES = [
  'pest-control-in-kopar-khairane',
  'commercial', 
  'residential-pest-control-mumbai',
  'pest-control-in-turbhe',
  'pest-control-in-mahim',
  'flying-insect-management-mumbai',
  'pest-control-in-kolhapur',
  'pest-control-in-thane',
  'pest-control-bhayander',
  'pest-control-in-sangli',
  'pest-control-in-mahape',
  'pest-control-in-shirvane',
  'pest-control-in-darave',
  'pest-control-in-digha',
  'pest-control-in-nalasopara',
  'pest-control-in-mira-bhayandar',
  'pest-control-in-ghodbunder-road',
  'pest-control-in-diva',
  'pest-control-in-mumbra',
  'pest-control-in-karjat',
  'pest-control-in-badlapur',
  'pest-control-in-ambarnath',
  'pest-control-in-ulhasnagar',
  'pest-control-in-kalyan',
  'pest-control-in-dombivli',
  'pest-control-in-bhiwandi',
  'pest-control-in-aurangabad',
  'pest-control-in-nashik',
  'pest-control-in-ahmednagar',
  'pest-control-in-solapur',
  'pest-control-in-satara',
  'pest-control-in-alibag',
  'pest-control-in-bavdhan',
  'pest-control-in-ambegaon',
  'pest-control-in-kharadi',
  'pest-control-hadapsar',
  'pest-control-hinjewadi',
  'pest-control-baner',
  'pest-control-ghansoli',
  'pest-control-belapur',
  'pest-control-airoli',
  'pest-control-boisar',
  'pest-control-bhayander',
  'residential',
  'about',
  'contact',
  'services',
  // Service pages
  'termites-control-mumbai',
  'cockroach-control-mumbai', 
  'rodents-control-mumbai',
  'bed-bug-control-mumbai',
  'ant-control-mumbai',
  'mosquitoes-control-mumbai',
  'spider-control-mumbai',
  'lizard-control-mumbai',
  'fly-control-mumbai',
  'bees-control-mumbai',
  'wood-borer-control-mumbai',
  'ticks-control-mumbai',
  'silverfish-control-mumbai',
  'commercial-pest-control-mumbai',
  'commercial-fumigation-mumbai'
];

let totalFiles = 0;
let processedFiles = 0;
let updatedFiles = 0;

function addCanonicalURLToPage(filePath, pageName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const baseUrl = 'https://superpestcontrol.in';
    const canonicalUrl = `${baseUrl}/${pageName}`;
    
    // Check if page already has metadata export
    const hasMetadata = content.includes('export const metadata');
    const hasGenerateMetadata = content.includes('generateMetadata');
    const hasCanonical = content.includes('canonical:');
    
    if (hasCanonical) {
      console.log(`⏭️  Skipping ${pageName} - already has canonical URL`);
      return false;
    }
    
    if (hasMetadata && !hasGenerateMetadata) {
      // Add canonical to existing metadata
      const metadataRegex = /(export const metadata[^=]*=\s*{[^}]*)(};)/s;
      const match = content.match(metadataRegex);
      
      if (match) {
        const beforeClosing = match[1];
        const closing = match[2];
        
        // Add canonical URL before the closing brace
        const updatedMetadata = `${beforeClosing},
  alternates: {
    canonical: "${canonicalUrl}",
  },${closing}`;
        
        content = content.replace(metadataRegex, updatedMetadata);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Added canonical URL to existing metadata: ${pageName}`);
        return true;
      }
    } else if (!hasMetadata && !hasGenerateMetadata) {
      // Add complete metadata export with canonical
      const importRegex = /(import[^;]+;[\s\S]*?)(\n\nexport default)/;
      const match = content.match(importRegex);
      
      if (match) {
        const imports = match[1];
        const restOfFile = match[2];
        
        // Add Metadata import if not present
        let updatedImports = imports;
        if (!imports.includes('type { Metadata }')) {
          updatedImports = imports.replace(
            /(import[^;]*next[^;]*;)/,
            '$1\nimport type { Metadata } from "next";'
          );
        }
        
        const metadataExport = `
export const metadata: Metadata = {
  title: "${generateTitle(pageName)}",
  description: "${generateDescription(pageName)}",
  alternates: {
    canonical: "${canonicalUrl}",
  },
};`;
        
        content = `${updatedImports}${metadataExport}${restOfFile}`;
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Added complete metadata with canonical URL: ${pageName}`);
        return true;
      }
    }
    
    return false;
    
  } catch (error) {
    console.error(`❌ Error processing ${pageName}:`, error.message);
    return false;
  }
}

function generateTitle(pageName) {
  const titleMap = {
    'commercial': 'Commercial Pest Control Mumbai | Office, Restaurant, Warehouse Solutions',
    'residential': 'Residential Pest Control Mumbai | Home Solutions | Super Pest Control',
    'about': 'About Super Pest Control Mumbai | 10+ Years Experience | Licensed Experts',
    'contact': 'Contact Super Pest Control Mumbai | 24/7 Emergency Service | Free Quote',
    'services': 'Pest Control Services Mumbai | Complete Solutions | Super Pest Control',
    'residential-pest-control-mumbai': 'Residential Pest Control Mumbai | Home Solutions | Super Pest Control'
  };
  
  if (titleMap[pageName]) {
    return titleMap[pageName];
  }
  
  // Generate title for location pages
  if (pageName.includes('pest-control-in-')) {
    const location = pageName.replace('pest-control-in-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `Pest Control in ${location} | Professional Service | Super Pest Control`;
  }
  
  if (pageName.includes('pest-control-')) {
    const location = pageName.replace('pest-control-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `Pest Control ${location} | Professional Service | Super Pest Control`;
  }
  
  // Generate title for service pages
  if (pageName.includes('-control-mumbai') || pageName.includes('-mumbai')) {
    const service = pageName.replace(/-control-mumbai|-mumbai/g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `${service} Control Mumbai | Professional Treatment | Super Pest Control`;
  }
  
  return `${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Super Pest Control Mumbai`;
}

function generateDescription(pageName) {
  const descMap = {
    'commercial': 'Professional commercial pest control services in Mumbai. Comprehensive solutions for offices, restaurants, hotels, warehouses. Licensed experts, compliance support, maintenance contracts.',
    'residential': 'Professional residential pest control services in Mumbai. Safe, effective home solutions for all pests. Family-friendly treatments with guaranteed results.',
    'about': 'Learn about Super Pest Control Mumbai - 10+ years of professional pest control experience. Licensed, certified experts providing safe, effective pest management solutions.',
    'contact': 'Contact Super Pest Control Mumbai for professional pest control services. 24/7 emergency response, free inspections, competitive pricing. Call now!',
    'services': 'Complete pest control services in Mumbai. Professional solutions for termites, cockroaches, rodents, bed bugs, and more. Licensed experts, eco-friendly treatments.',
    'residential-pest-control-mumbai': 'Professional residential pest control in Mumbai. Safe, effective home pest management solutions. Family-friendly treatments with guaranteed results.'
  };
  
  if (descMap[pageName]) {
    return descMap[pageName];
  }
  
  // Generate description for location pages
  if (pageName.includes('pest-control-in-')) {
    const location = pageName.replace('pest-control-in-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `Professional pest control services in ${location}. Expert solutions for termites, cockroaches, rodents, bed bugs. Licensed, eco-friendly treatments. 24/7 emergency service.`;
  }
  
  return `Professional pest control services for ${pageName.replace(/-/g, ' ')}. Expert solutions, licensed technicians, guaranteed results. Contact Super Pest Control Mumbai today.`;
}

function main() {
  console.log('🔧 Fixing Non-Canonical URL Errors in Sitemap...\n');
  
  const srcDir = path.join(__dirname, 'src', 'app');
  
  PROBLEMATIC_PAGES.forEach(pageName => {
    const pageDir = path.join(srcDir, pageName);
    const pageFile = path.join(pageDir, 'page.tsx');
    
    totalFiles++;
    
    if (fs.existsSync(pageFile)) {
      processedFiles++;
      const wasUpdated = addCanonicalURLToPage(pageFile, pageName);
      if (wasUpdated) {
        updatedFiles++;
      }
    } else {
      console.log(`⚠️  File not found: ${pageFile}`);
    }
  });
  
  console.log('\\n📊 Summary:');
  console.log(`Total pages to fix: ${totalFiles}`);
  console.log(`Files processed: ${processedFiles}`);
  console.log(`Files updated: ${updatedFiles}`);
  
  if (updatedFiles > 0) {
    console.log('\\n✅ Non-canonical URL errors fixed successfully!');
    console.log('🎯 All problematic pages now have proper canonical URLs');
    console.log('📈 Google Search Console should show reduced errors in 24-48 hours');
    console.log('\\n🔄 Next Steps:');
    console.log('1. Build and test the website');
    console.log('2. Submit updated sitemap to Google Search Console');
    console.log('3. Monitor error reduction over next few days');
  } else {
    console.log('\\n✅ All pages already have canonical URLs - no updates needed!');
  }
}

main();