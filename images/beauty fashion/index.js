const imageData = {
  image1: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1MB",
      src: "9b9HB1l.jpg",
      category: "fashion",
      price: "RS 25"
  },
  image2: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 900KB",
      src: "170107_LCMFW17_DR07-6736.webp",
      category: "fashion",
      price: "RS 25"
  },
  image3: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.2MB",
      src: "204114-1066x1600-white-skirt-blue-blouse.jpg",
      category: "fashion",
      price: "RS 25"
  },
  image4: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.5MB",
      src: "6133380-models-photography-people-flowers-beauty-fashion.jpg",
      category: "fashion",
      price: "RS 25"
  },
  image5: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.1MB",
      src: "beauty-fashion-hero-e1564002471761.webp",
      category: "fashion",
      price: "RS 25"
  },
  image6: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 800KB",
      src: "Fashion_Photography_for_E-Commerce_How_to_Capture_Your_Model_and_Clothing_in_the_Best_Light_2.webp",
      category: "fashion",
      price: "RS 25"
  },
  image7: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.3MB",
      src: "hats.jpg",
      category: "fashion",
      price: "RS 25"
  },
  image8: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.4MB",
      src: "Model-Chic-Fashion.jpg",
      category: "fashion",
      price: "RS 25"
  },
  image9: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 950KB",
      src: "photo-1512436991641-6745cdb1723f.jpeg",
      category: "fashion",
      price: "RS 25"
  },
  image10: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.6MB",
      src: "th (1).jpeg",
      category: "fashion",
      price: "RS 25"
  },
  image11: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.2MB",
      src: "th.jpeg",
      category: "fashion",
      price: "RS 25"
  },
  image12: {
      title: "Beauty and Fashion Image",
      description: "This is a beauty and fashion image.",
      formatSize: "JPEG, 1.7MB",
      src: "woman-6617649_1280.jpg",
      category: "fashion",
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