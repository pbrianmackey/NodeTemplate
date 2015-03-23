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
- [msnodesql](https://www.npmjs.com/package/msnodesql)
  - [Because this dependency is tough to install](http://stackoverflow.com/questions/19661811/unable-to-download-msnodesql-0-2-1-v0-10-x64-msi)
  - Only required if you need MS-SQL

##Other Dependencies

- [node.js](https://nodejs.org/) OR [io.js](https://iojs.org/en/index.html) for ES6
- [gulp](http://gulpjs.com/)

####Framework

- controller
- dataService

##Setup

- npm install
- Launch web server: node app
  - app.js is the entry point
- http://localhost:3333/
- gulp (execute at command line)

###ToDo
