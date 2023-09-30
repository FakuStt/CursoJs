let usuario = ""
let sexo = ""

while (usuario === "" || (sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "f")) {
    usuario = prompt("Ingrese su nombre de usuario")
    sexo = prompt("Ingrese su sexo: M/F")

    if (usuario != "" && sexo.toLowerCase() === "m") {
        alert(`Bienvenido ${usuario}!`)
    } else if (usuario != "" && sexo.toLowerCase() === "f"){
        alert(`Bienvenida ${usuario}!`)
    } else {
        alert("Ingresaste mal tu nombre de usuario o tu sexo, vuelve a intentarlo!")
    }
}


let correo = ""

while (!correo.includes ("@") || !correo.includes (".com")) {
    correo = prompt(`Ingrese el correo electronico vinculado al usuario: ${usuario}`)
    if (correo.includes("@") && correo.includes(".com")) {
    alert(`Tu dirección de correo electrónico se ha ingresado con éxito!`)
    } else {
        alert(`Dirección de correo electrónico incorrecta, vuelve a intentarlo!`)
    }
}

function enviarCorreo() {
    let enviar = prompt(`Deseas que cuando haya algún descuento te enviemos un aviso al siguiente correo: ${correo} ?     SI / NO`)
    if (enviar.toLowerCase() === "si") {
        alert("¡Genial! A la brevedad enviaremos un correo con las ofertas y promociones. Mientras tanto, te invitamos a ver nuestros últimos modelos de macetas en nuestra página. ¡Gracias!")
    } else if (enviar.toLowerCase() === "no") {
        alert("De todos modos, te invitamos a ver nuestro catálogo. ¡Gracias!")
    } else {
        alert("Respuesta incorrecta. Por favor, responde con 'SI' o 'NO'.")
    }
}

let buscar = prompt("¿Necesitas ayuda con algo? SI/NO");

if (buscar.toLowerCase() === "si") {
    let precio = prompt("¿Qué maceta te interesaría comprar? Chica / Mediana / Grande / Todas")
    switch (precio.toLowerCase()) {
        case "chica":
            alert(`Las macetas chicas tienen un precio de $300, son de buena calidad y las personalizamos a tu gusto.`)
            enviarCorreo();
            break;
        case "mediana":
            alert(`Las macetas medianas tienen un precio inicial de $400, son de buena calidad y las personalizamos a tu gusto.`)
            enviarCorreo();
            break;
        case "grande":
            alert(`Las macetas grandes tienen un precio inicial de $450, son de buena calidad y las personalizamos a tu gusto.`)
            enviarCorreo();
            break;
        case "todas":
            alert(`Las macetas chicas están a $300; las macetas medianas desde $400 y las macetas grandes están a un precio inicial de $450.`)
            enviarCorreo();
            break;
        default:
            break;
    }
} else {
    alert("¡Gracias por visitar nuestra página! Te invitamos a explorar nuestro hermoso catálogo.")
}