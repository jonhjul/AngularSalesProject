"use strict";

angular.module("project3App").controller("SellerDlgController",['$scope', 'AppResource',
  function SellerDlgController($scope, AppResource) {

    $scope.onOk = function onOK() {
      if ($scope.seller.name.length === 0) {
        return;
      }
      if ($scope.seller.category.length === 0) {
        return;
      }

      AppResource.addSeller($scope.seller).success(function(seller) {
        console.log("Add seller succsess");
        console.log(seller);
      });

      $scope.$close($scope.seller);
    };

    $scope.onCancel = function onCancel() {
      $scope.$dismiss();
    };

  }]);
