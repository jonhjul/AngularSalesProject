"use strict";

angular.module('project3App').controller('productController',
function productController($scope, $uibModalInstance, AppResource, $routeParams) {

  $scope.onAddSeller = function (item) {
    var newSeller = {
        id: "",
        name: $scope.sellerName,
        category: $scope.category,
        imagePath: $scope.imgUrl
      };
    AppResource.addSeller(newSeller).success(function(seller){
    	$scope.isLoading = false;
    }).error(function(){
      console.log("Failed to add");
    	$scope.isLoading = false;
    });
    $uibModalInstance.close($scope);
    };


    $scope.onAddItem = function (item) {
      var newProduct = {
          id: "",
          name: $scope.productName,
          price: $scope.price,
          quantitySold: $scope.quantitySold,
          quantityInStock: $scope.quantityInStock,
          imagePath: $scope.imgUrl
        };
      AppResource.addSellerProduct(parseInt($routeParams['sellerId']), newProduct)
      .success(function(product){
      	$scope.isLoading = false;
      }).error(function(){
        console.log("Failed to add");
      	$scope.isLoading = false;
      });
      $uibModalInstance.close($scope);
      };

  $scope.closeModal = function () {
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