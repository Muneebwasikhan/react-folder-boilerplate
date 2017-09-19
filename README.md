> "_...But he shouted even more loudly, 'Son of David, take pity on me'..."_ 

# React Folder Boilerplate [![Build Status](https://travis-ci.org/Tinitto/react-folder-boilerplate.svg)](https://travis-ci.org/Tinitto/react-folder-boilerplate)
This is a single page React application boilerplate that enforces a certain folder structure on you for your own good. As per now, it does so only via written rules and not automatically.

**Note: This boilerplate is still in active development. Use it at your own risk**

# Major Dependencies
1. [Hapi](https://hapijs.com/) +v16.5.2
2. [React](https://facebook.github.io/react/) +v15.6.1
3. [Node](https://nodejs.org/) +v6.11.3
4. [React Router](https://github.com/ReactTraining/react-router/) +v4.2.2
5. [Bootstrap](https://v4-alpha.getbootstrap.com) v4.0.0-alpha.6
6. [Lay.css](https://tinitto.github.io/lay.css/) v0.2

_Other dependencies can be found in the package.json_

[//]: # (# Justification)


# Folder Structure

```
    src/
        index.js
        index.css

        pages/
            assets/
                css/
                    shared/
                        bootstrap.min.css
                        [third_party_css_file].css
                        ...

                    specific/
                        App_style.css
                        App_dashboard.css
                        [PageFileName]_[cssSpecificName].css
                        ...
                img/
                    shared/
                        logo.svg
                        logo.png
                        footer_copyright.png
                        ...

                    specific/
                        HomePage_slider_pic_1.png
                        HomePage_slider_pic_2.png
                        [PageFileName]_[imgSpecificName].[ext]
                        ...

            __test__/
                App.test.js
                PageOne.test.js
                [PageFileName].test.js
                ...

            App.jsx
            PageOne.jsx
            PageTwo.jsx
            [PageName].jsx
            ...

        services/
            serviceOne.js
            serviceTwo.js
            [serviceName].js
            ...

        components/
            shared/
                containers/
                    ContainerOne/
                        index.jsx
                        __test__
                            ContainerOne.test.js
                            ...

                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css

                    ContainerTwo/
                        index.jsx
                        __test__
                            ContainerTwo.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css
                            
                    ...
                non-containers/
                    ContainerThree/
                        index.jsx
                        __test__
                            ContainerThree.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css

                    ContainerFour/
                        index.jsx
                        __test__
                            ContainerFour.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css
                            
                    ...

            specific/
                containers/
                    ContainerFive/
                        index.jsx
                        __test__
                            ContainerFive.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css

                    ContainerSix/
                        index.jsx
                        __test__
                            ContainerSix.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css
                            
                    ...

                non-containers/
                    ContainerSeven/
                        index.jsx
                        __test__
                            ContainerSeven.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css

                    ContainerEight/
                        index.jsx
                        __test__
                            ContainerEight.test.js
                            ...
                            
                        assets/
                            img/
                                [imageName].[ext]
                                ...
                            css/
                                [styleName].css
                            
                    ...

```



[//]: # (# Rules)


# Instructions
1. Clone this repo and enter the directory

    ```
    git clone https://github.com/Tinitto/react-folder-boilerplate.git

    cd react-folder-boilerplate
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

# Acknowledgements
The react app was obtained from the [react-style-boilerplate repo](https://github.com/Tinitto/react-style-boilerplate)