#!/usr/bin/env node

//funcion de mdLinks
const fs= require('fs');
const marked= require('marked');
const fileHound = require('filehound');
const chalk = require('chalk');
//  const pathUser = require(path)


 //función que tiene las opciones
const mdLinks = (userPath, option) =>{ 
  console.log("ESTOY AQUI");
  console.log('otro userpath', userPath);

  return new Promise((resolve, reject)=>{
    fs.stat(userPath, (error, stats) => {
      if (error){
        console.log("error")
      }
      else if(stats.isFile(userPath)){
        readFile(userPath)
        .then(res => {
          // por ejemplo...
          res.forEach(link => {
            console.log('un link', link);
          });
        })//no se que meter ahí
      }//else no lleva parametro
      else if(stats.isDirectory(userPath)){
        readdir()
        .then(res =>{
          res.forEach(links =>{
            resolve(ReadFile(links))
          })
        })
        .catch (err =>{
          reject(err)
        })
      }
    }) 
  })
}

//f(x) que lee archivos
const readFile = (userPath)=>{
  console.log("USERPATH READFILE:", userPath);
  return new Promise ((resolve, reject) =>{ //creo promesa
    let links= [];//array en donde se van alamacenar los docuemntos
    fs.readFile(userPath, 'utf8', (err, data)=>{  //parametros 
      if(err){
    throw err
      }
      else{
        const renderer = new  marked.Renderer();//new es para crear un nueva instancia
        renderer.link= function(href, title, text){ 
          links.push({//que se imprian el link, el text y la carpeta
            href:href,
            text:text,
            file:userPath
          });
        };
        console.log(links);
        resolve(links); 
      };
    })
  })
}

//Flexible and fluent interface for searching the file system = fileHound
//F(x) que lee directorios y saca los archivos de formato md
const readdir = (valueArgv) => {
  return  fileHound.create()
  .paths(valueArgv)
  .ext('md')
  .find();
} 

//f(x)de option 
//f(x) validate


//exportaciones
module.exports = {
  mdLinks
}

