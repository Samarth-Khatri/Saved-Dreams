const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
	},
	email:{
		type: String,
		required: true,
	},
	category:{
		type: String,
	},
	message:{
		type: String
	}
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

module.exports = User