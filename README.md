# <div align="center">Kombucha Bar</div>

<p align="center">
    <br>
    <a href="https://github.com/besscampbell">
        <img src="https://github.com/besscampbell.png" width="150px" height="auto">
    </a>
</p>

<p align="center">
  <small>Last Updated: February 19th, 2021</small>
</p>

# ℹ️ Description

 Check out part one [here](https://github.com/besscampbell/kombucha-bar.git). This is the second part of a two-section project. At the end of the last section's independent project, you built a tap room using local and shared state in React. For this independent project, you will update your application to incorporate Redux.

 Before getting started, clone or fork the repo of the project you completed at the end of the last section. Do not make changes to the repository you submitted for the last independent project. You will be asked to resubmit if you simply update the previous independent project repository.

 Here are the requirements for the refactor:

* All state in your application should be handled by Redux (even if React can handle it locally).
* All reducers should be tested thoroughly, and all tests must be passing.
* Action creators and constants should be used.
* If you finish early, continue building out your application as you see fit. This is a great opportunity to create a portfolio piece!

# ✅ Objectives

This independent project's progress will be checked for the following objectives:

* React application works as expected and follows best practices, including using JSX, props, and prop types.
* Redux is used for all state.
* Jest is used to test all reducers.
* Actions and action constants are used.
* Project is in a polished, portfolio-quality state.
* Project is submitted by the deadline.
* Project demonstrates an understanding of this section's concepts. If prompted, you can discuss your code with an instructor using the correct terminology.

# 💁🏽‍♀️ User Stories

Here are some user stories to get you started. The application should have the following functionality:

* As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
* As a user, I want to submit a form to add a new keg to a list.
* As a user, I want to be able to click on a keg to see its detail page.
* As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints.
* As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.

# 🧗🏼‍♀️ Further Exploration

## Completed:
* As a user, I want to be able to restock kegs.
* As a user, I want to be able to press a button to tap a keg if there is one instock.
* As a user, I want a keg to update to say "Out of Stock" once it's empty.
* As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!

## To do:
* As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake.
* As a user, I want to be able to delete a keg.
* As a user, I want to have kegs prices to be color-coded for easy readability. This could be based on their price, the style of beer or kombucha, or the amount of pints left.
* As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)

# 📊 Components Diagram


# 🧑‍💻 Contributer

| Name | GitHub Profile |
|------|----------------|
| [Bess Campbelll](https://www.linkedin.com/in/bess-campbell/) | [besscampbell](https://github.com/besscampbell)

# ⚙️ Technologies Used

* [Visual Studio Code](https://code.visualstudio.com/)
* [Git/GitHub](https://github.com/)
* [React JS](https://reactjs.org/)
    **_This project was built with the `create-react-app` command._**
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)
* [Babel](https://babeljs.io/)
* [Eslint](https://eslint.org/)
* [Webpack](https://webpack.js.org/)
* [DrawIO](https://www.draw.io/)

# 💾 Installation Requirements

## For Both Mac & Windows systems

#### To Clone:
- Open your preferred command line program.
- Navigate to the location or directory you'd like the project directory to be created in. (e.g., `cd Desktop` if you'd like to clone the project to your desktop)
- Enter the command `$ git clone https://github.com/besscampbell/kombucha-bar.git` in your command line.

#### To Download:
- Navigate to the [project repository](https://github.com/besscampbell/kombucha-bar.git) in your browser.
- Click the green "Code" button toward the top right of the page.
- Click "Download ZIP" and extract the files.
- Open the newly-downloaded project in your preferred code editor.


# 🖥️ Opening the Project on your Local System

Once the project has been cloned and you have all the necessary items on your local computer, open the project in the application of your choice ([Visual Code Studio](https://code.visualstudio.com/) was used and is recommended by the application builder)

### Run the project:

1. In the terminal type `npm install` to install the JSON package
2. Once the install has finished  type `npm run build` into the terminal to compile the project
3. Run `npm start` to view the site in a browser.

### To test:

1. Navigate to the `__tests__` folder in the project file tree.
2. Run `npm test` and you see a return of which tests are passing/failing in the terminal.

# ☎️ Support / Contact Details

* [Bess Campbell](mailto:bess.k.campbell@gmail.com)


# 🐛 Bugs / Issues

| Date | Error | Handled | Solution |
| :------------- | :------------- | :------------- | :------------- |
|2.13.2021|Buttons not hiding | ✅  |Correct hidden conditional and propTypes verbage  |



# ©️ License & Copyright

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2021 *_Bess Cammpbell_*
