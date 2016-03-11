"use strict";


angular.module("project3App").directive("productCard",
function productCard(){
  return {
    restrict: "E",
    templateUrl: "src/blabla/index.html",
    scope: {
      product : "="
    },
    link: function(scope,element,attributes){
      var condition = attributes["validate-condition"];
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

/*
//Rest þjónusta
Get
/api/sellers

Get
/api/sellers/{id}

Get
/api/sellers/{id}/producst

Post
/api/sellers/{id}/producst

Put
/api/sellers/{id}/producst/{productid}

*/
