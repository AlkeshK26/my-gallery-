
const imageData = {
  image1: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 1.",
    formatSize: "JPEG, 1MB",
    src: "214916-animals-wildlife-nature-jaguars.jpg.crdownload",
    category: "animal",
    price:" RS 25"

  },
  image2: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 2.",
    formatSize: "JPEG, 900KB",
    src: "2017-03-24-09-19-41.jpg",
     category: "animal",
    price:" RS 25"
  },
  image3: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 3.",
    formatSize: "JPEG, 1.2MB",
    src: "animals-amazing-animal-stories-wildlife-photography-by-rudi-hulshof19.webp",
     category: "animal",
    price:" RS 25"
  },
  image4: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 4.",
    formatSize: "JPEG, 1.5MB",
    src: "Blacktail_Deer_pictures_wallpapers_beautiful_animals_wildlife_forest_greens.jpg.crdownload",
     category: "animal",
    price:" RS 25"
  },
  image5: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 5.",
    formatSize: "JPEG, 1.1MB",
    src: "GettyImages-200571828-001-57b6d0f45f9b58cdfd5cfe75.jpg",
     category: "animal",
    price:" RS 25"
  },
  image6: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 6.",
    formatSize: "JPEG, 800KB",
    src: "th (1).jpeg",
     category: "animal",
    price:" RS 25"
  },
  image7: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 7.",
    formatSize: "JPEG, 1.3MB",
    src: "1605250170361.jpg.adapt.740.medium.jpg",
     category: "animal",
    price:" RS 25"
  },
  image8: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 8.",
    formatSize: "JPEG, 1.4MB",
    src: "The Tiger Strikes Again Wild Animals239.jpg.crdownload",
     category: "animal",
    price:" RS 25"
  },
  image9: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 9.",
    formatSize: "JPEG, 950KB",
    src: "Wild-Animal-Elephant-HD-Wallpapers-Desktop.webp.crdownload",
     category: "animal",
    price:" RS 25"
  },
  image10: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 10.",
    formatSize: "JPEG, 1.6MB",
    src: "wild-animal-wallpaper-015.jpg.crdownload",
     category: "animal",
    price:" RS 25"
  },
  image11: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 11.",
    formatSize: "JPEG, 1.2MB",
    src: "th.jpeg",
     category: "animal",
    price:" RS 25"
  },
  image12: {
    title: "Wildlife Image ",
    description: "This is a description for Wildlife Image 12.",
    formatSize: "JPEG, 1.7MB",
    src: "Zuckerman_Wildlife_Photography_image02.webp",
     category: "animal",
    price:" RS 25"
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






// document.getElementById("buyButton").addEventListener("click", function() {
//   const imageKey = modalImage.getAttribute("src");
//   const selectedImage = Object.values(imageData).find(image => image.src === imageKey);

//   if (selectedImage) {
//     alert(` You have successfully bought this image \n Title: ${selectedImage.title}\nCategory: ${selectedImage.category}\nPrice: ${selectedImage.price}`);
//   } else {
//     console.error("Selected image not found for purchase.");
//   }
// });




// Add event listener to the Buy button
document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.querySelector("#imageModal button");
  buyButton.addEventListener("click", function () {
    window.location.href = "../../../payment/payment.html";
  });
});

