/*
 * (c) William Belle, 2019.
 * See the LICENSE file for more details.
 */

const got = require('got');

const UNITS_URL = 'https://search-api.epfl.ch/api/unit';

let buildUnitUrl = (unit) => {
  return UNITS_URL + '?q=' + unit;
};

let findUnitByName = (unit) => {
  let url = buildUnitUrl(unit);
  return getUnit(url);
};

let getUnit = (url) => {
  return new Promise((resolve, reject) => {
    got(url).then((response) => {
      const data = JSON.parse(response.body);
      resolve(data);
    }).catch((err) => reject(err));
  });
};

exports.findUnitByName = findUnitByName;
