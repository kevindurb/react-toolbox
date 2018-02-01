# React Toolbox

I got really tired of copying and pasting my latest webpack config from my last
project to start the next and having old projects rot with out an easy way of
upgrading them. So I created `react-toolbox` a highly opinionated toolbox for
building a react web application with minimal setup.

## Installation
```
yarn add @kevindurb/react-toolbox
```
or with npm
```
npm install --save @kevindurb/react-toolbox
```

## Usage
`react-toolbox` looks for an entry point at `./src/index.js` and will compile
what ever js you provide from there.

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
