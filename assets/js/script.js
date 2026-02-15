'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * explore video - play responsive video on button click
 */

const playBtnPortrait = document.getElementById("playBtnPortrait");
const playBtnLandscape = document.getElementById("playBtnLandscape");
const videoThumbnailPortrait = document.getElementById("videoThumbnailPortrait");
const videoThumbnailLandscape = document.getElementById("videoThumbnailLandscape");
const exploreVideoPortrait = document.getElementById("exploreVideoPortrait");
const exploreVideoLandscape = document.getElementById("exploreVideoLandscape");
const videoCard = document.getElementById("videoPlayer");

// Ensure both videos are paused on load
if (exploreVideoPortrait) {
  exploreVideoPortrait.pause();
}
if (exploreVideoLandscape) {
  exploreVideoLandscape.pause();
}

function playVideo(isPortrait) {
  if (isPortrait) {
    // Ensure landscape video is paused and hidden
    exploreVideoLandscape.pause();
    exploreVideoLandscape.currentTime = 0;
    exploreVideoLandscape.classList.remove("playing");
    videoThumbnailLandscape.classList.remove("hidden");
    
    // Play portrait video
    videoThumbnailPortrait.classList.add("hidden");
    videoCard.classList.add("playing");
    exploreVideoPortrait.classList.add("playing");
    exploreVideoPortrait.play().catch(function(error) {
      console.log("Portrait video play failed:", error);
    });
  } else {
    // Ensure portrait video is paused and hidden
    exploreVideoPortrait.pause();
    exploreVideoPortrait.currentTime = 0;
    exploreVideoPortrait.classList.remove("playing");
    videoThumbnailPortrait.classList.remove("hidden");
    
    // Play landscape video
    videoThumbnailLandscape.classList.add("hidden");
    videoCard.classList.add("playing");
    exploreVideoLandscape.classList.add("playing");
    exploreVideoLandscape.play().catch(function(error) {
      console.log("Landscape video play failed:", error);
    });
  }
}

// Play portrait video (mobile)
if (playBtnPortrait) {
  playBtnPortrait.addEventListener("click", function (e) {
    e.preventDefault();
    playVideo(true);
  });
}

// Play landscape video (desktop)
if (playBtnLandscape) {
  playBtnLandscape.addEventListener("click", function (e) {
    e.preventDefault();
    playVideo(false);
  });
}

// Reset on video end
if (exploreVideoPortrait) {
  exploreVideoPortrait.addEventListener("ended", function () {
    videoThumbnailPortrait.classList.remove("hidden");
    videoCard.classList.remove("playing");
    exploreVideoPortrait.classList.remove("playing");
    exploreVideoPortrait.currentTime = 0;
  });
}

if (exploreVideoLandscape) {
  exploreVideoLandscape.addEventListener("ended", function () {
    videoThumbnailLandscape.classList.remove("hidden");
    videoCard.classList.remove("playing");
    exploreVideoLandscape.classList.remove("playing");
    exploreVideoLandscape.currentTime = 0;
  });
}


/**
 * class card click - auto-select class in booking form
 */

const classCardLinks = document.querySelectorAll(".card-title[data-class]");
const classSelect = document.querySelector("#bookingForm select[name='class']");

classCardLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const className = this.getAttribute("data-class");
    if (classSelect) {
      classSelect.value = className;
    }
  });
});


/**
 * booking form - save to localStorage
 */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(bookingForm);
  const name = formData.get("name");
  const className = formData.get("class");

  // Create booking object
  const booking = {
    id: Date.now(),
    name: name,
    email: formData.get("email"),
    phone: formData.get("phone"),
    class: className,
    date: formData.get("date"),
    message: formData.get("message") || "",
    bookedAt: new Date().toISOString(),
    status: "pending"
  };

  // Save to localStorage
  const existingBookings = JSON.parse(localStorage.getItem("fitlife_bookings") || "[]");
  existingBookings.push(booking);
  localStorage.setItem("fitlife_bookings", JSON.stringify(existingBookings));

  // Build WhatsApp message with form data
  let message = `Hi, I'd like to book a class!\n`;
  message += `Name: ${name}\n`;
  message += `Email: ${formData.get("email")}\n`;
  message += `Phone: ${formData.get("phone")}\n`;
  message += `Class: ${className}\n`;
  message += `Date: ${formData.get("date")}\n`;
  if (formData.get("message")) {
    message += `Message: ${formData.get("message")}`;
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/916384973278?text=${encoded}`, "_blank");

  // Show toast notification
  showToast(`Booking confirmed for ${className}! We'll contact you soon, ${name}.`);
  bookingForm.reset();
});


/**
 * toast notification
 */

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");
  toastMsg.textContent = message;
  toast.classList.add("active");
  setTimeout(function () {
    toast.classList.remove("active");
  }, 4000);
}


/**
 * contact form - save to localStorage
 */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const inquiry = {
    id: Date.now(),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    sentAt: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem("fitlife_inquiries") || "[]");
  existing.push(inquiry);
  localStorage.setItem("fitlife_inquiries", JSON.stringify(existing));

  showToast(`Thanks ${inquiry.name}! Your message has been sent.`);
  contactForm.reset();
});