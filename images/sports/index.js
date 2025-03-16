const imageData = {
  image1: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1MB",
    src: "110-1102351_signs-hazard-warning-safety-symbols-with-names.png",
    category: "signs",
    price: "RS 25"
  },
  image2: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 900KB",
    src: "bb526d131f9f3f1dd3773460d20520ab.jpg",
    category: "signs",
    price: "RS 25"
  },
  image3: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.2MB",
    src: "e3f2eb858ce0b31e166efc6b59addee3.png",
    category: "signs",
    price: "RS 25"
  },
  image4: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.5MB",
    src: "Hazard-Symbols.png",
    category: "signs",
    price: "RS 25"
  },
  image5: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.1MB",
    src: "hazard-warning-safety-signs-p1254-38488_zoom.jpg",
    category: "signs",
    price: "RS 25"
  },
  image6: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 800KB",
    src: "th (1).jpeg",
    category: "signs",
    price: "RS 25"
  },
  image7: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.3MB",
    src: "n709472.png",
    category: "signs",
    price: "RS 25"
  },
  image8: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.4MB",
    src: "peace_symbol_PNG45.png",
    category: "signs",
    price: "RS 25"
  },
  image9: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 950KB",
    src: "pi5raMpBT.png",
    category: "signs",
    price: "RS 25"
  },
  image10: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.6MB",
    src: "ROAD0061-Converted-01.jpg",
    category: "signs",
    price: "RS 25"
  },
  image11: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "signs",
    price: "RS 25"
  },
  image12: {
    title: "Sports Image",
    description: "This is a description for a Sports Image.",
    formatSize: "JPEG, 1.7MB",
    src: "signs-symbols-5728182.webp",
    category: "signs",
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