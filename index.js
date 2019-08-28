// module.exports = () => {
//   // ...
// };
const fs= require('fs');
const marked= require('marked');

// fs.readFile(./)
const readFile = (path)=>{
  return new Promise ((resolve, reject) =>{
    let links= [];
    fs.readFile(path, 'utf8', (err, data)=>{
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
