# Getting started

To get the application running locally:

- Clone this repo
- `yarn` to install all req'd dependencies
- `yarn start` to start local servers (frontend & backend)
- Open [http://localhost:3009](http://localhost:3009) to view it in the browser

This project uses:

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://github.com/mui/material-ui)
- [API of Ice And Fire](https://anapioficeandfire.com/)

# Functionality overview

The application provides information about various type of books.

**The general page breakdown looks like this:**

- All pages:
  - Show a navigation bar
- Home page (URL: / )
  - Show all existing books in the API
- Book page (URL: /#books/@isbn/details )
  - Show basic book info and characters
