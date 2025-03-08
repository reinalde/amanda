let installPromptEvent;

window.addEventListener("beforeinstallprompt", (event) => {
  // Previne o comportamento padrão
  event.preventDefault();
  
  // Guarda o evento para ser usado depois
  installPromptEvent = event;

  // Exibe um botão ou banner de instalação
  document.getElementById("install-button").style.display = "block";
});

// Quando o usuário clica no botão de instalação
document.getElementById("install-button").addEventListener("click", () => {
  if (installPromptEvent) {
    installPromptEvent.prompt(); // Exibe o prompt padrão do navegador

    installPromptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        // alert("Usuário aceitou instalar!");
      } else {
        // alert("Usuário recusou a instalação.");
      }
      installPromptEvent = null; // Resetar o evento
    });
  }
});
