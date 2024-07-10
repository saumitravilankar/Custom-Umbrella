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
  const logoBoxImg = document.getElementById("logo-print");
  const uploadIconBox = document.querySelector(".upload-icon-box");

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

  fileUploader.addEventListener("change", async (event) => {
    uploadIconBox.innerHTML = `<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 28.3 31.2" width="28.3" height="31.2" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M25.1 23.6c-.3.1-.6.2-1 .2-.6.1-1.3 0-2.1.1s-1.7.3-2.6.8c-.8.5-1.4 1.1-1.9 1.6-.7.9-1.1 1.7-1.5 2.2-.2.3-.4.4-.7.6-.2.1-.4.2-.8.2v-13L26 22.9c-.3.3-.6.5-.9.7m-11.3 5.9c-.5-.1-.8-.2-1-.4-.2-.2-.5-.4-.7-.7-.3-.5-.7-1.1-1.2-1.7-.5-.7-1.1-1.3-2.1-1.9-.8-.5-1.6-.7-2.3-.8-1.1-.2-2-.1-2.7-.2l-.9-.3c-.2-.1-.4-.3-.6-.6l11.4-6.6v13.2zM1.7 21.3c0-.3.1-.6.2-1 .2-.5.6-1.1.9-1.9.3-.8.6-1.7.6-2.8v-.1c0-1.5-.6-2.6-1-3.5l-.6-1.2c-.1-.4-.2-.7-.2-1 0-.3.1-.6.2-1l11.4 6.6-11.3 6.8c-.1-.4-.2-.7-.2-.9M3.2 7.6c.3-.1.6-.2 1-.2.6-.1 1.3 0 2.1-.1.7-.2 1.6-.4 2.5-.9.8-.5 1.4-1.1 1.9-1.6.7-.9 1.1-1.7 1.5-2.2.2-.3.4-.4.7-.6.2-.1.5-.2.8-.2V15L2.3 8.3c.3-.4.6-.6.9-.7m11.3-5.9c.5 0 .8.2 1 .4.2.2.5.4.7.7.3.5.7 1.1 1.2 1.7.5.7 1.1 1.3 2.1 1.9.8.5 1.6.7 2.4.8 1.1.1 2 .1 2.7.2l.9.3c.2.1.4.3.6.6l-11.4 6.6V1.7zm12.1 8.2c0 .3-.1.6-.2 1-.2.5-.6 1.1-.9 1.9-.3.8-.6 1.7-.6 2.8v.2c0 1.5.5 2.6 1 3.5l.6 1.2c.1.4.2.7.2 1 0 .3-.1.6-.2.9l-11.4-6.6L26.3 9c.2.4.3.7.3.9m.4 7.8c-.3-.6-.5-1.3-.5-2v-.1c0-1 .4-1.8.8-2.7.2-.4.5-.8.6-1.3.2-.5.3-1 .3-1.6 0-.7-.2-1.4-.6-2.1-.5-.8-1.1-1.4-1.8-1.7-.5-.2-1-.3-1.5-.4-.7-.1-1.4-.1-2.1-.1-.7-.1-1.3-.2-1.9-.6-.6-.3-1-.7-1.4-1.2-.5-.9-.9-1.7-1.6-2.5-.3-.4-.7-.8-1.3-1-.5-.3-1.1-.4-1.9-.4-1 0-1.8.2-2.4.7-.5.3-.8.7-1.1 1.1-.4.6-.7 1.2-1.1 1.7-.4.5-.8 1-1.5 1.4-.6.4-1.2.5-1.8.6-.9.1-1.8 0-2.8.2-.5.1-1 .3-1.5.7-.5.3-.9.8-1.3 1.4C.2 8.5 0 9.3 0 10c0 .6.1 1.1.3 1.6.3.7.7 1.3 1 2 .3.6.5 1.3.5 2.1v.1c0 1.1-.4 1.8-.8 2.7-.2.4-.5.8-.6 1.3-.2.5-.3 1-.3 1.6 0 .7.2 1.4.6 2.1.5.8 1.1 1.4 1.8 1.7.5.2 1 .3 1.5.4.7.1 1.4.1 2.1.1.7.1 1.3.2 2 .6.6.3 1 .7 1.4 1.2.5.7.9 1.5 1.6 2.3.3.4.7.7 1.3 1 .5.3 1.2.4 1.9.4 1 0 1.8-.3 2.4-.7.5-.3.8-.7 1.1-1.1.4-.6.8-1.2 1.2-1.7.4-.5.8-1 1.5-1.4.6-.3 1.1-.5 1.7-.6.9-.1 1.8 0 2.8-.2.5-.1 1-.3 1.5-.6s.9-.8 1.3-1.4c.4-.7.6-1.5.6-2.1 0-.6-.1-1.1-.3-1.6-.5-.9-.8-1.5-1.1-2.1"></path></svg>`;
    uploadIconBox.classList.add("rotate");

    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit.");
        this.value = "";
        return;
      }
      if (
        !file.type.includes("png") &&
        !file.type.includes("jpg") &&
        !file.type.includes("jpeg")
      ) {
        alert("Only .png, .jpg, and .jpeg files are allowed");
        this.value = "";
        return;
      }

      document.getElementById("upload-text").textContent = file.name;

      async function removeBg(blob) {
        const formData = new FormData();
        formData.append("size", "auto");
        formData.append("image_file", blob);

        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
          method: "POST",
          headers: { "X-Api-Key": "eXvQNyeCRPciGXHkWpqqy4nq" },
          body: formData,
        });

        if (response.ok) {
          return await response.arrayBuffer();
        } else {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      }

      const fileWithoutBg = await removeBg(file);

      if (fileWithoutBg) {
        const blob = new Blob([fileWithoutBg], { type: "image/png" });
        const logoURL = URL.createObjectURL(blob);
        logoBoxImg.src = logoURL;
        logoBoxImg.style.display = "block";
        uploadIconBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M6.616 19q-.691 0-1.153-.462T5 17.384v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .691-.462 1.153T17.384 19zM11.5 6.927L9.529 8.898q-.146.146-.347.153t-.366-.159q-.16-.165-.163-.353q-.003-.189.163-.354l2.618-2.62q.132-.13.268-.183q.137-.053.298-.053t.298.053t.268.184l2.618 2.619q.147.146.154.344q.006.198-.153.363q-.166.166-.357.169t-.357-.163L12.5 6.927v8.15q0 .214-.143.357t-.357.143t-.357-.143t-.143-.357z"/></svg>`;
        uploadIconBox.classList.remove("rotate");
      }
    }
  });

  setDefaultFocus();
});
