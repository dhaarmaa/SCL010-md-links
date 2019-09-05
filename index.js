// validacionescatch
const mdLinks = require('./mdLinks').mdLinks;
const path = require('path');
const chalk = require('chalk');

let option1 = process.argv[3];
let option2 = process.argv[4];
let valueArgv = process.argv[2]
    if(!path.isAbsolute(valueArgv)){
        valueArgv =(path.resolve(valueArgv))
    }
    
    if(option1 === 'validate' && option2 === 'stats' ||  option1 === 'stats' && option2 === 'validate') {
        mdLinks(valueArgv)
        .then(links =>{
            /*let validationStast =*/ mdLinks.linkStast(links);
              console.log(chalk.green("resultado:"));
              console.log(chalk.blue("Total: ${}"));
              console.log(chalk.blue("Unique: ${}"));
              console.log(chalk.blue("Broken: ${}"));
        })
        .catch (err =>{
          console.log(err)
        });
    }
    if (option1 === 'stats'){
      mdLinks(valueArgv)
      .then ( links => {
        let linksResult = mdLinks.linkStast(links);
        console.log(linksResult);
        console.log('Resultado:')
        console.log('unique: ');
        console.log('Total: ')
      })
      .catch (err =>{
        console.log(err);
      })
    }
    if ( option1 === 'validate'){
      mdLinks(valueArgv, {validate: true})
      .then ((links)=>{
        console.log(links)
      })
      .catch (err =>{
        console.log(err)
      })
    }
    else {
      mdLinks(valueArgv)
      .then(links => {
        console.log(links)
      })
      .catch (err =>{
        console.log (err)
      })
    }
