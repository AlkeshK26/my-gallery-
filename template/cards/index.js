const imageData = {
  image1: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1MB",
    src: "1-575-1024x1024.webp",
    category: "cards",
    price: "RS 25"
  },
  image2: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 900KB",
    src: "941w-fv6lcS7x_Xk.webp",
    category: "cards",
    price: "RS 25"
  },
  image3: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.2MB",
    src: "1600w-asVqGg48TtU.webp",
    category: "cards",
    price: "RS 25"
  },
  image4: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.5MB",
    src: "1600w-b5c1El2qnsE.webp",
    category: "cards",
    price: "RS 25"
  },
  image5: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.1MB",
    src: "1600w-ehOaE7T7Vqw.webp",
    category: "cards",
    price: "RS 25"
  },
  image6: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 800KB",
    src: "Black-White-Business-Card-Template-Canva-Graphics-57259034-1.png",
    category: "cards",
    price: "RS 25"
  },
  image7: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.3MB",
    src: "Business-Card-Template-Canva-Graphics-14939264-2.jpg",
    category: "cards",
    price: "RS 25"
  },
  image8: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.4MB",
    src: "Canva-Thank-You-Card-Template-Graphics-34926865-1.png",
    category: "cards",
    price: "RS 25"
  },
  image9: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 950KB",
    src: "ezgif.com-gif-maker-42-1024x1024.webp",
    category: "cards",
    price: "RS 25"
  },
  image10: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.6MB",
    src: "il_1588xN.2632876441_ozom.avif",
    category: "cards",
    price: "RS 25"
  },
  image11: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.2MB",
    src: "il_1588xN.3314535313_o9fi.avif",
    category: "cards",
    price: "RS 25"
  },
  image12: {
    title: "Card Image",
    description: "This is a description for a Card Image.",
    formatSize: "JPEG, 1.7MB",
    src: "il_fullxfull.3040429680_8l25.avif",
    category: "cards",
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

