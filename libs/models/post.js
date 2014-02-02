/**
 * Blog Schema Object
 */
	
var mongoose = require('mongoose');

postSchema = mongoose.Schema({
	title: String,
	body: String,
	author: String,
	create_date: Date
});


module.exports = mongoose.model('Post', postSchema);