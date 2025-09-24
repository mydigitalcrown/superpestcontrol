#!/bin/bash

# Script to update website credits from "Keyword Digital Marketing Company" to "Digital Marketing Company In Mumbai"
# and remove the extra "Mumbai" text

echo "Starting footer credit updates..."

# Find all page.tsx files
find /Users/mydigital/Documents/superpestcontrolnextjs/src/app -name "page.tsx" -type f | while read file; do
    echo "Processing: $file"
    
    # Replace the old credit with the new one
    sed -i '' 's/Keyword Digital Marketing Company/Digital Marketing Company In Mumbai/g' "$file"
    
    # Remove the extra Mumbai text pattern
    sed -i '' 's/Digital Marketing Company In Mumbai.*{'"'"' '"'"'}Mumbai/Digital Marketing Company In Mumbai/g' "$file"
    
    echo "Updated: $file"
done

echo "Footer credit updates completed!"
