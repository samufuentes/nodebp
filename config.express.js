module.exports = function (express, app){
	//-- Basic Setup --
	app.configure(function(){
	    //-- Views Setup --
	    app.set('views', __dirname + '/templates');
	    //-- Template Engine --
	    app.set('view engine', 'jade');
	    //app.set('view engine', 'handelbars');
	    //app.engine('handlebars', require('handlebars').__express);
	    app.set('view options', { layout: false });

	    //-- Static Paths --
	    app.use(express.static(__dirname + '/static'));

	    //-- Basic middlewares --
	    app.use(express.compress());
	    app.use(express.bodyParser());
	    app.use(express.methodOverride());
	    app.use(express.cookieParser("d03479dd4fa77cb5bf59e11caeb81b38c2ede9c8a3af0e1808f5869e9aa86f93"));
	    app.use(express.cookieSession());

	    //-- Normal routing --
	    app.use(app.router);
	});

	
	//-- Development --
	app.configure('dev', function () {
	    app.use(express.logger());
            app.use(express.errorHandler());
    	});

	//-- Production --
	app.configure('production', function () {
    	});
}
