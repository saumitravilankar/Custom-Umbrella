document.addEventListener("DOMContentLoaded", () => {
  const umbrellaImage = document.getElementById("umbrella-image");
  const uploadButton = document.getElementById("upload-button");
  const container = document.querySelector(".container");

  const colors = {
    pink: {
      bg: "#ffebee",
      button: "#D8328B",
      img: "/public/Pink umbrella.png",
    },
    blue: {
      bg: "#E6F6FC",
      button: "#30B3E5",
      img: "/public/Blue umbrella.png",
    },
    yellow: {
      bg: "#fff3cf",
      button: "#FED146",
      img: "/public/Yello umbrella.png",
    },
  };

  document.querySelectorAll(".color-button").forEach((button) => {
    button.addEventListener("click", () => changeImage(button));
  });

  function changeImage(element) {
    const color = colors[element.id];
    if (color) {
      container.style.backgroundColor = color.bg;
      uploadButton.style.backgroundColor = color.button;
      umbrellaImage.src = color.img;
    }
  }

  function setDefaultFocus() {
    const pinkButton = document.getElementById("pink");
    if (pinkButton) {
      pinkButton.click();
      pinkButton.focus();
    }
  }

  setDefaultFocus();
});
