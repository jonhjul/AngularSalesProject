"use strict";

angular.module("project3App").controller("SellerDlgController",['$scope', 'AppResource','modalParam',
  function SellerDlgController($scope, AppResource, modalParam) {

    var editInfo = modalParam.seller;
    if (editInfo !== undefined) {
      console.log("Edit info");
      console.log(editInfo);
      $scope.newSeller = {
        'id': editInfo.id,
        'name': editInfo.name,
        'category': editInfo.category,
        'imagePath': editInfo.img
      };
    }


    $scope.onOk = function onOK() {
      if ($scope.newSeller.name.length === 0) {
        // Vantar toster
        return;
      }
      if ($scope.newSeller.category.length === 0) {
        return;
      }
      if($scope.newSeller && $scope.newSeller.id === undefined){
        AppResource.addSeller($scope.newSeller).success(function(seller) {
          console.log("Add seller succsess");
        });
      }
      else{
        AppResource.updateSeller($scope.newSeller.id, $scope.newSeller).success(function(seller) {
          console.log("Update seller succsess");
        });
      }
      $scope.$close($scope.seller);
    };

    $scope.onCancel = function onCancel() {
      $scope.$dismiss();
    };

  }]);
