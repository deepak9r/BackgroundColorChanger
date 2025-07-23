console.log("Hello")
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const color = box.getAttribute('data-color');
    document.body.style.backgroundColor = color;
  });
});