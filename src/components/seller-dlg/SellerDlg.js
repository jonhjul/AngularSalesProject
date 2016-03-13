"use strict";

angular.module("project3App").factory("SellerDlg",
  function SellerDlg($uibModal) {
    return {
        open: function open(seller) {
          var modalInstance = $uibModal.open({
            modelParam: function() {

            },
            templateUrl: "components/seller-dlg/seller-dlg.html",
            controller: "SellerDlgController", // validation logic
            return: {
              seller: seller,
            }
          });
          return modalInstance.result; // Promise object
        }
    };
  });
