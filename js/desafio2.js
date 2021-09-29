let elemento = document.getElementById('root');
const nombreCompleto= (nombre="", apellido="")=>{
 let nc =`<h2>Mi nombre es: ${nombre}  ${apellido}</h2>`;
 return nc;
}
elemento.innerHTML+=nombreCompleto("Luis");
elemento.innerHTML+=nombreCompleto("Luis", "Navas");
elemento.innerHTML+=nombreCompleto("Ivana");
elemento.innerHTML+=nombreCompleto("Ivana", "Pelayes");
elemento.innerHTML+=nombreCompleto();
