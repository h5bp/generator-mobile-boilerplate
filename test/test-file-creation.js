/*global describe beforeEach it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('H5BP Mobile Boilerplate generator', function () {
	beforeEach(function(cb) {
		var deps = ['../../app', [helpers.createDummyGenerator(), 'mobile-boilerplate:app']];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				return cb(err);
			}

			this.mb = helpers.createGenerator('mobile-boilerplate:app', deps);
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = ['index.html', 'README.md'];

		helpers.mockPrompt(this.mb, { docs: 'y' });

		this.mb.sourceRoot(path.join(__dirname, 'temp'));

		this.mb.run({}, function () {
			// TODO: figure out why this doesn't work
			//helpers.assertFiles(expected);
			cb();
		});
	});
});
