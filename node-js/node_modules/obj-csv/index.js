var async = require('async');
var _ = require('lodash');

module.exports = function(object, query, cb) {
	if (object.constructor === Object) object = [object];
	if (object.constructor === Array) {
		var csv = _.reduce(query, function(line, n) {
			return line + '"' + n + '"' + ',';
		}, "");
		csv = csv.substring(0, csv.length - 1);
		csv += '\n';
		async.each(object, function(obj, cb) {
			query.forEach(function(key) {
				try {
					csv += '"' + eval("obj." + key) + '"' + ',';
				} catch (e) {
					csv += '"' + '' + '"' + ',';
				}
			});
			csv = csv.substring(0, csv.length - 1);
			csv += '\n';
			cb(null);
		}, function(err) {
			cb(err, csv);
		});
	} else {
		throw new Error(object.constructor + " is not supported");
	}
};
