const imageData = {
  image1: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1MB",
    src: "cf85d434-03fb-4b00-99e5-ccaa20bfa2a4-cover.png",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image2: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 900KB",
    src: "f7507c53de2a2d8fc3b8d70f1b5b97ee.jpg",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image3: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.2MB",
    src: "fashion-model-youtube-thumbnail-template_220346-6577.avif",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image4: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.5MB",
    src: "free-vlogger-youtube-channel-banner-psd-template-990x658.jpg",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image5: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.1MB",
    src: "free-youtube-channel-banner-psd-template.jpg",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image6: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 800KB",
    src: "youtube-video-player-template-vectorized_23-2148156816.avif",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image7: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.3MB",
    src: "Ice_Berg.jpeg",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image8: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.4MB",
    src: "maxresdefault.jpg",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image9: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 950KB",
    src: "pngtree-youtube-banner-template-png-image_9002038.png",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image10: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.6MB",
    src: "youtube-thumbnail-template-business-marketing-banner-video_728646-315.avif",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image11: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",  // Updated source
    category: "youtube",
    price: "RS 25"
  },
  image12: {
    title: "YouTube Image",
    description: "This is a description for YouTube Image.",
    formatSize: "JPEG, 1.7MB",
    src: "youtube-thumbnail-template-business-marketing-banner-video_728646-315.avif",  // Updated source
    category: "youtube",
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

