/*global describe beforeEach it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('H5BP Mobile Boilerplate generator', function () {
	beforeEach(function (cb) {
		var deps = ['../../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				return cb(err);
			}

			this.generator = helpers.createGenerator('mobile-boilerplate:app', deps);
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = ['index.html', 'doc'];

		helpers.mockPrompt(this.generator, { docs: true });

		this.generator.run({}, function () {
			helpers.assertFiles(expected);
			cb();
		});
	});
});
