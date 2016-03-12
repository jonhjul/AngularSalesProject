"use strict";

angular.module('project3App').controller('productController',
function productController($scope, $uibModalInstance, AppResource, $routeParams) {

  $scope.onAddItem = function (item) {
    var newProduct = {
      "name":  $scope.itemName,
      "price": $scope.price,
      "imagePath": $scope.imgUrl
    };
    var sellerId = parseInt($routeParams['sellerId']);

    AppResource.addSellerProduct(sellerId, newProduct).success(function(product){
      console.log("Add seller product");
      console.log(product);
      $scope.product = product;
    	$scope.isLoading = false;
    }).error(function(){
      console.log("Failed to add");
    	$scope.isLoading = false;
    });
    $uibModalInstance.close($scope);
  };


  $scope.closeModal = function () {
    console.log("modal close");
    $uibModalInstance.dismiss('cancel');
  };

});

/*
addSellerProduct: function addSellerProduct(id, product) {
  var success = false;
  if (mockResource.successAddSellerProduct) {
    var seller = _.find(mockSellers, function(o){ return o.id === id;});
    if (seller) {
      success = true;
      mockProducts.push({
        id: seller.id,
        product: product
      });
    }
  }

  return mockHttpPromise(success, product);
}
*/
