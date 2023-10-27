const resultadosAlmacenados = [];

function calcularResultado() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operation").value;

    let resultado;

    switch (operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "No se puede dividir por cero";
            }
            break;
        case "porcentaje":
            resultado = (num1 * num2) / 100;
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
    resultadosAlmacenados.push(`Operación: ${num1} ${operacion} ${num2} = ${resultado}`);
    actualizarResultadosAlmacenados();
}

function convertirUnidad() {
    const valor = parseFloat(document.getElementById("valor").value);
    const conversion = document.getElementById("conversion").value;

    let resultado;

    switch (conversion) {
        case "kmToMiles":
            resultado = valor * 0.621371;
            break;
        case "mToYard":
            resultado = valor * 1.09361;
            break;
        case "cmToInches":
            resultado = valor * 0.393701;
            break;
        case "kmhToKnots":
            resultado = valor * 0.539957;
            break;
        default:
            resultado = "Conversión no válida";
            break;
    }

    document.getElementById("conversion-result").textContent = `Resultado: ${resultado}`;
    resultadosAlmacenados.push(`Conversión: ${valor} ${conversion} = ${resultado}`);
    actualizarResultadosAlmacenados();
}

function actualizarResultadosAlmacenados() {
    const resultadosList = document.getElementById("resultados-almacenados");
    resultadosList.innerHTML = "";
    resultadosAlmacenados.forEach(resultado => {
        const listItem = document.createElement("li");
        listItem.textContent = resultado;
        resultadosList.appendChild(listItem);
    });
}