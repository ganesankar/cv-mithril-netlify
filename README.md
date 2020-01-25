# [Mithril & construct-ui  CV Page ](https://github.com/ganesankar/cv-mithril-netlify) 

### [Netlify Deploy Link ](https://app.netlify.com/start/deploy?repository=https://github.com/ganesankar/cv-mithril-netlify) 

Mithril & construct-ui CV Page is example for running Netlify functions locally in a dev environment and as a generated static site deployed to Netlify
 [Mithril](https://mithril.js.org/), [construct-ui](https://github.com/vrimar/construct-ui) and [Netlify Functions](https://www.netlify.com/). 
This code can Be used as boilerplate for ReactJS & Bootstrap UI Development and as ready use Web based CV/ Resume Page.

Using the Project is pretty simple but requires basic knowledge of Javascript, 

## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Sign up for a FaunaDB account [FaunaDB](https://dashboard.fauna.com/accounts/register)
- Create a database in the Fauna Cloud Console
    - Click “New Database”
    - Enter “Database Name” and Save
    - Copy the database access key’s secret
    - **Save the secret somewhere safe; you won’t get a second chance to see it!**
- Set your database access secret in your terminal environment 
  - For Mac or Linux `export FAUNADB_SERVER_SECRET=YourFaunaDBSecretHere`
  - For Windows `set  FAUNADB_SERVER_SECRET=YourFaunaDBSecretHere`
- Bootstrap your FaunaDB collection and indexes `npm run bootstrap` 
- Run `npm run start`to start a local development server
- Navigate to `http://localhost:3000` or - A new tab will be opened in your browser

You can also run additional npm tasks such as
- `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build

## Prerequisites

You must have Node.js and npm installed on your machine. This project was built against the following versions:

- Node v12.6.0
- npm v6.9.0


## Features!

  - SPA based on Counter Component Developemnt 
  -  


## Tech

This Application uses a number of open source projects to work properly:

* [Mithril](https://mithril.js.org/) - HTML enhanced for web apps!
* [construct-ui](https://github.com/vrimar/construct-ui) - great UI boilerplate for modern web apps
* [nodejs](https://nodejs.org/) - For Development Enviromnent and Netlify Functions Integrations
* [Netlify](https://www.netlify.com/) - Cloud Computing Hosting, CI Pipeline, AWS's serverless Lambda functions 
* [webpack](https://webpack.js.org/) - Module Bundler
* [material icons](https://material.io/resources/icons/) - CSS based Icon toollit 
* [hammerjs](https://hammerjs.github.io/) - A javascript library for multi-touch gestures
* [lodash](https://hammerjs.github.io/) - A javascript  library which provides utility functions for common programming tasks using the functional programming paradigm
* [luxon](https://moment.github.io/luxon) - A library for working with dates and times


## Todo
Application roadmap on enhancement
  - New Pages using Nuxt management 
  - State Managment Integration


## Demo

 [Running App](https://ganesan-cv-mithril.netlify.com/)


