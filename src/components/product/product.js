"use strict";

angular.module('project3App')
.directive('productCard', function(){
	return {
		restrict: 'E',
		scope: true, //, edit:'='
		templateUrl: 'components/product-card/productCard.html'
	};
});
