var page = require('../models/page');

exports.index = function(req, res) {
	page.all(function(err, names) {
		res.render('pages/index', { title: 'Pages', names: names });
	});
};

exports.show = function(req, res) {
	name = req.params.name;
	page.find(name, function(err, body) {
		res.render('pages/show', { title: 'Page: ' + name, name: name, body: body });
	});
};
