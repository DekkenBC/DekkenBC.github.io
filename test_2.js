let operacion = "";
const calculator = document.getElementById("buttons");

calculator.addEventListener("click", (event) => {
    if(event.target.classList.contains("op")) {
        const add = event.target.innerText;
        operacion = operacion + add;
        document.getElementById("display").value = operacion;
    }
    if(event.target.classList.contains("eq")) {
        if(operacion) {
            document.getElementById("display").value = eval(operacion);
        }
    }
    if(event.target.classList.contains("cl")) {
        operacion = "";
        document.getElementById("display").value = "";
    }
});