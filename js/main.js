// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
}

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    const formData = new FormData(contactForm);
    
    // Reset previous errors
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error');
    });

    // Validate required fields
    ['name', 'email', 'message'].forEach(field => {
      const value = formData.get(field);
      const formGroup = document.querySelector(`[name="${field}"]`).parentElement;
      const errorMessage = formGroup.querySelector('.error-message');

      if (!value.trim()) {
        isValid = false;
        formGroup.classList.add('error');
        errorMessage.textContent = 'This field is required';
      }
    });

    // Validate email format
    const email = formData.get('email');
    const emailGroup = document.querySelector('[name="email"]').parentElement;
    const emailError = emailGroup.querySelector('.error-message');
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      emailGroup.classList.add('error');
      emailError.textContent = 'Please enter a valid email address';
    }

    if (isValid) {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', Object.fromEntries(formData));
      
      // Show success message
      showToast('Message sent successfully!', 'success');
      
      // Reset form
      contactForm.reset();
    }
  });
}

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// Update copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}