/*
    Author : Team 7 -HCI
    File   : carpoolController.js
    Details: carpool Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('carpoolCtrl', function ($scope, $rootScope, $location) {

  $scope.carpoolData = [
      {
      	eventName:'Woman Empowerment 2',
        from: 'Northeastern',
        to: 'Roxbury tobin center',
        startDate: 'Dec 23 2015',
        startTime: '11:30 am'
      },
      {
      	eventName:'Voting Rights',
        from: 'UCB office',
        to: '281 South Station',
        startDate: 'Dec 11 2015',
        startTime: '11:30 am'
      },
      {
      	eventName:'Education Importance',
        from: 'Northeastern',
        to: '281 South Station',
        startDate: 'Jan 14 2016',
        startTime: '11:30 am'
      },
      {
      	eventName:'Children Health Issues',
        from: 'UCB office',
        to: 'Northeastern',
        startDate: 'Dec 25 2015',
        startTime: '11:30 am'
      },
      {        
      	eventName:'Happy Neighbourhood',
        from: 'Downtown Station',
        to: 'Northeastern Library',
        startDate: 'Jan 4 2016',
        startTime: '09:30 am'
      }
    ];

    $scope.gotToCarpoolDetailPage = function() {
      $location.url('/carpoolInfoPage');
    }

    $scope.goToCreateCarpool = function() {
      $location.url('/createCarpool');
    }
});