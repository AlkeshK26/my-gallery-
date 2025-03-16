const imageData = {
    image1: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1MB",
      src: "4623528673_61f3b4c3fe_b.jpg",
      category: "objects",
      price: "RS 25"
    },
    image2: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 900KB",
      src: "20190222534126790892237397.jpg",
      category: "objects",
      price: "RS 25"
    },
    image3: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.2MB",
      src: "maxresdefault.jpg",
      category: "objects",
      price: "RS 25"
    },
    image4: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.5MB",
      src: "object-clock-with-circle-shape-free-png.webp",
      category: "objects",
      price: "RS 25"
    },
    image5: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.1MB",
      src: "Object-Transparent.png",
      category: "objects",
      price: "RS 25"
    },
    image6: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 800KB",
      src: "photo-1605870445919-838d190e8e1b.jpeg",
      category: "objects",
      price: "RS 25"
    },
    image7: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.3MB",
      src: "photo-prints-everyday-objects.webp",
      category: "objects",
      price: "RS 25"
    },
    image8: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.4MB",
      src: "relevantstructure.jpg",
      category: "objects",
      price: "RS 25"
    },
    image9: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 950KB",
      src: "th (1).jpeg",
      category: "objects",
      price: "RS 25"
    },
    image10: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.6MB",
      src: "th (2).jpeg",
      category: "objects",
      price: "RS 25"
    },
    image11: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.2MB",
      src: "th.jpeg",
      category: "objects",
      price: "RS 25"
    },
    image12: {
      title: "Objects Image",
      description: "This is a description for an Objects Image.",
      formatSize: "JPEG, 1.7MB",
      src: "th (3).jpeg",
      category: "objects",
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