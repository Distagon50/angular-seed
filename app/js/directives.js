'use strict';

/* Directives */
var myAppDirectives = angular.module('myAppDirectives', []);

myAppDirectives.directive('githubUser', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/github-user.html'
	}
});
