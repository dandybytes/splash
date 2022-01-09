# SPLASH

**Splash** is a logic game created with _React.js_. It uses pure stateless functional components with React hooks.

![](https://github.com/dandybytes/splash/blob/master/docs/splash-min.PNG)

## 👾 Tech Stack

|                        tool                         | description                                 |
| :-------------------------------------------------: | ------------------------------------------- |
| [React](http://facebook.github.io/react/index.html) | front-end JavaScript-based library          |
|            [Babel](https://babeljs.io/)             | ECMAScript transpiler                       |
|         [Webpack](https://webpack.js.org/)          | task management and module bundling toolkit |
| [Netlify](https://www.netlify.com/)                 | cloud hosting solution                      |

## 🔐 Prerequisites

- node
- npm
- yarn (optional)
- netlify-cli (optional)
```sh
npm install netlify-cli -g
```

## 🛠 Installation

```bash
# Clone this repository
$ git clone https://github.com/dandybytes/splash.git

# Navigate into the repository
$ cd splash-book

# Install the required dependencies
$ yarn || npm i

# Start the local development server
$ yarn start || npm start
```

## 🚀 Production:
This project is already set up for easy deployment with Netlify:
```sh
# using Yarn
yarn run deploy

# using NPM
npm run deploy
```
To deploy it on a sub-path on another site, fill out the expected relative path in the `PUBLIC_URL` variable in a `.env.production.local` file (example provided in `.env.production.local.sample`).

## 🎓 Features:

-   uses memoised recursion to process the data board
