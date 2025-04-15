document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const downloadBtn = document.getElementById('downloadBtn');
  const closeBtns = document.querySelectorAll('.close-btn');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;
  const modeLabel = document.querySelector('.mode-label');
  const guidePopup = document.getElementById('guidePopup');
  const guideMessage = document.getElementById('guideMessage');

  downloadBtn.onclick = function () {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.style.display = 'none';
      window.location.href = 'files/program.zip';
    }, 2000);
  };

  closeBtns.forEach(btn => {
    btn.onclick = () => {
      btn.closest('.modal').style.display = 'none';
    };
  });

  window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display =
      window.scrollY > 100 ? 'flex' : 'none';
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  themeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    modeLabel.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞';
  });

  document.querySelectorAll('.guide-step').forEach(step => {
    step.addEventListener('click', () => {
      guideMessage.textContent = step.dataset.msg;
      guidePopup.style.display = 'flex';
    });
  });
});
