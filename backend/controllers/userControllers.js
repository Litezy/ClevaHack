const User = require('../models').users
const jwt = require('jsonwebtoken')
const fs = require('express-fileupload')
const { ServerError } = require('../utils/utils')

exports.signUp = async (req, res) => {
    try {
        const { firstname, lastname, phone, email, gender, password } = req.body
        const regFields = [firstname, lastname, phone, email, gender, password]
        if (regFields.some((field) => !field)) return res.json({ status: 400, msg: "All fields are required" })
        const findMail = await User.findOne({ where: { email } })
        if (findMail) return res.json({ status: 400, msg: "EMail already exists, kindly login" })
        const findPhone = await User.findOne({ where: { phone } })
        if (findPhone) return res.json({ status: 400, msg: "Phone number already exists" })
        const newUser = await User.create({ firstname, lastname, gender, email, password })
        return res.json({ status: 201, msg: 'user created successfully', data: newUser })
    } catch (error) {
        ServerError(res, error)
    }
}