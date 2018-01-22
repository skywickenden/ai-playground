import should from 'should';

import Matrix from '../src/js/Matrix.js';

describe('Matrix', () => {
  describe('constructor', () => {
    const matrix = new Matrix(3,4);
    it('should have columns and rows once instantiated', () => {
      matrix.rows.should.equal(3);
      matrix.columns.should.equal(4);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(0);
      matrix.data[2][3].should.equal(0);
      should.equal(matrix.data[2][4], undefined);
      should.equal(matrix.data[3], undefined);
    });
  });

  describe('randomize', () => {
    const matrix = new Matrix(3,4);
    it('Check if randomize produces numbers', () => {
      matrix.randomize();
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.be.an.Number;
      matrix.data[2][3].should.be.an.Number;
      should.equal(matrix.data[2][4], undefined);
      should.equal(matrix.data[3], undefined);
    });
  });

  describe('set', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    it('Check if a set array is correct', () => {
      matrix.set(matrixArray);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(1);
      matrix.data[0][1].should.equal(2);
      matrix.data[0][2].should.equal(3);
      matrix.data[1][0].should.equal(4);
      matrix.data[1][1].should.equal(5);
      matrix.data[1][2].should.equal(6);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
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
      matrix.add(3);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(4);
      matrix.data[0][1].should.equal(5);
      matrix.data[0][2].should.equal(6);
      matrix.data[1][0].should.equal(7);
      matrix.data[1][1].should.equal(8);
      matrix.data[1][2].should.equal(9);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
    });

    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,3);
    it('Check if adding an elementwise matrix is correct', () => {
      matrix2.set(matrixArray);
      matrix3.set(matrixArray);
      matrix2.add(matrix3);
      matrix2.data.should.be.an.Array;
      matrix2.data[0].should.be.an.Array;
      matrix2.data[0][0].should.equal(2);
      matrix2.data[0][1].should.equal(4);
      matrix2.data[0][2].should.equal(6);
      matrix2.data[1][0].should.equal(8);
      matrix2.data[1][1].should.equal(10);
      matrix2.data[1][2].should.equal(12);
      should.equal(matrix2.data[1][3], undefined);
      should.equal(matrix2.data[2], undefined);
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
      matrix.addScalar(3);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(4);
      matrix.data[0][1].should.equal(5);
      matrix.data[0][2].should.equal(6);
      matrix.data[1][0].should.equal(7);
      matrix.data[1][1].should.equal(8);
      matrix.data[1][2].should.equal(9);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
    });
  });

  describe('addElementWise', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrix2 = new Matrix(2,3);
    it('Check if adding an elementwise matrix is correct', () => {
      matrix.set(matrixArray);
      matrix2.set(matrixArray);
      matrix.addElementWise(matrix2);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(2);
      matrix.data[0][1].should.equal(4);
      matrix.data[0][2].should.equal(6);
      matrix.data[1][0].should.equal(8);
      matrix.data[1][1].should.equal(10);
      matrix.data[1][2].should.equal(12);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
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
      matrix.multiply(3);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(3);
      matrix.data[0][1].should.equal(6);
      matrix.data[0][2].should.equal(9);
      matrix.data[1][0].should.equal(12);
      matrix.data[1][1].should.equal(15);
      matrix.data[1][2].should.equal(18);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
    });

    const matrix2 = new Matrix(2,3);
    const matrix3 = new Matrix(2,3);
    it('Check if multiplying an elementwise matrix is correct', () => {
      matrix2.set(matrixArray);
      matrix3.set(matrixArray);
      matrix2.multiply(matrix3);
      matrix2.data.should.be.an.Array;
      matrix2.data[0].should.be.an.Array;
      matrix2.data[0][0].should.equal(1);
      matrix2.data[0][1].should.equal(4);
      matrix2.data[0][2].should.equal(9);
      matrix2.data[1][0].should.equal(16);
      matrix2.data[1][1].should.equal(25);
      matrix2.data[1][2].should.equal(36);
      should.equal(matrix2.data[1][3], undefined);
      should.equal(matrix2.data[2], undefined);
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
      matrix.multiplyScalar(3);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(3);
      matrix.data[0][1].should.equal(6);
      matrix.data[0][2].should.equal(9);
      matrix.data[1][0].should.equal(12);
      matrix.data[1][1].should.equal(15);
      matrix.data[1][2].should.equal(18);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
    });
  });

  describe('multiplyElementWise', () => {
    const matrix = new Matrix(2,3);
    const matrixArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrix2 = new Matrix(2,3);
    it('Check if multiplying an elementwise matrix is correct', () => {
      matrix.set(matrixArray);
      matrix2.set(matrixArray);
      matrix.multiplyElementWise(matrix2);
      matrix.data.should.be.an.Array;
      matrix.data[0].should.be.an.Array;
      matrix.data[0][0].should.equal(1);
      matrix.data[0][1].should.equal(4);
      matrix.data[0][2].should.equal(9);
      matrix.data[1][0].should.equal(16);
      matrix.data[1][1].should.equal(25);
      matrix.data[1][2].should.equal(36);
      should.equal(matrix.data[1][3], undefined);
      should.equal(matrix.data[2], undefined);
    });
  });

});
