#!/bin/bash

# Fix email addresses from info@superpestcontrol.com to info@superpestcontrol.in
echo "Fixing email addresses across all HTML files..."

# Find all HTML files and replace the email addresses
find . -name "*.html" -type f -exec sed -i '' 's/info@superpestcontrol\.com/info@superpestcontrol.in/g' {} +

echo "Email addresses fixed successfully!"

# Count how many files were affected
echo "Files containing the corrected email address:"
grep -l "info@superpestcontrol.in" *.html | wc -l
