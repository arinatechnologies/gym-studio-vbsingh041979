// Service card interaction
document.addEventListener('DOMContentLoaded', function() {
  const learnMoreButtons = document.querySelectorAll('.learn-more');
  
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
      alert(`More information about ${serviceTitle} will be displayed here. This could open a modal or link to a detailed service page.`);
    });
  });
});