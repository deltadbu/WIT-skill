(() => {
  const root = document.documentElement;
  const select = document.getElementById('theme-select');
  select.value = root.dataset.theme;
  select.closest('label').hidden = false;
  select.addEventListener('change', () => {
    root.dataset.theme = select.value;
    try { localStorage.setItem('wit-theme', select.value); } catch (e) {}
  });

  // Derive navigation from rendered headings, never a second copy of the article.
  const article = document.querySelector('article');
  const headings = [...article.querySelectorAll('h1, h2')];
  if (headings[0]?.tagName === 'H1') headings.shift();
  if (headings.length < 3) return;
  const list = document.createElement('ul');
  headings.forEach((heading, index) => {
    if (!heading.id) {
      let id = `wit-section-${index + 1}`;
      while (document.getElementById(id)) id += '-';
      heading.id = id;
    }
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent;
    const item = document.createElement('li');
    item.append(link);
    list.append(item);
  });
  document.getElementById('page-contents').append(list);
  document.querySelector('.contents details').open = !matchMedia('(max-width: 760px)').matches;
  document.querySelector('.contents').hidden = false;
})();
