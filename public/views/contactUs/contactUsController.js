/*
    Author : Team 7 -HCI
    File   : contactUsController.js
    Details: contact us Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('contactUsCtrl', function ($scope, $rootScope, $location, $mdToast) {

	$scope.isQueryEmpty =false;

	$scope.sendQuery = function() {
	if($scope.query != null) {

		showToastMessage('Thanks for Contacting Us .. We will get back to you soon');
		
	} else {

		$scope.isQueryEmpty =true;
    }
   }

  function showToastMessage(message) {
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .position('top right')
        .hideDelay(3000)
    );
  };

});