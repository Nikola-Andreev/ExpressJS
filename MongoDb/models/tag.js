let mongoose = require('mongoose')

let tagSchema = mongoose.model('Tag', {
    name: String,
    date: Date,
    images: []
})

mongoose.model('Tag', tagSchema)
