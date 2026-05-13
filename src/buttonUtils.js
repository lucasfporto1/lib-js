const buttonKeywords = {
  cadastrar: "ml-button--success",
  registrar: "ml-button--success",
  criar: "ml-button--success",
  enviar: "ml-button--primary",
  salvar: "ml-button--primary",
  confirmar: "ml-button--primary",
  cancelar: "ml-button--neutral",
  voltar: "ml-button--neutral",
  excluir: "ml-button--danger",
  deletar: "ml-button--danger",
  remover: "ml-button--danger",
};

export const applyButtonStyle = (button) => {
  if (!button) return;
  const text = button.textContent.toLowerCase().trim();
  const match = Object.keys(buttonKeywords).find((key) => text.includes(key));
  if (!match) return;

  button.classList.add(buttonKeywords[match]);
};

// Versão para aplicar em todos os botões da página de uma vez
export const applyButtonStyleAll = () => {
  document.querySelectorAll(".ml-button").forEach(applyButtonStyle);
};
