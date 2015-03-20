#io.js template for wiring up new projects

###Includes

- bower (for client side installations).  Installs to public directory.
  - .bowerrc configuration file
- npm (for server side installations)
- express MV* framework
- Jade view engine
- package.json configuration file for npm
- karma testing framework
  - [Global install of Karma recommended](https://karma-runner.github.io/0.12/intro/installation.html)
  - Uses chrome and firefox

####Framework

- controller
- dataService

##Setup

- npm install
- Launch web server: node app
  - app.js is the entry point
- http://localhost:3333/
