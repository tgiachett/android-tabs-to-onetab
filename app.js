const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const source = require('./source.txt');

(function () {
    //simplified date (for filenaming compatibility)
    const curDate = new Date().toISOString();
    const simpDate = curDate.split("T")[0];
    const oneTabFilename = process.argv[2] === "new" ? `${process.argv[3]}.txt` : `andTabsOneTab${simpDate}.txt`
    let exist = fs.existsSync(oneTabFilename)

    //make source.txt into array and filter out garbage
    const parsed = source.split("\r\n");

    //create the beginning of the template
    let template = " ";

    //populate the template       
    for(var i = 0; i < parsed.length; i++) {
        if(parsed[i].includes("http")) {
            template += `${parsed[i]} | ${parsed[i-1]} \n`
        };
            
    };
    
        // create the file
    if(process.argv[2] === "overwrite" || !exist)  {
        try {fs.appendFileSync(oneTabFilename, template, 'utf8')
            exist ? console.log(`${oneTabFilename} Overwritten`) : console.log(`Created ${oneTabFilename}`);
            
        } catch (err) {
            console.log(err)
        }

    } else {

        console.log("File name already exists. Use `node converter.js overwrite` to override. Use `node converter.js new [desiredFileName]` to add new filename");
        return;
    } 

})()
