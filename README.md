# React Toolbox
[![npm](https://img.shields.io/npm/v/@kevindurb/react-toolbox.svg)](https://www.npmjs.com/package/@kevindurb/react-toolbox)
[![Beerpay](https://beerpay.io/kevindurb/react-toolbox/badge.svg?style=beer-square)](https://beerpay.io/kevindurb/react-toolbox)
[![Beerpay](https://beerpay.io/kevindurb/react-toolbox/make-wish.svg?style=flat-square)](https://beerpay.io/kevindurb/react-toolbox?focus=wish)

*SPA static pre-rendering made easy*

I got really tired of copying and pasting my latest webpack config from my last
project to start the next and having old projects rot with out an easy way of
upgrading them. So I created `react-toolbox` a highly opinionated toolbox for
building a react web application with minimal setup.

This is inspired by Dan Abramov's talk, which is fantastic and you should
totally check it out:
https://www.youtube.com/watch?v=G39lKaONAlA

## Features
- Quick and easy start for an ES6 & React SPA
- Build-time pre-rendering built in
- Simple commands
- Service Worker caching built in!
- jss extract critical styles during pre-render
- auto reload in dev mode

## Installation
```
yarn add @kevindurb/react-toolbox
```
or with npm
```
npm install --save @kevindurb/react-toolbox
```

### Peer Dependancies
- react ^16.2.0
- react-dom ^16.2.0
- react-jss ^8.3.0

## Usage
`react-toolbox` looks for an entry point at `./index.js` in the root of your
project and will compile what ever javascript you provide from there. Inside
that entry point use, and export the result of, the render function provided by
`react-toolbox`. This allows `react-toolbox` to staticly prerender your app for
production and still have a development build.

```
import React from 'react';
import render from '@kevindurb/react-toolbox/render';
import App from './path/to/my/App';

export default render(<App />);
```

### Development
`react-toolbox` uses `webpack-dev-server` to host your project at
`http://localhost:8080` you can also specify the PORT environment variable to
change the port you would like the dev server to run on.

```
yarn react-toolbox start
```
Its just that easy!

### Production
In production mode `react-toolbox` will compile your entry point into `./dist`
along with a `index.html` that points to your app's `index.js`.

```
yarn react-toolbox build
```

### Notes
- Must have your entry at `./index.js` and must have `public` folder (even if its empty, this requirement will hopefully be removed soon...)

## Coming Soon...
- Testing with Jest
