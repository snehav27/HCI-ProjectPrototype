/*
    Author : Team 7 -HCI
    File   : pointsController.js
    Details: points Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('pointsCtrl', function ($scope, $rootScope, $location) {

	$scope.goToPage = function(page) {
		$location.url(page);
	}
	
});	