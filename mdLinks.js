//funcion de mdLinks
const fs= require('fs');
const marked= require('marked');

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
