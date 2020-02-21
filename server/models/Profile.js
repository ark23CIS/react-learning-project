const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    role: {
        type: String,
        default: "Pupil"
    }, 
    status: {
        type: String, 
        required: true
    },
    allRatings: {
        type: [Number]
    },
    totalRaiting: {
        type: Number,
        default: 0
    },
    careerDescription: {
        type: String, 
        default: "Have not got any experience"
    },
    educationDescription: {
        type: String,
        default: "Add some description"
    },
    certifications: {
        type: String,
        default: ""
    },
    reviews: {
        type: [String]
    },
    // statistics: {
    //     type: 
    // }
    lessonValue: {
        type: Number
    },
    teacherOf: {
        type: String
    },
    country: {
        type: String, 
        required: true
    },
    speakingLanguage: {
        type: String,
        required: true
    },
    video: {
        type: String
    },
    lessonsCount: {
        type: Number, 
        default: 0
    },
    listenedLessons: {
        type: Number, 
        default: 0
    },
    teachedLessons: {
        type: Number, 
        default: 0
    },
    views: {
        type: Number
    },
    likes: {
        type: Number
    },
    reviews: {
        type: [String]
    }
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;