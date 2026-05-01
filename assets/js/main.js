(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const year = document.querySelector('#current-year');

  const applyTheme = (theme, persist = true) => {
    const activeTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = activeTheme;
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
    if (themeButton) {
      themeButton.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
      themeButton.setAttribute('aria-pressed', String(activeTheme === 'dark'));
    }
    if (themeLabel) themeLabel.textContent = nextTheme === 'dark' ? 'Dark' : 'Light';
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', activeTheme === 'dark' ? '#0d1516' : '#f5f7f7');
    if (persist) {
      try { localStorage.setItem('mn-theme', activeTheme); } catch (_) { /* Theme still works when storage is unavailable. */ }
    }
  };

  if (themeButton) {
    applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);
    themeButton.addEventListener('click', () => {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('.sr-only').textContent = 'Open navigation menu';
    navigation.classList.remove('is-open');
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.querySelector('.sr-only').textContent = isOpen ? 'Open navigation menu' : 'Close navigation menu';
      navigation.classList.toggle('is-open', !isOpen);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (menuButton.getAttribute('aria-expanded') !== 'true') return;
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  if (year) year.textContent = String(new Date().getFullYear());
})();
