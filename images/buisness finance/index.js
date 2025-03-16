const imageData = {
  image1: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1MB",
      src: "AdobeStock_136641191.jpg"
  },
  image2: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 900KB",
      src: "bus-business-finance.jpg"
  },
  image3: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.2MB",
      src: "business-finance-investment-background-businessman-or-finance-analyst-working-in-office-monitoring-with-trading-graph-marketing-report-on-virtual-screen-business-intelligence-and-technology-concept-photo.jpg"
  },
  image4: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.5MB",
      src: "business-finance-overview.jpg"
  },
  image5: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.1MB",
      src: "Corporate-financial-analysis.jpg"
  },
  image6: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 800KB",
      src: "Emerging-Ideas-10-Ways-to-Finance-Your-Business.webp"
  },
  image7: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.3MB",
      src: "Insights-office-light-1248x752.jpg"
  },
  image8: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.4MB",
      src: "Small-Business-Finance-Made-Easy.png"
  },
  image9: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 950KB",
      src: "th (1).jpeg"
  },
  image10: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.6MB",
      src: "th (2).jpeg"
  },
  image11: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.2MB",
      src: "th (3).jpeg"
  },
  image12: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.7MB",
      src: "th (4).jpeg"
  },
  image13: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.7MB",
      src: "th (5).jpeg"
  },
  image14: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.7MB",
      src: "th (6).jpeg"
  },
  image15: {
      title: "Business/Finance Image",
      description: "This is a business/finance image.",
      formatSize: "JPEG, 1.7MB",
      src: "th (7).jpeg"
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