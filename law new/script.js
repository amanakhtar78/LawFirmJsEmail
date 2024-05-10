document.querySelector(".navbar-toggle").addEventListener("click", function () {
  document.querySelector(".navbar-menu").classList.toggle("active");
});
// Sample testimonials data
const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
  },
  { quote: "Integer nec odio. Praesent libero.", author: "Jane Smith" },
  // Add more testimonials as needed
];

// Function to populate testimonials
function populateTestimonials() {
  const testimonialContainer = document.querySelector(".testimonial-container");
  testimonialContainer.innerHTML = "";

  testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement("div");
    testimonialElement.classList.add("testimonial");

    testimonialElement.innerHTML = `
      <p class="quote">"${testimonial.quote}"</p>
      <p class="author">- ${testimonial.author}</p>
    `;

    testimonialContainer.appendChild(testimonialElement);
  });
}

// Call the function to populate testimonials
populateTestimonials();
