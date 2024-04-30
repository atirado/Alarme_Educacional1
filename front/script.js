function startCountdown() {
  const timeInput = document.getElementById('timeInput').value;
  const model = document.getElementById('selectedModel').innerText;
  
  // Defina aqui o tempo limite em milissegundos
  const timeLimit = timeInput * 1000;

  // Inicia a contagem regressiva
  setTimeout(() => {
      // Bloqueia a orientação da tela para retrato (vertical)
      screen.orientation.lock('portrait');
      
      // Exibe a mensagem de tela bloqueada com o nome do modelo
      alert("A tela do smartphone " + model + " foi bloqueada.");
      
  }, timeLimit);
}

function showModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function connectSmartphone(model) {
  // Exibe a mensagem com o nome do modelo
  document.getElementById('selectedModel').innerText = model;
  alert("Conectando ao smartphone: " + model);
}
