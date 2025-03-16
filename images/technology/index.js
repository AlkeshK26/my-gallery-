const imageData = {
  image1: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1MB",
    src: "1_eD18fPAO4W6RHrG8evL19w.jpg",
    category: "technology",
    price: "RS 25"
  },
  image2: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 900KB",
    src: "108-1088409_information-technology-wallpaper-technology-news.jpg",
    category: "technology",
    price: "RS 25"
  },
  image3: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.2MB",
    src: "266471.jpg",
    category: "technology",
    price: "RS 25"
  },
  image4: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.5MB",
    src: "765113-widescreen-technology-background-images-1920x1080.jpg",
    category: "technology",
    price: "RS 25"
  },
  image5: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.1MB",
    src: "903053-electronics-machine-technology-circuit-electronic-computer-technics-detail-psychedelic-abstract-pattern.jpg",
    category: "technology",
    price: "RS 25"
  },
  image6: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 800KB",
    src: "1892755.jpg",
    category: "technology",
    price: "RS 25"
  },
  image7: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.3MB",
    src: "artificial-intelligence-construction-technologys-next-frontier.jpg",
    category: "technology",
    price: "RS 25"
  },
  image8: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.4MB",
    src: "ngPEfyE.jpg",
    category: "technology",
    price: "RS 25"
  },
  image9: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 950KB",
    src: "shutterstock-business-technology.jpg",
    category: "technology",
    price: "RS 25"
  },
  image10: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.6MB",
    src: "technology-4256272_1280.webp",
    category: "technology",
    price: "RS 25"
  },
  image11: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "technology",
    price: "RS 25"
  },
  image12: {
    title: "Technology Image",
    description: "This is a description for a Technology Image.",
    formatSize: "JPEG, 1.7MB",
    src: "technology-linkedin-background-sj2amwxyouxivqod.jpg",
    category: "technology",
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