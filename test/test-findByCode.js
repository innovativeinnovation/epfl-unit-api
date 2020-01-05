/*
 * (c) William Belle, 2019-2020.
 * See the LICENSE file for more details.
 */

require('chai').should();

const epflUnitApi = require('../src/index.js');

describe('epfl-unit-api findUnitByCode', function () {
  this.timeout(10000);

  it('should find unit IDEV-FSD', function () {
    return epflUnitApi.findUnitByCode(
      13030,
      'en'
    ).then((unit) => {
      unit.acronym.should.equal('IDEV-FSD');
      unit.name.trim().should.equal('SI - Full-Stack Development');
    });
  });

  it('should find unit IDEV-GE', function () {
    return epflUnitApi.findUnitByCode(
      13051
    ).then((unit) => {
      unit.acronym.should.equal('IDEV-GE');
      unit.name.trim().should.equal(
        'SI - Engineering and Development Administration'
      );
    });
  });
});
