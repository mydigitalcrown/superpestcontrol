const fs = require('fs');
const path = require('path');

// Emoji mapping - replace ?? with proper emojis
const emojiReplacements = [
  // Basic emojis
  [/\?\?/g, '🐛'], // Default bug icon
];

// Context-specific replacements (more accurate)
const contextReplacements = [
  // Icons in buttons/links
  { pattern: /className="[^"]*text-xl[^"]*">\?\?<\/span>/g, replacement: 'className="text-white font-bold text-xl drop-shadow-sm">🐛</span>' },
  { pattern: /text-green-500[^>]*>\?\?</g, replacement: 'text-green-500 text-base">📞<' },
  { pattern: /mr-2">\?\?</g, replacement: 'mr-2">📞<' },
  { pattern: /text-white text-lg">\?\?</g, replacement: 'text-white text-lg">📞<' },
  
  // Service icons
  { pattern: /from-red-500 to-orange-500[^>]*>\?\?</g, replacement: 'from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl mr-4">🔍<' },
  { pattern: /from-blue-500 to-teal-500[^>]*>\?\?</g, replacement: 'from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl mr-4">📍<' },
  { pattern: /from-purple-500 to-pink-500[^>]*>\?\?</g, replacement: 'from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl mr-4">🏢<' },
  { pattern: /from-purple-400 to-pink-500[^>]*>\?\?</g, replacement: 'from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">💡<' },
  { pattern: /from-teal-400 to-green-500[^>]*>\?\?</g, replacement: 'from-teal-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">✓<' },
  { pattern: /from-yellow-400 to-orange-500[^>]*>\?\?</g, replacement: 'from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">⚡<' },
  
  // Background decoration emojis
  { pattern: /text-3xl">\?\?<\/div>/g, replacement: 'text-3xl">🐛</div>' },
  { pattern: /text-4xl">\?\?<\/div>/g, replacement: 'text-4xl">🐛</div>' },
  { pattern: /text-5xl">\?\?<\/div>/g, replacement: 'text-5xl">🛡️</div>' },
  { pattern: /text-6xl">\?\?<\/div>/g, replacement: 'text-6xl">🐛</div>' },
  { pattern: /text-6xl mb-6[^>]*>\?\?</g, replacement: 'text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️<' },
  { pattern: /text-4xl mb-4">\?\?</g, replacement: 'text-4xl mb-4">📋<' },
  { pattern: /text-2xl">\?\?<\/span>/g, replacement: 'text-2xl">✓</span>' },
  
  // Location pins
  { pattern: /text-xs">\?\?<\/span>/g, replacement: 'text-xs">📍</span>' },
  
  // Phone and WhatsApp
  { pattern: /text-white text-sm">\?\?</g, replacement: 'text-white text-sm">��<' },
  { pattern: /text-orange-400 text-lg[^>]*>\?\?</g, replacement: 'text-orange-400 text-lg mt-0.5">✓<' },
  
  // Animate elements
  { pattern: /animate-pulse">\?\?</g, replacement: 'animate-pulse">🐛<' },
  { pattern: /animate-bounce">\?\?</g, replacement: 'animate-bounce">⚡<' },
];

function fixEmojisInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply context-specific replacements first
    for (const { pattern, replacement } of contextReplacements) {
      const before = content;
      content = content.replace(pattern, replacement);
      if (content !== before) modified = true;
    }
    
    // Apply basic replacements for any remaining ??
    for (const [pattern, replacement] of emojiReplacements) {
      const before = content;
      content = content.replace(pattern, replacement);
      if (content !== before) modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all location pages
const appDir = path.join(__dirname, 'src', 'app');
const locationDirs = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('pest-control-in-'))
  .map(dirent => path.join(appDir, dirent.name, 'page.tsx'))
  .filter(filePath => fs.existsSync(filePath));

console.log(`Found ${locationDirs.length} location pages to fix...`);

let fixed = 0;
for (const filePath of locationDirs) {
  if (fixEmojisInFile(filePath)) {
    fixed++;
    console.log(`✓ Fixed: ${path.basename(path.dirname(filePath))}`);
  }
}

console.log(`\n✅ Fixed ${fixed} out of ${locationDirs.length} files!`);
