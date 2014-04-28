'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myAppFilters',
  'myAppServices',
  'myAppDirectives',
  'myAppControllers',
  'ngAnimate'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  	$routeProvider.when('/two-way-binding', {templateUrl: 'two-way-binding.html'});
  	$routeProvider.when('/ng-repeat', {templateUrl: 'ng-repeat.html', controller: 'cerealController'});
  	$routeProvider.when('/controllers', {templateUrl: 'controllers.html', controller: 'cerealController'});
  	$routeProvider.when('/directives', {templateUrl: 'directives.html', controller: 'mainAppController'});
  	$routeProvider.when('/github-app', {templateUrl: 'github-app.html', controller: 'mainAppController'});
    // $routeProvider.when('/repo/:githubUser/:repoName', {templateUrl: 'repo-detail.html', controller: 'mainAppController'});
  	$routeProvider.when('/home', {templateUrl: 'home.html'});
  	$routeProvider.otherwise({redirectTo: '/home'});
  	$locationProvider.html5Mode(false);
}]);
