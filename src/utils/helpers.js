export const buildContainer = (name, i18nInstance) => {
  const container = document.createElement('div');
  container.classList.add('card', 'border-0');

  const div = document.createElement('div');
  div.classList.add('card-body');
  const h2 = document.createElement('h2');
  h2.classList.add('card-title', 'h4');
  h2.textContent = i18nInstance.t(`containers.${name}`);
  div.appendChild(h2);

  const ul = document.createElement('ul');
  ul.classList.add('list-group', 'border-0', 'rounded-0');
  container.replaceChildren(div, ul);
  return container;
};

export const setAttributes = (el, attrs) => {
  Object.entries(attrs).forEach((element) => {
    const [key, value] = element;
    el.setAttribute(key, value);
  });
};
