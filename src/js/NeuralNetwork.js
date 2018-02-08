import Matrix from '../js/Matrix';
import MatrixMath from '../js/MatrixMath';

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

export default class NeuralNetwork {
  constructor(inputNodes, hiddenNodes, outputNodes) {
    this.inputNodes = inputNodes;
    this.hiddenNodes = hiddenNodes;
    this.outputNodes = outputNodes;

    this.weights_ih = new Matrix(this.hiddenNodes, this.inputNodes);
    this.weights_ho = new Matrix(this.outputNodes, this.hiddenNodes);
    this.weights_ih.randomize();
    this.weights_ho.randomize();

    this.bias_h = new Matrix(this.hiddenNodes, 1);
    this.bias_o = new Matrix(this.outputNodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }

  feedforward(inputArray) {

    let inputs = MatrixMath.fromArray(inputArray);

    console.log(this.weights_ih, inputs);
    let hidden = MatrixMath.product(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    // activation function
    hidden.map(sigmoid);

    let output = MatrixMath.product(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(sigmoid);

    return output;
  }
}
