#!/usr/bin/env python3
import re

# Read the contact.html file
with open('contact.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in file: {len(lines)}")

# Find the line with the duplicate footer comment
duplicate_start = None
for i, line in enumerate(lines):
    if "Footer (from home page, single instance)" in line:
        duplicate_start = i
        print(f"Found duplicate footer comment at line {i+1}")
        break

if duplicate_start is not None:
    # Remove everything from the duplicate footer comment to the end, except </body></html>
    new_lines = lines[:duplicate_start]
    new_lines.append("</body>\n")
    new_lines.append("</html>\n")
    
    # Write the updated content back
    with open('contact.html', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f"✅ Removed duplicate footer starting from line {duplicate_start+1}")
    print(f"Original lines: {len(lines)}")
    print(f"New lines: {len(new_lines)}")
    print(f"Removed: {len(lines) - len(new_lines)} lines")
else:
    print("❌ Could not find duplicate footer comment")
