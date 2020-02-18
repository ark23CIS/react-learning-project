const express = require('express')
const router = express.Router();
const auth = require('../../middlewares/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');

router.get('/my', auth, async (req,res) => {
    try {
        const profile = await Profile.findById(req.user.id).populate('user', ['name']);
        if (!profile)
            res.status(400).json({ msg : 'No profile for the user :('});
        res.json(profile);
    }
    catch (err) {
        res.status(500).send('Server issue');
    }
})

router.post('/', [
    auth, [
        check['role', 'The role of your profile is required']
        .not()
        .isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
        return res.status(400).json({ errors: errors.array()})
    const { role } = req.body;
    const profile = {};
    profile.user = req.user.id;
    profile.role = role;
    try {
        let prof = await Profile.findOne(req.user.id);
        if (prof) {
            profile = await Profile.findOneAndUpdate({user : req.user.id}, { $set: { profileData: profile } }, {new: true})
            return res.json(profile);
        }
        const prof = new Profile(profile);
        await prof.save();
        return res.json(prof);
    } catch (err) {
        res.status(500).send('Server issues');
    }
})

router.get('/users', async (req,res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name']);
        return res.json(profiles);
    } catch (error) {
        res.status(500).send('Server error');
    }
})

router.get('/users/:user_id', async (req,res) => {
    try {
        const profile = await Profile.findOne({user : req.params.user_id}).populate('user', ['name']);
        if (!profile) return res.status(400).json( {msg: 'This profile does not exist'})
        res.json(profile);
    } catch (error) {
        res.status(500).send('Server error');
    }
})

module.exports = router;