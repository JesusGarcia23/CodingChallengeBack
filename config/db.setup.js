const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trimback', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
    console.error('Error connecting to mongo', err)
})