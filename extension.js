// Carlos Perez

// Variables
let UserName = "Carlos Perez";  // String
const Cedula = 1754553202;      // Int
let User = "Neeko";             // String
const Mail = "carlos.perez02@epn.edu.ec";    // String


// Datos Compuestos

let dataUser = {user: "Carlos", estado: true};      //  Objeto
let UserDataFull = ["Carlos Perez",  20, false];    // Array
let Grafica = "KAER RX580 8GB";                     // String
let Price = "99.98";                                // String
let cantidad = 2;                                   // Int


// Propiedades
console.log(Mail.toLocaleUpperCase());

// Template
console.log(`La grafica ${Grafica} tiene un precio de ${Price}: -- ${cantidad} disponibles.`);

//  Cast
let Impuesto = 0.20;
console.log(`El total de la compra de una grafica es de: ${+Price+(+Price*Impuesto)}`);

// Operador Ternario

console.log(User ? "Usuario Activo"  :  "Usuario Inactivo");

// Comparacion

let descuento = "59863";
descuento  === "59863" ?  console.log("Descuento aplicado")  : console.log("Cupon no valido");

// Loops

const articulosDisponibles = ["Ryzen", "Intel", "El Gato", "Corsair"];
articulosDisponibles.forEach ((articulosDisponibles) => console.log(articulosDisponibles));

//  Funciones

(function () {
    console.log("Funcion Anonima");         // Funcion Anonima
})

();

function getObjects() {                     // Funcion Declarada
    console.log("Tienda de Articulos");
    
}

getObjects();                               

const Tarjeta = function () {               // Funcion Expresada
    console.log("Tarjeta Rechazada");
}

Tarjeta ();

const descuentoAplicado = () =>{ console.log("Descuento aplicado")}     // Funcion Flecha
descuentoAplicado()

const Validacion = function  (mail, user) {
    console.log(`Bienvenido ${mail} User:  ${user} activo ahora`);
}

Validacion(Mail, User);


// Retornos

function Information () {
    return {
        user: "Neeko",
        id: "0000",
        Status: "Active"
    }
}

console.log(Information());

// Objeto

const RX580  = {
    id: 2412,
    marca:  "KAER",
    price: 99.98
}

console.log(`El valor de la grafica es de:  ${RX580.price}`);

// Destructuracion

const {id, marca, price} = RX580;
console.log(marca);

// Spread

const productValidation = {
    name: "RX580", price: 99.98
}

const SendData = {...RX580, ...productValidation}
console.log(SendData);





