const handleMouseEnter = (event) => {
  event.currentTarget.classList.add("s-card--hovered");
  document.body.id = `${event.currentTarget.id}`;
}

const handleMouseLeave = (event) => {
  event.currentTarget.classList.remove("s-card--hovered");
  document.body.id = ""; 
}

const addEventListenersToCards = () => {
  const cardElements = document.querySelectorAll(".s-card");

  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i];
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

