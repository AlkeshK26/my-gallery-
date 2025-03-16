const imageData = {
  image1: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1MB",
    src: "4433982.webp"
  },
  image2: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 900KB",
    src: "AI-cardiologist-heart-diagnostics_1200x800.webp"
  },
  image3: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.2MB",
    src: "bigstock-Home-health-care-worker-and-an-13926641.jpg"
  },
  image4: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.5MB",
    src: "GettyImages-1089609374-2048x1024.jpg"
  },
  image5: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.1MB",
    src: "GettyImages-1382188100.webp"
  },
  image6: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 800KB",
    src: "healthcare.jpg.crdownload"
  },
  image7: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.3MB",
    src: "hospital_lobby_1248607560.jpg"
  },
  image8: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.4MB",
    src: "Image-1-1.webp"
  },
  image9: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 950KB",
    src: "o-BEST-HEALTHCARE-facebook.jpg.crdownload"
  },
  image10: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.6MB",
    src: "shutterstock_1948083631-scaled.jpg"
  },
  image11: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.2MB",
    src: "shutterstock_15124900731.webp"
  },
  image12: {
    title: "Healthcare Image",
    description: "This is a description for a Healthcare Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th.jpeg"
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