const imageData = {
  image1: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1MB",
    src: "8Ww0M0U.jpg",
    category: "nature",
    price: "RS 25"
  },
  image2: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 900KB",
    src: "482993.jpg",
    category: "nature",
    price: "RS 25"
  },
  image3: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.2MB",
    src: "altitude-clouds-cold-417173.jpg",
    category: "nature",
    price: "RS 25"
  },
  image4: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.5MB",
    src: "altitude-clouds-cold-417173.jpg",
    category: "nature",
    price: "RS 25"
  },
  image5: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.1MB",
    src: "dawn-landscape-mountains-247478.jpg",
    category: "nature",
    price: "RS 25"
  },
  image6: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 800KB",
    src: "th (1).jpeg",
    category: "nature",
    price: "RS 25"
  },
  image7: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.3MB",
    src: "landscape-alpine-mountains-landscape-5k-1k.jpg",
    category: "nature",
    price: "RS 25"
  },
  image8: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.4MB",
    src: "mountain wallpaper-13.jpg",
    category: "nature",
    price: "RS 25"
  },
  image9: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 950KB",
    src: "mountain-scenery-morning-sun-rays-4k-kf.jpg",
    category: "nature",
    price: "RS 25"
  },
  image10: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.6MB",
    src: "mountains.jpg",
    category: "nature",
    price: "RS 25"
  },
  image11: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
    category: "nature",
    price: "RS 25"
  },
  image12: {
    title: "Mountains Image",
    description: "This is a description for a Mountains Image.",
    formatSize: "JPEG, 1.7MB",
    src: "the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.webp",
    category: "nature",
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