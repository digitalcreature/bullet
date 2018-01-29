var config = require('./config.json')

const express = require('express')
// const firebase = require('firebase-admin')

app = express()

// firebase.initializeApp({
//   credential: firebase.credential.cert(config.firebase.service_account_key),
//   databaseURL: 'https://' + config.firebase.project_id + '.firebaseio.com'
// });

app.get("/", function(req, res) {
    res.send("Hello, World!")
})

app.listen(3000)
