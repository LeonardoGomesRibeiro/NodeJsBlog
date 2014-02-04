/**
 * Blog Schema Object
 */
	
var mongoose = require('mongoose');

postSchema = mongoose.Schema({
	title: String,
	body: String,
	author: String,
	tags: [],
	create_date: Date
});


module.exports = mongoose.model('Post', postSchema);