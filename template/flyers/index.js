const imageData = {
  image1: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1MB",
    src: "1131w-FZoGZ4E2Fco.webp",
    category: "flyers",
    price: "RS 25"
  },
  image2: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 900KB",
    src: "1131w-MgbjBSoSIXQ.webp",
    category: "flyers",
    price: "RS 25"
  },
  image3: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.2MB",
    src: "business-brochure-or-flyer-design-template-vector.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image4: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.5MB",
    src: "business-brochure-templates-psd-free-download.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image5: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.1MB",
    src: "Business-Flyer-Design-PSD-Template-preview.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image6: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 800KB",
    src: "corporate-business-flyer-design-template-creative-brochure-poster-cover-color-a4-print-ready-flyer-vector.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image7: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.3MB",
    src: "Corporate-Flyer-Template-Free-PSD-Preview.webp",
    category: "flyers",
    price: "RS 25"
  },
  image8: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.4MB",
    src: "flyer-templates-04.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image9: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 950KB",
    src: "flyer-templates-16.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image10: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.6MB",
    src: "Free-Business-Flyer-Template-Design-PSD-scaled.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image11: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.2MB",
    src: "free-flyer-poster-templates-11.jpg",
    category: "flyers",
    price: "RS 25"
  },
  image12: {
    title: "Flyer Image",
    description: "This is a description for a Flyer Image.",
    formatSize: "JPEG, 1.7MB",
    src: "free-flyer-templates-of-20-grand-opening-flyer-templates-free-demplates-of-free-flyer-templates.webp",
    category: "flyers",
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

