'use strict';

/* Controllers */
var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('cerealController', function($scope) {
	$scope.cereals = [
		{taste: 10, name: "Cinnamon Toast Crunch", logo: "http://crazysquares.com/assets/images/headerfooter/CTC_logo.png"},
		{taste: 10, name: "Lucky Charms", logo: "https://www.generalmillsfoodservice.com/~/media/Images/NEW%20Industry/College-Univeristy/promotions-support-tool/lucky-charms-50th/logos/LC-Logo.ashx"},
		{taste: 9, name: "Reese's Puffs", logo: "http://brandongaille.com/wp-content/uploads/2013/08/Reeses-Puffs-Company-Logo.gif"},
		{taste: 4, name: "Chex", logo: "http://www.generalmills.com/~/media/Images/Brands/Cereal/Chex/Thumbnails/cereal_chex_logo_150x69.ashx?w=150&h=69&as=1"},
		{taste: 5, name: "Captain Crunch", logo: "http://moviewriternyu.files.wordpress.com/2013/03/crunch.gif"}
	];

	$scope.addCereal = function() {
		$scope.cereals.push({taste: $scope.cerealTaste, name: $scope.cerealName, logo: $scope.cerealLogo});
	}
});

myAppControllers.controller('mainAppController', function($scope, $routeParams, apiRequest) {
	
	$scope.activeUser = undefined;

	$scope.getUser = function(user) {

		var info = apiRequest.retrieveInfo('users', user);
		info.then(function(result) {
			$scope.exampleUser = result;
		}, function(status) {
		});
		
	}

	$scope.retrieveUserInfo = function () {
		var info = apiRequest.retrieveInfo('users', $scope.githubUser);
		info.then(function(result) {
			$scope.user = result;
			$scope.activeUser = true;
		}, function(status) {
			$scope.activeUser = false;
		});

		var userRepos = apiRequest.retrieveInfo('users', $scope.githubUser + '/repos');
		userRepos.then(function(result) {
			$scope.userRepos = result;
		}, function(status) {
			$scope.userRepos = false;
		});
	}

	$scope.getRepo = function() {
		var repo = apiRequest.retrieveInfo('repos', $scope.githubUser + '/' + $scope.repoName);
		repo.then(function(result) {
			$scope.repo = result;
			$scope.activeRepo = true;
		}, function(status) {
			$scope.activeRepo = false;
		});

		var issues = apiRequest.retrieveInfo('repos', $scope.githubUser + '/' + $scope.repoName + '/issues');
		issues.then(function(result) {
			$scope.issues = result;
		}, function(status) {
			$scope.issues = false;
		})
	}

	// Route
	// if ($routeParams.repoName) {
	// 	$scope.githubUser = $routeParams.githubUser;
	// 	$scope.repoName = $routeParams.repoName;
	// 	$scope.getRepo();
	// }

});


