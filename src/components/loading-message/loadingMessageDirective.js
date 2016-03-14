"use strict";

angular.module("project3App").directive("loadingMessage",
function loadginMessage(){
    return{
      restrict: "E",
      templateUrl: "src/components/loading-message/loading.html"
    };
});
