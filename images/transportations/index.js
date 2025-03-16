const imageData = {
  image1: {
      title: "Transportation Image 1",
      description: "This is a description for Transportation Image 1.",
      formatSize: "JPEG, 1MB",
      src: "28_shutterstock_179200397b.jpg",
      category: "transportation",
      price: "RS 25"
  },
  image2: {
      title: "Transportation Image 2",
      description: "This is a description for Transportation Image 2.",
      formatSize: "JPEG, 900KB",
      src: "795911-freightliner-semi-tractor-transport-truck.jpg",
      category: "transportation",
      price: "RS 25"
  },
  image3: {
      title: "Transportation Image 3",
      description: "This is a description for Transportation Image 3.",
      formatSize: "JPEG, 1.2MB",
      src: "2316938.jpg",
      category: "transportation",
      price: "RS 25"
  },
  image4: {
      title: "Transportation Image 4",
      description: "This is a description for Transportation Image 4.",
      formatSize: "JPEG, 1.5MB",
      src: "5205328.jpg",
      category: "transportation",
      price: "RS 25"
  },
  image5: {
      title: "Transportation Image 5",
      description: "This is a description for Transportation Image 5.",
      formatSize: "JPEG, 1.1MB",
      src: "means_of_transport_05_hd_picture_168599.jpg",
      category: "transportation",
      price: "RS 25"
  },
  image6: {
      title: "Transportation Image 6",
      description: "This is a description for Transportation Image 6.",
      formatSize: "JPEG, 800KB",
      src: "th (1).jpeg",
      category: "transportation",
      price: "RS 25"
  },
  image7: {
      title: "Transportation Image 7",
      description: "This is a description for Transportation Image 7.",
      formatSize: "JPEG, 1.3MB",
      src: "means_of_transport_05_hd_picture_168599.jpg.crdownload",
      category: "transportation",
      price: "RS 25"
  },
  image8: {
      title: "Transportation Image 8",
      description: "This is a description for Transportation Image 8.",
      formatSize: "JPEG, 1.4MB",
      src: "th (2).jpeg",
      category: "transportation",
      price: "RS 25"
  },
  image9: {
      title: "Transportation Image 9",
      description: "This is a description for Transportation Image 9.",
      formatSize: "JPEG, 950KB",
      src: "th (3).jpeg",
      category: "transportation",
      price: "RS 25"
  },
  image10: {
      title: "Transportation Image 10",
      description: "This is a description for Transportation Image 10.",
      formatSize: "JPEG, 1.6MB",
      src: "th (4).jpeg",
      category: "transportation",
      price: "RS 25"
  },
  image11: {
      title: "Transportation Image 11",
      description: "This is a description for Transportation Image 11.",
      formatSize: "JPEG, 1.2MB",
      src: "th.jpeg",
      category: "transportation",
      price: "RS 25"
  },
  image12: {
      title: "Transportation Image 12",
      description: "This is a description for Transportation Image 12.",
      formatSize: "JPEG, 1.7MB",
      src: "th (5).jpeg",
      category: "transportation",
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