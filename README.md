# hapi-react-spa [![Build Status](https://travis-ci.org/Tinitto/hapi-react-spa.svg)](https://travis-ci.org/Tinitto/hapi-react-spa)
A Single Page Reactjs Application boilerplate served by Hapijs and the inert plugin. Deploy Reactjs apps easily to [Heroku](https://www.heroku.com/) or any such hosting.

# Demo
A demo of the app can be found on this [Heroku app](https://hapi-react-spa-node.herokuapp.com/).

# Major Dependencies
1. [Hapi](https://hapijs.com/) +16.5.2
2. [React](https://facebook.github.io/react/) +15.6.1
3. [Node](https://nodejs.org/) +6.11.3

_Other dependencies can be found in the package.json_

# Justification
After attempting, in vain, to deploy my build of the react app I had created with create-react-app, I resorted to write this boilerplate. 

This boilerplate is meant to help anyone who would want to host their React app using Nodejs on [Heroku](https://www.heroku.com/) or anyother such hosting service.

# Composition
This is just a basic React app that is being served using Hapi's inert plugin.
**A build is required before the server can run as it expects a /build directory.**

# Instructions
1. Clone this repo and enter the directory

    ```
    git clone https://github.com/Tinitto/hapi-react-spa.git

    cd hapi-react-spa
    ```
2. Change the origin of the git repository. For example if your new repo is at 'https://github.com/USERNAME/REPO_NAME.git'. Run the command below in your terminal.

    ```
    git remote set-url origin https://github.com/USERNAME/REPO_NAME.git
    
    ```

    You can check that the origin has changed to your repo's url by running

    ```
    git remote -v
    ```
3. To install node packages run ``` yarn install ```. 
4. Build the React app by running ``` npm run build ```.
5. Start the server by running ``` npm run serve```.
6. Visit the url that is shown in the terminal to see the React app running.

# Deploying to Heroku
After ensuring that the app can run on your local machine, it is time to deploy to Heroku.
1. [Signup](https://signup.heroku.com) for an account on Heroku.
2. In your Heroku dashboard, create a new app.
3. Go to your new app's settings and add the buildpack for nodejs called ``` Heroku/nodejs```. 
4. Go to your new app's Deploy options.
5. Find the option for connecting your github repository to the app. 
6. Select the option for automatic deployment.
7. From here on, any push to the master branch of your github repository will be automatically deployed to your Heroku app.

# Another way
There is a more complicated way of deploying a static single page app to Heroku. A Heroku buildpack meant entirely for static websites is used in this case.

For automated/continuous deployment, that method requires two Heroku buildpacks and further configuration (including a static.json file).

The buildpacks for continuous deployment should be in the order below:

    
    - Heroku/nodejs
    - https://github.com/hone/heroku-buildpack-static
    
An implementation of this method can be found on [this branch of this repo](https://github.com/Tinitto/hapi-react-spa/tree/spa-setup).

Look at this [gist](https://gist.github.com/hone/24b06869b4c1eca701f9) for further details.


# Acknowledgements
The inspiration for the server.js file is got from [Heroku's WYWH repo](https://github.com/heroku/wywh).

The react app was obtained from the [react-style-boilerplate repo](https://github.com/Tinitto/react-style-boilerplate)