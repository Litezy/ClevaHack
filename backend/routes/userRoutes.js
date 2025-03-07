const { signUp } = require('../controllers/userControllers')

const router = require('express').Router()

router.post('/signup',signUp)
module.exports = router