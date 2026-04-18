console.log("Mira lo que se trae desde la terminal: ",process.argv);
const operacion = process.argv[2]
const valor1 = process.argv[3]
const valor2 = process.argv[4]

if(operacion === "sumar"){
    console.log("Resultado de la suma:", eval(`${valor1} + ${valor2}`));
    
}
if (operacion === "restar") {
    console.log("Resultado de la resta:", eval(`${valor1} - ${valor2}`) );
}