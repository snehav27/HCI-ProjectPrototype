/*
    Author : Team 7 -HCI
    File   : historyController.js
    Details: history Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('historyCtrl', function ($scope, $rootScope, $location) {

	$scope.pastEvents = [{
          'name'      : 'Woment Empowerment',
          'date'       : '3-Feb-2015',
          'description'  : 'Woment Empowerment for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '400'
        },
        {
          'name'      : 'Voting information',
          'date'       : '9-Jun-2015',
          'description'  : 'Voting information for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '150'
        },
        {
          'name'      : 'Flu shot',
          'date'       : '27-Aug-2016',
          'description'  : 'Flu shot for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '280'
        }
    ];

});