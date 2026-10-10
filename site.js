(() => {
  const loader = document.querySelector('.site-loader');
  if (loader) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = (() => { try { return sessionStorage.getItem('portfolio-loaded') === 'yes'; } catch { return false; } })();
    if (!seen && !reduced) {
      loader.classList.add('is-active');
      setTimeout(() => { loader.classList.remove('is-active'); }, 1450);
    }
    try { sessionStorage.setItem('portfolio-loaded', 'yes'); } catch {}
  }

  const config = window.PORTFOLIO_CONFIG || {};
  const safeUrl = value => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
    catch { return null; }
  };
  const companion = document.querySelector('.companion');
  const toggle = document.querySelector('.companion-toggle');
  const dialog = document.querySelector('#companion-dialog');
  if (toggle && dialog) {
    const setOpen = open => {
      dialog.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      companion.classList.toggle('is-open', open);
    };
    const celebrate = () => {
      const character = toggle.querySelector('.fashion-character');
      if (character && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        character.animate([
          { transform: 'translateY(0) rotate(0deg)' },
          { transform: 'translateY(-18px) rotate(-6deg)', offset: .25 },
          { transform: 'translateY(-5px) rotate(6deg)', offset: .5 },
          { transform: 'translateY(-12px) rotate(-3deg)', offset: .75 },
          { transform: 'translateY(0) rotate(0deg)' }
        ], { duration: 650, easing: 'ease-in-out' });
      }
      companion.classList.remove('is-excited');
      requestAnimationFrame(() => companion.classList.add('is-excited'));
      setTimeout(() => companion.classList.remove('is-excited'), 900);
    };
    toggle.addEventListener('click', () => { setOpen(dialog.hidden); celebrate(); });
    document.querySelector('.companion-close').addEventListener('click', () => { setOpen(false); toggle.focus(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !dialog.hidden) { setOpen(false); toggle.focus(); } });
  }
  const factButton = document.querySelector('#pixel-next');
  const factText = document.querySelector('#pixel-fact');
  const factCount = document.querySelector('#pixel-count');
  const facts = (Array.isArray(config.funFacts) ? config.funFacts : []).filter(value => typeof value === 'string' && value.trim());
  if (factButton && factText && facts.length) {
    let index = 0;
    const showFact = () => {
      factText.textContent = facts[index];
      factCount.textContent = `${String(index + 1).padStart(2, '0')} / ${String(facts.length).padStart(2, '0')}`;
    };
    showFact();
    factButton.addEventListener('click', () => { index = (index + 1) % facts.length; showFact(); });
  } else if (factButton) { factButton.hidden = true; }
  const repository = safeUrl(config.matchflowRepositoryUrl);
  if (repository) {
    document.querySelectorAll('[data-repo-link]').forEach(link => { link.href = repository; link.hidden = false; });
    document.querySelectorAll('[data-repo-placeholder]').forEach(item => { item.hidden = true; });
  }
  const container = document.querySelector('[data-profile-links]');
  if (container) {
    for (const [label, value] of [['LinkedIn', config.linkedinUrl], ['GitHub', config.githubProfileUrl]]) {
      const url = safeUrl(value);
      if (!url) continue;
      const link = document.createElement('a'); link.textContent = `${label} ↗`; link.href = url;
      link.target = '_blank'; link.rel = 'noopener noreferrer'; container.append(link);
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email || '')) {
      const link = document.createElement('a'); link.textContent = 'Get in touch ↗'; link.href = `mailto:${config.email}`; container.append(link);
    }
  }
  document.querySelectorAll('[data-year]').forEach(item => { item.textContent = new Date().getFullYear(); });
})();
