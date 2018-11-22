
import './style.css';
import './index.scss';
import yaoyao from '../images/yaoyao.jpg';
import math, { cube } from './math.js';
import $ from './jquery-3.1.1.min.js';

function component() {
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = ['Hello', 'webpack4','5 cubed is equal to ' + cube(5)].join(' ');
  var six = math.add(3);
  console.log(six)
  var b = new Image();
  b.src = yaoyao;
  element.appendChild(b)

  return element;
}
console.log(this,window)
document.body.appendChild(component())
// $('body').append(component());
