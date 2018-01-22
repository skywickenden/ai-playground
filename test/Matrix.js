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

  // describe('add', () => {
  //   const matrix = new Matrix(2,3);
  //   it('Check if adding a scalar is correct', function() {
  //     matrix.set(matrixArray);
  //     matrix.data.should.be.an.Array;
  //     matrix.data[0].should.be.an.Array;
  //     matrix.data[0][0].should.equal(1);
  //     matrix.data[0][1].should.equal(2);
  //     matrix.data[0][2].should.equal(3);
  //     matrix.data[1][0].should.equal(4);
  //     matrix.data[1][1].should.equal(5);
  //     matrix.data[1][2].should.equal(6);
  //     should.equal(matrix.data[1][3], undefined);
  //     should.equal(matrix.data[2], undefined);
  //   });
  // });
});
