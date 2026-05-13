export const initClickOutsideObserver = () => {
  document.addEventListener("click", (event) => {
    const elements = document.querySelectorAll("[data-click-outside]");
    elements.forEach((element) => {
      if (!element.contains(event.target)) {
        const customEvent = new CustomEvent("clickOutside", {
          bubbles: false,
          detail: { originalEvent: event },
        });
        element.dispatchEvent(customEvent);
      }
    });
  });
};
