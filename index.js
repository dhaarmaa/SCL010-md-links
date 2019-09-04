// validacionescatch
const mdLinks = require('./mdLinks').mdLinks;
const path = require('path');
const chalk = require('chalk');

let valueArgv = process.argv[2]
    if(!path.isAbsolute(valueArgv)){
        valueArgv =(path.resolve(valueArgv))
    }
    if(process.argv[3] === 'validate' && process.argv[4] === 'stats' ||  process.argv[3] === 'stats' && process.argv[4] === 'validate') {
        mdLinks(process.argv[2])
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
    if (process.argv[3] === 'stats'){
      mdLinks(process.argv[2])
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
    if ( process.argv[3] === 'validate'){
      mdLinks(process.argv[2], {validate: true})
      .then ((links)=>{
        console.log(links)
      })
      .catch (err =>{
        console.log(err)
      })
    }
    else {
      mdLinks(process.argv[2])
      .then(links => {
        console.log(links)
      })
      .catch (err =>{
        console.log (err)
      })
    }
