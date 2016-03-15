"use strict";

angular.module('project3App').controller('ProductDlgController',
    function ProductDlgController($scope, $uibModalInstance, AppResource, modalParam, $routeParams) {

      var sellerId = parseInt($routeParams['sellerId']);
      var editInfo = modalParam.product;

      if (editInfo === undefined) {
        $scope.newProduct = {
          'name': '',
          'price': '',
          'quantitySold': '',
          'quantityInStock': '',
          'imagePath': ''
        };
      } else {
        $scope.newProduct = {
          'id': editInfo.id,
          'name': editInfo.name,
          'price': editInfo.price,
          'quantitySold': editInfo.quantitySold,
          'quantityInStock': editInfo.quantityInStock,
          'imagePath': editInfo.imagePath
        };
      }




      $scope.onOk = function onOK() {
        if ($scope.newProduct === undefined) {
          console.log("Cannot add nothing, unless I did");
          return;
        }
        if ($scope.newProduct.name && $scope.newProduct.name.length === 0) {
          console.log("You must input a product name");
          // Vantar toster
          return;
        }
        if ($scope.newProduct.price && $scope.newProduct.price.length === 0) {
          return;
        }

        if ($scope.newProduct && $scope.newProduct.id === undefined) {
          console.log("ADD new product!!!!!");
          AppResource.addSellerProduct(sellerId, $scope.newProduct)
            .success(function(product) {
              $scope.isLoading = false;
            }).error(function() {
              console.log("Failed to add");
              $scope.isLoading = false;
            });
        } else {
          console.log("Edist existing product !!!!");
          AppResource.updateProduct(sellerId, $scope.newProduct)
          .success(function(product) {
            });

          }

          $scope.$close($scope.newProduct);
        };

        $scope.onCancel = function onCancel() {
          $scope.$dismiss();
        };

      });
