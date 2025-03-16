const imageData = {
  image1: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1MB",
    src: "221119-travel-background-1920x1080-laptop.jpg"
  },
  image2: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 900KB",
    src: "A-happy-family-on-holiday-jumping-together-on-the-beach.webp"
  },
  image3: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.2MB",
    src: "Beach-scene-stock-illustrations-cliparts-and-free.jpg"
  },
  image4: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.5MB",
    src: "christmas_tree.jpg"
  },
  image5: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.1MB",
    src: "family-holiday.jpg"
  },
  image6: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 800KB",
    src: "family-holidays--summer-holidays.jpg"
  },
  image7: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.3MB",
    src: "hodl.jpeg"
  },
  image8: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.4MB",
    src: "leisure-trip.jpg"
  },
  image9: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 950KB",
    src: "masina.jpg"
  },
  image10: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.6MB",
    src: "th (1).jpeg"
  },
  image11: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th (2).jpeg"
  },
  image12: {
    title: "Holidays Image",
    description: "This is a description for a Holidays Image.",
    formatSize: "JPEG, 1.7MB",
    src: "triprx.jpg"
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