/*
 * (c) William Belle, 2019.
 * See the LICENSE file for more details.
 */

const got = require('got');

const UNITS_URL = 'https://search-api.epfl.ch/api/unit';

let buildUnitUrl = (unit, language) => {
  return UNITS_URL + '?q=' + unit + '&hl=' + language;
};

let buildCodeUrl = (code, language) => {
  return UNITS_URL + '?acro=' + code + '&hl=' + language;
};

let findUnitByName = (unit, language = 'en') => {
  let url = buildUnitUrl(unit, language);
  return getUnit(url);
};

let findUnitByCode = (code, language = 'en') => {
  let url = buildCodeUrl(code, language);
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
exports.findUnitByCode = findUnitByCode;
