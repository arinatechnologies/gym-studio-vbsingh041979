// Form submission handler
document.getElementById('customForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // In a real implementation, this would submit to your form handler
  console.log('Form submitted:', {
    name,
    email,
    phone: document.getElementById('phone').value.trim(),
    service: document.getElementById('service').value,
    message
  });
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// Phone number formatting (optional)
document.getElementById('phone')?.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^0-9]/g, '');
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
  }
});