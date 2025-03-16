const imageData = {
  image1: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1MB",
      src: "32782.jpg",
      category: "background",
      price: "RS 25"
  },
  image2: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 900KB",
      src: "316707.jpg",
      category: "background",
      price: "RS 25"
  },
  image3: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.2MB",
      src: "363403.jpg",
      category: "background",
      price: "RS 25"
  },
  image4: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.5MB",
      src: "379603.jpg",
      category: "background",
      price: "RS 25"
  },
  image5: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.1MB",
      src: "695296.jpg",
      category: "background",
      price: "RS 25"
  },
  image6: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 800KB",
      src: "751570-vertical-hd-texture-backgrounds-1920x1080-720p.jpg.jpg",
      category: "background",
      price: "RS 25"
  },
  image7: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.3MB",
      src: "751753-hd-texture-backgrounds-1920x1080-download.jpg",
      category: "background",
      price: "RS 25"
  },
  image8: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.4MB",
      src: "51771-large-hd-texture-backgrounds-2880x1800.jpg",
      category: "background",
      price: "RS 25"
  },
  image9: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 950KB",
      src: "3368333.jpg",
      category: "background",
      price: "RS 25"
  },
  image10: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.6MB",
      src: "background-2567158_1280.jpg",
      category: "background",
      price: "RS 25"
  },
  image11: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.2MB",
      src: "vector-abstract-beautiful-colorful-texture-background.jpg",
      category: "background",
      price: "RS 25"
  },
  image12: {
      title: "Background Image",
      description: "This is a background image.",
      formatSize: "JPEG, 1.7MB",
      src: "wp2845050.jpg",
      category: "background",
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