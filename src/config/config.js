const mongoose = require('mongoose');


mongoose.connect(process.env.MongoConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => {})
    .catch(err => console.log(err));

const db = mongoose.connection;


module.exports = db;