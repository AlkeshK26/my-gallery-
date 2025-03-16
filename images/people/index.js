const imageData = {
  image1: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1MB",
    src: "1000_F_506751155_fJ5Ko5T0wsTH7Q9VNwEgo6J81da8arlD.jpg",
    category: "people",
    price: "RS 25"
  },
  image2: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 900KB",
    src: "business-people-working-on-a-plan_Resized-1104W736H.jpg",
    category: "people",
    price: "RS 25"
  },
  image3: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.2MB",
    src: "depositphotos_646381602-stock-photo-happy-multigenerational-people-having-fun.jpg",
    category: "people",
    price: "RS 25"
  },
  image4: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.5MB",
    src: "diverse-people-crossing-street-in-new-york-city_shmhurjd_thumbnail-1080_01.png",
    category: "people",
    price: "RS 25"
  },
  image5: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.1MB",
    src: "Dollarphotoclub_82284529.jpg",
    category: "people",
    price: "RS 25"
  },
  image6: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 800KB",
    src: "group-people.jpeg",
    category: "people",
    price: "RS 25"
  },
  image7: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.3MB",
    src: "It9Rrm02rE20.jpg",
    category: "people",
    price: "RS 25"
  },
  image8: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.4MB",
    src: "iy1ex3cookmf9cme5qlnxa.jpg",
    category: "people",
    price: "RS 25"
  },
  image9: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 950KB",
    src: "People_jumping_on_the_beach.jpg",
    category: "people",
    price: "RS 25"
  },
  image10: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.6MB",
    src: "people.jpeg",
    category: "people",
    price: "RS 25"
  },
  image11: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.2MB",
    src: "th (1).jpeg",
    category: "people",
    price: "RS 25"
  },
  image12: {
    title: "People Image",
    description: "This is a description for a People Image.",
    formatSize: "JPEG, 1.7MB",
    src: "th.jpeg",
    category: "people",
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