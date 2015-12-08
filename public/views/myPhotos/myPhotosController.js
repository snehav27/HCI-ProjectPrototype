/*
    Author : Team 7 -HCI
    File   : myPhotosController.js
    Details: My Photos Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('myPhotosCtrl', function ($scope, $rootScope, $location) {
	$scope.myPhotoData = [{
          'name'      : 'Woment Empowerment 1',
          'date'       : '3-Feb-2015',
          'description'  : 'Woment Empowerment for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '400'
        },
        {
          'name'      : 'Woment Empowerment 2',
          'date'       : '28-Sep-2015',
          'description'  : 'Voting information for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '150'
        },
        {
          'name'      : 'Woment Empowerment 3',
          'date'       : '3-Dec-2015',
          'description'  : 'Flu shot for UCB members',
          'location'     : 'Boston, MA',
          'points'		 : '280'
        }
    ];

  $scope.goToPage = function(page) {
    $location.url(page);
  }
});