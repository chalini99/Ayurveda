const track = document.querySelector(".testimonials-grid");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const visibleCards = 3;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 30; // card + gap
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index >= cards.length - visibleCards;



}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - visibleCards) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider);

let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (index < cards.length - visibleCards) {
      index++;
    } else {
      index = 0; // loop back
    }
    updateSlider();
  }, 4000); // 4 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

/* START AUTO SLIDE */
startAutoSlide();
const viewport = document.querySelector(".testimonials-viewport");

viewport.addEventListener("mouseenter", stopAutoSlide);
viewport.addEventListener("mouseleave", startAutoSlide);
console.log(`Showing testimonials ${index + 1} to ${index + 3}`);
