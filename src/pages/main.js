import NeuralNetwork from '../js/NeuralNetwork';
import Matrix from '../js/Matrix';
import MatrixMath from '../js/MatrixMath';

let brain;
const sketch = (p) => {
  let gray = 0;
  p.setup = function () {
    // p.createCanvas(600, 400);
    console.log('loaded 7');
    brain = new NeuralNetwork(3, 3, 1);
    console.log(brain);
    let testMatrix = new Matrix(3, 2);
    let testMatrix2 = new Matrix(3, 2);

    testMatrix = MatrixMath.randomize(testMatrix);
    testMatrix2 = MatrixMath.randomize(testMatrix2);
    console.table(testMatrix.data);
    console.table(testMatrix2.data);

    testMatrix.randomize();
    console.table(testMatrix.data);
  }

  p.draw = function () {
    // p.background(gray);
    // p.rect(p.width/2 - 25, p.height/2 - 25, 50, 50);
  }
}

// See https://github.com/processing/p5.js/wiki/Instantiation-Cases
// Hidden in a try to prevent webpack from throwing a reference error.
try {
  new p5(sketch);  // 2nd param can be a canvas html element
} catch(e) {
  if(e.message !== 'p5 is not defined') throw e;
}
