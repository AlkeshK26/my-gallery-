const imageData = {
  image1: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1MB",
    src: "1-o.avif",
    category: "labels",
    price: "RS 25"
  },
  image2: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 900KB",
    src: "1600w-j1UohPuaoJM.webp",
    category: "labels",
    price: "RS 25"
  },
  image3: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.2MB",
    src: "1600w-muXjQ6TuueY.webp",
    category: "labels",
    price: "RS 25"
  },
  image4: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.5MB",
    src: "1600w-n9bNP24eHQg.webp",
    category: "labels",
    price: "RS 25"
  },
  image5: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.1MB",
    src: "4338b148167bac6703926b4cd83c86d1.jpg",
    category: "labels",
    price: "RS 25"
  },
  image6: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 800KB",
    src: "c7ff75daa050d10dcef2e7099e867222.jpg",
    category: "labels",
    price: "RS 25"
  },
  image7: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.3MB",
    src: "category_card2.webp",
    category: "labels",
    price: "RS 25"
  },
  image8: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.4MB",
    src: "Labeldesign-jar-2.jpg",
    category: "labels",
    price: "RS 25"
  },
  image9: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 950KB",
    src: "LP09157LT.jpg",
    category: "labels",
    price: "RS 25"
  },
  image10: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.6MB",
    src: "packaging-products-hair-care-design-shampoo-bottle-templates-on-various-background-vector.jpg",
    category: "labels",
    price: "RS 25"
  },
  image11: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "labels",
    price: "RS 25"
  },
  image12: {
    title: "Label Image",
    description: "This is a description for a Label Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th (1).jpeg",
    category: "labels",
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

