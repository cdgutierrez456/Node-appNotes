const express = require('express');

// Initializacions
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares

// Global variables

// routes

// Static files

// Sever listennig
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
});
