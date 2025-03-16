const imageData = {
  image1: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1MB",
    src: "01_antiques_Secrets-from-Expert-Antiquers-on-Finding-and-Scoring-the-Real-Deals_554153533_Aris-Suwanmalee.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image2: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 900KB",
    src: "47945.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image3: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.2MB",
    src: "623213-pontiac-bonneville-convertible-1958-old-cars-classic-motors.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image4: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.5MB",
    src: "ad41ad59b2ab93d69a10ecbac908d920.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image5: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.1MB",
    src: "Antique_Victorian_Carved_Oak_C_as281a242z-2.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image6: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 800KB",
    src: "CFr3G4Q.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image7: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.3MB",
    src: "classic_car2.jpg",
    category: "vintage",
    price: "RS 25"
  },
  image8: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.4MB",
    src: "th (1).jpeg",
    category: "vintage",
    price: "RS 25"
  },
  image9: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 950KB",
    src: "th (2).jpeg",
    category: "vintage",
    price: "RS 25"
  },
  image10: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.6MB",
    src: "th (3).jpeg",
    category: "vintage",
    price: "RS 25"
  },
  image11: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "vintage",
    price: "RS 25"
  },
  image12: {
    title: "Vintage Image",
    description: "This is a description for a Vintage Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th (4).jpeg",
    category: "vintage",
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