let resultado=0;/**variable con scope global*/
/*String, int , bool, undefine,array object, null*/
console.log(suma());
console.log(resultado);
function suma(){
    resultado = 10; 
    return resultado;
}
let nombre = "Luis";
let apellido = "Navas";
let edad = 48;
let llueve = true;
let participantes=[
    "Junior", "Luis", "Ivana", 
    "Martin", "Sheila", "Chenoa", 
    "Marcos","Sebastian"];
for(let a=0; a < participantes.length; a++){
    console.log(participantes[a]);
}

function render(){
    let contenedor = document.getElementById('root');
    participantes.forEach(part=>contenedor.innerHTML+=
        `<div class='card col-4 ' style='width: 18rem;'>
            <img src='...' class='card-img-top' alt='...'>
            <div class='card-body'>
                <h5 class='card-title'>${part}</h5>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' class='btn 
btn-primary'>Go somewhere</a>
            </div>
        </div>` 
        );
}
render();
let texto = "me gusta programar durante todas las horas"
let nombre3 = "Luis Navas"
//let saludo = "Hola soy:" +nombre2+ "y" +texto;
let saludo = ` <h3> Hola soy:${nombre3} y ${texto}</h3>`; 
let contenedor = document.getElementById('root');
contenedor.innerHTML+=saludo;

function nombreCompleto(nombre2,apallido){
 return `${nombre2} ${apellido}`;
}
console.log(nombreCompleto("Ivana", "Pelayes"));
console.log(nombreCompleto("Ivana"));
/*
const nombre_function=(nombre, apellido)=>{
    return` con arrow function ${nombre} ${apellido}`;
};
console.log(nombre_function("Luis", "Navas")); */