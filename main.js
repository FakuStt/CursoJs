let usuario = "";
let usuarioStorage = localStorage.getItem("usuario");
let sexo = "";
let correo = "";
let enviar = "";
let ayuda = "";
let buscar = "";
let caracteristica = "";
let opcionOtro2 = "";
let edad = "";
let clave = "";
let error = "";

function eliminar() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
}

function botonSiguiente(callback) {
    let boton = document.createElement("button");
    boton.innerHTML = "Siguiente";
    boton.id = "botonSiguienteId";
    document.body.appendChild(boton);
    boton.addEventListener("click", () => {
        eliminar();
        if (typeof callback === "function") {
            callback();
        }
    });
}

function mensajeAlert(mensaje, callback) {
    let parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    parrafo.id = "parrafoId"
    document.body.append(parrafo);
    botonSiguiente(callback);
}

const mostrarPrompt = (mensajePrompt, valorPrompt, promptCallback) => {
    let contenedorPrompt = document.createElement("div");
    contenedorPrompt.id = "contenedorId"
    let label = document.createElement("label");
    label.textContent = mensajePrompt;
    label.id = "labelId"
    let input = document.createElement("input");
    input.type = "text";
    input.value = valorPrompt;
    input.id = "inputId"
    let botonAceptar = document.createElement("button");
    botonAceptar.textContent = "Aceptar";
    botonAceptar.id = "botonAceptar";
    let botonCancelar = document.createElement("button");
    botonCancelar.textContent = "Cancelar";
    botonCancelar.id = "botonCancelar"
    contenedorPrompt.append(label, input, botonAceptar, botonCancelar);
    document.body.append(contenedorPrompt);

    const cerrarPrompt = (valor) => {
        document.body.removeChild(contenedorPrompt);
        if (typeof promptCallback === "function") {
            promptCallback(valor);
        }
    };

    const aceptarPrompt = () => {
        cerrarPrompt(input.value);
    };

    const cancelarPrompt = () => {
        cerrarPrompt(null);
    };

    botonAceptar.addEventListener("click", aceptarPrompt);
    botonCancelar.addEventListener("click", cancelarPrompt);
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            aceptarPrompt();
        }
    });
};

const functionUsuario = () => {
    mostrarPrompt("Ingrese su usuario:", "", (valor) => {
        usuario = valor;
        const functionSexo = () => {
            mostrarPrompt("Ingrese su sexo: M/F", "", (valor) => {
                sexo = valor.toLowerCase();
                if (usuario !== "" && sexo === "m") {
                    Swal.fire({
                        title: `Usuario y sexo ingresado correctamente!`,
                        text: `Bienvenido ${usuario}!`,
                        icon: "success"
                      });
                      functionCorreo();
                    
                } else if (usuario !== "" && sexo === "f") {
                    Swal.fire({
                        title: `Usuario y sexo ingresado correctamente!`,
                        text: `Bienvenido ${usuario}!`,
                        icon: "success"
                      });
                      functionCorreo();
                }else {
                    Swal.fire({
                        icon: "error",
                        title: "Ingresaste mal tu nombre de usuario o tu sexo!",
                        text: "Vuelve a intentarlo!",
                        footer: '<a href="#">Reportar error</a>'
                      });
                    functionUsuario();
                }
            });
        };
        functionSexo();
    });
};

const functionCorreo = () => {
    mostrarPrompt(`Ingrese el correo electronico vinculado al usuario: ${usuario}`, "", (valor) => {
        correo = valor;
        correo.includes("@") && correo.includes(".com") ? Swal.fire({ title: `Tu dirección de correo electrónico se ha ingresado con éxito!`, text: `Todo correcto!`, icon: "success"}) && enviarCorreo() : 
        Swal.fire({icon: "error", title: "Dirección de correo electrónico incorrecta", text: "Vuelve a intentarlo!"}) && functionCorreo();
    });
};

const enviarCorreo = () => {
    mostrarPrompt(`Deseas que cuando haya algún descuento te enviemos un aviso al siguiente correo: ${correo} ?
    SI / NO`, "", (valor) => {
        enviar = valor.toLowerCase();
        if (enviar === "si") {
            Swal.fire({title: "Genial! A la brevedad enviaremos un correo con las ofertas y promociones!", text: "Mientras tanto, te invitamos a ver nuestros últimos modelos de macetas en nuestra página. ¡Gracias!", icon: "success"});
            functionAyuda();
        } else if (enviar === "no") {
            Swal.fire({title: "De todos modos, te invitamos a ver nuestro catálogo.", text: "¡Gracias!", icon: "info"})
            functionAyuda();
        } else {
            Swal.fire({title: "Respuesta incorrecta!", text: "Por favor, responde con SI o NO.", icon: "error"})
            enviarCorreo();
        }
    });
};

const functionAyuda = () => {
    mostrarPrompt("¿Necesitas ayuda con algo?   SI/NO", "", (valor) => {
        ayuda = valor.toLowerCase();
        if (ayuda === "si") {
            functionBuscar();
        } else if (ayuda === "no") {
            Swal.fire({title: "Gracias por visitar nuestra pagina!", text: "Te invitamos a ver nuestro hermoso catalogo!", icon: "info"})
        } else {
            Swal.fire({title: "Respuesta incorrecta!", text: "Vuelve a intentarlo!", icon: "error"})
            functionAyuda();
        }
    });
};

const functionBuscar = () => {
    mostrarPrompt("¿Con qué te podríamos ayudar? 1-BUSCAR MACETAS / 2-ERROR CON LA PÁGINA / 3-OTRO      SELECCIONE SOLO EL NÚMERO DE LA OPCIÓN", "", (valor) => {
        const opcion = valor.toLowerCase();
        if (opcion === "1") {
            const functionBuscarPorTipos = () => {
                mostrarPrompt("Buscar maceta por: 1- Id / 2- Tamaño / 3- Precio    SELECCIONA LA OPCIÓN POR EL NÚMERO", "", (tipos) => {
                    caracteristica = tipos.toLowerCase();
                    if (caracteristica === "1") {
                        buscarPorId();
                    } else if (caracteristica === "2") {
                        buscarPorTam();
                    } else if (caracteristica === "3") {
                        buscarPorPrecio();
                    } else {
                        Swal.fire({title: "No ingresaste el valor correctamente!", text: "Vuelve a intentarlo!", icon: "error"})
                        functionBuscarPorTipos();
                    }
                });
            };
            functionBuscarPorTipos();
        } else if (opcion === "2") {
            reportarError();
        } else if (opcion === "3") {
            opcionOtro();
        } else {
            Swal.fire({title: "No seleccionaste ninguna opcion!", text: "Vuelve a intentarlo!", icon: "error"})
            functionBuscar();
        }
    });
};

const opcionOtro = () => {
    mostrarPrompt("Selecciona el numero de la opcion: 1-Configuracion de usuario  /  2-Otro", "", (valor) => {
        opcionOtro2 = parseInt(valor);
        if (opcionOtro2 === 1) {
            mensajeAlert(`Tu usuario es: ${usuario}`, () => {
                mensajeAlert(`Tu genero es: ${sexo}`, () => {
                    mensajeAlert(`Tu correo es: ${correo}`, () => {
                        if (edad === "") {
                            mostrarPrompt("Ingrese su edad:", "", (valor2) => {
                                edad = valor2;
                                    mensajeAlert(`Tienes una edad de: ${edad}`, () => {
                                        mostrarPrompt("Ingrese su contraseña:", "", (valor3) => {
                                            clave = valor3;
                                            mensajeAlert(`La contraseña ingresada es: ${clave}`);
                                        });
                                    })
                            })
                        } else {
                            mensajeAlert(`Tu edad es: ${edad}`, () => {
                                mostrarPrompt("Ingresa tu contraseña:", "", (valor3) => {
                                    clave = valor3;
                                    mensajeAlert(`La contraseña ingresada es: ${clave}`);
                                });
                            });
                        }
                    });
                });
            });
        } else if (opcionOtro2 === 2) {
            Swal.fire({
                title: `Por favor, comunícate con nosotros desde tu correo electrónico ${correo} a nuestro correo ojalamacetas@gmail.com. ¡Gracias!`,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        } else {
            Swal.fire({title: "No ingresaste ninguna opcion!", text: "Vuelve a intentarlo!", icon: "error"})
            opcionOtro();
        }
    });
};

const buscarPorId = () => {
    mostrarPrompt("Ingresa el Id del producto que estas buscando. 1 / 2 / 3   SOLO INGRESE EL NUMERO", "", (valor) => {
        const buscarId = parseInt(valor);
        const resultado = productos.filter((item) => item.id === buscarId);
        if (resultado.length > 0) {
            resultado.forEach((item) => {
                mensajeAlert(`
                Id: ${item.id}
                Size: ${item.tamaño}
                Price: $${item.precio}
                `, functionBuscar);
            });
        } else {
            Swal.fire({title: "No ingresaste un ID valido!", text: "Intentalo nuevamente!", icon: "error"})
            buscarPorId();
        }
    });
};

const buscarPorPrecio = () => {
    mostrarPrompt("Ingrese hasta cuanto esta dispuesto gastar.  INGRESE SOLO NUMEROS", "", (valor) => {
        const buscarPrecio = parseInt(valor);
        let result = "";
        if (buscarPrecio >= 300) {
            const filteredProducts = productos.filter((item) => item.precio <= buscarPrecio);
            result = filteredProducts.map((item) => `
                Id: ${item.id}
                Size: ${item.tamaño}
                Price: $${item.precio}
            `).join("\n");
        } else {
            result = "No te alcanza para ninguna maceta!";
        }
        Swal.fire(result);
        functionBuscar();
    });
};

const buscarPorTam = () => {
    mostrarPrompt("Ingrese el tamaño que está buscando. 1- Chico / 2- Mediano / 3- Grande   SOLO INGRESE EL NUMERO DE LA OPCION", "", (valor) => {
        const buscarTamaño = parseInt(valor);
        let result = "";
        if (buscarTamaño === 1) {
            const filteredProducts = productos.filter((item) => item.tamaño.toLowerCase() === "chica");
            result = filteredProducts.map((item) => `
                Id: ${item.id}
                Size: ${item.tamaño}
                Price: $${item.precio}
            `).join("\n");
        } else if (buscarTamaño === 2) {
            const filteredProducts = productos.filter((item) => item.tamaño.toLowerCase() === "mediana");
            result = filteredProducts.map((item) => `
                Id: ${item.id}
                Size: ${item.tamaño}
                Price: $${item.precio}
            `).join("\n");
        } else if (buscarTamaño === 3) {
            const filteredProducts = productos.filter((item) => item.tamaño.toLowerCase() === "grande");
            result = filteredProducts.map((item) => `
                Id: ${item.id}
                Size: ${item.tamaño}
                Price: $${item.precio}
            `).join("\n");
        } else {
            result = "No hay productos disponibles para ese tamaño!";
        }
        Swal.fire(result);
        functionBuscar();
    });
};

const reportarError = () => {
    mostrarPrompt(`Te pedimos disculpas! Por aquí puedes enviarnos tu problema y a la brevedad lo estaremos solucionando. Nos pondremos en contacto contigo enviando un correo a ${correo}`, "", (valor) => {
        error = valor;
        Swal.fire("Gracias por reportar el problema! Lo resolveremos a la brevedad");
        functionAyuda();
    });
};

const productos = [
    { id: 1, tamaño: "chica", precio: 300 },
    { id: 2, tamaño: "mediana", precio: 400 },
    { id: 3, tamaño: "grande", precio: 450 }
];

const arregloUsuario = []
arregloUsuario.push(usuario);
arregloUsuario.push(sexo);
arregloUsuario.push(edad);
arregloUsuario.push(clave);
arregloUsuario.push(correo);

localStorage.setItem("arregloUsuario", JSON.stringify(arregloUsuario))



  
const mostrarEmoji = () => {
    fetch("https://emojihub.yurace.pro/api/random")
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({ title: "Hola nuevamente!", text: `Tu categoria es: ${data.category}`, icon: "info" });
      });
  };
  
  mostrarEmoji();
  
  
  

  functionUsuario();