#!/bin/bash

# List of remaining pages that need comprehensive footer
PAGES=(
  "pest-control-kalyan"
  "pest-control-in-worli"
  "pest-control-in-lower-parel"
  "pest-control-bhayander"
  "pest-control-in-andheri"
  "pest-control-in-byculla"
  "pest-control-in-dahisar"
  "pest-control-in-darave"
  "pest-control-in-dharavi"
)

echo "Fixing batch 1 of remaining pages..."

for page in "${PAGES[@]}"; do
  echo "Processing: $page"
  
  # Check if page exists
  if [[ -f "src/app/$page/page.tsx" ]]; then
    # Create backup
    cp "src/app/$page/page.tsx" "src/app/$page/page.tsx.backup"
    echo "  ✓ Backup created"
    
    # Check current state
    if grep -q "Comprehensive Footer" "src/app/$page/page.tsx"; then
      echo "  - Already has comprehensive footer"
    else
      echo "  - Missing comprehensive footer - needs manual fix"
    fi
    
    if grep -q "Floating Call & WhatsApp Buttons" "src/app/$page/page.tsx"; then
      echo "  - Already has floating buttons"
    else
      echo "  - Missing floating buttons - needs manual fix"
    fi
    
    if grep -q "Digital Marketing Company In Mumbai" "src/app/$page/page.tsx"; then
      echo "  - Already has updated credits"
    else
      echo "  - Missing updated credits - needs manual fix"
    fi
  else
    echo "  ✗ File not found: src/app/$page/page.tsx"
  fi
  echo "---"
done

echo "Batch 1 analysis complete!"
