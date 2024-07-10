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

document.addEventListener("DOMContentLoaded", () => {
  const umbrellaImage = document.getElementById("umbrella-image");
  const uploadButton = document.getElementById("upload-button");
  const container = document.querySelector(".container");
  const colorButtons = document.querySelectorAll(".color-button");
  const fileUploader = document.getElementById("file-upload-input");

  function changeImage(element) {
    const color = colors[element.id];
    if (color) {
      localStorage.setItem("currentColor", element.id);
      container.style.backgroundColor = color.bg;
      uploadButton.style.backgroundColor = color.button;
      umbrellaImage.src = color.img;
      colorButtons.forEach((button) =>
        button.classList.remove(`${button.id}-active`)
      );
      element.classList.add(`${element.id}-active`);
    }
  }

  colorButtons.forEach((button) => {
    button.addEventListener("click", () => changeImage(button));
  });

  function setDefaultFocus() {
    const firstButton = document.querySelectorAll(".color-button")[0];
    if (firstButton) {
      firstButton.click();
      firstButton.focus();
    }
  }

  fileUploader.addEventListener("change", (event) => {
    console.log(event, "--------------event");
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit.");
        this.value = "";
        return;
      }
      if (!file.type.includes("png" || "jpg")) {
        alert("Only .png and .jpg files are allowed");
        this.value = "";
        return;
      }
      document.getElementById("upload-text").textContent = file.name;
    }
  });

  setDefaultFocus();
});
