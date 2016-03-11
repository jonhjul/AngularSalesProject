"use strict";

angular.module("project3App", ["ngRoute", "pascalprecht.translate", "ui.bootstrap", "sharedServices"])
  .config(function($routeProvider, $translateProvider) {

    $routeProvider.when("/", {
      controller: "SellersController",
      templateUrl: "components/sellers/index.html"
    }).when("/sellerDetails/:sellerId", {
      controller: "SellerDetailsController",
      templateUrl: "components/seller-details/sellerDetails.html"
    }).when("/b", {
      controller: "productCtrl",
      templateUrl: "components/product/index.html"
    }).otherwise({
        redirectTo: '/'
      });

    $translateProvider.registerAvailableLanguageKeys(['en', 'is'], {
      'en-US': 'en',
      'is-IS': 'is',
    });


    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.translations('is', {
      "sellers": {
        "Title": "Seljendur",
        "Name": "Nafn",
        "Category": "Flokkur",
        "Add":    "Setja inn seljanda",
        "Messages": {
          "LoadFailed": "Ekki tókst að sækja lista yfir seljendur",
          "SaveSucceeded": "Nýjum seljanda hefur verið bætt við",
          "SaveFailed": "Því miður tókst ekki að bæta við nýjum seljanda"
        }
      }
    });
    $translateProvider.preferredLanguage('is');
    /*$translateProvider.useStaticFilesLoader({
        prefix: 'lang_',
        suffix: '.json'
    });
    */
  });
