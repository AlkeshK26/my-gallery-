const imageData = {
  image1: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1MB",
    src: "800w-5nMhDRnqUpc.webp",
    category: "logos",
    price: "RS 25"
  },
  image2: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 900KB",
    src: "800w-36wAabhEmGE.webp",
    category: "logos",
    price: "RS 25"
  },
  image3: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.2MB",
    src: "800w-BZbg35_wLbg.webp",
    category: "logos",
    price: "RS 25"
  },
  image4: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.5MB",
    src: "800w-e_iYSx99Lhc.webp",
    category: "logos",
    price: "RS 25"
  },
  image5: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.1MB",
    src: "800w-SovW9e1GVtM.webp",
    category: "logos",
    price: "RS 25"
  },
  image6: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 800KB",
    src: "800w-w3ZRzJL1JvA.webp",
    category: "logos",
    price: "RS 25"
  },
  image7: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.3MB",
    src: "1600w-4FjCb3R2e0g.webp",
    category: "logos",
    price: "RS 25"
  },
  image8: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.4MB",
    src: "1600w-EQkskW9DWFQ.webp",
    category: "logos",
    price: "RS 25"
  },
  image9: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 950KB",
    src: "1600w-izeElzvImEY.webp",
    category: "logos",
    price: "RS 25"
  },
  image10: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.6MB",
    src: "1600w-qPdLtDcAROc.webp",
    category: "logos",
    price: "RS 25"
  },
  image11: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.2MB",
    src: "1656733637logo-canva-png.webp",
    category: "logos",
    price: "RS 25"
  },
  image12: {
    title: "Logo Image",
    description: "This is a description for Logo Image.",
    formatSize: "JPEG, 1.7MB",
    src: "il_794xN.3875276941_6b17.jpg",
    category: "logos",
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

