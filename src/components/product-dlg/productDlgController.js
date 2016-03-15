"use strict";

angular.module('project3App').controller('ProductDlgController', ['$scope',
  '$uibModalInstance', 'AppResource', 'modalParam', '$routeParams', 'toastr', '$translate',
  function ProductDlgController($scope, $uibModalInstance,
    AppResource, modalParam, $routeParams, toastr, $translate) {

    var sellerId = parseInt($routeParams['sellerId']);
    var editInfo = modalParam.product;
    if (editInfo !== undefined) {
      $scope.newProduct = {
        'id': editInfo.id,
        'name': editInfo.name,
        'price': editInfo.price,
        'quantitySold': editInfo.quantitySold,
        'quantityInStock': editInfo.quantityInStock,
        'imagePath': editInfo.imagePath
      };
    }

    $scope.onCancel = function onCancel() {
      $scope.$dismiss();
    };

    $scope.onOk = function onOK() {
      if ($scope.newProduct) {
        if ($scope.newProduct.name && $scope.newProduct.name.length && $scope.newProduct.name.length > 0) {
          if ($scope.newProduct && $scope.newProduct.price && $scope.newProduct.price > 0) {
            if ($scope.newProduct.id === undefined) {
              AppResource.addSellerProduct(sellerId, $scope.newProduct)
                .success(function(product) {
                  $scope.isLoading = false;
                  $translate('SellerDetails.Messages.SaveSucceeded')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                }).error(function() {
                  $scope.isLoading = false;
                  $translate('SellerDetails.Messages.SaveFailed')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                });
            } else {
              AppResource.updateProduct(sellerId, $scope.newProduct)
                .success(function(product) {
                  $scope.isLoading = false;
                  $translate('SellerDetails.Messages.EditSucceeded')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                }).error(function() {
                  $scope.isLoading = false;
                  $translate('SellerDetails.Messages.EditFailed')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                });
            }
          } else {
            $translate('SellerDetails.Messages.InvalidPrice')
              .then(function(translateVal) {
                toastr.info(translateVal, {
                  allowHtml: true
                });
              });
            return;
          }
        } else {
          $translate('SellerDetails.Messages.InvalidNoName')
            .then(function(translateVal) {
              toastr.info(translateVal, {
                allowHtml: true
              });
            });
          return;

        }
      } else {
        $translate('SellerDetails.Messages.InvalidAllInput')
          .then(function(translateVal) {
            toastr.info(translateVal, {
              allowHtml: true
            });
          });
        return;
      }
      $scope.$close($scope.newProduct);
    };

  }
]);
