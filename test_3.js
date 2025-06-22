let tiempo = 0;
let minutos = 0;
let segundos = 0;
let time = null;

const controls = document.getElementById("controls");
const display = document.getElementById("display");

controls.addEventListener("click", (event) => {
    if (event.target.id == "startBtn") {
        if (!time) {
            time = setInterval(() => {
                tiempo = tiempo + 1;

                minutos = Math.floor(tiempo / 60);
                segundos = tiempo % 60;

                display.textContent = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
            }, 1000);
        }
    }
    if (event.target.id == "pauseBtn") {
        clearInterval(time);
        time = null; 
    }
    if (event.target.id == "resetBtn") {
        clearInterval(time);
        time = null; 
        tiempo = 0;
        display.textContent = "00:00";
    }
});