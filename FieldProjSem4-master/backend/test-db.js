const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/field-project';
console.log('Testing connection to:', uri);
mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
    .then(() => { console.log('CONNECTED_SUCCESSFULLY'); process.exit(0); })
    .catch(err => { console.error('CONNECTION_FAILED:', err.message); process.exit(1); });
