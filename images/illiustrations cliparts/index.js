const imageData = {
  image1: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1MB",
    src: "dir4kxri9.jpeg",
    category: "illustration",
    price: "RS 25"
  },
  image2: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 900KB",
    src: "kristinmakarius_advancedelective.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image3: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.2MB",
    src: "pconGexcE.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image4: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.5MB",
    src: "pencil-concept-823x10241.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image5: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.1MB",
    src: "pngtree-vector-illustration-clipart-clip-art-image_1083142.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image6: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 800KB",
    src: "pngtree-vector-illustration-clipart-clip-art-picture-image_1954079.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image7: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.3MB",
    src: "qTBRr67T5.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image8: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.4MB",
    src: "th.jpeg",
    category: "illustration",
    price: "RS 25"
  },
  image9: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 950KB",
    src: "vector-035.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image10: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.6MB",
    src: "vector-beautiful-landscape-illustration.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image11: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.2MB",
    src: "vintage-illustration-of-bouquet-of-flowers-vector.jpg",
    category: "illustration",
    price: "RS 25"
  },
  image12: {
    title: "Illustration/Clipart Image",
    description: "This is a description for an Illustration/Clipart Image.",
    formatSize: "JPEG, 1.7MB",
    src: "wild-flowers-vector-illustration.jpg",
    category: "illustration",
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