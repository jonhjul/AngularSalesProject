'use strict';

angular.module("project3App").factory("ProductDlg",
  function ProductDlg($rootScope, $uibModal) {
    return {
      open: function open(product) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/product/product-dlg.html",
          controller: "ProductDlgController", // validation logic
          resolve: {
            modalParam: function modalParam() {
              return {
                product: product
              };
            }
          },
          return: {
            product: product
          }
        });
        return modalInstance;
        //return modalInstance.result; // Promise object
      }
    };
  });
