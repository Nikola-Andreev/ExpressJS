let mongoose = require('mongoose')
let connection = 'mongodb://localhost:27017/instaNode'

require('./models/tag')
require('./models/image')

mongoose.Promise = global.Promise

let Image = mongoose.model('Image')
let Tag = mongoose.model('Tag')

let instanodeDb = mongoose.model('instanodeDb',{

})

instanodeDb.saveImage = ( function(obj) {
        new Image({
        url: obj.url,
        date:Date.now(),
        description: obj.description,
        tags:obj.tags
    }).save()
        .catch(console.log)
        .then(console.log)
})

instanodeDb.saveTag = ( function(obj) {
        new Tag({
        name: obj.name,
        date: Date.now(),
        images: obj.images
    }).save()
        .catch(console.log)
        .then(console.log)
})

instanodeDb.findByTag = ( function(tag) {
    Image.find({'tags':`${tag}`}).sort('-date').then(console.log)
})

instanodeDb.filter = ( function(obj) {
    let images = Image.find({"date": {$lt: obj.before , $gt: obj.after}}).limit(obj.results).then(console.log)
})

    mongoose.connect(connection)
        .then(() => {
            console.log('Mongoose running!')

            //instanodeDb.saveTag({ name: 'nekav tag'
            //    , images: ['img1','img2'] })

            //instanodeDb.saveImage({ url: 'nekav image'
            //    , description: 'such cat much wow', tags: ['cat','Mitty','cute','catstagram'] })

            //instanodeDb.findByTag('kitty')

            instanodeDb.filter({after: new Date(2016,9,13), before: new Date(2016,11,11), results: 10})
        })