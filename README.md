# Usage:

"node index.js --profile=[NAME] --width=[SIZE] --height=[SIZE] --input=[PATH] --output=[PATH]"

Warning: At the end of the path apply /

# Create Profile:

Package.json > Scripts
"[PROFILE NAME]": [USAGE CODE]

Example:
"instagram": "node index.js --profile=instagram --width=1280 --height=720 --input=input/ --output=output/"

# How to run Profile:

"npm [PROFILE NAME]"

## Params:

--profile  
--width  
--height  
--input  
--output  
-sW: Keeps image scale based on width  
-sH: Keeps image scale based on height
