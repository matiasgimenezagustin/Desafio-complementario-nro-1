/* Algoritmo que permite comprar produtos en un ciclo for que elije el usuario, simulando un E-commerce*/

let nombreUsuario = prompt("Ingrese su nombre");

//Productos

let termo;
let mate;

//Tipos de productos

let termoModelA = "Termo de plastico";
let termoModelB = "Termo Metalico";


let mateModelA = "Mate de plastico";
let mateModelB = "Mate Metalico";


//Stock de productos

let termoModelAStock = 7;
let termoModelBStock = 10;

let mateModelAStock = 5;
let mateModelBStock = 15;

//Precios de productos

let mateModelAPrice = 1000;
let mateModelBPrice = 3000;

let termoModelAPrice = 2000;
let termoModelBPrice = 4000;

//Cantidad seleccionada

let amountSelectMateModelA;
let amountSelectMateModelB;
let amountSelectTermoModelA;
let amountSelectTermoModelB;

let finalPrice;
let carrito;

alert("Bienvenido/a " + nombreUsuario + "\nLista de productos: \n Termos: \n-" + termoModelA + " " + termoModelAPrice + "$" +"\n-" + termoModelB + " " + termoModelBPrice + "$" + "\n Mates" + "\n-" + mateModelA + " " + mateModelAPrice + "$" + "\n-" + mateModelB + " " + mateModelBPrice + "$")

let numeroDeCompras = parseInt(prompt("Ingrese la cantidad de productos distintos que comprara"))

for (let i = 0; i < numeroDeCompras; i++){
    if (numeroDeCompras > 4){
        alert("No tenemos mas de 4 productos")
        break
    }
    let productSelect = prompt("Elija que producto va a comprar entre \n Termos \n Mates")
    if ((productSelect == "Mate") || (productSelect == "mate") || (productSelect == "Mates") || (productSelect == "mates")){
        let mateModelSelect = prompt("Ingrese que tipo de mate quiere entre:\n-Plastico\n-Metalico")
        if ((mateModelSelect == "plastico") || (mateModelSelect == "Plastico")){
            amountSelectMateModelA = parseInt(prompt("Ingrese la cantidad de " + mateModelA + " quiere comprar:"));
            if ((amountSelectMateModelA < mateModelAStock) && (amountSelectMateModelA != 0)){
                finalPrice = amountSelectMateModelA * mateModelAPrice;
                mateModelAStock -= amountSelectMateModelA;
                carrito = mateModelA + " x " + amountSelectMateModelA + " = " + finalPrice + "$" + "\n";
                alert(carrito);
                console.log("Quedan " + mateModelAStock + " " + mateModelA + " en stock");
            }else if (amountSelectMateModelA > mateModelAStock){
                alert("Error: No hay suficiente stock de ese producto")
            }
        }else if ((mateModelSelect == "metalico") || (mateModelSelect == "Metalico")){
            amountSelectMateModelB = parseInt(prompt("Ingrese la cantidad de " + mateModelB + " quiere comprar:"));
            if((amountSelectMateModelB < mateModelBStock) && (amountSelectMateModelB != 0)){
                finalPrice = amountSelectMateModelB * mateModelBPrice;
                mateModelBStock -= amountSelectMateModelB;
                carrito = mateModelB + " x " + amountSelectMateModelB + " = " + finalPrice + "$" + "\n";
                alert(carrito);
                console.log("Quedan " + mateModelBStock + " " + mateModelB + " en stock");
            }else if (amountSelectMateModelB > mateModelBStock){
                alert("Error: No hay suficiente stock de ese producto")
            }
        }else{
            alert("error: Producto no seleccionado")
        }
    }else if ((productSelect == "termo") || (productSelect == "Termo") || (productSelect == "termos") || (productSelect == "Termos")){
        let termoModelSelect = prompt("Ingrese que tipo de termo quiere entre: \n-Plastico\n-Metalico");
        if ((termoModelSelect == "plastico") || (termoModelSelect == "Plastico")){
            amountSelectTermoModelA = parseInt(prompt("Ingrese la cantidad de " + termoModelA + " que quiere comprar:"));
            if ((amountSelectTermoModelA < termoModelAStock) && (amountSelectTermoModelA !=0)){
                finalPrice = amountSelectTermoModelA * termoModelAPrice;
                termoModelAStock -= amountSelectTermoModelA;
                carrito = termoModelA + " x " + amountSelectTermoModelA + " = " + finalPrice + "$";
                alert(carrito);
                console.log("Quedan " + termoModelAStock + " " + termoModelA + " en stock");
            }else if (amountSelectTermoModelA > termoModelAStock){
                alert("Error: No hay suficiente stock de ese producto")
            }
        }else if ((termoModelSelect == "metalico") || (termoModelSelect == "Metalico")){
            amountSelectTermoModelB = parseInt(prompt("Ingrese la cantidad de " + termoModelB + " que queire comprar:"));
            if ((amountSelectTermoModelB < termoModelBStock) && (amountSelectTermoModelB != 0)){
                finalPrice = amountSelectTermoModelB * termoModelBPrice;
                termoModelBStock -= amountSelectTermoModelB;
                carrito = termoModelB + " x " + amountSelectTermoModelB + " = " + finalPrice + "$";
                alert(carrito);
                console.log("Quedan " + termoModelBStock + " " + termoModelB + " en stock")
            }else if (amountSelectTermoModelB > termoModelBStock){
                alert("Error: No hay suficiente stock de ese producto")
            }
        }else{
            alert("error: Producto no seleccionado")
        }
    }
}
alert("Gracias por su compra")