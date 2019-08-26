// module.exports = () => {
//   // ...
// };
const fs= require('fs');

const marked= require('marked');
// fs.readFile(./)
const links= (path)=>{
  fs.readFile(path, 'utf8', (err, data)=>{
  if(err){
throw err
  }

let links= []//es para guardar los documentos
const renderer = new  marked.Renderer();//new es para crear un nueva instancia
renderer.link= function(href, title, text){
links.push({
  href:href,
  text:text,
  file:path
});
}
marked(data, {renderer:renderer})
console.log(links);
})
}

console.log(links('prueba.md'));