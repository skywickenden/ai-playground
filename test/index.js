import http from 'http';
import assert from 'assert';

import '../server/server.js';

import './Matrix.js'

describe('Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3000', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
