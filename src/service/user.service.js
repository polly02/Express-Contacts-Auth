const bcrypt = require('bcrypt')
const { getUserByEmailDB, createUserDB } = require('../repository/user.repository')

async function createUser(email, pwd) {
    const findUser = await getUserByEmailDB(email)
    if (findUser) throw new Error('this user already exist')
    const hashpwd = await bcrypt.hash(pwd, 10)
    const createUser = await createUserDB(email, hashpwd)
    return createUser
}

async function authorizationUser(email, pwd) {
    const findUser = await getUserByEmailDB(email)
    if (!findUser) throw new Error("this user not found")
    const hashedPwd = findUser.pwd
    if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error("incorrect password")
    return findUser
}

module.exports = { createUser, authorizationUser }