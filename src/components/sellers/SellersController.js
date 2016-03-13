"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, $uibModal) {

	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;

$scope.refreshSeller = function refreshSeller(){
	AppResource.getSellers().success(function(sellers){
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function(){
		$scope.isLoading = false;
	});
};

angular.element(document).ready(function() {
		$scope.refreshSeller();
});

$scope.onAddSeller = function onAddSeller(){
		$scope.modalInstance = $uibModal.open({
			animation: false,
			templateUrl: 'components/product/addSellerModal.html',
			controller: 'productController',
			resolve: {
				items: function() {
					return $scope.items;
				}
			}
		});
		$scope.modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
			$scope.refreshSeller();
		}, function() {
		});
};

$scope.gotoSellerDetails = function(seller){
	for (var s in $scope.sellers) {
			if ($scope.sellers[s] === seller) {
				$location.path('sellerDetails/' + seller.id);
			}
		}
};

});
