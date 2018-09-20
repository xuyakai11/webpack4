import './style.css';
import niu from '../images/niu.jpg';
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
	var btn = document.createElement('button');
  // Lodash, now imported by this script
   element.innerHTML = ['Hello', 'webpack4'].join(' ');
   element.classList.add('hello');
   var b = new Image();
   b.src = niu;
   element.appendChild(b)

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
