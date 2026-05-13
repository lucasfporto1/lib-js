export const toggleTheme = () => {
  const htmlTag = document.documentElement;
  const currentTheme = htmlTag.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlTag.setAttribute("data-theme", newTheme);
  localStorage.setItem("app-theme", newTheme);
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem("app-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeToApply = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", themeToApply);
};
