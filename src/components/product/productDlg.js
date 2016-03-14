'use strict';

angular.module("project3App").factory("ProductDlg",
  function SellerDlg($uibModal) {
    return {
      open: function open(product) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/product/addItemModal.html",
          controller: "productController", // validation logic
          resolve: {
            modalParam: function modalParam() {
              return {
                product: product
              };
            }
          },
          return: {
            product: product,
          }
        });

        //return modalInstance.result; // Promise object
      }
    };
  });
