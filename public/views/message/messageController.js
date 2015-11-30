/*
    Author : Team 7 -HCI
    File   : messageController.js
    Details: message Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('messageCtrl', ['$scope', '$rootScope', '$location', '$mdToast', function ($scope, $rootScope, $location, $mdToast, $routeParams) {
    $scope.userData = [
        {
            who: 'Ali Conners',
            when: 'Aug 21 2012',
            status: 'Add Friend',
            chat: 'Hi! How are you?'
        },
        {
            who: 'Alex Corry',
            when: 'Aug 21 2012',
            status: 'Friends',
            chat: 'Reminder today ...'
        },
        {
            who: 'Adam Robert',
            when: 'Aug 21 2012',
            status: 'Request Sent',
            chat: 'Can you pick ...'
        },
        {
            who: 'Brian Holt',
            when: 'Sep 1 2015',
            status: 'Add Friend',
            chat: 'Hi! This is ...'
        },
        {

            who: 'Robert',
            when: 'Jan 21 2013',
            status: 'Add Friend',
            chat: 'Shall we meet at ...'
        },
        {

            who: 'Sandra Adams',
            when: 'Jan 21 2013',
            status: 'Add Friend',
            chat: 'I am at the Empower ...'
        },
        {
            who: 'Trevor Hansen',
            when: 'Aug 30 2014',
            status: 'Friends',
            chat: 'We met at ...'
        }
    ];

    // to diaplay on the loading page, creating a global variable

    $scope.goToPage = function (page) {
        $location.url(page);
    }

    $scope.goToContact = function (item) {
        $location.url("/messageContact?contact=" + item);
    }

    $scope.getName = function () {
        console.log("Message a contact loaded");
        var search = $location.search();
        var name = search.contact;
        $scope.contact = { name: name };
    }

    $scope.sendMessage = function () {
        var msgBody = $scope.message;
        $scope.message = '';
        showToastMessage('Message "' + msgBody + '" has been sent');
    }

    $scope.goToChat = function (name, body) {
        $location.url("/chat?contact=" + name + "&message=" + body);
    }

    $scope.getDetails = function () {
        var search = $location.search();
        var name = search.contact;
        var message = search.message;
        $scope.contact = { name: name };
        $scope.initial = { message: message };
        console.log(name);
        console.log(message);

    }

    $scope.addToChat = function(){
        $scope.sendClicked = 1;
        var im = $scope.message;
        $scope.message = '';
        console.log(im);
        $scope.typed = { message: im };
           
    }

    

    

    function showToastMessage(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top right')
            .hideDelay(3000)
        );
    };
}]);
