const imageData = {
  image1: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1MB",
    src: "biochemistry-biology-blue-2280571-1024x683.jpg",
    category: "science",
    price: "RS 25"
  },
  image2: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 900KB",
    src: "cb3jaMQ.jpg",
    category: "science",
    price: "RS 25"
  },
  image3: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.2MB",
    src: "faculty-of-science.jpg",
    category: "science",
    price: "RS 25"
  },
  image4: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.5MB",
    src: "image.jpg",
    category: "science",
    price: "RS 25"
  },
  image5: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.1MB",
    src: "kids_science_class-copy.jpg",
    category: "science",
    price: "RS 25"
  },
  image6: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 800KB",
    src: "lovepik-earth-science-and-technology-background-image_500313510.jpg",
    category: "science",
    price: "RS 25"
  },
  image7: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.3MB",
    src: "natural+science+AdobeStock_109356639.jpeg",
    category: "science",
    price: "RS 25"
  },
  image8: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.4MB",
    src: "Pacific Science Center Science on a Sphere exhibit credit JiaYing Grygiel.jpg",
    category: "science",
    price: "RS 25"
  },
  image9: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 950KB",
    src: "science.jpg",
    category: "science",
    price: "RS 25"
  },
  image10: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.6MB",
    src: "th (1).jpeg",
    category: "science",
    price: "RS 25"
  },
  image11: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th (2).jpeg",
    category: "science",
    price: "RS 25"
  },
  image12: {
    title: "Science Image",
    description: "This is a description for a Science Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th.jpeg",
    category: "science",
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