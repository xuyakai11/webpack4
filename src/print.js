import './style.css';
import './index.scss';
import { cube } from './math.js';
import Test from './common.js';
import $ from './jquery-3.1.1.min.js';

export default function print(text){
	console.log(cube(2),text)

}

function component() {
	let element = document.createElement('div'),
			point = new Test(2,3),
			text = document.createTextNode(point.toString());

 	element.appendChild(text);
  return element;
}

$('body').append(component());