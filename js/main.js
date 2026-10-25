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

function mostrarMateria(materias) {
    let mensaje = "Ingresa la materia que queres modificar:\n"

    for (let i = 0; i < materias.length; i++) {
        mensaje += i + "- " + materias[i] + "\n"
    }

    const posicion = Number(prompt(mensaje))

    return posicion
}

function listarMaterias(materias) {
    let mensaje = "Materias que seran evaludas:\n"

    for (const materia of materias) {
        mensaje += "- " + materia + "\n"
    }

    alert(mensaje)
}

const calcularPromedio = (sumaNotas, cantidadMaterias) => {
    return sumaNotas / cantidadMaterias;
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

    const materias = [
        "Matematica",
        "Literatura",
        "Ciencias",
        "Educacion Fisica",
        "Inlges"
    ]

    const cambiarMateria = confirm("¿Deseas modificar las Materias antes de ingresar notas?")

    if (cambiarMateria === true) {

        const reemplazarMateria = confirm("¿Deseas reemplazar una materia por otra?")

        if (reemplazarMateria === true) {

            const posicion = mostrarMateria(materias)

            const nuevaMateria = prompt("Ingresa la nueva materia:")

            if (posicion >= 0 && posicion < materias.length && !isNaN(posicion)) {

                if (nuevaMateria === "" || nuevaMateria === null) {
                    alert("debes ingresar una materia valida")

                } else if (materias.includes(nuevaMateria)) {
                    alert("la materia ingresada ya existe")

                } else {
                    materias.splice(posicion, 1, nuevaMateria)
                    alert("la materia fue reemplazada correctamente")

                }


            } else {
                alert("la posicion ingresada no es valida")
            }


        }


        const agregarMateria = confirm("¿deseas agregar una materia?")

        if (agregarMateria === true) {

            const nuevaMateria = prompt("¿que materia deseas agregar?")

            if (nuevaMateria === "" || nuevaMateria === null) {
                alert("debes ingresar una materia valida")

            } else if (materias.includes(nuevaMateria)) {
                alert("esta materia ya existe")

            } else {
                materias.push(nuevaMateria)
                alert("se agrego la materia: " + nuevaMateria)
            }


        }

    }

    listarMaterias(materias)


    let sumaNotas = 0;

    for (const materia of materias) {
        const nota = validarNota(materia)
        sumaNotas += nota
    }

    const cantidadMaterias = materias.length

    const promedio = calcularPromedio(sumaNotas, cantidadMaterias)

    if (promedio >= 85) {
        alert(nombre + ", tu promedio es: " + promedio + ". Estás aprobado, excelente.");

    } else if (promedio >= 60) {
        alert(nombre + ", tu promedio es: " + promedio + ". Estás aprobado.");

    } else {
        alert(nombre + ", tu promedio es: " + promedio + ". Estás desaprobado, seguí mejorando.");
    }

}