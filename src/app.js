"use strict";

angular.module("project3App", ["ngRoute", "pascalprecht.translate", "ui.bootstrap", "sharedServices"])
  .config(function($routeProvider, $translateProvider) {

    $routeProvider.when("/", {
      controller: "SellersController",
      templateUrl: "components/sellers/sellers.html"
    }).when("/sellerDetails/:sellerId", {
      controller: "SellerDetailsController",
      templateUrl: "components/seller-details/sellerDetails.html"
    }).otherwise({
        redirectTo: '/'
      });

    $translateProvider.registerAvailableLanguageKeys(['en', 'is'], {
      'en-US': 'en',
      'is-IS': 'is',
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useStaticFilesLoader({
        prefix: 'lang_',
        suffix: '.json'
    });

  });
/*

(5%) All input validated    some
(5%) Translated             almost all
(5%) Toastr feedback after  add/edit
(5%) Responsive layout      almost

(20%) Unit tests for all code
(10%) Coolness bonus
*/
