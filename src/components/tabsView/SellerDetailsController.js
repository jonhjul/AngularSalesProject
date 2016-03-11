
"use strict";

angular.module('project3App')
.controller('SellerDetailsController', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Allar vörur',
            url: 'one.tpl.html'
        }, {
            title: 'Top ten',
            url: 'two.tpl.html'
        }
    ];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl === $scope.currentTab;
    };
}]);
