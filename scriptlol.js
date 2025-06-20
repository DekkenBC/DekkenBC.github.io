document.getElementById("crearBtn").addEventListener("click", () => {
  const textoSuperior = document.getElementById("inputSuperior").value.trim();
  const textoInferior = document.getElementById("inputInferior").value.trim();

  // Solo continuar si ambos inputs tienen texto
  if (!textoSuperior || !textoInferior) return;

  const rect = document.createElement("div");
  rect.className = "rectangulo";

  const parteSuperior = document.createElement("div");
  parteSuperior.className = "texto-superior";
  parteSuperior.textContent = textoSuperior;

  const parteInferior = document.createElement("div");
  parteInferior.className = "texto-inferior";
  parteInferior.textContent = textoInferior;

  rect.appendChild(parteSuperior);
  rect.appendChild(parteInferior);

  document.getElementById("contenedorRectangulos").appendChild(rect);

  // Limpiar inputs
  document.getElementById("inputSuperior").value = "";
  document.getElementById("inputInferior").value = "";
});