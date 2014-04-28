'use strict';

/* Services */
var myAppServices = angular.module('myAppServices', []);

myAppServices.factory('apiRequest', function($http, $q) {
	var api = {};

	api.returnText = function() {
		return "Cinnamon Toast Crunch is the Greatest!";
	};

	api.retrieveInfo = function(type, data) {
		var deferred = $q.defer(),
				url = 'https://api.github.com/'+ type +'/' + data;

		$http({method: 'GET', url: url}).
			success(function (data, status, headers, config) {
				deferred.resolve(data);
			}).
			error(function (data, status, headers, config) {
				deferred.reject(status);
			});
		return deferred.promise;
	}

	return api;
});