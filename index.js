// validaciones

const mdLinks = require('mdLinsk');

let valueArgv = process.argv[2]
    if(!Path.isAbsolute(valueArgv)){
        valueArgv =(path.resolve(valueArgv))
    }
    if(process.argv[3] === 'validate' && process.argv[4] === 'stats') ||  (process.argv[3] === 'stats' && process.argv[4] === 'validate'){
        mdLinks.mdLinks(process.argv[2])
        .then(links =>{
             let validationStast = mdLinks.linkStast(links);
             console.log("resultado:");
             console.log("Total:" )
             console.log("Unique: ")
             console.log("Broken: ")
             console.log()
        })
    }



