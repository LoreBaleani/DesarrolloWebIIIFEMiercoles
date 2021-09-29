
let alumno={
    nombre:"Lorena",
    edad:18,
    mostrar:()=>{
        return `Soy ${alumno.nombre} y tengo ${alumno.edad}`;
    }
};
let saludo=`Hola,${alumno.nombre} como estas?`;

ReactDOM.render(
    <div className="row">
     <div className="col-6 bg-primary text-white p-4">Hola{alumno.mostrar()}</div>
    </div>,
    document.getElementById('root')
);