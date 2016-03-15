/*
"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
});
*/
"use strict";

describe("SellersController", function() {
  var seller = {
    id: 1,
    name: "Hannyrðaþjónusta Hannesar",
    category: "Fatnaður",
    imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb"
  };
  var ctrl;
  var $scope;
  var $location;
  //var template ="<my-directive></my-directive>";
  //var element = $compile(template)($scope);
  //var directiveScope = element.isolateScope();
  var $uibModal;
  // var SellerDlg;
	var mockLocation = {
		path: function(p) {
		}
	};
  beforeEach(module("project3App", function($provide) {
    $provide.value('fooVal', 5);
  }));
  beforeEach(inject(function($controller, $rootScope, $location) {
    // Create a new scope:
    $scope = $rootScope.$new();
    ctrl = $controller("SellersController", {
      $scope: $scope,
      $uibModal: $uibModal,
      $location: mockLocation
    });
  }));

  // The ctrl variable should now be accessible to
  // all test specs in this suite, and should reference
  // our SellersController
  /*
  $scope.gotoSellerDetails = function(seller) {
  	for (var s in $scope.sellers) {
  		if ($scope.sellers[s] === seller) {
  			$location.path('sellerDetails/' + seller.id);
  		}
  	}
  };
  */

  it('Her er test', function() {
		$scope.gotoSellerDetails(1);
		console.log("I got a call");
    spyOn(mockLocation, "path");
    expect(mockLocation.path).toBe('sellerDetails/1/');
  });

  it('should have tests', function() {
    expect(true).toBe(true);
  });

  it("Should refresh sellers", function() {
    $scope.refreshSeller();
  });

  it("Should add a seller", function() {
    $scope.onAddSeller();
  });

  it("Should edit sellers", function() {
    $scope.editSeller();
  });

  it('should inject dependencies', inject(function($location, fooVal) {
    expect($location).toBeDefined();
    expect(fooVal).toBe(5);
  }));
});
