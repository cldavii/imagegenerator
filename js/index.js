const generate_button = document.getElementById("generate-button");
const download_button = document.getElementById("download-button");
const image_area = document.getElementById("image-area");

let currentImageUrl = "";

function loadImage() {
  download_button.disabled = true;

  const randomNumber = Math.floor(Math.random() * 1000);
  currentImageUrl = `https://picsum.photos/400/300?random=${randomNumber}`;

  const img_element = document.createElement("img");
  img_element.src = currentImageUrl;
  img_element.alt = "Imagem aleatória";
  img_element.onload = () => {
    image_area.innerHTML = "";
    image_area.appendChild(img_element);
    download_button.disabled = false;
  };
}

async function downloadImage() {
    try {
        const response = await fetch(currentImageUrl);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `picsum-foto-${Math.floor(Math.random() * 100)}.jpg`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Limpa a memória do navegador
        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error("Erro ao baixar a imagem:", error);
        alert("Não foi possível baixar a imagem devido a restrições de segurança do navegador.");
    }
}

generate_button.addEventListener("click", loadImage);
download_button.addEventListener("click", downloadImage);

loadImage();
