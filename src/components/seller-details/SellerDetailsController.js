"use strict";

angular.module('project3App')
  .controller('SellerDetailsController', ['$scope', 'AppResource','$routeParams', '$uibModal', '$location',
  function($scope, AppResource, $routeParams, $uibModal, $location) {
    $scope.modalInstance = {};
    $scope.seller = {};

    $scope.tabs = [{
      title: 'tabs.sellerInfo',
      url: 'one.tpl.html'
    },{
      title: 'tabs.allProducts',
      url: 'two.tpl.html'
    }, {
      title: 'tabs.topTen',
      url: 'three.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function(tab) {
      $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
      return tabUrl === $scope.currentTab;
    };

    $scope.goBack = function goBack(){
      console.log("go back");
      $location.path('/');
    };

    AppResource.getSellerDetails(parseInt($routeParams['sellerId'])).success(function(seller){
        console.log("Get seller details");
        console.log(seller);
        $scope.seller = seller;
    }).error(function(){

    });


    $scope.onAddItem = function onAddItem() {
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
        $scope.selected = selectedItem;
        $scope.refreshSellerProducts();
      }, function() {
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };

    angular.element(document).ready(function() {
        $scope.refreshSellerProducts();
    });

    $scope.refreshSellerProducts = function refreshSellerProducts(){
      AppResource.getSellerProducts(parseInt($routeParams['sellerId'])).success(function(products) {
        $scope.products = products;
        $scope.isLoading = false;
      }).error(function() {
        $scope.isLoading = false;
      });
    };

  }]);
