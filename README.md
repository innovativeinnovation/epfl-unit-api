<p align="center">
  <img alt="EPFL Unit API" src="https://raw.githubusercontent.com/innovativeinnovation/epfl-unit-api/master/docs/readme/readme-logo.png">
</p>

<p align="center">
  EPFL Unit API.
</p>

<p align="center">
  <a href="https://github.com/innovativeinnovation/epfl-unit-api/actions">
    <img alt="Build Status" src="https://github.com/innovativeinnovation/epfl-unit-api/workflows/Build/badge.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/innovativeinnovation/epfl-unit-api?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/innovativeinnovation/epfl-unit-api/badge.svg?branch=master"/>
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

epflUnitApi.findUnitByName('mws').then((unit) => {
  console.log(unit.code);      // => 13033
  console.log(unit.name);      // => 'Middleware Services'
  console.log(unit.unitPath);  // => 'EPFL VPO VPO-SI ITOP ITOP-MWS'
}).catch((err) => {
  console.log(err);
});

epflUnitApi.findUnitByCode(13030, 'en').then((unit) => {
  console.log(unit.acronym);   // => 'ISAS-FSD'
  console.log(unit.name);      // => 'Full-Stack Development'
  console.log(unit.unitPath);  // => 'EPFL VPO VPO-SI ISAS ISAS-FSD'
}).catch((err) => {
  console.log(err);
});
```

API
---

### .findUnitByName(unit, language)

Type: `function`

Returns a Promise with the unit as parameter.

##### unit

Type: `string`

The name of an EPFL unit.

##### language

Type: `string`  
Default: `en`

Supported languages are English (`en`) and French (`fr`).

### .findUnitByCode(code, language)

Type: `function`

Returns a Promise with the unit as parameter.

##### code

Type: `number`

The code of an EPFL unit.

##### language

Type: `string`  
Default: `en`

Supported languages are English (`en`) and French (`fr`).

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

(c) William Belle, 2019-2024.

See the [LICENSE](LICENSE) file for more details.
