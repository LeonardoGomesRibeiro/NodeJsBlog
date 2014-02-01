var blogController = require('../libs/controllers/blog');
var Blog = require('../libs/models/blog');

exports.index = function(req, res) {
	res.render('blog', { title: 'My Blog CRUD'});
};

exports.save = function(req, res) {
	var blogs = new Blog();
	console.log(blogs);
	blogs.title = req.body.blogTitle;
	blogs.body = req.body.body;
	blogs.author = req.body.author;
	blogs.create_date = new Date();
	
	blogController.save(blogs, function(success) {
		res.send("will save the blog." + success);
	});
};

/*
 * GET users listing.
 */

exports.list = function(req, res) {
	//res.send("will list the blog.");
	blogController.findAll(function(blogs) {
		res.send(blogs);
	});
};