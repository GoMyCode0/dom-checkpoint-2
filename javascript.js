document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
  
    //*this is the color square
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  //*this is for the button
    changeColorBtn.addEventListener("click", () => {
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
    });
  });
  