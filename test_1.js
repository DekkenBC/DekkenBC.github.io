const taskList = document.getElementById("taskList");

document.getElementById("addTaskBtn").addEventListener("click", () => {
    const task = document.getElementById("taskInput").value.trim();
    if (!task) return;

    const newtask = document.createElement("li");
    newtask.textContent = task;

    const completar = document.createElement("button");
    completar.textContent = "T";
    completar.className = "completar";
    const eliminar = document.createElement("button");
    eliminar.textContent = "X";
    eliminar.className = "eliminar";

    newtask.appendChild(completar);
    newtask.appendChild(eliminar);

    document.getElementById("taskList").appendChild(newtask);
    document.getElementById("taskInput").value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("completar")) {
    const li = event.target.parentElement; 
    li.classList.toggle("completed");
  }
  if (event.target.classList.contains("eliminar")) {
    const li = event.target.parentElement; 
    li.remove();      
  }
});