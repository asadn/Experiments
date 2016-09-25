var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',
function AppCtrl($scope,$http){
	console.log("hello world from controller");

	var refresh = function() {
		$http.get('/contactList').success(function(response) {
			console.log("I got the data requested");
			$scope.contactList = response;
		});
	};

	refresh();
	$scope.addContact = function() {
		console.log($scope.contact)
		$http.post('/contactList',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id) {
		console.log(id);
		$http.delete("/contactList/" + id).success(function(response){
			refresh();
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactList/' + id).success(function(response){
			$scope.contact = response;
		});
	}
	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/contactList/'+ $scope.contact._id,$scope.contact).success(function(response){
			
			refresh();
		});
	};
}]);

