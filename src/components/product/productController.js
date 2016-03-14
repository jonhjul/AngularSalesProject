"use strict";

angular.module('project3App').controller('productController',
  function productController($scope, $uibModalInstance, AppResource, modalParam, $routeParams) {

    $scope.product = modalParam.product;
    console.log("product controller");
    console.log($scope.product);

    if ($scope.product && $scope.product.id === undefined) {
      console.log("prodcut id != undefined");
    }
/*
      var newProduct = {
        id: "",
        name: $scope.product.name,
        price: $scope.product.price,
        imagePath: $scope.imgUrl
      };
*/




    $scope.onOk = function onOK() {

      $scope.product = modalParam.product;
      if ($scope.product.name.length === 0) {
        // Vantar toster
        return;
      }
      if ($scope.product.price.length === 0) {
        return;
      }
      console.log($scope.product);
      if ($scope.product && $scope.product.id === undefined) {
/*
        AppResource.addSellerProduct(parseInt($routeParams['sellerId']), newProduct)
          .success(function(product) {
            $scope.isLoading = false;
          }).error(function() {
            console.log("Failed to add");
            $scope.isLoading = false;
          });
*/
      } else {
/*        AppResource.updateProduct($scope.product.id, $scope.product).success(function(product) {
          console.log("Update product succsess");
          console.log(product);
        });
*/
      }

      $scope.$close($scope.product);
    };

    $scope.onCancel = function onCancel() {
      $scope.$dismiss();
    };


    /*
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
    */

  });
