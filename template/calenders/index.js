const imageData = {
  image1: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1MB",
    src: "4-How-to-make-a-calendar-Canva.webp",
    category: "calenders",
    price: "RS 25"
  },
  image2: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 900KB",
    src: "8df7e34a6ccc31dc9820cfc4bc7cb0cb7dc0747a6e4a731bc7399e692212e97c.jpg",
    category: "calenders",
    price: "RS 25"
  },
  image3: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.2MB",
    src: "400w-9u0pmMOB5Qs.webp",
    category: "calenders",
    price: "RS 25"
  },
  image4: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.5MB",
    src: "800w--hRkav6npvo.webp",
    category: "calenders",
    price: "RS 25"
  },
  image5: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.1MB",
    src: "800w-8MXhEsU6VtU.webp",
    category: "calenders",
    price: "RS 25"
  },
  image6: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 800KB",
    src: "800w-fJQZYi2k5-A.webp",
    category: "calenders",
    price: "RS 25"
  },
  image7: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.3MB",
    src: "800w-M1elaYfigrQ.webp",
    category: "calenders",
    price: "RS 25"
  },
  image8: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.4MB",
    src: "800w-nb_Pf3prz6c.webp",
    category: "calenders",
    price: "RS 25"
  },
  image9: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 950KB",
    src: "1600w-MX69RYZzBOg.webp",
    category: "calenders",
    price: "RS 25"
  },
  image10: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.6MB",
    src: "1600w-VKDFsc3dBc8.webp",
    category: "calenders",
    price: "RS 25"
  },
  image11: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.2MB",
    src: "a9cc15b8e4ec2e5e83d0bdd8616f00aaed87d64c0fca4027aa87b79ec5ee2fab.jpg",
    category: "calenders",
    price: "RS 25"
  },
  image12: {
    title: "Calendar Image",
    description: "This is a description for a Calendar Image.",
    formatSize: "JPEG, 1.7MB",
    src: "feature_card1.webp",
    category: "calenders",
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

