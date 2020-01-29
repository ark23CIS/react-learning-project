const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../../config/default').secret;

router.post('/', [
    check('name', 'Name is required')
        .not().isEmpty(),
    check('email', 'Please input a valid email')
        .isEmail(),
    check('password', 'enter a password with more than 5 characters')
        .isLength({ min: 6})
// we can use operation await only when function is asynchronous
], async (req,res) => {
    // returns a function that's why we should exec errors later
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email});
        if (user)
            return res.status(400).json({  });
        user = new User({name, email, password});
        // generating salt
        const salt = await bcrypt.genSalt(7);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user : {
                id : user.id
            }
        }

        jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
            if (err) 
                console.log(`${err} has occured`);
            res.json({ token })
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server error has occured');
    }
})

module.exports = router;