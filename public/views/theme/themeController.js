/*
    Author : Team 7 -HCI
    File   : themeController.js
    Details: Theme Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('themeCtrl', function($scope, $rootScope) {
      $scope.changeTheme = function(event) {
        console.log("camee"+event.target.id);
        var color = event.target.id;
        $rootScope.theme = color; 
      };
}); 