import MatrixMath from './MatrixMath.js';

export default class Matrix {
  constructor(rows, columns) {
    if (Number.isInteger(rows) === false) {
      throw new Error('rows must be an integer');
    }
    if (Number.isInteger(columns) === false) {
      throw new Error('columns must be an integer');
    }

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
      throw new Error('matrixArray must be a 2 dimensional array');
    }
    for(let i=0; i < matrixArray.length; i++) {
      if (Array.isArray(matrixArray[i]) === false) {
        throw new Error('matrixArray must be a 2 dimensional array');
      }
      for(let j=0; j < matrixArray[i].length; j++) {
        if (typeof matrixArray[i][j] !== 'number') {
          throw new Error('matrixArray must contain numeric values');
        }
        this.data[i][j] = matrixArray[i][j];
      }
    }
  }

  toArray() {
    const arr = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        arr.push(this.data[i][j]);;
      }
    }
    return arr;
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
    const result = MatrixMath.addElementWise(this, matrixAddend);
    this.data = result.data;
  }

  multiply(multiplicand) {
    const result = MatrixMath.multiply(this, multiplicand);
    this.data = result.data;
  }

  multiplyScalar(multiplicand) {
    const result = MatrixMath.multiplyScalar(this, multiplicand);
    this.data = result.data;
  }

  multiplyElementWise(matrixMultiplicand) {
    const result = MatrixMath.multiplyElementWise(this, matrixMultiplicand);
    this.data = result.data;
  }

  product(matrixProductand) {
    const result = MatrixMath.product(this, matrixProductand);
    this.data = result.data;
    this.columns = result.columns;
    this.rows = result.rows;
  }

  transpose() {
    const result = MatrixMath.transpose(this);
    this.data = result.data;
    this.columns = result.columns;
    this.rows = result.rows;
  }

  map(func) {
    const result = MatrixMath.map(this, func);
    this.data = result.data;
  }
}
