"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {

	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;

AppResource.getSellers().success(function(sellers){
	$scope.sellers = sellers;
	$scope.isLoading = false;
}).error(function(){
	$scope.isLoading = false;
});

$scope.onAddSeller = function onAddSeller(){

var peterSeller = {
	name: "Peter Sellers",
	category: "Movies",
	imagePath: "http://www.meredy.com/sellerspeter03.jpg"
};

//SellerDlg.show().then(function(seller){
	AppResource.addSeller(peterSeller).success(function(seller){
	}).error(function(){
	//		centrisNotify.error("sellers.Messages.SaveFailed");
		// TODO: hvað gerum við?
	});
//});
};

});
