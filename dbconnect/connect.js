const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../config/config.env'})

const connect = async() => {
    const connection = await mongoose.connect(process.env.MONGO_CONNECT_URI, {
        useNewUrlParser: true
    } )
    console.log(`Mongo DB Connected with HOST : ${connection.connection.host}`)
}

module.exports = connect