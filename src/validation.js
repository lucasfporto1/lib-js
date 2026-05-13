export const isStrongPassword = (password) => {
  if (!password || typeof password !== "string") return false;
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  return (
    hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
  );
};

export const isValidCPF = (cpf) => {
  if (!cpf || typeof cpf !== "string") return false;
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) return false;
  // CPFs com todos os dígitos iguais passam na soma mas são inválidos
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;
  for (let i = 1; i <= 9; i++)
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};

export const isValidCNPJ = (cnpj) => {
  if (!cnpj || typeof cnpj !== "string") return false;
  cnpj = cnpj.replace(/\D/g, "");
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  const validate = (str, weightStart) => {
    let sum = 0;
    let pos = weightStart;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str.charAt(i)) * pos--;
      if (pos < 2) pos = 9;
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Valida o primeiro dígito (peso começa em 5 para os primeiros 12 números)
  const firstDigit = validate(cnpj.substring(0, 12), 5);
  if (firstDigit !== parseInt(cnpj.charAt(12))) return false;

  // Valida o segundo dígito (peso começa em 6 para os primeiros 13 números)
  const secondDigit = validate(cnpj.substring(0, 13), 6);
  if (secondDigit !== parseInt(cnpj.charAt(13))) return false;

  return true;
};
