const mongoose = require('mongoose')

function connect() {
    // mongoose.connect('mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&tls=false', { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&tls=false')

    const db = mongoose.connection
    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = { connect } 