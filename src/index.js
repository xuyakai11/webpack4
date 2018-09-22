
import './style.css';
import './index.scss';
import yaoyao from '../images/yaoyao.jpg';
import Print from './print.js';
import { cube } from './math.js';
function component() {
  var element = document.createElement('div');
	var btn = document.createElement('button');
  // Lodash, now imported by this script
   element.innerHTML = ['Hello', 'webpack4','5 cubed is equal to ' + cube(5)].join(' ');
   var b = new Image();
   b.src = yaoyao;
   element.appendChild(b)

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = Print.bind(null,'Hello webpack4');
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
