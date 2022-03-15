/*
 * (c) William Belle, 2019-2022.
 * See the LICENSE file for more details.
 */

require('chai').should();

const epflUnitApi = require('../src/index.js');

describe('epfl-unit-api findUnitByCode', function () {
  this.timeout(10000);

  it('should find unit ISAS-FSD', function () {
    return epflUnitApi.findUnitByCode(
      13030,
      'en'
    ).then((unit) => {
      unit.acronym.should.equal('ISAS-FSD');
      unit.name.trim().should.equal('Full-Stack Development');
    });
  });

  it('should find unit ISCS-GE', function () {
    return epflUnitApi.findUnitByCode(
      13051
    ).then((unit) => {
      unit.acronym.should.equal('ISCS-GE');
      unit.name.trim().should.equal(
        'IS Central Services Administration'
      );
    });
  });
});
