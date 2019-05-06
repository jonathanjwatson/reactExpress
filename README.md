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

## Congrats! You've got a functioning Express server.


