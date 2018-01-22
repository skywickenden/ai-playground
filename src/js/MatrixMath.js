import Matrix from './Matrix.js';

export default class MatrixMath {

  static validateMatrix(matrix) {
    if (matrix instanceof Matrix === false) {
      throw new Error('Not a valid Matrix');
    }
  }

  static randomize(matrix) {
    MatrixMath.validateMatrix(matrix);
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.columns; j++) {
        matrix.data[i][j] = Math.floor(Math.random() * 10);
      }
    }
    return matrix;
  }

  static validateMatrixSizesEqual(matrixA, matrixB) {
    if (matrixA.columns !== matrixB.columns) {
      throw new Error('Column sizes of the two matrixes must be equal');
    }
    if (matrixA.rows !== matrixB.rows) {
      throw new Error('Row sizes of the two matrixes must be equal');
    }
    return true;
  }

  static add(matrixA, addend) {
    MatrixMath.validateMatrix(matrixA);

    if (typeof addend === 'number') {
      return MatrixMath.addScalar(matrixA, addend);
    }
    if (addend instanceof Matrix) {
      return MatrixMath.addElementWise(matrixA, addend);
    }

    throw new Error('addend must be a number.');
  }

  static addScalar(matrixA, addend) {
    MatrixMath.validateMatrix(matrixA);
    if (typeof addend !== 'number') {
      throw new Error('addend must be a number.');
    }
    const result = new Matrix(matrixA.rows, matrixA.columns);
    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.columns; j++) {
        result.data[i][j] = matrixA.data[i][j] + addend;
      }
    }
    return result;
  }

  static addElementWise(matrixA, matrixB) {
    MatrixMath.validateMatrix(matrixA);
    MatrixMath.validateMatrix(matrixB);
    MatrixMath.validateMatrixSizesEqual(matrixA, matrixB);

    const result = new Matrix(matrixA.rows, matrixA.columns);
    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.columns; j++) {
        result.data[i][j] = matrixA.data[i][j] + matrixB.data[i][j];
      }
    }
    return result;
  }


  static multiply(matrixA, multiplicand) {
    MatrixMath.validateMatrix(matrixA);

    if (typeof multiplicand === 'number') {
      return MatrixMath.multiplyScalar(matrixA, multiplicand);
    }
    if (multiplicand instanceof Matrix) {
      return MatrixMath.multiplyElementWise(matrixA, multiplicand);
    }

    throw new Error('multiplicand must be a number.');
  }

  static multiplyScalar(matrixA, multiplicand) {
    MatrixMath.validateMatrix(matrixA);
    if (typeof multiplicand !== 'number') {
      throw new Error('multiplicand must be a number.');
    }
    const result = new Matrix(matrixA.rows, matrixA.columns);
    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.columns; j++) {
        result.data[i][j] = matrixA.data[i][j] * multiplicand;
      }
    }
    return result;
  }

  static multiplyElementWise(matrixA, matrixB) {
    MatrixMath.validateMatrix(matrixA);
    MatrixMath.validateMatrix(matrixB);
    MatrixMath.validateMatrixSizesEqual(matrixA, matrixB);

    const result = new Matrix(matrixA.rows, matrixA.columns);
    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.columns; j++) {
        result.data[i][j] = matrixA.data[i][j] * matrixB.data[i][j];
      }
    }
    return result;
  }


}
