var postController = require('../libs/controllers/post');
var Post = require('../libs/models/post');

exports.index = function(req, res) {
	res.render('post');
};

exports.save = function(req, res) {
	var posts = new Post();
	console.log(posts);
	posts.title = req.body.blogTitle;
	posts.body = req.body.blogBody;
	posts.author = req.body.blogAuthor;
	posts.create_date = new Date();
	
	postController.save(posts, function(success) {
		res.send(success);
	});
};

/*
 * GET users listing.
 */

exports.list = function(req, res) {
	//res.send("will list the blog.");
	blogController.findAll(function(posts) {
		res.send(posts);
	});
};