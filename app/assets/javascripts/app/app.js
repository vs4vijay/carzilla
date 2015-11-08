var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.router', 'ng-token-auth', 'templates', 'toaster', 'ngAnimate']);

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $authProvider) {

	$urlRouterProvider.otherwise('/registration');

	$authProvider.configure({
		apiUrl: '.',
		confirmationSuccessUrl: location.origin + '/#/dashboard',
		passwordResetSuccessUrl: location.origin + '/#/reset-password'
	});

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/dashboard/dashboard.html'
		})
		.state('registration', {
			url: '/registration',
			controller: 'RegistrationCtrl',
			templateUrl: 'app/registration/views/registration.html'
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

		$httpProvider.interceptors.push(function(toaster) {
	    return {
	      responseError: function(res) {
					if(res.status == 401) {
						// in case of unathorised user
						toaster.pop('error', 'Error', res.data.errors.join('\n'));
					}
	        return res;
	      }
	    };
	  });
}]);


app.controller('AppCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

	$scope.goTo = function(url) {
		$location.path(url);
	};

}]);
