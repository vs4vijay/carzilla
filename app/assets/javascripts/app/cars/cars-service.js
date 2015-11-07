angular.module('app').factory ('CarService', ['$resource', function($resource) {

  var CarsResource = $resource('/api/v1/cars/:_id', {
    _id: '@_id'
  }, {
      update: {
        method: 'PUT'
      }
  });

  return CarsResource;
}]);
