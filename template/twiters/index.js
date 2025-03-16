const imageData = {
  image1: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1MB",
    src: "5-o.avif",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image2: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 900KB",
    src: "800w-7VLS5Rs3IqA.webp",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image3: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.2MB",
    src: "800w-AmiupMJbqWs.webp",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image4: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.5MB",
    src: "800w-NG8Vrxur2sU.webp",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image5: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.1MB",
    src: "324114406545201.jpg",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image6: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 800KB",
    src: "free-twitter-post-mockup-2019-for-blank-twitter-profile-template.jpg",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image7: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.3MB",
    src: "maxresdefault.jpg",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image8: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.4MB",
    src: "single_twitter_01-cover-o.avif",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image9: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 950KB",
    src: "twitter_header@2x.webp",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image10: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.6MB",
    src: "twitter-post-template-in-light-and-dark-theme-editable-text-and-empty-profile-picture-on-tweet-posts-free-vector.jpg",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image11: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.2MB",
    src: "twitter-template5-o.avif",  // Updated source
    category: "twitter",
    price: "RS 25"
  },
  image12: {
    title: "Twitter Image",
    description: "This is a description for Twitter Image.",
    formatSize: "JPEG, 1.7MB",
    src: "twitter-tweet-post-interface-template-mockup_740016-34.avif",  // Updated source
    category: "twitter",
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

