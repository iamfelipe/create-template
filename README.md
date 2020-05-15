<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Frontend Template</h3>

  <p align="center">
    <a href="https://github.com/iamfelipe/static-boilerplate"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/iamfelipe/static-boilerplate">View Demo</a>
    ·
    <a href="https://github.com/iamfelipe/static-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/iamfelipe/static-boilerplate/issues">Request Feature</a>
  </p>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
- [Production deployment](#production-deployment)

<!-- ABOUT THE PROJECT -->

## About The Project

Site template built with Top-Notch technologies and methodologies.

### Built With

- [Webpack](https://babeljs.io)
- [Babel](https://tailwindcss.com)
- [Prettier](https://prettier.io)
- [PostCSS](https://postcss.org)
- [ESLint](https://eslint.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Modular Scale](https://github.com/modularscale/modularscale-sass)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

> 🏗 Most of the setup below is enabled by default.

1. First, install and generate a custom template:

   ```sh
   npx @felipecastillo/create-template
   ```

2. Install packages if are not installed by CLI:

   ```sh
   npm install
   # OR
   yarn
   ```

3. Setup custom routes in `webpack.settings.js`:

   ```javascript
   // webpack.settings.js
   module.exports = {
     paths: {
       /* Source root files */
       src: {
         base: "./src/",
         /* Styles root files */
         css: "./src/css/",
         /* Script root files */

         js: "./src/js/",
       },
       /* Distribution folder */
       dist: {
         base: "./dist/",
         clean: ["**/*"],
       },
       /* Styles root files */
       templates: "./templates/",
     },
     // ...
     entries: {
       /* Main script file */
       main: ["index.js"],
     },
     // ...
   };
   ```

4. Import custom theme styles in `src/js/index.js` file:

   > ⚠️ In development mode the styles are not exported in the `dist` folder because are injected into the scripts.️

   ```javascript
   // index.js
   import "../css/main.scss";
   ```

5. Create `.env` file in the directory with the `package.json` file:

   ```
   // .env
   PUBLIC_PATH="../"
   DEVSERVER_PUBLIC="/dist/"
   DEVSERVER_HOST="0.0.0.0"
   DEVSERVER_POLL=1
   DEVSERVER_PORT=8080
   DEVSERVER_HTTPS=1
   ```

6. Then in the same directory, run the development server:
   ```sh
   npm run dev:start-server
   # OR
   yarn run dev:start-server
   ```

<!-- PRODUCTION DEPLOYMENT -->

## Production deployment

1. ️☠️ If Tailwind CSS is up and running in the project, include files to purge:

   ```javascript
   // webpack.settings.js
   module.exports = {
     // ...
     purgeCssConfig: {
       paths: ["./templates/**/*.{twig,html}", "./src/js/**/*.js"],
     },
   };
   ```

2. Run production build:
   ```sh
   npm run prod:build
   # OR
   yarn run prod:build
   ```

## License

MIT

## Collaborators

- Felipe Castillo <castillo.devsigner@icloud.com>
