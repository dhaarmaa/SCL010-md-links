// validaciones

const mdLinks = require('mdLinsk');
const path = require('path');

let valueArgv = process.argv[2]
    if(!Path.isAbsolute(valueArgv)){
        valueArgv =(path.resolve(valueArgv))
    }
    if(process.argv[3] === 'validate' && process.argv[4] === 'stats') ||  (process.argv[3] === 'stats' && process.argv[4] === 'validate'){
        mdLinks(process.argv[2])
        .then(links =>{
            let validationStast = mdLinks.linkStast(links);
              console.log("resultado:");
              console.log("Total: ${}");
              console.log("Unique: ${}")
              console.log("Broken: ${}")
        })
        .catch (err =>{
          console.log(err)
        });
    } 
    if (process.argv[3] === 'stats'){
      mdLinks(process.argv[2])
      .then ( links => {
        let links = mdLinks.linkStast(links);
        console.log('Resultado:')
        console.log('unique: ${}');
        console.log('Total: ${}')
      });
      .catch (err =>{
        console.log(err)
      });
    }
    if ( process.argv[3] === 'validate'){
      mdLinks(process.argv[2], {validate: true})
      .then ((links)=>{
        console.log(links)
      });
      .catch (err =>{
        console.log(err)
      })
    }
    else {
      mdLinks(process.argv[2])
      .then(links => {
        log(links)
      })
      .catch (err =>{
        log (err)
      });
    }
  



