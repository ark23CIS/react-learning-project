const express = require('express')
const router = express.Router();
const User = require('../../models/User');
const auth = require('../../middlewares/auth');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = require('../../config/default').secret;

router.get('/', auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json( user)
    }
    catch (err) {
        res.status(500).send('Server Error');
    }
})

router.post('/', [
    check('password', 'Password is required').exists(),
    check('email', 'Pass a valid email').isEmail()
], async (req, res, next) => {
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res
        .status(400)
        .json( { errors: errors.array() })
    }

    const { password, email } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res
            .status(400)
            .json( {errors : [ {msg : 'INVALID CREDENTIALS'} ]})
        };
        const arePasswordsEqual = await bcrypt.compare(password, user.password);

        if (!arePasswordsEqual) {
            return res
            .status(400)
            .json( {errors : [{ msg: 'CREDENTIALS ARE NOT VALID' }]})
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign( payload, secret, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json ( {token} );
        } )
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;