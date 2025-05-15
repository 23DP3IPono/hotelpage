document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const downloadBtn = document.getElementById('downloadBtn');
  const closeBtn = document.querySelector('.close-btn');

  downloadBtn.addEventListener('click', (e) => {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.style.display = 'none';
      // Lejupielāde notiek automātiski, jo <a> tagam ir download atribūts
    }, 2000);
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
  };

  // Sadaļu fade-in animācija
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section').forEach(section => observer.observe(section));

  // Funkciju bloku animācija
  const featureObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.feature').forEach(feature => featureObserver.observe(feature));

  // Gluds scroll uz sadaļām
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Scroll uz augšu poga
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      scrollTopBtn.style.display = 'flex';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Papildu animācija pogām
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.12)';
      btn.style.boxShadow = '0 4px 24px rgba(238,187,195,0.18)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
  });
});