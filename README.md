# android-tabs-to-onetab
Parses text copied from android tabs (chrome://inspect#devices) and outputs text file compatible with OneTab import.

## Instructions

1. Create a source.txt file in the same folder as app.js
2. Navigate to chrome://inspect#devices and copy the whole list under desired device OR
3. Follow instructions here: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/
* Expand the list of tabs to get the full list
* Highlight and copy everything that's shown
3. Paste into source.txt
4. Run app.js using node: `node app.js`
5. Output is a plain text file called `andTabsOneTab[YYY-MM-DD].txt`
6. This file is ready to import into OneTab (Copy and paste the text)

NOTE: use `node app.js overwrite` to overwrite the bookmarks file that's already in the folder. Use `node app.js new [newFileName]` to create a new file instead of overwriting.


