# reactExpress


### Create Your Express Server

### 1. Create Your Server File
```
touch server.js
```
### 2. Initialize the Directory with NPM
```
npm init
```
### 3. Create a new instance of express
```sh
yarn add express
```
* Note: You should now see a node_modules folder.

Add the following to your server.js file:

```javascript
const express = require('express');
const app = express();
```

### 4. Add boilerplate
```javascript 
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log(`Magic is happening on port ${PORT}`);
});
```

### 5. Start your server
```sh
node server.js
```

#### Congrats! You've got a functioning Express server.


## Step Two: Add a sample route

### 1. Create a simple JSON response
```javascript
app.get('/config', function(req,res){
    res.json({
        appName: "reactExpress"
    })
  })
```

### 2. Create a Script to Run the App
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
```

Now, instead of running ```node sever.js```I can type ```yarn start```.

Why does this help? 

```sh
yarn add nodemon
```

Now, we can change the script to: 
```javascript
"start": "nodemon server.js"
```

## Step Three: Add React

### 1. Install Create React App
```sh
npm install create-react-app -g
```
This installs create-react-app globally as a command line tool. 


### 2. Create your client directory. 
```sh
create-react-app client
```

### 3. Start up your client
```sh
cd client
```
```sh
yarn start
```

This seems annoying. How do we start our server and our React app together?

### 4. Setup a new script
```javascript
"start:local": "concurrently \"nodemon server.js\" \"cd ./client && yarn start\" "
```
What is concurrently? [Read more...](https://www.npmjs.com/package/concurrently)

We need to install concurrently. How would we do that?

### 5. Run our new command
```sh
yarn start:local
```
Now, [localhost:3001/config](http://localhost:3001/config) shows our previously generated express route. While [localhost:3000](http://localhost:3000/) returns our React app. 

### 6 Housekeeping

Add a .gitignore file and ignore node_modules files. These will be built in pipeline. 


## Step Four: Configure React/Express for API Calls

Let's say I wanted my React App to call my Express App and get the config info. How would I do that?

### Pre-work
I don't love the new Create-React-App boilerplate. So use this instead:
```javascript
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
```

### 1. Add Axios to our React App
```sh
cd client
```
```sh
yarn add axios
```
### 2. Open the App.js file inside Client and setup componentDidMount
We'll want this to run on componentDidMount. Where should we place lifecycle methods?
```javascript
  componentDidMount() {
    console.log("I mounted the app!");
  }
  ```

  ### 3. Add the Axios call inside component did mount.

  #### a) Remember: axios.get
  #### b) Add a .then promise resolve block
  #### c) Add a .catch block

  What error do you get in your console? 

  Why else wouldn't this work in production?

  ### 4. Add a proxy configuration to your client package.json
  ```json
  "proxy": "http://localhost:3001",
  ```

  Now, we can make an axios call by hitting the React port:
  ```javascript
      axios.get(`/config`)
    .then((response) => {
      console.log(response);
    }).catch((err) => {
      console.error(err);
    })
    ```



