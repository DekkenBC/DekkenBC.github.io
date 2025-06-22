const taskList = document.getElementById("taskList");
let editando = true;

document.getElementById("addTaskBtn").addEventListener("click", () => {
    const task = document.getElementById("taskInput").value.trim();
    if (!task) return;

    const newtask = document.createElement("li");
    newtask.textContent = task;

    const completar = document.createElement("button");
    completar.innerHTML = '<i class="fa-solid fa-check"></i>';
    completar.className = "completar";
    const eliminar = document.createElement("button");
    eliminar.innerHTML = '<i class="fa-solid fa-times"></i>';
    eliminar.className = "eliminar";
    const editar = document.createElement("button");
    editar.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editar.className = "editar";

    newtask.appendChild(completar);
    newtask.appendChild(eliminar);
    newtask.appendChild(editar);

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
  if (event.target.classList.contains("editar")) {
    if (editando) {
      const newedit = document.createElement("div");
      newedit.className = "newtask";

      const newtasktext = document.createElement("input");
      newtasktext.type = "text";
      newtasktext.maxLength = 20;
      newtasktext.placeholder = "Escribe la nueva tarea";
      newtasktext.id = "newtextinput";
      const newtaskconfirm = document.createElement("button");
      newtaskconfirm.innerHTML = '<i class="fa-solid fa-check"></i>';
      newtaskconfirm.className = "confirmar";
      const newtaskcancel = document.createElement("button");
      newtaskcancel.innerHTML = '<i class="fa-solid fa-times"></i>';
      newtaskcancel.className = "cancelar";
    
      newedit.appendChild(newtasktext);
      newedit.appendChild(newtaskconfirm);
      newedit.appendChild(newtaskcancel);
    
      const task = event.target.parentElement;
      task.insertAdjacentElement("afterend", newedit); 
      editando = false;
    }
    
  }

  if (event.target.classList.contains("cancelar")) {
    const edit = event.target.parentElement; 
    edit.remove();  
    editando = true;
  }
  if (event.target.classList.contains("confirmar")) {
    const editDiv = event.target.closest(".newtask");
    newtext = document.getElementById("newtextinput").value;
    if (newtext) {
        const originalLi = editDiv.previousElementSibling;
        originalLi.firstChild.textContent = newtext;
        editDiv.remove();
        editando = true;
    }
  }
});

