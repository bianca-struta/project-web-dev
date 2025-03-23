// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('show');
    }
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});