const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/', [
    check('name', 'Name is required')
        .not().isEmpty(),
    check('email', 'Please input a valid email')
        .isEmail(),
    check('password', 'enter a password with more than 5 characters')
        .isLength({ min: 6})

], (req,res) => {
    // returns a function that's why we should exec errors later
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    res.send(req.body);
})

module.exports = router;