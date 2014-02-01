var blog = require('../models/blog');

/**
 * Save the object.
 */
this.save = function(b, callback) {
	
	var success = true;
	b.save(function(err, savedBlog, numberAffected) {
		if (err) {
			var errorMessages = err.errors;
			console.log(errorMessages);
			success = errorMessages;
		} else {
			success = savedBlog;
		}
		callback(success);
	});
	
	return success;
};

this.findAll = function(callback) {
	blog.find({}, function(err, blogs) {
		callback(blogs);
	});
};
