document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('booking-form');
  const contactForm = document.getElementById('contact-form');

  if (bookingForm) {
      bookingForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Booking submitted successfully!');
      });
  }

  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Message sent successfully!');
      });
  }
});
