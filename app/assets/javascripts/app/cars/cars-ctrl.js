angular.module('app').controller('CarsCtrl', ['$scope', '$location', 'CarsList', 'CarService', 'toaster', function ($scope, $location, CarsList, CarService, toaster) {

	$scope.carsList = CarsList;
	$scope.carModel = {};

	$scope.resetCar = function(){
		$scope.carModel = {};
	}

	$scope.closeCarModel = function() {
		angular.element('#carModal').modal('hide');
	};

	$scope.loadCarEditForm = function(carModel, index) {
		$scope.carModel = angular.copy(carModel);
		$scope.carModel.index = index;
		angular.element('#carModal').modal('show');
	};

	$scope.addCar = function(carModel) {
    CarService.save(carModel).$promise.then(function(data) {
			$scope.carsList.unshift(data);
			$scope.closeCarModel();
		}, function(res) {
			toaster.pop('error', 'Errors', res.data.errors.join(', '));
		});
	};

	$scope.updateCar = function(carModel) {
    CarService.update(carModel).$promise.then(function(data) {
			$scope.carsList[carModel.index] = data;
			$scope.closeCarModel();
		}, function(res) {
			toaster.pop('error', 'Errors', res);
		});
	};

	$scope.deleteCar = function(carId, index){
    CarService.delete({_id: carId}).$promise.then(function(response) {
			$scope.carsList.splice(index, 1);
		});
	};

}]);
