const express = require('express');
const PORT = process.env.PORT || 8000
// const path = require('path')

const path = require('path');

const app = express();



app.use(express.static(path.join(__dirname + '/public'))) ;

// app.use(express.static(path.join(__dirname + '/public')));




const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
