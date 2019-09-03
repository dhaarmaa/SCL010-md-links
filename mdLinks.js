//funcion de mdLinks
const mdLinks = require('mdLinks');
const fs= require('fs');
const marked= require('marked');
const path = require('path');
const fileHound = require('fileHound');


 //función que tiene las opciones
const mdLinks = (path, option) =>{ 
  return new Promise((resolve, reject)=>{
    fs.stat(path, (error, stats) => {
      if (error){
        console.log("error")
      }
      if(stats.isFile()){
        readFile(path)
        .then()//no se que meter ahí
      }//else no lleva doc 
      else if(stats.isDirectory()){
        file()
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



const readFile = (path)=>{
  return new Promise ((resolve, reject) =>{ //creo promesa
    let links= [];//array en donde se van alamacenar los docuemntos
    fs.readFile(path, 'utf8', (err, data)=>{ //parametros
      if(err){
    throw err
      }
      else{
        const renderer = new  marked.Renderer();//new es para crear un nueva instancia
        renderer.link= function(href, title, text){
          links.push({
            href:href,
            text:text,
            file:path
          });
        };
        marked(data, {renderer:renderer})
        const renderer = new  marked.Renderer();//new es para crear un nueva instancia
        renderer.link= function(href, title, text){
          links.push({
            href:href,
            text:text,
            file:path
          });
        };
        marked(data, {renderer:renderer})
        resolve(links);
      };
    })
  })
}
//Flexible and fluent interface for searching the file system
 const file = filehound.create() 
    .paths(valueArgv)
    .ext('md')
    .find()
    .then ( files=>{
      files.forEach(file => {
        console.log(file)
      });
    })
