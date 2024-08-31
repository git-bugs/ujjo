import './style.scss';

import './src/js/line.js';
import { burger } from './src/js/header.js';

const init = () => {
  burger()
};

document.addEventListener('DOMContentLoaded', init);
