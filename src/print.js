import { cube } from './math.js';
import yaoyao from '../images/yaoyao.jpg';

export default function print(text){
	console.log(cube(2),text)

}

function component() {
  var element = document.createElement('div');

   var b = new Image();
   b.src = yaoyao;
   element.appendChild(b)

  return element;
}

document.body.appendChild(component());
console.log(cube(2))