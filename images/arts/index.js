const imageData = {
  image1: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1MB",
      src: "256758.jpg",
      category: "arts",
      price: "RS 25"
  },
  image2: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 900KB",
      src: "5387074-sculpture-artist-studio-sculpting-tool-carve-working-statue-wall-interior-design-design-decor-art-clay-work-white-profession-human-create-mold-public-domain-images.jpg",
      category: "arts",
      price: "RS 25"
  },
  image3: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.2MB",
      src: "art-art-gallery-creative-design.jpg",
      category: "arts",
      price: "RS 25"
  },
  image4: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.5MB",
      src: "best-art-galleries-1708h.avif",
      category: "arts",
      price: "RS 25"
  },
  image5: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.1MB",
      src: "side-view-woman-clay-sculpting_23-2149730894.avif",
      category: "arts",
      price: "RS 25"
  },
  image6: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 800KB",
      src: "th (1).jpeg",
      category: "arts",
      price: "RS 25"
  },
  image7: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.3MB",
      src: "th (2).jpeg",
      category: "arts",
      price: "RS 25"
  },
  image8: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.4MB",
      src: "th (3).jpeg",
      category: "arts",
      price: "RS 25"
  },
  image9: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 950KB",
      src: "th.jpeg",
      category: "arts",
      price: "RS 25"
  },
  image10: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.6MB",
      src: "vaporwave_digital_art_artwork_illustration_drawing_4k_hd-3840x2160.jpg",
      category: "arts",
      price: "RS 25"
  },
  image11: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.2MB",
      src: "th.jpeg",
      category: "arts",
      price: "RS 25"
  },
  image12: {
      title: "Art Image",
      description: "This is an art image.",
      formatSize: "JPEG, 1.7MB",
      src: "vaporwave_digital_art_artwork_illustration_drawing_4k_hd-3840x2160.jpg",
      category: "arts",
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