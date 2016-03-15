/*
"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
});
*/
'use strict';

describe('SellersController', function(){
	beforeEach(module('project3App'));
	var $controller;
	var seller = {
    id: 1,
    name: "Hannyrðaþjónusta Hannesar",
    category: "Fatnaður",
    imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb"
  };
	var mockLocation = {
		path: function(p) {
		}
	};
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
		spyOn(mockLocation, "path");
	}));

	describe('$scope', function(){
		it('Controller testing', function(){
			var $scope = {};
			var controller = $controller('SellersController',{ $scope: $scope, $location: mockLocation });
			console.log(controller);
			// console.log($scope.gotoSellerDetails);
			// console.log(mockLocation.path);
			$scope.gotoSellerDetails();
			expect(mockLocation.path).toHaveBeenCalledWith('sellerDetails/1');
		});

		xit('Hér er test', function(gotoSellerDetails) {
			expect(mockLocation.path).toHaveBeenCalledWith('sellerDetails/1');
		});

	});
});
