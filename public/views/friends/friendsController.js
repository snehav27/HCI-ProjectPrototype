/*
    Author : Team 7 -HCI
    File   : firendsController.js
    Details: friends Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('friendsCtrl', function ($scope, $rootScope, $location,$mdToast) {
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

  $scope.goToPage = function(page) {
    $location.url(page);
  }
  
});