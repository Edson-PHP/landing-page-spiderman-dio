document.addEventListener("DOMContentLoaded", () => {
  const loadingElement = document.querySelector(".loading");

  const hideLoading = () => {
    loadingElement.style.transition = "opacity 0.5s ease-out"; 
    loadingElement.style.opacity = 0;
    
    setTimeout(() => {
      loadingElement.style.display = "none"; 
    }, 500); 
  };

  setTimeout(hideLoading, 2000);
});
