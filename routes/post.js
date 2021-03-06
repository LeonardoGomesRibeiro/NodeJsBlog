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
	if (req.body.blogTags)
		posts.tags = req.body.blogTags.split(',');
	
	postController.save(posts, function(success) {
		exports.list(req, res);
	});
};

/*
 * GET users listing.
 */

exports.list = function(req, res) {
	//res.send("will list the blog.");
	postController.findAll(function(posts) {
		res.render('list-post', {posts: {postsArray: posts}});
	});
};
