/*
 * (c) William Belle, 2019.
 * See the LICENSE file for more details.
 */

require('chai').should();

const epflUnitApi = require('../src/index.js');

describe('epfl-unit-api findUnitByCode', function () {
  this.timeout(10000);

  it('should find unit IDEV-FSD', function () {
    return epflUnitApi.findUnitByCode(
      13030
    ).then((unit) => {
      unit.acronym.should.equal('IDEV-FSD');
      unit.name.should.equal('SI - Développement Full-Stack');
    });
  });
});
