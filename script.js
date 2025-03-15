const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Get carousel elements
const carouselContainer = document.querySelector('.customer-review-carousel');
const carouselItem = document.querySelector('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

// Create additional carousel items (duplicating the existing one)
const reviewsData = [
  {
    text: "From the initial consultation to the final delivery, the entire process was smooth and stress-free. The team kept me informed at every stage and was always available to answer my questions. The end result was exactly what I was looking for.",
    name: "Emily Rodriguez",
    title: "Small Business Owner"
  },
  {
    text: "The expertise and attention to detail provided by Vel&Mitha made all the difference for our company's financial planning. Their team was professional, knowledgeable, and truly committed to our success.",
    name: "Michael Chen",
    title: "CFO, Tech Innovations Inc."
  },
  {
    text: "I've worked with several accounting firms in the past, but none have matched the level of service I've received from Vel&Mitha. Their proactive approach and clear communication have saved us both time and money.",
    name: "Sarah Johnson",
    title: "Director of Operations"
  },
  {
    text: "Their global tax expertise was invaluable for our expansion into international markets. They navigated complex regulations with ease and provided strategic guidance that helped us avoid costly mistakes.",
    name: "David Thompson",
    title: "CEO, Global Ventures Ltd."
  }
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
    <div>
      <h4 class="customer-name">${review.name}</h4>
      <p class="customer-title">${review.title}</p>
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