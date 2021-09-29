const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect('***')
        .then(() => {
            console.log('database connection successful');
        })
        .catch((err) => {
            console.log('database connection error ' +err);  
        })
    }
}

module.exports = new Database();




