document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const downloadBtn = document.getElementById('downloadBtn');
    const closeBtn = document.querySelector('.close-btn');
  
    downloadBtn.onclick = function () {
      modal.style.display = 'flex';
      setTimeout(function () {
        modal.style.display = 'none';
        window.location.href = 'files/program.zip'; // Aizvieto ar reālu ceļu
      }, 2000);
    };
  
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  
    // Animācija kad sekcija parādās skatā
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  
    // Gluda scroll animācija navigācijai
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  