/*
    Author : Team 7 -HCI
    File   : editProfileController.js
    Details: edit Profile Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('editProfileCtrl', function ($scope) {
	$scope.user = {
	  email: 'janice.123@ucb.org',
	  newPassword: '',
	  confirmPassword: ''
	}

	$scope.isNewPasswordMatch = true;
  	$scope.isNewPasswordEmpty = true;
  	$scope.isChangePasswordSuccess = false;

	function isNewPasswordMatch() {
		$scope.isNewPasswordMatch = ($scope.user.newPassword == $scope.user.confirmPassword ? true : false);
		return $scope.isNewPasswordMatch;
	}

	function isNewPasswordEmpty() {
		$scope.isNewPasswordEmpty = ($scope.user.newPassword !== '' ? true : false);
		return $scope.isNewPasswordEmpty;
	}

	$scope.updatePassword = function() {

		console.log("In updatePassword")
		$scope.isChangePasswordSuccess = false;
		$scope.isNewPasswordMatch = true;
		$scope.isNewPasswordEmpty = true;

		if(isNewPasswordMatch() && isNewPasswordEmpty()) {
			
			$scope.isChangePasswordSuccess = true;
		}
	}
});