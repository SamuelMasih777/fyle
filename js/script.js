document.addEventListener("DOMContentLoaded", function () {
  // Contact form modal
  document
    .getElementById("contact-us-btn")
    .addEventListener("click", function () {
      new bootstrap.Modal(document.getElementById("contactModal")).show();
    });

  // Form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevent default form submission

      const formData = new FormData(this);

      try {
        const response = await axios.post(
          "https://getform.io/f/bnleqewb",
          formData
        ); // Replace with your actual endpoint URL

        if (response.status === 200) {
          console.log("Form submitted successfully:", response.data);
          alert("Form submitted successfully!");
          // Hide modal on success
          const modalElement = document.getElementById("contactModal");
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance.hide();
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("An error occurred. Please try again.");
      }
    });

  // Other JavaScript functionality...
  // Image slider
  let currentSlide = 0;
const slides = $('.slider-item');
const totalSlides = slides.length;
const visibleSlides = 4; // Adjust this based on how many slides you want visible at once

function setupSlider() {
  // Clone slides for seamless looping
  $('.slider-content').append(slides.clone()).prepend(slides.clone());
  updateSlider(0);
}

function updateSlider(index, animate = true) {
  currentSlide = index;
  const slideWidth = $('.slider-item').outerWidth(true);
  const offset = (totalSlides + currentSlide) * slideWidth;
  
  $('.slider-content').css({
    'transition': animate ? 'transform 0.5s ease' : 'none',
    'transform': `translateX(-${offset}px)`
  });

  if (!animate) {
    // Force reflow
    $('.slider-content')[0].offsetHeight;
    $('.slider-content').css('transition', 'transform 0.5s ease');
  }

  updateDots();
}

function updateDots() {
  $('.slider-dot').removeClass('active');
  const visibleDots = 3;
  const adjustedSlide = currentSlide % totalSlides;
  const startDot = Math.max(0, Math.min(adjustedSlide, totalSlides - visibleDots));
  
  $('.slider-dots').empty();
  for (let i = startDot; i < startDot + visibleDots; i++) {
    const dotIndex = i % totalSlides;
    const isActive = dotIndex === adjustedSlide ? 'active' : '';
    $('.slider-dots').append(`<span class="slider-dot ${isActive}" data-index="${dotIndex}"></span>`);
  }
}

function nextSlide() {
  updateSlider(currentSlide + 1);
  if (currentSlide >= totalSlides * 2 - visibleSlides) {
    setTimeout(() => updateSlider(totalSlides, false), 500);
  }
}

function prevSlide() {
  updateSlider(currentSlide - 1);
  if (currentSlide < 0) {
    setTimeout(() => updateSlider(totalSlides - 1, false), 500);
  }
}

$(document).on('click', '.slider-dot', function() {
  updateSlider(parseInt($(this).data('index')));
});

// Auto slide
setInterval(nextSlide, 5000);

// Initial setup
setupSlider();

// Hover effect for overlay
$('.slider-item').hover(
  function() { $(this).find('.overlay').fadeIn(); },
  function() { $(this).find('.overlay').fadeOut(); }
);
  // Our Project section
  $(".project-item").click(function () {
    const imageUrl = $(this).data("image");
    $("#project-image").attr("src", imageUrl);
    $(".project-item").removeClass("active");
    $(this).addClass("active");
  });

  // Initialize
  //  showSlide(0);
});
