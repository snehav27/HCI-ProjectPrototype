/*
    Author : Team 7 -HCI
    File   : ucbMembersController.js
    Details: Ucb members Controller for application.
    Email  : hci.cs5340@gmail.com
*/
//app.controller('ucbMembersCtrl', function ($scope){

app.controller('ucbMembersCtrl', ['$scope','$location', function($scope,$location){  
  $scope.userData = [
      {
        who: 'Ali Conners',
        when: 'Aug 21 2012',
        status: 'Add Friend'
      },
      {
        who: 'Alex Corry',
        when: 'Aug 21 2012',
        status: 'Friends'
      },
      {
        who: 'Adam Robert',
        when: 'Aug 21 2012',
        status: 'Request Sent'
      },
      {
        who: 'Brian Holt',
        when: 'Sep 1 2015',
        status: 'Add Friend'
      },
      {
        
        who: 'Robert',
        when: 'Jan 21 2013',
        status: 'Add Friend'
      },
      {
        
        who: 'Sandra Adams',
        when: 'Jan 21 2013',
        status: 'Add Friend'
      },
      {
        who: 'Trevor Hansen',
        when: 'Aug 30 2014',
        status: 'Friends'
      }
    ];

    $scope.isConnect = function(status) {
    	var isConnect = (status == 'Add Friend' ? true : false);
        return isConnect;
    }
    $scope.isRequestSent = function(status) {
      var isRequestSent = (status == 'Request Sent' ? true : false);
        return isRequestSent;
    }
    $scope.isfriend = function(status) {
      
      var isfriend = (status == 'Friends' ? true : false);
      return isfriend;
    }

    $scope.addFriend = function(index){
      $scope.userData[index].status = 'Request Sent';
    }

    $scope.unFriend = function(index){
      $scope.userData[index].status = 'Add Friend';
    }

    $scope.goToPage = function(page) {
        $location.url(page);
    }    
}]);
