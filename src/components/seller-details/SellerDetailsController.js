"use strict";

angular.module('project3App')
  .controller('SellerDetailsController', ['$scope', 'AppResource', '$routeParams', '$uibModal', '$location', 'toastr', '$translate', 'ProductDlg',
    function($scope, AppResource, $routeParams, $uibModal, $location, toastr, $translate, ProductDlg) {
      $scope.modalInstance = {};
      $scope.seller = {};
      $scope.editData = {};

      angular.element(document).ready(function() {
        $scope.refreshSellerProducts();
      });

      $scope.refreshSellerProducts = function refreshSellerProducts() {
        AppResource.getSellerProducts(parseInt($routeParams['sellerId'])).success(function(products) {
          $scope.products = products;
          $scope.isLoading = false;
        }).error(function() {
          console.log("Get seller fail");
          $scope.isLoading = false;
        });
      };

      $scope.sortBy = 'price';
      $scope.selectItems = [{
        "name": "Name",
        "value": "name"
      }, {
        "name": "Price",
        "value": "price"
      }, {
        "name": "Quantity Sold",
        "value": "quantitySold"
      }, {
        "name": "Quantity In Stock",
        "value": "quantityInStock"
      }];

      $scope.goBack = function goBack() {
        $location.path('/');
      };

      AppResource.getSellerDetails(parseInt($routeParams['sellerId'])).success(function(seller) {
        $scope.seller = seller;
      }).error(function() {});

      $scope.editProduct = function editProduct(product) {
        $scope.editData = ProductDlg.open(product);
        $scope.editData.result.then(function(updatedProduct) {
          $scope.refreshSellerProducts();
        });
      };

      $scope.onAddItem = function onAddItem() {
        $scope.obj = ProductDlg.open();
        $scope.obj.result.then(function(updatedProduct) {
          $scope.refreshSellerProducts();
        });
      };

      $scope.orderParam = function() {
        return $scope.sortBy;
      };

      $scope.tabs = [{
        title: 'Tabs.SellerInfo',
        url: 'one.tpl.html'
      }, {
        title: 'Tabs.AllProducts',
        url: 'two.tpl.html'
      }, {
        title: 'Tabs.TopTen',
        url: 'three.tpl.html'
      }];

      $scope.currentTab = 'one.tpl.html';

      $scope.onClickTab = function(tab) {
        $scope.currentTab = tab.url;
      };

      $scope.isActiveTab = function(tabUrl) {
        return tabUrl === $scope.currentTab;
      };

    }
  ]);
