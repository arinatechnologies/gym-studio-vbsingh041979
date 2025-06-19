// Optional JavaScript for About Page
document.addEventListener('DOMContentLoaded', function() {
  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });
  
  // Team member hover effect enhancement
  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
      this.querySelector('.member-photo').style.borderColor = '#e74c3c';
    });
    
    member.addEventListener('mouseleave', function() {
      this.querySelector('.member-photo').style.borderColor = '#f1f1f1';
    });
  });
});