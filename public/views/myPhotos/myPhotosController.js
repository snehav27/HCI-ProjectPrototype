/*
    Author : Team 7 -HCI
    File   : myPhotosController.js
    Details: My Photos Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('myPhotosCtrl', function ($scope, $rootScope, $location) {
	$scope.myPhotoData = [{
          'name'      : 'Woment Empowerment',
          'date'       : '3-Feb-2016',
          'description'  : 'Woment Empowerment for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '400'
        },
        {
          'name'      : 'Voting information',
          'date'       : '3-Feb-2016',
          'description'  : 'Voting information for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '150'
        },
        {
          'name'      : 'Flu shot',
          'date'       : '3-Feb-2016',
          'description'  : 'Flu shot for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '280'
        }
    ];

  $scope.goToPage = function(page) {
    $location.url(page);
  }
});