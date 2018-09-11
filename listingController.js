angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
	 
    $scope.addListing = function() {
		//create a newData set for Data code, name, datalatitude, datalongitude and dataaddress
		var newData = {
			"code": $scope.listings.Datacode, 
			"name": $scope.listings.Dataname,
			"coordinates": {latitude: $scope.listings.Datalatitude,
			longitude: $scope.listings.Datalongitude
			},
			"address": $scope.listings.Dataaddress 
			}
		//push all newData set into listings
        $scope.listings.push(newData);
	};

    $scope.deleteListing = function(index) {
		//redefine index number with indexOf
		var index = $scope.listings.indexOf(index);
		//use this command to splice index with 1 (found it on stackoverflow) 
		$scope.listings.splice(index, 1); 
		$scope.detailedInfo = {};
		
	};
	
    $scope.showDetails = function(index) {
		//redefine the index number with indexOf
		var index = $scope.listings.indexOf(index);
		//replace detailedInfo with each index
	$scope.detailedInfo = $scope.listings[index];
	};
  }
]);
