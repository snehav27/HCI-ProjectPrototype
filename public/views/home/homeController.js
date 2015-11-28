/*
    Author : Team 7 -HCI
    File   : homeController.js
    Details: home Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('homeCtrl', function ($scope, $rootScope, $location) {

	$scope.goToPage = function(page) {
		$location.url(page);
	}
});