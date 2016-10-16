let mongodb = require('mongodb')
let connection = 'mongodb://localhost:27017/otherBase'
let mongoose = require('mongoose')
mongoose.Promise = global.Promise

//mongodb.connect(connection).then(db => {
//    console.log('Connected!')

//    let cats = db.collection('cats')

    //cats.insertMany([
    //    {name:'Alonso', age:15},
    //    {name: 'Gonzi', age:25}
    //]).then(result => {
    //    console.log(result)
    //})

//    cats.find({name:'Gonzi'}).toArray().then(console.log)

//}).catch(console.log)
let Cat = mongoose.model('Cat', {
    name:String,
    age:Number
})

mongoose
    .connect(connection)
    .then(() => {
    console.log('connected')

     // new Cat({
     //     name:'Gonzo',
     //     age:"Boris"
     // }).save()
     // .catch(console.log)
     // .then(console.log)

        Cat.find().then(console.log)

})