var Meetup = require ('../models/meetup');

var views = {};

views.GET = function(req, res, next){
	Meetup.findOne();
}

views.POST = function(req, res, next){
	Meetup.create(req.body, function(err){
		if (err) return next(err);
		res.redirect('/');
	});
}

module.exports = views;
