const imageData = {
  image1: {
    title: "Invitation Image 1",
    description: "This is a description for Invitation Image 1.",
    formatSize: "JPEG, 1MB",
    src: "568w-_J52Ne9ol1w.webp",
    category: "invitations",
    price: "RS 25"
  },
  image2: {
    title: "Invitation Image 2",
    description: "This is a description for Invitation Image 2.",
    formatSize: "JPEG, 900KB",
    src: "1135w-PDHDJ0lJRqc.webp",
    category: "invitations",
    price: "RS 25"
  },
  image3: {
    title: "Invitation Image 3",
    description: "This is a description for Invitation Image 3.",
    formatSize: "JPEG, 1.2MB",
    src: "1143w-sw6a2VGh_iM.webp",
    category: "invitations",
    price: "RS 25"
  },
  image4: {
    title: "Invitation Image 4",
    description: "This is a description for Invitation Image 4.",
    formatSize: "JPEG, 1.5MB",
    src: "1600w-6fsXUqpxQ6c.webp",
    category: "invitations",
    price: "RS 25"
  },
  image5: {
    title: "Invitation Image 5",
    description: "This is a description for Invitation Image 5.",
    formatSize: "JPEG, 1.1MB",
    src: "1600w-6fsXUqpxQ6c.webp", // Note: this is the same as image 4
    category: "invitations",
    price: "RS 25"
  },
  image6: {
    title: "Invitation Image 6",
    description: "This is a description for Invitation Image 6.",
    formatSize: "JPEG, 800KB",
    src: "1600w-pBXbVUyI74w.webp",
    category: "invitations",
    price: "RS 25"
  },
  image7: {
    title: "Invitation Image 7",
    description: "This is a description for Invitation Image 7.",
    formatSize: "JPEG, 1.3MB",
    src: "1600w-qUz6g74DGt0.webp",
    category: "invitations",
    price: "RS 25"
  },
  image8: {
    title: "Invitation Image 8",
    description: "This is a description for Invitation Image 8.",
    formatSize: "JPEG, 1.4MB",
    src: "1600w-xIMTailH8LU.webp",
    category: "invitations",
    price: "RS 25"
  },
  image9: {
    title: "Invitation Image 9",
    description: "This is a description for Invitation Image 9.",
    formatSize: "JPEG, 950KB",
    src: "canva-brown-floral-elegant-rustic-wedding-invitation-vaeYbFNdxH8.jpg",
    category: "invitations",
    price: "RS 25"
  },
  image10: {
    title: "Invitation Image 10",
    description: "This is a description for Invitation Image 10.",
    formatSize: "JPEG, 1.6MB",
    src: "Free-8-Elegance-Greenery-Canva-Wedding-Invitation-Templates.jpg",
    category: "invitations",
    price: "RS 25"
  },
  image11: {
    title: "Invitation Image 11",
    description: "This is a description for Invitation Image 11.",
    formatSize: "JPEG, 1.2MB",
    src: "il_1140xN.3324190635_mkyp.webp",
    category: "invitations",
    price: "RS 25"
  },
  image12: {
    title: "Invitation Image 12",
    description: "This is a description for Invitation Image 12.",
    formatSize: "JPEG, 1.7MB",
    src: "il_1588xN.3176772988_gyde.webp",
    category: "invitations",
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

