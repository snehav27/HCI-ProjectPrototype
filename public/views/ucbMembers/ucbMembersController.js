/*
    Author : Team 7 -HCI
    File   : ucbMembersController.js
    Details: Ucb members Controller for application.
    Email  : hci.cs5340@gmail.com
*/
//app.controller('ucbMembersCtrl', function ($scope){

app.controller('ucbMembersCtrl', ['$scope', function($scope){
  $scope.activity = [
      {
        who: 'Ali Conners',
        when: 'Aug 21 2012',
        status: 'Connect'
      },
      {
        who: 'Alex Corry',
        when: 'Aug 21 2012',
        status: 'Connected'
      },
      {
        who: 'Adam Robert',
        when: 'Aug 21 2012',
        status: 'Sent Request'
      },
      {
        who: 'Brian Holt',
        when: 'Sep 1 2015',
        status: 'Connect'
      },
      {
        
        who: 'Robert',
        when: 'Jan 21 2013',
        status: 'Connect'
      },
      {
        
        who: 'Sandra Adams',
        when: 'Jan 21 2013',
        status: 'Connect'
      },
      {
        who: 'Trevor Hansen',
        when: 'Aug 30 2014',
        status: 'Connect'
      }
    ];
 
}]);
