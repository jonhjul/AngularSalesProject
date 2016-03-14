"use strict";

angular.module("project3App").factory("SellerDlg",
  function SellerDlg($uibModal) {
    return {
      open: function open(seller) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/seller-dlg/seller-dlg.html",
          controller: "SellerDlgController", // validation logic
          resolve: {
            modalParam: function modalParam() {
              return {
                seller: seller
              };
            }
          },
          return: {
            seller: seller,
          }
        });

        //return modalInstance.result; // Promise object
      }
    };
  });
