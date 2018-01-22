import should from 'should';
import assert from 'assert';

import Matrix from '../src/js/Matrix.js';
import MatrixMath from '../src/js/MatrixMath.js';

describe('MatrixMath', () => {
  describe('validateMatrix', () => {
    const matrix = new Matrix(3,4);
    it('should return undefined if valid', () => {
      should.equal(MatrixMath.validateMatrix(matrix), undefined);
    });
    it('should throw an error if not valid', () => {
      assert.throws(
        () => {MatrixMath.validateMatrix(4)},
        Error,
        'Not a valid Matrix'
      );
    });
  });

  describe('randomize', () => {
    const matrix = new Matrix(3,4);
    it('Check if randomize produces numbers', () => {
      const result = MatrixMath.randomize(matrix);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.be.an.Number;
      result.data[2][3].should.be.an.Number;
      should.equal(result.data[2][4], undefined);
      should.equal(result.data[3], undefined);
    });
  });

  describe('validateMatrixSizesEqual', () => {
    const matrix = new Matrix(2,3);
    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,4);
    const matrix4 = new Matrix(3,3);
    it('Check if matrix dimensions are equal', () => {
      const result = MatrixMath.validateMatrixSizesEqual(matrix, matrix2);
      result.should.equal(true);
    });
    it('should throw an error if columns not equal in length', () => {
      assert.throws(
        () => {MatrixMath.validateMatrixSizesEqual(matrix, matrix3)},
        Error,
        'Column sizes of the two matrixes must be equal'
      );
    });
    it('should throw an error if rows not equal in length', () => {
      assert.throws(
        () => {MatrixMath.validateMatrixSizesEqual(matrix, matrix4)},
        Error,
        'Row sizes of the two matrixes must be equal'
      );
    });
  });

  describe('add', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    it('Check if adding a scalar is correct', () => {
      matrix.set(matrixArray);
      const result = MatrixMath.add(matrix, 3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(4);
      result.data[0][1].should.equal(5);
      result.data[0][2].should.equal(6);
      result.data[1][0].should.equal(7);
      result.data[1][1].should.equal(8);
      result.data[1][2].should.equal(9);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });

    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,3);
    it('Check if adding an elementwise matrix is correct', () => {
      matrix2.set(matrixArray);
      matrix3.set(matrixArray);
      const result = MatrixMath.add(matrix2, matrix3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(2);
      result.data[0][1].should.equal(4);
      result.data[0][2].should.equal(6);
      result.data[1][0].should.equal(8);
      result.data[1][1].should.equal(10);
      result.data[1][2].should.equal(12);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });
  });

  describe('add scalar', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    it('Check if adding a scalar is correct', () => {
      matrix.set(matrixArray);
      const result = MatrixMath.addScalar(matrix, 3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(4);
      result.data[0][1].should.equal(5);
      result.data[0][2].should.equal(6);
      result.data[1][0].should.equal(7);
      result.data[1][1].should.equal(8);
      result.data[1][2].should.equal(9);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });
  });

  describe('addElementWise', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,3);
    it('Check if adding an elementwise matrix is correct', () => {
      matrix2.set(matrixArray);
      matrix3.set(matrixArray);
      const result = MatrixMath.addElementWise(matrix2, matrix3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(2);
      result.data[0][1].should.equal(4);
      result.data[0][2].should.equal(6);
      result.data[1][0].should.equal(8);
      result.data[1][1].should.equal(10);
      result.data[1][2].should.equal(12);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });
  });

  describe('multiply', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    it('Check if multiplying a scalar is correct', () => {
      matrix.set(matrixArray);
      const result = MatrixMath.multiply(matrix, 3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(3);
      result.data[0][1].should.equal(6);
      result.data[0][2].should.equal(9);
      result.data[1][0].should.equal(12);
      result.data[1][1].should.equal(15);
      result.data[1][2].should.equal(18);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });

    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,3);
    it('Check if multiplying an elementwise matrix is correct', () => {
      matrix2.set(matrixArray);
      matrix3.set(matrixArray);
      const result = MatrixMath.multiply(matrix2, matrix3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(1);
      result.data[0][1].should.equal(4);
      result.data[0][2].should.equal(9);
      result.data[1][0].should.equal(16);
      result.data[1][1].should.equal(25);
      result.data[1][2].should.equal(36);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });
  });

  describe('multiply scalar', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    it('Check if multiplying a scalar is correct', () => {
      matrix.set(matrixArray);
      const result = MatrixMath.multiply(matrix, 3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(3);
      result.data[0][1].should.equal(6);
      result.data[0][2].should.equal(9);
      result.data[1][0].should.equal(12);
      result.data[1][1].should.equal(15);
      result.data[1][2].should.equal(18);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });
  });

  describe('multiplyElementWise', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,3);
    it('Check if multiplying an elementwise matrix is correct', () => {
      matrix2.set(matrixArray);
      matrix3.set(matrixArray);
      const result = MatrixMath.multiply(matrix2, matrix3);
      result.data.should.be.an.Array;
      result.data[0].should.be.an.Array;
      result.data[0][0].should.equal(1);
      result.data[0][1].should.equal(4);
      result.data[0][2].should.equal(9);
      result.data[1][0].should.equal(16);
      result.data[1][1].should.equal(25);
      result.data[1][2].should.equal(36);
      should.equal(result.data[1][3], undefined);
      should.equal(result.data[2], undefined);
    });
  });

});
