export const formatCurrency = (value, locale = "pt-BR", currency = "BRL") => {
  if (value === undefined || value === null || value === "") return "";
  const num =
    typeof value === "string" ? parseFloat(value.replace(",", ".")) : value;
  if (isNaN(num)) return "";
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    num,
  );
};

export const maskSensitiveData = (str, visibleStart = 1, visibleEnd = 1) => {
  if (!str || typeof str !== "string") return "";
  if (str.length <= visibleStart + visibleEnd) return str;
  const start = str.slice(0, visibleStart);
  const end = str.slice(-visibleEnd);
  const masked = "*".repeat(str.length - visibleStart - visibleEnd);
  return `${start}${masked}${end}`;
};
