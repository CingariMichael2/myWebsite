// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Resume format dropdown
const resumeToggle = document.getElementById('resume-toggle');
const resumeMenu = document.getElementById('resume-menu');

resumeToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = resumeMenu.hidden;
  resumeMenu.hidden = !isOpen;
  resumeToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
  if (!resumeMenu.hidden && !event.target.closest('#resume-dropdown')) {
    resumeMenu.hidden = true;
    resumeToggle.setAttribute('aria-expanded', 'false');
  }
});

resumeMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    resumeMenu.hidden = true;
    resumeToggle.setAttribute('aria-expanded', 'false');
  });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.getElementById('empty-state');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});
