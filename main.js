let usuario = "";
let sexo = "";
let correo = "";
let enviar = "";
let ayuda = "";
let buscar = "";

function eliminar() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
}

function botonSiguiente(callback) {
    let boton = document.createElement("button");
    boton.innerHTML = "Next";
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
    document.body.append(parrafo);
    botonSiguiente(callback);
}

const mostrarPrompt = (mensajePrompt, valorPrompt, promptCallback) => {
    let contenedorPrompt = document.createElement("div");
    let label = document.createElement("label");
    label.textContent = mensajePrompt;
    let input = document.createElement("input");
    input.type = "text";
    input.value = valorPrompt;
    let botonAceptar = document.createElement("button");
    botonAceptar.textContent = "Accept";
    let botonCancelar = document.createElement("button");
    botonCancelar.textContent = "Cancel";
    contenedorPrompt.append(label, input, botonAceptar, botonCancelar);
    document.body.append(contenedorPrompt);

    const cerrarPrompt = (valor) => {
        document.body.removeChild(contenedorPrompt);
        if (typeof promptCallback === "function") {
            promptCallback(valor);
        }
    };

    botonAceptar.addEventListener("click", () => {
        cerrarPrompt(input.value);
    });

    botonCancelar.addEventListener("click", () => {
        cerrarPrompt(null);
    });
};

const functionUsuario = () => {
    mostrarPrompt("Enter your username:", "", (valor) => {
        usuario = valor;
        const functionSexo = () => {
            mostrarPrompt("Enter your gender: M/F", "", (valor) => {
                sexo = valor.toLowerCase();
                if (usuario !== "" && (sexo === "m" || sexo === "f")) {
                    mensajeAlert(`Welcome ${usuario}!`, functionCorreo);
                } else {
                    mensajeAlert("You entered an incorrect username or gender. Please try again!", functionUsuario);
                }
            });
        };
        functionSexo();
    });
};

const functionCorreo = () => {
    mostrarPrompt(`Enter the email address associated with the username: ${usuario}`, "", (valor) => {
        correo = valor;
        if (correo.includes("@") && correo.includes(".com")) {
            mensajeAlert("Your email address has been successfully entered!", enviarCorreo);
        } else {
            mensajeAlert("Incorrect email address, please try again!", functionCorreo);
        }
    });
};

const enviarCorreo = () => {
    mostrarPrompt(`Do you want to receive discount alerts to the following email: ${correo}? YES / NO`, "", (valor) => {
        enviar = valor.toLowerCase();
        if (enviar === "yes") {
            mensajeAlert("Great! We will send you an email with offers and promotions soon. In the meantime, feel free to browse our latest collection of pots on our website. Thank you!", functionAyuda);
        } else if (enviar === "no") {
            mensajeAlert("Nevertheless, we invite you to explore our catalog. Thank you!", functionAyuda);
        } else {
            mensajeAlert("Incorrect response. Please respond with 'YES' or 'NO'.", enviarCorreo);
        }
    });
};

const functionAyuda = () => {
    mostrarPrompt("Do you need assistance with anything? YES/NO", "", (valor) => {
        ayuda = valor.toLowerCase();
        if (ayuda === "yes") {
            functionBuscar();
        } else if (ayuda === "no") {
            mensajeAlert("Thank you for visiting our page! We invite you to explore our beautiful catalog.");
        } else {
            mensajeAlert("Incorrect response! Please try again!", functionAyuda);
        }
    });
};

const functionBuscar = () => {
    mostrarPrompt("How can we assist you? 1-SEARCH POTS / 2-PAGE ERROR / 3-OTHER   SELECT ONLY THE OPTION NUMBER", "", (valor) => {
        const opcion = valor.toLowerCase();
        if (opcion === "1") {
            buscarPorId();
        } else if (opcion === "2") {
            reportarError();
        } else if (opcion === "3") {
            mensajeAlert(`Please contact us from your email address ${correo} to our email ojalamacetas@gmail.com. Thank you!`);
        } else {
            mensajeAlert("You did not select any option. Please try again.", functionBuscar);
        }
    });
};

const buscarPorId = () => {
    mostrarPrompt("Enter the Id of the product you are looking for. 1 / 2 / 3   ENTER ONLY THE NUMBER", "", (valor) => {
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
            mensajeAlert("You did not select a valid Id. Please try again.", buscarPorId);
        }
    });
};

const reportarError = () => {
    mostrarPrompt(`We apologize for the inconvenience! You can report your problem here, and we will resolve it as soon as possible. We will contact you by sending an email to ${correo}`, "", (valor) => {
        const error = valor;
        // Process the error report
        mensajeAlert("Thank you for reporting the issue. We will resolve it as soon as possible.", functionAyuda);
    });
};

const productos = [
    { id: 1, tamaño: "small", precio: 300 },
    { id: 2, tamaño: "medium", precio: 400 },
    { id: 3, tamaño: "large", precio: 450 }
];

functionUsuario();