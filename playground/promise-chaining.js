require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fc6feeb49f0c15218372d8b').then((task) => {
//     console.log(task)
//     return Task.countDocuments({description: "Can you even do it"})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async function(id) {
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5fc7365452c8e76e0c221a9e').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})