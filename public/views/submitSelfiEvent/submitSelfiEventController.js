/*
    Author : Team 7 -HCI
    File   : submitSelfiEventController.js
    Details: submitSelfiEvent Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('submitSelfiEventCtrl', function ($scope, $rootScope, $location) {
	$scope.event = {
    name: 'Reading to kids',
    description: 'Reading to my kids history of World war 1'
	
  };
  $scope.goToPage = function(page) {
		$location.url(page);
	};
  $scope.categories = ['Finance' , 'Health', 'Empowement']
});