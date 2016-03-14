'use strict';

angular.module("project3App").factory("ProductDlg",
  function ProductDlg($uibModal) {
    return {
      open: function open(product) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/product/product-dlg.html",
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
