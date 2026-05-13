export const applyInputMask = (event, formatterFunction) => {
  const input = event.target;
  // cursor precisa ser reposicionado ou pula pro final após formatar
  const cursorPosition = input.selectionStart;
  const previousLength = input.value.length;
  input.value = formatterFunction(input.value);
  const currentLength = input.value.length;
  input.setSelectionRange(
    cursorPosition + (currentLength - previousLength),
    cursorPosition + (currentLength - previousLength),
  );
};

export const maskPhone = (value) => {
  if (!value) return "";
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2")
    .substring(0, 15);
};

export const setRequired = (input, isRequired) => {
  if (!input) return;
  input.required = isRequired;
  const wrapper = input.closest(".div-input");
  const label = wrapper?.querySelector("label");
  if (label) {
    if (isRequired) {
      label.dataset.required = "true";
    } else {
      delete label.dataset.required;
      input.setCustomValidity("");
    }
  }
};

export const setRequiredMultiple = (fields) => {
  fields.forEach(({ input, required }) => setRequired(input, required));
};

export const initPasswordToggle = () => {
  document.querySelectorAll(".ml-input-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = icon.previousElementSibling;
      if (input && (input.type === "password" || input.type === "text")) {
        if (input.type === "password") {
          input.type = "text";
          icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
          input.type = "password";
          icon.classList.replace("fa-eye-slash", "fa-eye");
        }
      } else {
        console.warn(
          "MyLib.initPasswordToggle: elemento anterior ao ícone inválido.",
          input,
        );
      }
    });
  });
};
