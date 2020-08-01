const {MongoClient} = require('mongodb')

const connectionUrl = 'mongodb://172.17.0.5:27017'
const dbName = 'kablosuz'

let db;

const init = () => {
    return MongoClient.connect(connectionUrl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((client) => {
        db = client.db(dbName);
    })
}

const insert = (collectionName, data) => {
    const collection = db.collection(collectionName)
    return collection.insertOne(data)
}

const get = (collectionName, query) => {
    const collection = db.collection(collectionName)
    return collection.find(query).toArray()
}

const updateQuantity = (id, quantity) => {
    const collection = db.collection('items')
    return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } })
}

module.exports = { init, insert, get, updateQuantity }