const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id, 
    //     name: 'Sanchit',
    //     age: '31'
    // }, (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gowda', 
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Complete this course',
    //         completed: false
    //     },
    //     {
    //         description: 'Sleep',
    //         completed: true
    //     },
    //     {
    //         description: 'Revise SpringBoot course',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ name: 'Jen'}, (error, user) => {
    //     if (error){
    //         return console.log('Error!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find( {name: 'Sanchit'}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5fc5ebdfb7401e786cdc0f6d')}, (error, task) => {
    //     if (error){
    //         return console.log('Error!')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find( {completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5fc5e17e5ac009611459f42f")
    // },{
    //     $set :{
    //         name: 'Pappu'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },
    //     {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     name: 'Sanchit'
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteMany({
        description: 'Sleep'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})