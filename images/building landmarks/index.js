const imageData = {
  image1: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1MB",
      src: "99b94e373e95d8b592e7f2b45acfd8ca.jpg",
      category: "landmarks",
      price: "RS 25"
  },
  image2: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 900KB",
      src: "13429960-7022537-image-m-33_1557736204692.jpg",
      category: "landmarks",
      price: "RS 25"
  },
  image3: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.2MB",
      src: "architectural-landmarks-los-angeles-02.webp",
      category: "landmarks",
      price: "RS 25"
  },
  image4: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.5MB",
      src: "Burj-Khalifa.jpg",
      category: "landmarks",
      price: "RS 25"
  },
  image5: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.1MB",
      src: "Eiffel-Tower.jpg",
      category: "landmarks",
      price: "RS 25"
  },
  image6: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 800KB",
      src: "GettyImages-481686221.webp",
      category: "landmarks",
      price: "RS 25"
  },
  image7: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.3MB",
      src: "GettyImages-892862718.webp",
      category: "landmarks",
      price: "RS 25"
  },
  image8: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.4MB",
      src: "iconic-landmarks-tower-bridge-exterior.avif",
      category: "landmarks",
      price: "RS 25"
  },
  image9: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 950KB",
      src: "John-Hancock-building-on-Michigan-Ave-in-ChicagoIL-apr16.jpg",
      category: "landmarks",
      price: "RS 25"
  },
  image10: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.6MB",
      src: "london-architectural-landmarks-14.webp",
      category: "landmarks",
      price: "RS 25"
  },
  image11: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.2MB",
      src: "london-architectural-landmarks-20.webp",
      category: "landmarks",
      price: "RS 25"
  },
  image12: {
      title: "Building Landmarks Image",
      description: "This is a building landmarks image.",
      formatSize: "JPEG, 1.7MB",
      src: "saint-basil-Moscow.jpg",
      category: "landmarks",
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