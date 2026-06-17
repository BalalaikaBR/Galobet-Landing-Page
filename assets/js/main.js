// Copiado de js/main.js - versão em assets
// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Odd button toggle
function initOdds() {
  document.querySelectorAll('.odd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const active = btn.classList.toggle('odd-active');
      if (active) {
        btn.style.background = 'rgba(245,197,24,.18)';
        btn.style.borderColor = 'var(--gold)';
      } else {
        btn.style.background = '';
        btn.style.borderColor = '';
      }
    });
  });
}

// Scroll reveal using IntersectionObserver
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.match-card, .step-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// Age gate
function initAgeGate() {
  const ageGate = document.getElementById('ageGate');
  const confirmAge = document.getElementById('confirmAge');
  const denyAge = document.getElementById('denyAge');

  if (!ageGate) return;

  if (localStorage.getItem('ageVerified') === 'true') {
    ageGate.style.display = 'none';
  }

  confirmAge?.addEventListener('click', () => {
    localStorage.setItem('ageVerified', 'true');
    ageGate.style.display = 'none';
  });

  denyAge?.addEventListener('click', () => {
    window.location.href = 'https://google.com';
  });
}

// Ensure initialization runs even if script loads after DOMContentLoaded
function onReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

onReady(function() {
  initOdds();
  initReveal();
  initAgeGate();
});
