const imageData = {
  image1: {
      title: "Vector Image 1",
      description: "This is a description for Vector Image 1.",
      formatSize: "JPEG, 1MB",
      src: "AllFreePsd-Vector-Graphics-background-05_16.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image2: {
      title: "Vector Image 2",
      description: "This is a description for Vector Image 2.",
      formatSize: "JPEG, 900KB",
      src: "AllFreePsd-Vector-Graphics-Poster-background_16.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image3: {
      title: "Vector Image 3",
      description: "This is a description for Vector Image 3.",
      formatSize: "JPEG, 1.2MB",
      src: "di45axnjT.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image4: {
      title: "Vector Image 4",
      description: "This is a description for Vector Image 4.",
      formatSize: "PNG, 1.5MB",
      src: "LTd5Aeyyc.png",
      category: "vectors",
      price: "RS 25"
  },
  image5: {
      title: "Vector Image 5",
      description: "This is a description for Vector Image 5.",
      formatSize: "JPEG, 1.1MB",
      src: "th.jpeg",
      category: "vectors",
      price: "RS 25"
  },
  image6: {
      title: "Vector Image 6",
      description: "This is a description for Vector Image 6.",
      formatSize: "JPEG, 800KB",
      src: "vector-16.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image7: {
      title: "Vector Image 7",
      description: "This is a description for Vector Image 7.",
      formatSize: "JPEG, 1.3MB",
      src: "vector-abstract-background-texture-design.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image8: {
      title: "Vector Image 8",
      description: "This is a description for Vector Image 8.",
      formatSize: "JPEG, 1.4MB",
      src: "vector-abstract-background.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image9: {
      title: "Vector Image 9",
      description: "This is a description for Vector Image 9.",
      formatSize: "JPEG, 950KB",
      src: "vector-abstract-background-texture-design.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image10: {
      title: "Vector Image 10",
      description: "This is a description for Vector Image 10.",
      formatSize: "JPEG, 1.6MB",
      src: "vector-colorful-background.jpg",
      category: "vectors",
      price: "RS 25"
  },
  image11: {
      title: "Vector Image 11",
      description: "This is a description for Vector Image 11.",
      formatSize: "PNG, 1.2MB",
      src: "vector-landscape-illustration.png",
      category: "vectors",
      price: "RS 25"
  },
  image12: {
      title: "Vector Image 12",
      description: "This is a description for Vector Image 12.",
      formatSize: "JPEG, 1.7MB",
      src: "Vector-PNG-HD",
      category: "vectors",
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