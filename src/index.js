/*
 * (c) William Belle, 2019-2024.
 * See the LICENSE file for more details.
 */

const got = require('got');

const UNITS_URL = 'https://search-api.epfl.ch/api/unit';

const buildUnitUrl = (unit, language) => {
  return UNITS_URL + '?q=' + unit + '&hl=' + language;
};

const findUnitByName = (unit, language = 'en') => {
  const url = buildUnitUrl(unit, language);
  return getUnit(url);
};

const findUnitByCode = (code, language = 'en') => {
  const url = buildUnitUrl(code, language);
  return getUnit(url);
};

const getUnit = (url) => {
  return new Promise((resolve, reject) => {
    got(url).then((response) => {
      const data = JSON.parse(response.body);
      resolve(data);
    }).catch((err) => reject(err));
  });
};

exports.findUnitByName = findUnitByName;
exports.findUnitByCode = findUnitByCode;
