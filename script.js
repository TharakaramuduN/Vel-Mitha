// Get carousel elements
const carouselContainer = document.querySelector('.customer-review-carousel');
const carouselItem = document.querySelector('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

// Create additional carousel items (duplicating the existing one)
const reviewsData = [
  {
    text: "Your proactive follow-ups and reminders have been invaluable in ensuring that all deadlines are met.The convenience of managing everything remotely, with minimal communication, has been remarkable. The cost-effectiveness of your services has provided excellent value, making quality financial assistance.Reflecting on our successful three-year collaboration, I am enthusiastic about our future cooperation and the continued success it promises",
    name: "Damo",
    title: "Software Development Engineer, Sumologic"
  },
  {
    text: "I wanted to take a moment to express my heartfelt appreciation for the exceptional service provided by Vel & Mitha, during our recent tax filing engagement.Your professionalism, expertise, and dedication to delivering high-quality results were truly impressive. Your ability to explain complex financial concepts in a clear and concise manner made it easy for me to understand and make informed decisions.I would not hesitate to recommend your services to anyone seeking a reliable and knowledgeable chartered accountant.Once again, thank you for your outstanding service and support",
    name: "Saranraj",
    title: "Senior Data engineer , Hcl Tech Australia"
  },
  {
    text: "Vel & Mitha has been handling our GST filings seamlessly, ensuring compliance and timely submissions. Their expertise and professionalism have made tax management hassle-free for CAR Wash. I highly recommend their services to any business looking for reliable tax and accounting support.",
    name: "Ashok",
    title: "Owner of car detailing studio"
  },
];

// Clear the container and create carousel wrapper
const carouselWrapper = document.querySelector('.carousel-wrapper');
carouselWrapper.innerHTML = '';

// Add carousel items
reviewsData.forEach(review => {
  const newItem = document.createElement('div');
  newItem.className = 'carousel-item';
  newItem.innerHTML = `
    <p class="review-text">"${review.text}"</p>
    <div style="display:flex">
      <img class="customer-image" src="assets/review-images/${review.name}.jpg" alt="${review.name}">
      <div>
          <h4 class="customer-name">${review.name}</h4>
          <p class="customer-title">${review.title}</p>
      </div>
    </div>
  `;
  carouselWrapper.appendChild(newItem);
});

// Create indicators container if it doesn't exist
let indicatorsContainer = document.querySelector('.carousel-indicators');
if (!indicatorsContainer) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'carousel-indicators';
  carouselContainer.appendChild(indicatorsContainer);
}

// Clear and add indicators
indicatorsContainer.innerHTML = '';
for (let i = 0; i < reviewsData.length; i++) {
  const indicator = document.createElement('div');
  indicator.className = 'carousel-indicator';
  indicator.dataset.index = i;
  indicatorsContainer.appendChild(indicator);
}

// Carousel functionality
let currentIndex = 0;
const totalItems = reviewsData.length;

function updateCarousel() {
  // Update the transform to show the current item
  carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // Update active indicator
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Set up event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Set up indicator clicks
document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
    resetAutoSlide(); // Reset the timer when manually changing slides
  });
});

// Auto-slide functionality
let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize carousel
updateCarousel();
startAutoSlide();

// Pause auto-sliding when hovering over the carousel container
const carouselContainerParent = document.querySelector('.carousel-container');
carouselContainerParent.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

carouselContainerParent.addEventListener('mouseleave', () => {
  startAutoSlide();
});

function openModal() {
  document.getElementById("whatsappModal").style.display = "block";
}

function closeModal() {
  document.getElementById("whatsappModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target === document.getElementById("whatsappModal")) {
      closeModal();
  }
}