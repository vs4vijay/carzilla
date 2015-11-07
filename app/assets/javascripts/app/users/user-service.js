angular.module('app').service('UserService', ['$resource', function ($resource) {

	var UserResource = $resource('/users/:id', {
		id: '@id'
	});

	return UserResource;
}]);
