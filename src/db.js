const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/university')

module.exports = {
    User: mongoose.model("users", {
        email: String,
        pwd: String
    }),
    ObjectId: mongoose.Types.ObjectId
}