/*
    Author : Team 7 -HCI
    File   : carpoolController.js
    Details: carpool Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('carpoolCtrl', function ($scope, $rootScope, $location,$mdToast) {


  $scope.carpoolData = [
      {
      	eventName:'Woman Empowerment 2',
        from: 'Northeastern',
        to: 'Roxbury tobin center',
        startDate: 'Dec 23 2015',
        startTime: '11:30 am' ,
        by: 'Alex Corner',
        comments: [   
                                {  by : "John",  
                                  comment  : "I am In",
                                  date       : 'Aug/23/2015'
                                   },

                                { by : "Alex",  
                                  comment  : "Awesome message me your number",
                                  date       : 23 
                                }
                              ]
      },
      {
      	eventName:'Voting Rights',
        from: 'UCB office',
        to: '281 South Station',
        startDate: 'Dec 11 2015',
        startTime: '11:30 am' ,
        by: 'Bruno Mars',
        comments: [   
                                {  by : "Doe",  
                                  comment  : "Can I join you",
                                  date       : 'Aug/23/2015'
                                   },

                                { by : "Bruno",  
                                  comment  : "Sure",
                                  date       : 23 
                                } ,
                                { by : "Doe",  
                                  comment  : "Great see you then, Check your Inbox",
                                  date       : 23 
                                }
                              ]
      },
      {
      	eventName:'Education Importance',
        from: 'Northeastern',
        to: '281 South Station',
        startDate: 'Jan 14 2016',
        startTime: '11:30 am' ,
        by: 'Janice'
      },
      {
      	eventName:'Children Health Issues',
        from: 'UCB office',
        to: 'Northeastern',
        startDate: 'Dec 25 2015',
        startTime: '11:30 am' ,
        by: 'Robert'
      },
      {        
      	eventName:'Happy Neighbourhood',
        from: 'Downtown Station',
        to: 'Northeastern Library',
        startDate: 'Jan 4 2016',
        startTime: '09:30 am' ,
        by: 'Maria'
      }
    ];

    $scope.goToCreateCarpool = function() {
      $location.url('/createCarpool');
    }

    $scope.goToPage = function(page) {
        $location.url(page);
    }

    $scope.gotoCarpoolInfo = function(index) {            
      $location.url("/carpoolInfoPage?index=" + index);
    }


    $scope.submitCarpool = function() {
      if($scope.carpoolCreate.eventName != null && $scope.carpoolCreate.fromPlace != null && $scope.carpoolCreate.toPlace != null && $scope.carpoolCreate.dateTime != null) {
        $scope.carpoolCreate = {
          eventName: ' ',
          fromPlace: ' ',
          toPlace: ' ',
          dateTime: ' '
        };
      showToastMessage('Created Carpool Successfully');
      } 
    }

    $scope.getCarpoolInfoDetails = function(index) {
       var search = $location.search();        
        var index = search.index;
      $scope.carpoolDetailInfo = $scope.carpoolData[index];
    }

    function showToastMessage(message) {
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .position('top right')
        .hideDelay(3000)
    );
  };

});