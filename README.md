Chatta App
=====================

Chatta is a real time chat web application using React, Websocket, Babel, and Webpack.

Chatta allows clients to communicate with each other without ever reloading the page.
Chatta allows clients to choose and update an username. 
Each client is given a random colour that persists even if they change usernames.
Users can post text messages as well as jpg, png and gif urls.
The number of clients connected is displayed at the top of the page.

### Screenshots

![Messages With Images](https://github.com/Elyott/Chatty-App/blob/master/docs/Messages%20with%20images.png?raw=true)

![User Changes Name](https://github.com/Elyott/Chatty-App/blob/master/docs/Bob%20changes%20his%20name.png?raw=true)

![Users Disconnect](https://github.com/Elyott/Chatty-App/blob/master/docs/Users%20Disconnected.png?raw=true)

### Usage

Clone the Chatty-App and create your own git repo.

```
git clone git@github.-com:Elyott/Chatty-App.git
cd Chatty-App
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

Clone the Chatty-App-Server and create your own git repo.

```
git clone git@github.-com:Elyott/Chatty-App-Server.git
cd Chatty-App-Server
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3001
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
