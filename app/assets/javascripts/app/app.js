var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.router', 'templates', 'toaster']);

app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/cars');

  	$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/dashboard/dashboard.html'
			})
			.state('dashboard', {
				url: '/dashboard',
				controller: 'DashboardCtrl',
				templateUrl: 'app/dashboard/dashboard.html'
			})
			.state('cars', {
        url: '/cars',
        controller: 'CarsCtrl',
        templateUrl: 'app/cars/cars.html',
        resolve: {
          CarsList: ['CarService', function(CarService) {
            return CarService.query();
          }]
        }
      });
});


app.controller('AppCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

	$scope.goTo = function(url) {
		$location.path(url);
	};

}]);
