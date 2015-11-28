/*
    Author : Team 7 -HCI
    File   : friendRequestController.js
    Details: Friend Request Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('friendRequestCtrl', function ($scope, $rootScope, $location, $mdToast) {
  $scope.friendRequestData = [
     {
        who: 'Robert',
        status: 'Friend Request'
      },
      {
        
        who: 'Sandra Adams',
        status: 'Friend Request'
      },
      {
        
        who: 'Tiffany',
        status: 'Friend Request'
      }
    ];

    $scope.acceptRequest = function(index) {
    	$scope.friendRequestData.splice(index, 1);
    	showToastMessage('Accepted Friend Successfully');
    }

    $scope.declineRequest = function(index) {
    	$scope.friendRequestData.splice(index, 1);
    	showToastMessage('Request Declined');
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