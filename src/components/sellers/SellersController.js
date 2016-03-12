"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {

	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;

AppResource.getSellers().success(function(sellers){
	$scope.sellers = sellers;
	$scope.isLoading = false;
}).error(function(){
	$scope.isLoading = false;
});

$scope.gotoSellerDetails = function(seller){
	console.log(seller);
	for (var s in $scope.sellers) {
			if ($scope.sellers[s] === seller) {
				$location.path('sellerDetails/' + seller.id);
			}
		}
};

$scope.onAddSeller = function onAddSeller(){

};


});
