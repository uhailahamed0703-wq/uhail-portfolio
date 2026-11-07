/**
 * M.I. Uhail Ahamed — Interactive Portfolio Logic
 * Express.js Backend Integration + Speech Synthesis Voice Intro
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAnimatedCounters();
  initBookingModal();
  initPortfolioFilter();
  initSmoothScroll();
  initTypewriter();
  initInteractiveServices();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('navToggle');
  const menuNav = document.getElementById('navMenu');

  if (toggleBtn && menuNav) {
    toggleBtn.addEventListener('click', () => {
      menuNav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });

    menuNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuNav.classList.remove('active');
        toggleBtn.classList.remove('active');
      });
    });
  }
}

/* Animated Number Counters for Stats */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-num[data-target]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        const isDecimal = entry.target.getAttribute('data-decimal') === 'true';
        animateValue(entry.target, 0, target, 1500, isDecimal);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(obj, start, end, duration, isDecimal) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentVal = progress * (end - start) + start;
    obj.textContent = isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = isDecimal ? end.toFixed(2) : end;
    }
  };
  window.requestAnimationFrame(step);
}

/* Contact / Booking Modal Logic with Express.js Backend Handler */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('.btn-book, .open-modal');
  const closeBtn = document.getElementById('modalClose');
  const form = document.getElementById('bookingForm');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('.btn-submit-contact');
      const originalText = submitBtn ? submitBtn.textContent : 'SEND MESSAGE';

      const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone') ? document.getElementById('phone').value : '',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'DISPATCHING...';
      }

      try {
        // Post directly to Express.js backend API (/api/contact)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          alert('✓ Message received by Uhail\'s Express.js server! Thank you for reaching out.');
          form.reset();
          if (modal) modal.classList.remove('active');
        } else {
          throw new Error(data.error || 'Server submission issue');
        }
      } catch (err) {
        // Fallback: Open prefilled mail client
        console.warn('Backend submission fallback to mailto:', err);
        const body = `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\n\nMessage:\n${payload.message}`;
        window.location.href = `mailto:uhailahamed0703@gmail.com?subject=${encodeURIComponent(payload.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`;
        if (modal) modal.classList.remove('active');
        form.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }
}

/* Portfolio Interactive Filter */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.c-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'grid';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* Smooth Scroll Helper */
function initSmoothScroll() {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* Typewriter Effect */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;

  const roles = [
    'Full Stack Developer',
    'AI Engineer',
    'Software Developer'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause at the end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 800);
}

/* Interactive Services Section */
function initInteractiveServices() {
  const serviceItems = document.querySelectorAll('.service-item');
  const serviceImage = document.getElementById('services-image');
  const serviceDesc = document.getElementById('services-desc');

  if (!serviceItems.length || !serviceImage || !serviceDesc) return;

  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      serviceItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      const newImage = this.getAttribute('data-image');
      const newDesc = this.getAttribute('data-desc');

      serviceImage.style.opacity = '0';
      serviceDesc.style.opacity = '0';

      setTimeout(() => {
        serviceImage.src = newImage;
        serviceDesc.textContent = newDesc;
        serviceImage.style.opacity = '1';
        serviceDesc.style.opacity = '1';
      }, 250);
    });
  });
}

