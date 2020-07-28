const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: String,
    username: String,
    password: String,
    email: String,
    profilePic: String,
    favorites: [{  
		type: mongoose.Schema.ObjectId,
		ref: 'Recipe'
	}],
});

const User = mongoose.model('User', userSchema);

module.exports = User;