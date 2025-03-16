const imageData = {
  image1: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1MB",
    src: "320w-Q4XHhP8hMW8.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image2: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 900KB",
    src: "640w-18UYKLN27dE.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image3: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.2MB",
    src: "640w-bV_J5j_PRXc.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image4: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.5MB",
    src: "640w-epiqKWuXcf0.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image5: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.1MB",
    src: "640w-Fb96xCxFjFU.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image6: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 800KB",
    src: "640w-kzBwkThiczw.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image7: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.3MB",
    src: "640w-sN1yEotV2v0.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image8: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.4MB",
    src: "640w-YN54QJB1-mc.webp", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image9: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 950KB",
    src: "canva-beige-minimalistic-collage-threads-post-c3Z8q0c7IlI.jpg", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image10: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.6MB",
    src: "canva-neutral-modern-photo-collage-summer-memories-threads-post-5xfudIf50kY.jpg", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image11: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.2MB",
    src: "canva-pastel-aesthetic-simple-inspiration-photo-collage-summer-mood-threads-post-Q2nEMOz3IYg.jpg", // Updated source
    category: "threads",
    price: "RS 25"
  },
  image12: {
    title: "Threads Image",
    description: "This is a description for Threads Image.",
    formatSize: "JPEG, 1.7MB",
    src: "canva-vintage-summer-vibes-photo-collage-threads-post-l_wfM_GHxDA", // Updated source
    category: "threads",
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

