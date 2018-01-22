import MatrixMath from './MatrixMath.js';

export default class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.data = [];

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  set(matrixArray) {
    if (Array.isArray(matrixArray) === false) {
      throw 'matrixArray must be a 2 dimensional array';
    }
    for(let i=0; i < matrixArray.length; i++) {
      if (Array.isArray(matrixArray[i]) === false) {
        throw 'matrixArray must be a 2 dimensional array';
      }
      for(let j=0; j < matrixArray[i].length; j++) {
        if (typeof matrixArray[i][j] !== 'number') {
          throw 'matrixArray must contain numeric values: '
            + i + ' ' + ' ' + j + ' ' + typeof matrixArray[i][j];
        }
        this.data[i][j] = matrixArray[i][j];
      }
    }
  }

  randomize() {
    const result = MatrixMath.randomize(this);
    this.data = result.data;
  }

  add(addend) {
    const result = MatrixMath.add(this, addend);
    this.data = result.data;
  }

  addScalar(addend) {
    const result = MatrixMath.addScalar(this, addend);
    this.data = result.data;
  }

  addElementWise(matrixAddend) {
    const result = MatrixMath.addScalar(this, matrixAddend);
    this.data = result.data;
  }

  multiply(multiplicand) {
    const result = MatrixMath.multiply(this, multiplicand);
    this.data = result.data;
  }

  multiplyScalar(multiplicand) {
    const result = MatrixMath.addScalar(this, multiplicand);
    this.data = result.data;
  }

  multiplyElementWise(matrixMultiplicand) {
    const result = MatrixMath.addScalar(this, matrixMultiplicand);
    this.data = result.data;
  }
}
