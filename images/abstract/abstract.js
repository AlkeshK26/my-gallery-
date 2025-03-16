const imageData = {
  image1: {
    title: "Abstract Image",
    description: "This is a vibrant abstract image with a mix of colors and shapes, creating a dynamic and eye-catching visual effect.",
    formatSize: "JPEG, 1MB",
    src: "178821.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image2: {
    title: "Abstract Image",
    description: "This is a colorful abstract image featuring a fractal pattern, creating a sense of depth and complexity.",
    formatSize: "JPEG, 900KB",
    src: "290873-colorful-abstract.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image3: {
    title: "Abstract Image",
    description: "This is a stunning abstract image with a mix of geometric shapes and vibrant colors, creating a unique and captivating visual effect.",
    formatSize: "JPEG, 1.2MB",
    src: "665159-fractal-abstract-abstraction-art-artwork.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image4: {
    title: "Abstract Image",
    description: "This is a beautiful abstract image featuring a watercolor effect, creating a soft and dreamy visual effect.",
    formatSize: "JPEG, 1.5MB",
    src: "665924-fractal-abstract-abstraction-art-artwork.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image5: {
    title: "Abstract Image",
    description: "This is a striking abstract image with a mix of bold colors and geometric shapes, creating a dynamic and modern visual effect.",
    formatSize: "JPEG, 1.1MB",
    src: "GettyImages-200571828-001-57b6d0f45f9b58cdfd5cfe75.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image6: {
    title: "Abstract Image",
    description: "This is a vibrant abstract image featuring a splatter paint effect, creating a fun and playful visual effect.",
    formatSize: "JPEG, 800KB",
    src: "th (1).jpeg",
    category: "abstract",
    price: "RS 25"
  },
  image7: {
    title: "Abstract Image",
    description: "This is a stunning abstract image with a mix of pastel colors and soft shapes, creating a calming and soothing visual effect.",
    formatSize: "JPEG, 1.3MB",
    src: "Colorful-Abstract-Backgrounds-Free-Download.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image8: {
    title: "Abstract Image",
    description: "This is a beautiful abstract image featuring a gradient effect, creating a sense of depth and dimension.",
    formatSize: "JPEG, 1.4MB",
    src: "colorful-abstract-wallpaper-modern-background-ai-generated-free-photo.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image9: {
    title: "Abstract Image",
    description: "This is a striking abstract image with a mix of bold colors and geometric shapes, creating a dynamic and modern visual effect.",
    formatSize: "JPEG, 950KB",
    src: "Full-Color-Abstract-Art-Painting.webp",
    category: "abstract",
    price: "RS 25"
  },
  image10: {
    title: "Abstract Image",
    description: "This is a vibrant abstract image featuring a mix of colors and shapes, creating a dynamic and eye-catching visual effect.",
    formatSize: "JPEG, 1.6MB",
    src: "wp4527729.jpg",
    category: "abstract",
    price: "RS 25"
  },
  image11: {
    title: "Abstract Image",
    description: "This is a stunning abstract image with a mix of geometric shapes and vibrant colors, creating a unique and captivating visual effect.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "abstract",
    price: "RS 25"
  },
  image12: {
    title: "Abstract Image",
    description: "This is a beautiful abstract image featuring a watercolor effect, creating a soft and dreamy visual effect.",
    formatSize: "JPEG, 1.7MB",
    src: "Modern-colourful-abstract-background-Graphics-69439498-1.jpg",
    category: "abstract",
    price: "RS 25"
  },
};

// Get
  
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