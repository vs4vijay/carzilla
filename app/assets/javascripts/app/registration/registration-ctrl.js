angular.module('app').controller('RegistrationCtrl', ['$scope', '$location', '$resource', '$auth', '$rootScope', 'toaster',
	function ($scope, $location, $resource, $auth, $rootScope, toaster) {

	$scope.registrationModel = {};
	$scope.registrationViewMode = 'SIGNIN'; // can be 'SIGNUP', 'RESETPWD', 'FORGOTPWD'

	if($location.search()['viewMode']) {
		$scope.registrationViewMode = $location.search()['viewMode'];
	};

	$scope.registerUser = function() {
		$auth.submitRegistration($scope.registrationModel)
			.then(function(resp) {
				// handle success response
				toaster.pop('success', 'Registration', 'A email has been sent to you for confirmation.');
				//$scope.loginUser();
				$scope.registrationModel = {};
			})
			// .catch(function(resp) {
			// 	// handle error response
			// 	toaster.pop('error', 'Error', resp.data.errors.full_messages);
			// });
	};

	$scope.loginUser = function() {
		$auth.submitLogin($scope.registrationModel)
			.then(function(resp) {
				// handle success response
				toaster.pop('success', 'Login', 'User logged in successfully.');
				$location.path('/cars');
				$scope.registrationModel = {}
			})
			// .catch(function(resp) {
			// 	// handle error response
			// 	toaster.pop('error', 'Error', resp.errors.join(','));
			// });
	};

	$scope.validateUser = function() {
		$auth.validateUser()
			.then(function(resp) {
				// handle success response
				toaster.pop('success', 'Validate User', resp);
			})
			// .catch(function(resp) {
			// 	// handle error response
			// 	toaster.pop('error', 'Error', resp.errors.join(','));
			// });
	};

	$scope.resetPassword = function() {
		$auth.requestPasswordReset($scope.registrationModel)
			.then(function(resp) {
				// handle success response
				toaster.pop('success', 'Reset Password', resp.data.message);
			})
			// .catch(function(resp) {
			// 	// handle error response
			// 	toaster.pop('error', 'Error', resp.data.errors.join(','));
			// });
	};

	$scope.updatePassword = function() {
		$auth.updatePassword($scope.registrationModel)
			.then(function(resp) {
				toaster.pop('success', 'Password Updated', resp.data.data.message);
				$location.path('/cars');
			})
			// .catch(function(resp) {
			// 	// handle error response
			// 	toaster.pop('error', 'Error', resp.data.errors.join(','));
			// });
	};

	$scope.signOut = function() {
		$auth.signOut()
			.then(function(resp) {
				// handle success response
				toaster.pop('success', 'Sign Out', resp.data.message);
				$location.path('/registration');
			})
			// .catch(function(resp) {
			// 	// handle error response
			// 	toaster.pop('error', 'Error', resp.data.errors.join(','));
			// });
	};

}]);
