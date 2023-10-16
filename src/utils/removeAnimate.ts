function removeAnimate(element: HTMLElement) {
  element.style.transform = "translateX(-200%)";
  element.style.margin = "0";
  element.style.opacity = "0";
  element.style.height = "0";
  element.style.padding = "0";
  setTimeout(() => {
    element.remove();
  }, 300);
}

export default removeAnimate;
