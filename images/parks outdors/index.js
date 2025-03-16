const imageData = {
  image1: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1MB",
    src: "2bea26a6b8a0f15f5108ada592716345.jpg",
    category: "parks",
    price: "RS 25"
  },
  image2: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 900KB",
    src: "30951977826_41d3823367_o_1__32bbad38-809a-4c3d-87d7-385ed167d1c4.jpg",
    category: "parks",
    price: "RS 25"
  },
  image3: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.2MB",
    src: "AdobeStock_84417248.jpeg",
    category: "parks",
    price: "RS 25"
  },
  image4: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.5MB",
    src: "ae09caf5-2437-4d51-ae1d-7b9ac9b9c221.jpg",
    category: "parks",
    price: "RS 25"
  },
  image5: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.1MB",
    src: "b7a6801484bdaad777009fbb37799a27.jpg",
    category: "parks",
    price: "RS 25"
  },
  image6: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 800KB",
    src: "th (3).jpeg",
    category: "parks",
    price: "RS 25"
  },
  image7: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.3MB",
    src: "marsiling-park-semec.jpg",
    category: "parks",
    price: "RS 25"
  },
  image8: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.4MB",
    src: "park-outdoor-people-relax-31653393.webp",
    category: "parks",
    price: "RS 25"
  },
  image9: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 950KB",
    src: "park-outdoor-people-relax-31653393.webp",
    category: "parks",
    price: "RS 25"
  },
  image10: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.6MB",
    src: "th (2).jpeg",
    category: "parks",
    price: "RS 25"
  },
  image11: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "parks",
    price: "RS 25"
  },
  image12: {
    title: "Parks/Outdoors Image",
    description: "This is a description for a Parks/Outdoors Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th.jpeg",
    category: "parks",
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
















