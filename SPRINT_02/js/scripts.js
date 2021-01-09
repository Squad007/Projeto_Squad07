//Função para evitar o reenvio da msg ao atualizar a pagina
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}