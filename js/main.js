function validarNota(materia) {
    let notaValida = false;
    let entrada;
    let nota;

    do {
        entrada = prompt("Ingresa la nota de " + materia);

        if (entrada === "" || entrada === null) {
            alert("No puedes dejar el campo vacío");
        } else {
            nota = Number(entrada);

            if (isNaN(nota) || nota < 0 || nota > 100) {
                alert("La nota ingresada no es válida");
            } else {
                notaValida = true;
            }
        }

    } while (notaValida === false);

    return nota;
}


function saludarAlumno(nombre) {
    const iniciar = confirm("Hola, " + nombre + ". ¡Bienvenido al simulador de promedios! ¿Deseas comenzar?");

    if (iniciar === false) {
        alert("Gracias por visitarnos, " + nombre + ". ¡Hasta pronto!");
    }

    return iniciar;
}



let nombre;
let nombreValido = false;

do {
    nombre = prompt("Ingrese su nombre");

    if (nombre === "" || nombre === null) {
        alert("Debes ingresar un nombre");
    } else {
        nombreValido = true;
    }

} while (nombreValido === false);

const iniciar = saludarAlumno(nombre);

if (iniciar === true) {

const cantidadMaterias = 5;
let sumaNotas = 0;
let nota;

for (let i = 1; i <= cantidadMaterias; i++) {

    if (i === 1) {
        nota = validarNota("Matemática");
    } else if (i === 2) {
        nota = validarNota("Literatura");
    } else if (i === 3) {
        nota = validarNota("Ciencias");
    } else if (i === 4) {
        nota = validarNota("Educacion Fisica");
    } else {
        nota = validarNota("Ingles");
    }

    sumaNotas += nota;
}

const calcularPromedio = (sumaNotas, cantidadMaterias) => {
    return sumaNotas / cantidadMaterias;
};

const promedio = calcularPromedio(sumaNotas, cantidadMaterias);

if (promedio >= 85) {
    alert(nombre + ", tu promedio es: " + promedio + ". Estás aprobado, excelente.");

} else if (promedio >= 60) {
    alert(nombre + ", tu promedio es: " + promedio + ". Estás aprobado.");

} else {
    alert(nombre + ", tu promedio es: " + promedio + ". Estás desaprobado, seguí mejorando.");
}

}