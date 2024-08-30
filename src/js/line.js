const getWidth = (content, item, name) => {
  const contentStyle = getComputedStyle(document.querySelector(content));
  const itemStyle = getComputedStyle(document.querySelector(item));

  const gap = parseInt(contentStyle.gap.split(' ')[1]);
  const width = +parseInt(itemStyle.width).toFixed(0);

  const elWidth = gap + width;

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes ${name} {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-${elWidth}px);
      }
    }
  `;

  document.head.appendChild(style);
};

const init = () => {
  getWidth('.line-content', '.line-item', 'line');
  getWidth('.main-marquee-content', '.main-marquee-item', 'marquee');
  getWidth('.footer-line-content', '.footer-line-item', 'footer-line');
};

document.addEventListener('DOMContentLoaded', init);
