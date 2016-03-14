"use strict";

angular.module('project3App')
  .controller('SellerDetailsController', ['$scope', 'AppResource','$routeParams', '$uibModal', '$location', 'toastr', '$translate','ProductDlg',
  function($scope, AppResource, $routeParams, $uibModal, $location, toastr, $translate, ProductDlg) {
    $scope.modalInstance = {};
    $scope.seller = {};

    $translate('sellerdetails.Details').then(function (translateVal) {
      toastr.info(translateVal, {
          allowHtml: true
        });
    });

    $scope.sortBy = 'price';
    $scope.selectItems = [
      {"name":"Name","value":"name"},
      {"name":"Price","value":"price"},
      {"name":"Quantity Sold","value":"quantitySold"},
      {"name":"Quantity In Stock","value":"quantityInStock"}
    ];

    $scope.update = function update() {
        $scope.products = $scope.products.sort();
    };

    $scope.orderParam = function (){
      console.log('ran');
        return $scope.sortBy;
    };

    $scope.tabs = [{
      title: 'Tabs.SellerInfo',
      url: 'one.tpl.html'
    },{
      title: 'Tabs.AllProducts',
      url: 'two.tpl.html'
    },{
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

    $scope.goBack = function goBack(){
      $location.path('/');
    };

    AppResource.getSellerDetails(parseInt($routeParams['sellerId'])).success(function(seller){
        $scope.seller = seller;
    }).error(function(){

    });


    $scope.editProduct = function editProduct(product) {
      console.log(product);
      ProductDlg.open(product);
    };

    $scope.onAddItem = function onAddItem() {
        ProductDlg.open();
    };

/*
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
*/
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
