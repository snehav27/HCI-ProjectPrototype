/*
    Author : Team 7 -HCI
    File   : firendsController.js
    Details: friends Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('friendsCtrl', function ($scope, $rootScope, $location) {
  $scope.friendsData = [
      {
        who: 'Alex Corry',
        when: 'Aug 21 2012'
       
      },
      {
        who: 'Trevor Hansen',
        when: 'Aug 30 2014'
      }
    ];

    $scope.goToMessagePage = function(contact) {
    	$location.url('/messageContact?contact='+contact);
    }

});