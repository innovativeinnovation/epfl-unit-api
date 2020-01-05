/*
 * (c) William Belle, 2019-2020.
 * See the LICENSE file for more details.
 */

const should = require('chai').should();
const rewire = require('rewire');

const epflUnitApi = require('../src/index.js');

describe('epfl-unit-api findUnitByName', function () {
  this.timeout(10000);

  it('should find unit EXAPP', function () {
    return epflUnitApi.findUnitByName(
      'exapp'
    ).then((unit) => {
      unit.code.should.equal(13033);
      unit.name.should.equal('SI - Applications');
    });
  });

  it('should fail with a wrong service url', (done) => {
    const epflUnitApiMock = rewire('../src/index.js');
    epflUnitApiMock.__set__('UNITS_URL', 'foobar');
    const result = epflUnitApiMock.findUnitByName();
    result.then((response) => {
      should.fail();
      done();
    }).catch((reason) => done());
  });
});
