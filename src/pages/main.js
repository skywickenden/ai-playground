// import p5 from 'p5';
import NeuralNetwork from '../js/NeuralNetwork';

let brain;
const sketch = (p) => {
  let gray = 0;
  p.setup = function () {
    p.createCanvas(600, 400);
    // console.log('loaded 7');
    brain = new NeuralNetwork(3, 3, 1);
    console.log(brain);
  }

  p.draw = function () {
    p.background(gray);
    p.rect(p.width/2 - 25, p.height/2 - 25, 50, 50);
  }
}

// See https://github.com/processing/p5.js/wiki/Instantiation-Cases
// Hidden in a try to prevent webpack from throwing a reference error.
try {
  new p5(sketch);  // 2nd param can be a canvas html element
} catch(e) {
  if(e.message !== 'p5 is not defined') throw e;
}
