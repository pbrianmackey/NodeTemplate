#Nodejs or io.js template for wiring up new projects.  This project includes just about everything you need to get going on a new project quickly.  It is ready to go with MS-SQL server.  

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
- gulp (execute at command line to start the website)
- http://localhost:3333/ => This url tests that the site is up
- http://localhost:3333/api/sql => This url tests SQL calls.
  - Be sure to set app.js with a query that exists in your database.
    - E.G. `"SELECT TOP 10 * FROM Customers"`

###ToDo
