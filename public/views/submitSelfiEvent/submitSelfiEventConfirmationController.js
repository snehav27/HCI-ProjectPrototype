/*
    Author : Team 7 -HCI
    File   : checkinController.js
    Details: checkin Controller for application.
    Email  : hci.cs5340@gmail.com
*/

app.controller('submitSelfiEventConfirmationCtrl', function ($scope, $rootScope, $location) {
	$scope.goToPage = function(page) {
		$location.url(page);
	}
});