const imageData = {
  image1: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1MB",
    src: "800w-86F0jTKU0ao.webp",
    category: "certificates",
    price: "RS 25"
  },
  image2: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 900KB",
    src: "800w-Bc1s7yfYRbs.webp",
    category: "certificates",
    price: "RS 25"
  },
  image3: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.2MB",
    src: "800w-DNJByszQcIM.webp",
    category: "certificates",
    price: "RS 25"
  },
  image4: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.5MB",
    src: "800w-IS1ZRNmmSBk.webp",
    category: "certificates",
    price: "RS 25"
  },
  image5: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.1MB",
    src: "800w-jNhTf-qwAF0.webp",
    category: "certificates",
    price: "RS 25"
  },
  image6: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 800KB",
    src: "800w-kX6pIJX3qx0.webp",
    category: "certificates",
    price: "RS 25"
  },
  image7: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.3MB",
    src: "800w-Pij7HeIJWMA.webp",
    category: "certificates",
    price: "RS 25"
  },
  image8: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.4MB",
    src: "800w-qJOX9odQDQY.webp",
    category: "certificates",
    price: "RS 25"
  },
  image9: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 950KB",
    src: "800w-SglHVXVvWvQ.webp",
    category: "certificates",
    price: "RS 25"
  },
  image10: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.6MB",
    src: "800w-xywehMa5tro.webp",
    category: "certificates",
    price: "RS 25"
  },
  image11: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.2MB",
    src: "1600w--qpA_9iguQA.webp",
    category: "certificates",
    price: "RS 25"
  },
  image12: {
    title: "Certificate Image",
    description: "This is a description for a Certificate Image.",
    formatSize: "JPEG, 1.7MB",
    src: "1600w-NbCdUOZ1EUw.webp",
    category: "certificates",
    price: "RS 25"
  },
};


   

// Get modal elements
const modal = document.getElementById("imageModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalFormatSize = document.getElementById("modalFormatSize");
const closeModal = document.getElementsByClassName("close")[0];

// Function to show the modal with image data
function showModal(imageKey) {
  const data = imageData[imageKey];
  
  if (data) {
    modalTitle.innerText = data.title;
    modalImage.src = data.src;
    modalDescription.innerText = data.description;
    modalFormatSize.innerText = data.formatSize;
    modal.style.display = "block";
  } else {
    console.error("Image data not found for: " + imageKey);
  }
}

// Event listener to close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
};

// When user clicks outside the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Attach click event listeners to each card
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const imageKey = this.getAttribute("data-image-key");
    showModal(imageKey);
  });
}); 






document.getElementById("buyButton").addEventListener("click", function() {
  const imageKey = modalImage.getAttribute("src");
  const selectedImage = Object.values(imageData).find(image => image.src === imageKey);

  if (selectedImage) {
    alert(` You have successfully bought this image \n Title: ${selectedImage.title}\nCategory: ${selectedImage.category}\nPrice: ${selectedImage.price}`);
  } else {
    console.error("Selected image not found for purchase.");
  }
});

