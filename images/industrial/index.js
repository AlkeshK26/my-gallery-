const imageData = {
  image1: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1MB",
    src: "5g-industria-1144x645.jpg",
    category: "industries",
    price: "RS 25"
  },
  image2: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 900KB",
    src: "factories-power-plant-industrial-factory-wallpaper.jpg",
    category: "industries",
    price: "RS 25"
  },
  image3: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.2MB",
    src: "ind.jpeg",
    category: "industries",
    price: "RS 25"
  },
  image4: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.5MB",
    src: "IndustrialProductsSystems-ULcom-HEADER-2400x1600.jpg",
    category: "industries",
    price: "RS 25"
  },
  image5: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.1MB",
    src: "Manufacturing_equipment_091.jpg",
    category: "industries",
    price: "RS 25"
  },
  image6: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 800KB",
    src: "photo-1496247749665-49cf5b1022e9.jpeg",
    category: "industries",
    price: "RS 25"
  },
  image7: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.3MB",
    src: "prepare now for the future of industrial services_1317900090_thumb_1536x1536.webp",
    category: "industries",
    price: "RS 25"
  },
  image8: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.4MB",
    src: "sky-clouds-industry-459728.jpg",
    category: "industries",
    price: "RS 25"
  },
  image9: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 950KB",
    src: "th (1).jpeg",
    category: "industries",
    price: "RS 25"
  },
  image10: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.6MB",
    src: "th (2).jpeg",
    category: "industries",
    price: "RS 25"
  },
  image11: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "industries",
    price: "RS 25"
  },
  image12: {
    title: "Industrial Image",
    description: "This is a description for an Industrial Image.",
    formatSize: "JPEG, 1.7MB",
    src: "shutterstock_164721632-scaled.jpg",
    category: "industries",
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