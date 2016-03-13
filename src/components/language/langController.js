"use strict";

angular.module("project3App").controller("langController",
function langController($scope, $translate ) {
    $scope.changeLang = function changeLang(){
    //  $translatePartialLoader.addPart('translation');

      var currLang = $translate.use();
      if(currLang === 'is'){
        $translate.use('en');
      }else if(currLang === 'en'){
        $translate.use('is');
      }

    };
});
