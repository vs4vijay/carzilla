var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.router', 'ng-token-auth', 'templates', 'toaster', 'ngAnimate']);

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $authProvider) {

	$urlRouterProvider.otherwise('/registration');

	$authProvider.configure({
		apiUrl: '.',
		confirmationSuccessUrl: location.origin + '/#/cars',
		passwordResetSuccessUrl: location.origin + '/#/reset-password'
	});

	$stateProvider
		.state('home', {
			url: '/',
		})
		.state('registration', {
			url: '/registration',
			controller: 'RegistrationCtrl',
			templateUrl: 'app/registration/views/registration.html'
		})
		.state('secure', {
			template: '<ui-view>',
			resolve: {
				auth: ['$auth', function($auth) {
					return $auth.validateUser();
				}]
			}
		})
		.state('secure.reset-password', {
			url: '/reset-password',
			controller: 'RegistrationCtrl',
			templateUrl: 'app/registration/views/reset-password.html'
		})
		.state('secure.cars', {
      url: '/cars',
      controller: 'CarsCtrl',
      templateUrl: 'app/cars/cars.html',
      resolve: {
        CarsList: ['CarService', function(CarService) {
          return CarService.query();
        }]
      }
    });

		$httpProvider.interceptors.push(['$q', 'toaster', function($q, toaster) {
	    return {
	      responseError: function(rejection) {
					if(rejection.status == 401) {
						// in case of unauthorised user
					}
					var errors = rejection.data.errors.full_messages || rejection.data.errors;
					toaster.pop('error', 'Error', errors.join(';\n'));
	        return $q.reject(rejection);
	      }
	    };
	  }]);
}]);


app.controller('AppCtrl', ['$scope', '$location', '$rootScope', '$auth', 'toaster', function ($scope, $location, $rootScope, $auth, toaster) {

	var validateUser = function() {
		$auth.validateUser().then(function(resp) {
	    $scope.userInfo = resp;
	  });
	};

	validateUser();

  $rootScope.$on('auth:login-success', function(event) {
    validateUser();
  });

	$scope.goTo = function(url) {
		$location.path(url);
	};

	$scope.signOut = function() {
		$auth.signOut()
			.then(function(resp) {
				toaster.pop('success', 'Sign Out', 'Successfully logged out.');
				$location.path('/registration');
			})
			.catch(function(resp) {
				$location.path('/registration');
			});
	};

}]);
