# Schoology Auto-Complete Frontend
Congrats, you’ve got an api you can call, now build a front-end to show off that data. We use react with typescript. If you aren’t comfortable with typescript or react, then vue.js or angular will be fine. We will be changing this in Part 3, so pick something you are comfortable with. 

 

There is not a lot of guidance provided for this part, we are looking for an autocomplete component we could use in our site. Again, given the caveat that there is a finite time period in which you have to develop it.

Here you have some choices with how to spend your time. If you are great a CSS, then spend more time making it look very good. If your skills lay elsewhere, then just do a minimal job styling and show off in your stronger area.

 

Again, be sure a Schoology employee has a document showing them the exact steps they’d need to use to get your auto-complete up and running on their machine. This means hitting a url in their browser to return data to the UI.

## The project
The project was build using ReactJS, the chosen it's much easier to work, have a huge community, the components should be create for extremally easy and reuse for entire project.  

There one component, `component/AutoComplete` to handle with.       
The `service/api.js` handle with all connection of external api.    

I keep it simple, my main focus is backend, devops, but I handle with frontend.

## Run local
You may need configure the environment variables, there the file of example `.env.example`, create a file `.env` (`cp .env.example .env`)       
For run local by docker just run `docker-compose up -d`, and access by `http://localhost:3001`


## React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
