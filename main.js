class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, notas = []) {
        super(nombre, edad);
        this.notas = notas;
    }

    set agregarNota(value) {
        this.notas.push(value);
    }

    sacarPromedio() {
        const suma = this.notas.reduce((acc, current) => acc + current, 0);

        console.log(suma);
        return (suma / this.notas.length).toFixed(1);
    }
}

const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#inputNombre");
const inputEdad = document.querySelector("#inputEdad");
const inputNota1 = document.querySelector("#inputNota1");
const inputNota2 = document.querySelector("#inputNota2");
const inputNota3 = document.querySelector("#inputNota3");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // validaciones
    console.log(inputNombre.value);

    // instancia del objeto
    const estudianteUno = new Estudiante(inputNombre.value, inputEdad.value);
    estudianteUno.agregarNota = +inputNota1.value;
    estudianteUno.agregarNota = +inputNota2.value;
    estudianteUno.agregarNota = +inputNota3.value;

    console.log(estudianteUno);

    resultado.innerHTML = `
    <p>El estudiante con nombre: ${estudianteUno.nombre}, tiene una edad de: ${
        estudianteUno.edad
    }</p>
    <p>Sus notas son:</p>
    <ul>
        <li>Nota1: ${estudianteUno.notas[0]}</li>
        <li>Nota2: ${estudianteUno.notas[1]}</li>
        <li>Nota3: ${estudianteUno.notas[2]}</li>
    </ul>
    <p>Su promedio final es: ${estudianteUno.sacarPromedio()}</p>
    `;
});
