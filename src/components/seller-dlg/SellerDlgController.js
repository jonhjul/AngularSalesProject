/*
"use strict";

angular.module("project3App").contoller("SellerDlgController",
function SellerDlgController($scope){

    $scope.seller = {
        name: "Herbert Guðmundsson",
        category: "Bækur",
        imagePath: ""
    };

    $scope.onOk = function onOK(){
        // TODO: validation!!
        if($scope.seller.name.length === 0){
          // Birta validation skilabod!
          return;
        }
        $scope.$close($scope.seller);
    };

    $scope.onCancel = function onCancel(){
        $scope.$dismiss();
    };
});
*/
