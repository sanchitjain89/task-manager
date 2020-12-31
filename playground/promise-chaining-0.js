require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async function(id, age) {
    const user = await User.findByIdAndUpdate(id, {age: age + 5})
    const count = await User.countDocuments({ age: 30 })
    return count
}

updateAgeAndCount('5fc70ac383a1e97064c375f8', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})