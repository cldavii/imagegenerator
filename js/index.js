const button = document.getElementById("button");
const image_area = document.getElementById("image-area");

function loadImage() {
  const randomNumber = Math.floor(Math.random() * 1000);
  const api_url = `https://picsum.photos/200?random=${randomNumber}`;
  const img_element = document.createElement("img");
  img_element.src = api_url;
  img_element.alt = "Imagem aleatória";
  img_element.onload = () => {
    image_area.innerHTML = "";
    image_area.appendChild(img_element);
  };
}

button.addEventListener("click", loadImage);
loadImage();
