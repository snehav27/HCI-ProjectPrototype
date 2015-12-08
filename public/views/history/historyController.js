/*
    Author : Team 7 -HCI
    File   : historyController.js
    Details: history Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('historyCtrl', function ($scope, $rootScope, $location) {

	$scope.pastEvents = [{
          'name'      : 'Women Empowerment',
          'date'       : '3-Feb-2015',
          'description'  : 'Woment Empowerment for UCB members',
          'speaker'     : 'Natalia',
          'points'		 : '400',
          'website' : 'www.google.com'
        },
        {
          'name'      : 'Voting information',
          'date'       : '9-Jun-2015',
          'description'  : 'Voting information for UCB members',
          'speaker'     : 'Bruce',
          'points'		 : '150',
          'website' : 'www.google.com'
        },
        {
          'name'      : 'Flu shot',
          'date'       : '27-Aug-2015',
          'description'  : 'Flu shot for UCB members',
          'speaker'     : 'Shiney',
          'points'		 : '280',
          'website' : 'www.google.com'
        }
    ];

     $scope.goToPage = function(page) {
        $location.url(page);
    }

});