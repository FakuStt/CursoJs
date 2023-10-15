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
    let enviar = "";
    while(enviar.toLowerCase() !== "si" && enviar.toLowerCase() !== "no"){
        enviar = prompt(`Deseas que cuando haya algún descuento te enviemos un aviso al siguiente correo: ${correo} ?     SI / NO`)
        if (enviar.toLowerCase() === "si") {
            alert("¡Genial! A la brevedad enviaremos un correo con las ofertas y promociones. Mientras tanto, te invitamos a ver nuestros últimos modelos de macetas en nuestra página. ¡Gracias!")
        } else if (enviar.toLowerCase() === "no") {
            alert("De todos modos, te invitamos a ver nuestro catálogo. ¡Gracias!")
        } else {
            alert("Respuesta incorrecta. Por favor, responde con 'SI' o 'NO'.")
        }
    }
}

enviarCorreo();



const productos = [
    {id: 1, tamaño: "chica", precio: 300},
    {id: 2, tamaño: "mediana", precio: 400},
    {id: 3, tamaño: "grande", precio: 450}
]

let ayuda = "";
let buscar = prompt("¿Necesitas ayuda con algo? SI/NO");
let preguntar = "";
let error = "";
let buscarId = "";
let buscarTamaño = "";
let buscarPrecio = "";
let resultado = "";
let sizes = "";
let costos = "";

while (true) {
    if (buscar.toLowerCase() === "si") {
        while (true) {
            ayuda = prompt("¿Con qué te podríamos ayudar? 1-BUSCAR MACETAS / 2-ERROR CON LA PÁGINA / 3-OTRO      SELECCIONE SOLO EL NÚMERO DE LA OPCIÓN");
            if (ayuda === "1") {
                preguntar = prompt("Buscar maceta por: 1- Id / 2- Tamaño / 3- Precio    SELECCIONA LA OPCIÓN POR EL NÚMERO");
                if (preguntar === "1") {
                    buscarId = parseInt(prompt("Ingresa el Id del producto que estas buscando. 1 / 2 / 3   SOLO INGRESE EL NUMERO"));
                    if (buscarId === 1) {
                        resultado = productos.filter((item) => item.id === 1);
                    } else if (buscarId === 2) {
                        resultado = productos.filter((item) => item.id === 2);
                    } else if (buscarId === 3) {
                        resultado = productos.filter((item) => item.id === 3);
                    } else {
                        alert("No seleccionaste una opcion de manera correcta. Aun asi, te mostraremos todas las opciones que tenemos disponible.");
                        resultado = productos;
                    }
                    resultado.forEach((item) => {
                        alert(`
                        Id: ${item.id}
                        Tamaño: ${item.tamaño}
                        Precio: $${item.precio}
                        `);
                    });
                } else if (preguntar === "2") {
                    buscarTamaño = prompt("Ingrese el tamaño que está buscando. 1- Chico / 2- Mediano / 3- Grande   SOLO INGRESE EL NUMERO DE LA OPCION");
                    if (buscarTamaño === "1") {
                        sizes = productos.filter((item) => item.tamaño === "chica");
                    } else if (buscarTamaño === "2") {
                        sizes = productos.filter((item) => item.tamaño === "mediana");
                    } else if (buscarTamaño === "3") {
                        sizes = productos.filter((item) => item.tamaño === "grande");
                    } else {
                        alert("No seleccionaste una opción de manera correcta. Aun así, te mostraremos todas las opciones que tenemos disponibles.");
                        sizes = productos;
                    }
                    sizes.forEach((item) => {
                        alert(`
                            Id: ${item.id}
                            Tamaño: ${item.tamaño}
                            Precio: $${item.precio}
                            `);
                    });
                } else if (preguntar === "3") {
                    buscarPrecio = prompt("Ingrese hasta cuanto esta dispuesto gastar.  INGRESE SOLO NUMEROS");
                    if (buscarPrecio > "450") {
                        costos = productos.filter((item) => item.precio <= "450");
                    } else if (buscarPrecio > "400") {
                        costos = productos.filter((item) => item.precio <= "400");
                    } else if (buscarPrecio > "300") {
                        costos = productos.filter((item) => item.precio <= "300");
                    } else {
                        alert("No seleccionaste una opción de manera correcta. Aun así, te mostraremos todas las opciones que tenemos disponibles.");
                        costos = productos;
                    }
                    alert(`Con un presupuesto de $${buscarPrecio} te alcanza para los siguientes productos:`)
                    costos.forEach((item) => {
                        alert(`
                            Id: ${item.id}
                            Tamaño: ${item.tamaño}
                            Precio: $${item.precio}
                            `);
                    });
                }                
                break;
            } else if (ayuda === "2"){
                error = prompt(`¡Te pedimos disculpas! Por aquí puedes enviarnos tu problema y a la brevedad lo estaremos solucionando. Nos pondremos en contacto contigo enviando un correo a ${correo}`);
                break;
            } else if (ayuda === "3"){
                alert(`Por favor, comunícate con nosotros desde tu correo electrónico ${correo} a nuestro correo ojalamacetas@gmail.com. ¡Gracias!`);
                break;
            } else{
                alert("No has seleccionado ninguna opción, vuelve a intentarlo.");
            }
        }        
        break;
    } else if (buscar.toLowerCase() === "no"){
        alert("¡Gracias por visitar nuestra página! Te invitamos a explorar nuestro hermoso catálogo.");
        break;
    } else {
        alert("¡Respuesta incorrecta! Vuelve a intentarlo!");
        buscar = prompt("¿Necesitas ayuda con algo? SI/NO");
    }
}