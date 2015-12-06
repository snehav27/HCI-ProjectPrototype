/*
    Author : Team 7 -HCI
    File   : submitSelfiEventController.js
    Details: submitSelfiEvent Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('submitSelfiEventCtrl', function ($scope, $rootScope, $location) {
	$scope.selfieEvent = {
		name: 'Reading to kids',
		description: 'Reading to my kids history of World war 1',
		category: 'Education (Child / Adult)',
		date: new Date ('2015/11/30'),
		hours: 2

	};
	$scope.goToPage = function(page) {
		$location.url(page);
	};
	$scope.categories = ['Health (Physical & Mental)' , 'Community Service', 'Education (Child / Adult)', 'Finance / Employment']
	
	$scope.getDetails = function(eventName) { 
		var search = $location.search();
        var eventName = search.eventName;
		console.log(eventName);
		$scope.selfieEvent = eventName;
	}	
	
	$scope.goToSelfieCheckinConfirmation = function(eventName) {
		if($scope.selfieEvent.name != null && $scope.selfieEvent.description != null && $scope.selfieEvent.category != null && $scope.selfieEvent.date != null) {
	        
	      	$location.url("/submitSelfiEventConfirmation?eventName=" + eventName);
	      }
    }

});