/*
    Author : Team 7 -HCI
    File   : profileController.js
    Details: profile Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('profileCtrl', function ($scope, $rootScope, $location) {

	$scope.goToPage = function(page) {
		$location.url(page);
	}

});