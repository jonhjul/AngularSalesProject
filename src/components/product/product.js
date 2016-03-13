"use strict";
/*
angular.module("project3App").directive("productCard",
  function productCard() {
    return {
      restrict: "E",
      templateUrl: "components/product-card/index.html",
      scope: {
        product: "="
      },
      link: function(scope, element, attributes) {
        console.log("Directive productCard");
      }
    };
  });
*/
angular.module('project3App')
.directive('productCard', function(){
	return {
		restrict: 'E',
		scope: { product: '=', edit:'=' },
		templateUrl: 'components/product-card/productCard.html'
	};
});



/*
angular.module("project3App").component('productCard',{
    bindings: {
      product: "="
    },
    controller: function(){
    },
    isolate: false,
    template: function($element, $attrs){
      console.log($element);
      return[
        '<div class="Product">',
          '<img ng-src="{{product.imageUrl}}" />',
          '<span>{{product.name}}</span>',
          '<span>{{product.price}}</span>',
        '</div>'
      ].join('');
    }
});
*/

/*
<prodct-card ng-repeat="p in products"
  ng-model="p">
</product-card>
*/


/*
// product-card/index.html

<div class="Product">
  <img ng-src="{{product.imageUrl}}" />
  <h4>{{product.name}}</h4>
  <span>{{product.price}}</span>
</div>
*/
