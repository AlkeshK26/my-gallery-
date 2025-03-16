const imageData = {
  image1: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1MB",
    src: "171-1717697_smoothies-healthy-food-healthy-drinks-green-smoothies-healthy.jpg",
    category: "food and drinks",
    price: "RS 25"
  },
  image2: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 900KB",
    src: "304536.jpg",
    category: "food and drinks",
    price: "RS 25"
  },
  image3: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.2MB",
    src: "1663389.jpg",
    category: "food and drinks",
    price: "RS 25"
  },
  image4: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.5MB",
    src: "bg-food-drink.jpg.crdownload",
    category: "food and drinks",
    price: "RS 25"
  },
  image5: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.1MB",
    src: "food-beverage-party-meal-drink-concept-62030615.webp",
    category: "food and drinks",
    price: "RS 25"
  },
  image6: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 800KB",
    src: "Food-Drink.jpg",
    category: "food and drinks",
    price: "RS 25"
  },
  image7: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.3MB",
    src: "foods-drinks_951133-687.avif",
    category: "food and drinks",
    price: "RS 25"
  },
  image8: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.4MB",
    src: "foods-drinks_951133-707.avif",
    category: "food and drinks",
    price: "RS 25"
  },
  image9: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 950KB",
    src: "foods-drinks_951133-714.avif",
    category: "food and drinks",
    price: "RS 25"
  },
  image10: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.6MB",
    src: "foods-drinks_951133-718.avif",
    category: "food and drinks",
    price: "RS 25"
  },
  image11: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.2MB",
    src: "foods-drinks_951133-727.avif",
    category: "food and drinks",
    price: "RS 25"
  },
  image12: {
    title: "Food/Drinks Image",
    description: "This is a description for a Food/Drinks Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th.jpeg",
    category: "food and drinks",
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