import './style.css';
import './index.scss';
import { cube } from './math.js';

export default function print(text){
	console.log(cube(2),text)

}

function component() {
	let element = document.createElement('div'),
			text = document.createTextNode('wahahh!!');
 	element.appendChild(text)
  return element;
}

document.body.appendChild(component());