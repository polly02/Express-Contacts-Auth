const { User, ObjectId } = require('../db')

async function getUserByEmailDB(email) {
    return await User.findOne({ email: email })
}

async function createUserDB(email, hashPwd) {
    const record = await User.collection.insertOne({email: email, pwd: hashPwd})
    return { _id: record.insertedId, email, pwd: hashPwd }
}

module.exports = { getUserByEmailDB, createUserDB }