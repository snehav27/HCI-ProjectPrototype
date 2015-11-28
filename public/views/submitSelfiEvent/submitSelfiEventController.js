/*
    Author : Team 7 -HCI
    File   : submitSelfiEventController.js
    Details: submitSelfiEvent Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('submitSelfiEventCtrl', function ($scope, $rootScope, $location) {
	$scope.hours = ('1','2','3','4','5','6').split(' ').map(function(hour) {
        return {hour: hour};
      })
});