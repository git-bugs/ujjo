export const burger = () => {
  const btn = document.querySelector('.header-btn');
  const menu = document.querySelector('.header-list');

  const init = (e) => {
    const target = e.target;
    if (
      target.closest('.header-btn') &&
      !target.closest('.header-btn-active')
    ) {
      btn.classList.add('header-btn-active');
    } else {
      btn.classList.remove('header-btn-active');
    }
    menu.classList.toggle('header-list-active');
  };

  btn.addEventListener('click', init);
};
