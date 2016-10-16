let mongoose = require('mongoose')

let imageSchema =  mongoose.model('Image', {
    url: String,
    date: Date,
    description: String,
    tags: []
})

mongoose.model('Image', imageSchema)