# redux-electron-middleware

[![NPM Version](https://img.shields.io/npm/v/@eleetsoftware/redux-electron-middleware.svg?branch=master)](https://www.npmjs.com/package/@eleetsoftware/redux-electron-middleware)
[![Build Status](https://travis-ci.org/eleetsoftware/redux-electron-middleware.svg?branch=master)](https://travis-ci.org/eleetsoftware/redux-electron-middleware)
[![License](https://img.shields.io/npm/l/@eleetsoftware/redux-electron-middleware.svg)](https://github.com/eleetsoftware/redux-electron-middleware/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/eleetsoftware/redux-electron-middleware/badge.svg?branch=master)](https://coveralls.io/github/eleetsoftware/redux-electron-middleware?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/npm/@eleetsoftware/redux-electron-middleware/badge.svg)](https://snyk.io/test/npm/@eleetsoftware/redux-electron-middleware)
[![Downloads](https://img.shields.io/npm/dt/@eleetsoftware/redux-electron-middleware.svg)](https://www.npmjs.com/package/@eleetsoftware/redux-electron-middleware)
[![dependabot](https://api.dependabot.com/badges/status?host=github&repo=eleetsoftware/redux-electron-middleware)](https://dependabot.com/)

### How To use these middleware's
In your store file your would ...
```javascript
import { reduxElectronMiddleware } from "@eleetsoftware/redux-electron-middleware"

...
applyMiddleware(reduxElectronMiddleware)
...
```
or
```javascript
import { reduxElectronActionMiddleware } from "@eleetsoftware/redux-electron-middleware"

...
applyMiddleware(reduxElectronActionMiddleware)
...
```

`reduxElectronMiddleware` uses electrons ipcRenderer to send the updated state to electron for you to use however you want.

`reduxElectronActionMiddleware` uses electrons ipcRenderer to send the action to electron for you to use however you want.

### My usecase
I wanted to be able to retain my redux state after my electon app was closed as well as prepare a default or preloaded state to my renderer (react spa)
