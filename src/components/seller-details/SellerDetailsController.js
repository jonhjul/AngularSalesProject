"use strict";

angular.module('project3App')
  .controller('SellerDetailsController', ['$scope', 'AppResource','$routeParams', '$uibModal',
  function($scope, AppResource, $routeParams, $uibModal) {
    $scope.modalInstance = {};

    $scope.tabs = [{
      title: 'Allar vörur',
      url: 'one.tpl.html'
    }, {
      title: 'Top ten',
      url: 'two.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function(tab) {
      $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
      return tabUrl === $scope.currentTab;
    };

    $scope.onAddItem = function onAddItem() {
      console.log("333");
      $scope.modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'components/product/addItemModal.html',
        controller: 'productController',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });

      $scope.modalInstance.result.then(function(selectedItem) {
        console.log("12345");
        $scope.selected = selectedItem;
      }, function() {
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };


    AppResource.getSellerProducts(parseInt($routeParams['sellerId'])).success(function(products) {
      $scope.products = products;
      $scope.isLoading = false;
    }).error(function() {
      $scope.isLoading = false;
    });

    $scope.closeModal = function closeModal(){
      console.log($uibModal);
    };

  }]);
