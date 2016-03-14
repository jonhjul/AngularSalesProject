"use strict";

angular.module("project3App").controller("SellerDlgController",['$scope', 'AppResource','modalParam',
  function SellerDlgController($scope, AppResource, modalParam) {

    console.log("5333");
    $scope.seller = modalParam.seller;
    console.log(modalParam.seller);


    $scope.onOk = function onOK() {
      if ($scope.seller.name.length === 0) {
        // Vantar toster
        return;
      }
      if ($scope.seller.category.length === 0) {
        return;
      }
      console.log($scope.seller);
      if($scope.seller && $scope.seller.id === undefined){

        AppResource.addSeller($scope.seller).success(function(seller) {
          console.log("Add seller succsess");
          console.log(seller);
        });
      }
      else{
        AppResource.updateSeller($scope.seller.id, $scope.seller).success(function(seller) {
          console.log("Update seller succsess");
          console.log(seller);
        });
      }

      $scope.$close($scope.seller);
    };

    $scope.onCancel = function onCancel() {
      $scope.$dismiss();
    };

  }]);
