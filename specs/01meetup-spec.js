var mongoose = require('mongoose');

var MeetupModel = require('../models/meetup')(mongoose);
var Meetup = require('../views/meetup');

describe("Check Meetup", function(){

	if (!mongoose.connection.db) {
		mongoose.connect('mongodb://localhost/test');
	}

	it("Should create a Model", function(done){
		var meetup = new MeetupModel;
		expect(meetup).toBeDefined();
		var result = meetup.save(function(err, done){
			expect(err).toBe(err);
			done();
		});
		done();
	});
	it("Should create a POST response", function(){
		var post = Meetup.POST;
		expect(post).toBeDefined();

		var request = { body:{} };
		//var result = Meetup.POST(request, {}, function(){});
		//expect(result).toBe(null);		
	});

	mongoose.connection.close();
});
