module.exports = function (app){

	app.get('/', function(req,res){
	  res.render('index.jade', {
		      title : 'Your Page Title'
		     ,description: 'Your Page Description'
		     ,author: 'Your Name'
	  });
	});

	app.get('/404', function(req, res, next){
		var err = new Error('not found!');
  		err.status = 404;
  		next(err);
	});

	app.get('/403', function(req, res, next){
  		var err = new Error('not allowed!');
  		err.status = 403;
  		next(err);
	});

	app.get('/500', function(req, res, next){
	  next(new Error('Damn it!'));
	});

}
