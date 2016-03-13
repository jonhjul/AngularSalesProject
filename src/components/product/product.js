"use strict";

angular.module("project3App").directive("productCard",
function productCard(){
  return {
    restrict: "C",
    templateUrl: "/components/product/addItemModal.html",
    scope: {
      product : "="
    },
    link: function(scope,element,attributes){
      var condition = attributes["validate-condition"];
      console.log("Directive productCard");
      console.log(scope.product);
    }
  };
});




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
