const imageData = {
  image1: {
    title: "Education Image ",
    description: "This is a description for Education Image 1.",
    formatSize: "JPEG, 1MB",
    src: "¿Qué-es-el-Diseño-Editorial-Urban-comunicacion.jpg",
    category: "education",
    price: "RS 25"
  },
  image2: {
    title: "Education Image ",
    description: "This is a description for Education Image 2.",
    formatSize: "JPEG, 900KB",
    src: "92.webp",
    category: "education",
    price: "RS 25"
  },
  image3: {
    title: "Education Image ",
    description: "This is a description for Education Image 3.",
    formatSize: "JPEG, 1.2MB",
    src: "657fcb79601d348283a43f87f1184f78.jpg",
    category: "education",
    price: "RS 25"
  },
  image4: {
    title: "Education Image ",
    description: "This is a description for Education Image 4.",
    formatSize: "JPEG, 1.5MB",
    src: "5756aa3f1ba7125e840e8948599c3363.jpg",
    category: "education",
    price: "RS 25"
  },
  image5: {
    title: "Education Image ",
    description: "This is a description for Education Image 5.",
    formatSize: "JPEG, 1.1MB",
    src: "1594758605.webp",
    category: "education",
    price: "RS 25"
  },
  image6: {
    title: "Education Image ",
    description: "This is a description for Education Image 6.",
    formatSize: "JPEG, 800KB",
    src: "978842522720.gif",
    category: "education",
    price: "RS 25"
  },
  image7: {
    title: "Education Image ",
    description: "This is a description for Education Image 7.",
    formatSize: "JPEG, 1.3MB",
    src: "editorial-and-contents-page--768x1086.jpg",
    category: "education",
    price: "RS 25"
  },
  image8: {
    title: "Education Image ",
    description: "This is a description for Education Image 8.",
    formatSize: "JPEG, 1.4MB",
    src: "editorial.jpg",
    category: "education",
    price: "RS 25"
  },
  image9: {
    title: "Education Image ",
    description: "This is a description for Education Image 9.",
    formatSize: "JPEG, 950KB",
    src: "Editorial+Design+Reminder+Lyons+Creative+-+D3.png",
    category: "education",
    price: "RS 25"
  },
  image10: {
    title: "Education Image ",
    description: "This is a description for Education Image 10.",
    formatSize: "JPEG, 1.6MB",
    src: "editorials-suffolk-times.webp",
    category: "education",
    price: "RS 25"
  },
  image11: {
    title: "Education Image ",
    description: "This is a description for Education Image 11.",
    formatSize: "JPEG, 1.2MB",
    src: "Heedless_Moths_(1921)_-_Photoplay_Editorial.jpg",
    category: "education",
    price: "RS 25"
  },
  image12: {
    title: "Education Image ",
    description: "This is a description for Education Image 12.",
    formatSize: "JPEG, 1.7MB",
    src: "home-office-setups-hero.jpeg",
    category: "education",
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