angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n</head>\r\n\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n<!--	<script src=\"/components/resource/AppResource.js\"/>\r\n	<script src=\"/components/seller-dlg/SellerDlg.js\"></script>\r\n	<script src=\"/components/sellers/SellersController.js\"></script>\r\n	<script src=\"app.js\"></script>\r\n-->\r\n<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");
$templateCache.put("components/loading-message/loading.html","<uib-alert type=\"info\">\r\n    <span translate=\"shared.LoadingMessage\" />\r\n<uib-alert>\r\n");
$templateCache.put("components/seller-dlg/seller-dlg.html","<!--\r\n<input type=\"text\"  ng-model=\"seller.name\"/>\r\n<p>Seller-dlg.html</p>\r\n-->\r\n");
$templateCache.put("components/sellers/index.html","<div ng-show=\"isLoading\">\n  <lodagin-message>test</loading-message>\n</div>\n\n<div style=\"max-height: 400px; min-height:400px;\" class=\"col-md-8\" ng-hide=\"isLoading\">\n\n  <div class=\"col-md-6\">\n    <table>\n      <thead>\n        <tr>\n          <th>\n            <span translate=\"sellers.Name\"/>\n          </th>\n            <th>\n              <span translate=\"sellers.Category\"/>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr ng-repeat=\"s in sellers track by $index\">\n            <td>{{s.name}}</td>\n            <td>{{s.category}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"col-md-2\">\n      <button class=\"btn btn-primary\" ng-click=\"onAddSeller()\">\n        <i class=\"fa fa-plus\"/>\n        <span translate=\"sellers.Add\"/>\n      </button>\n    </div>\n  </div>\n");}]);