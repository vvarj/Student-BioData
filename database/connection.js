const mongoose = require('mongoose');

const mongoDB = () => {
    mongoose.connect('mongodb://localhost:27017/studentBioData')
        .then(() =>
            console.log('database connected')
        ).catch((err) => console.log(err));
}

module.exports = mongoDB;

