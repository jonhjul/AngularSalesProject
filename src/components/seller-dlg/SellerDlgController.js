"use strict";

angular.module("project3App").controller("SellerDlgController", ['$scope', 'AppResource', 'modalParam', 'toastr', '$translate',
  function SellerDlgController($scope, AppResource, modalParam, toastr, $translate) {

    var editInfo = modalParam.seller;
    if (editInfo !== undefined) {
      console.log("Edit info");
      console.log(editInfo);
      $scope.newSeller = {
        'id': editInfo.id,
        'name': editInfo.name,
        'category': editInfo.category,
        'imagePath': editInfo.imagePath
      };
    }

    $scope.onCancel = function onCancel() {
      $scope.$dismiss();
    };

    $scope.onOk = function onOK() {
      if ($scope.newSeller) {
        if ($scope.newSeller.name && $scope.newSeller.name.length && $scope.newSeller.name.length > 0) {
          if ($scope.newSeller && $scope.newSeller.category && $scope.newSeller.category.length > 0) {
            if ($scope.newSeller.id === undefined) {
              AppResource.addSeller($scope.newSeller)
                .success(function(seller) {
                  $translate('Sellers.Messages.SaveSucceeded')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                }).error(function() {
                  $translate('Sellers.Messages.SaveFailed')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                });
            } else {
              AppResource.updateSeller($scope.newSeller.id, $scope.newSeller)
                .success(function(seller) {
                  $translate('Sellers.Messages.EditSucceeded')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                }).error(function() {
                  $translate('Sellers.Messages.EditFailed')
                    .then(function(translateVal) {
                      toastr.info(translateVal, {
                        allowHtml: true
                      });
                    });
                });
            }
          } else {
            $translate('Sellers.Messages.InvalidPrice')
              .then(function(translateVal) {
                toastr.info(translateVal, {
                  allowHtml: true
                });
              });
            return;
          }
        } else {
          $translate('Sellers.Messages.InvalidNoName')
            .then(function(translateVal) {
              toastr.info(translateVal, {
                allowHtml: true
              });
            });
          return;
        }
      } else {
        $translate('Sellers.Messages.InvalidAllInput')
          .then(function(translateVal) {
            toastr.info(translateVal, {
              allowHtml: true
            });
          });
        return;
      }
      $scope.$close($scope.seller);
    };

  }
]);
