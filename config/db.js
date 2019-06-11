const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
global.url = 'mongodb://localhost:27017/capp'; 
// Connecting to the database
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});