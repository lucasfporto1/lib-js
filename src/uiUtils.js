export const initAutoResize = (textarea) => {
  if (!textarea || textarea.tagName !== "TEXTAREA") return;
  const resize = () => {
    // reseta pra auto antes de medir, senão não encolhe
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  textarea.addEventListener("input", resize);
  resize();
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(
      `MyLib.scrollToElement: elemento com ID '${elementId}' não encontrado.`,
    );
  }
};

export const filterList = (
  listElement,
  searchTerm,
  itemSelector = ".list-item",
) => {
  if (!listElement) {
    console.warn("MyLib.filterList: elemento de lista não fornecido.");
    return;
  }
  const items = listElement.querySelectorAll(itemSelector);
  const term = searchTerm.toLowerCase().trim();
  items.forEach((item) => {
    // display "" respeita o valor original do elemento, "block" não
    item.style.display = item.textContent.toLowerCase().includes(term)
      ? ""
      : "none";
  });
};

export const sortTable = (table, columnIndex, isAscending = true) => {
  if (!table || !(table instanceof HTMLTableElement)) {
    console.warn("MyLib.sortTable: elemento de tabela inválido.", table);
    return;
  }
  const tbody = table.querySelector("tbody");
  if (!tbody) {
    console.warn("MyLib.sortTable: tabela não possui tbody.");
    return;
  }
  const rows = Array.from(tbody.querySelectorAll("tr"));
  rows.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex]?.textContent || "";
    const cellB = rowB.children[columnIndex]?.textContent || "";
    const valA = parseFloat(cellA.replace(",", "."));
    const valB = parseFloat(cellB.replace(",", "."));
    if (!isNaN(valA) && !isNaN(valB)) {
      return isAscending ? valA - valB : valB - valA;
    }
    return isAscending
      ? cellA.localeCompare(cellB)
      : cellB.localeCompare(cellA);
  });
  rows.forEach((row) => tbody.appendChild(row));
};
