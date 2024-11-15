const controllerBtns = document.querySelectorAll(".s-controller__button");

controllerBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {

    controllerBtns.forEach((e) => {
      e.classList.remove("s-controller__button--active");
    });
 
    event.target.classList.add("s-controller__button--active");

    const selectedItem = event.target.id;

    const carousel = document.querySelector(".s-cards-carousel");
    const transform = carousel.style.transform;

    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);

    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

  });
});
