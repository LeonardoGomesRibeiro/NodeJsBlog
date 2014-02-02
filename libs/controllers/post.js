var posts = require('../models/post');

/**
 * Save the object.
 */
this.save = function(b, callback) {
	
	var success = true;
	b.save(function(err, savedPost, numberAffected) {
		if (err) {
			var errorMessages = err.errors;
			console.log(errorMessages);
			success = errorMessages;
		} else {
			success = savedPost;
		}
		callback(success);
	});
	
	return success;
};

this.findAll = function(callback) {
	posts.find({}, function(err, post) {
		callback(post);
	});
};
