# Baby Steps for Earth

Welcome to the Baby Steps for Earth project! This is the repository for the React front-end, and the back-end Rails API repo can be found here: https://github.com/jkellyphilly/baby-steps-for-earth-backend.

Taking care of the earth and the environment can feel like a daunting task, so the purpose of this application is to break it down into a series of baby steps. Search for goals that have already been created by other users or create your own, and add them to your personal plan. Once you have 7 goals in your plan, you can publish your plan to the larger community with your name so others can be inspired by the steps you are taking to take care of the earth.

For a more thorough explanation of how to use this app (interacting with the front-end), check out this video: https://www.youtube.com/watch?v=Yd6Rc8FYgyg

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Fork and clone this repository and the back-end repository (located [here](https://github.com/jkellyphilly/baby-steps-for-earth-backend)) and start up the rails server with `rails s -p XXXX` from the backend end folder. Note: the port on which to run the server is your choosing. The reason I have run this not on the standard 3000 is due to the fact that React also runs on port 3000.

Next, ensure in the `src/actions/babyStepsActions.js` that the fetch requests are directed to the appropriate end-location. This app will be deployed on Heroku, but swap this endpoint to be localhost for local debugging.

Finally, run `npm start` from the front-end folder. The application should open in your default browser. Contribution is encouraged!!

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jkellyphilly/baby-steps-for-earth. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Baby Steps for Earth project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/jkellyphilly/baby-steps-for-earth/blob/master/CODE_OF_CONDUCT.md).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
