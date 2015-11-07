var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.router', 'templates']);

app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/dashboard');

  	$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/dashboard/dashboard.html'
			})
			.state('dashboard', {
				url: '/dashboard',
				controller: 'DashboardCtrl',
				templateUrl: 'app/dashboard/dashboard.html'
			});
});


app.controller('AppCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

	$scope.goTo = function(url) {
		$location.path(url);
	};

}]);
