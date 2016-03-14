"use strict";

angular.module("project3App").controller("SellersController",
  function SellersController($scope, AppResource, $location, $uibModal, SellerDlg) {

    // TODO: load data from AppResource! Also, add other methods, such as to
    // add/update sellers etc.
    $scope.isLoading = true;

    $scope.refreshSeller = function refreshSeller() {
      AppResource.getSellers().success(function(sellers) {
        $scope.sellers = sellers;
        $scope.isLoading = false;
      }).error(function() {
        $scope.isLoading = false;
      });
    };

    angular.element(document).ready(function() {
      $scope.refreshSeller();
    });

    $scope.onAddSeller = function onAddSeller() {
      SellerDlg.open();
    };

    $scope.editSeller = function editSeller(e) {
      SellerDlg.open(e);
    };

    $scope.gotoSellerDetails = function(seller) {
      for (var s in $scope.sellers) {
        if ($scope.sellers[s] === seller) {
          $location.path('sellerDetails/' + seller.id);
        }
      }
    };

  });
