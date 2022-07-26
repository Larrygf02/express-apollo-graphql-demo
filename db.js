const { connect } = require('mongoose')

const connectDB = async () => {
    try {
        await connect('mongodb://localhost/taskdb')
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }
