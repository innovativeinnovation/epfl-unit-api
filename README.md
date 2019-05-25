<p align="center">
  <img alt="EPFL Unit API" src="https://raw.githubusercontent.com/innovativeinnovation/epfl-unit-api/master/docs/readme/readme-logo.png">
</p>

<p align="center">
  EPFL Unit API.
</p>

<p align="center">
  <a href="https://travis-ci.org/innovativeinnovation/epfl-unit-api">
    <img alt="Travis Status" src="https://travis-ci.org/innovativeinnovation/epfl-unit-api.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/innovativeinnovation/epfl-unit-api?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/innovativeinnovation/epfl-unit-api/badge.svg?branch=master"/>
  </a>
  <a href="https://david-dm.org/innovativeinnovation/epfl-unit-api">
    <img alt="Dependency Status" src="https://david-dm.org/innovativeinnovation/epfl-unit-api/status.svg"/>
  </a>
  <a href="https://raw.githubusercontent.com/innovativeinnovation/epfl-unit-api/master/LICENSE">
    <img alt="Apache License 2.0" src="https://img.shields.io/badge/license-Apache%202.0-blue.svg">
  </a>
  <a href='https://www.npmjs.com/package/epfl-unit-api'>
    <img alt="NPM Version" src="https://img.shields.io/npm/v/epfl-unit-api.svg" />
  </a>
</p>

---

Install
-------

```bash
npm i epfl-unit-api --save
```

Usage
-----

```javascript
const epflUnitApi = require('epfl-unit-api');

epflUnitApi.findUnitByName('exapp').then((unit) => {
  console.log(unit.code);      // => 13033
  console.log(unit.name);      // => 'SI - Applications'
  console.log(unit.unitPath);  // => 'EPFL SI SI-EXOP EXAPP'
}).catch((err) => {
  console.log(err);
});

epflUnitApi.findUnitByCode(13030).then((unit) => {
  console.log(unit.acronym);   // => 'IDEV-FSD'
  console.log(unit.name);      // => 'SI - Développement Full-Stack'
  console.log(unit.unitPath);  // => 'EPFL SI SI-IDEV IDEV-FSD'
}).catch((err) => {
  console.log(err);
});
```

API
---

### .findUnitByName(unit)

Type: `function`

Returns a Promise with the unit as parameter.

##### unit

Type: `string`

The name of an EPFL unit.

### .findUnitByCode(code)

Type: `function`

Returns a Promise with the unit as parameter.

##### code

Type: `number`

The code of an EPFL unit.

Contributing
------------

Contributions are always welcome.

See [Contributing](CONTRIBUTING.md).

Developer
---------

  * [William Belle](https://github.com/williambelle)

License
-------

Apache License 2.0

(c) William Belle, 2019.

See the [LICENSE](LICENSE) file for more details.
