/**
 * Blog Schema Object
 */
	
var mongoose = require('mongoose');

blogSchema = mongoose.Schema({
	title: String,
	body: String,
	author: String,
	create_date: Date
});


module.exports = mongoose.model('Blog', blogSchema);