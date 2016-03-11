
"use strict";

angular.module("project3App").controller("productCtrl",
function productCtrl($scope, $http, AppResource) {

  AppResource.getSellerProducts(1).success(function(products){
  	$scope.products = products;
  //  console.log(products);
  	$scope.isLoading = false;
  }).error(function(){
  	$scope.isLoading = false;
  });

});


/*
getSellerProducts: function getSellerProducts(id) {
  var products = [];
  for (var i = 0; i < mockProducts.length; ++i) {
    if (mockProducts[i].id === id) {
      products.push(mockProducts[i].product);
    }
  }

  return mockHttpPromise(mockResource.successGetSellerProducts, products);
},
*/
