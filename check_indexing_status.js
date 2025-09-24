#!/usr/bin/env node

// Google Indexing Status Checker for SuperPestControl.in
// This script helps monitor and accelerate Google indexing

const baseUrl = 'https://superpestcontrol.in';

// Priority URLs that should be indexed first
const priorityUrls = [
  'https://superpestcontrol.in',
  'https://superpestcontrol.in/services', 
  'https://superpestcontrol.in/pest-control-mumbai',
  'https://superpestcontrol.in/pest-control-pune',
  'https://superpestcontrol.in/pest-control-navi-mumbai',
  'https://superpestcontrol.in/termites-control-mumbai',
  'https://superpestcontrol.in/cockroach-control-mumbai',
  'https://superpestcontrol.in/bed-bug-control-mumbai',
  'https://superpestcontrol.in/commercial-pest-control-mumbai',
  'https://superpestcontrol.in/residential-pest-control-mumbai'
];

// Function to check if URL is indexed in Google
async function checkGoogleIndexing(url) {
  try {
    const searchQuery = `site:${url}`;
    console.log(`🔍 Check manually: https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error checking ${url}:`, error.message);
    return false;
  }
}

// Main function to check all priority URLs
async function checkAllUrls() {
  console.log('🚀 Google Indexing Status Checker for SuperPestControl.in\n');
  console.log('📋 Priority URLs to check:\n');
  
  for (let i = 0; i < priorityUrls.length; i++) {
    const url = priorityUrls[i];
    console.log(`${i + 1}. ${url}`);
    console.log(`   Check: https://www.google.com/search?q=site:${encodeURIComponent(url)}`);
    console.log('');
  }
  
  console.log('\n📊 How to interpret results:');
  console.log('✅ If URL appears in search results = INDEXED');
  console.log('❌ If no results found = NOT INDEXED YET');
  console.log('\n🔧 If not indexed, submit URL in Google Search Console');
  console.log('📈 Expected indexing timeline: 1-4 weeks for new pages');
}

checkAllUrls();
