const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/field-project';

console.log('Attempting to connect to MongoDB...');

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection failed:', err.message);
        process.exit(1);
    });
