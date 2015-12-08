/*
    Author : Team 7 -HCI
    File   : eventsController.js
    Details: events Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('eventsCtrl', function ($scope, $rootScope, $location) {

	$scope.eventData = [
      {
        when: 'Sunday, December 8th 2015',
        events: [
        	{
        		name: '35th Anderson Tree Lighting',
        		from: '1:00 PM',
        		to: '10:34 PM',
        		description: 'Come enjoy Boston\'s Biggest & Best Neighborhood Tree Lighting!',
        		rsvp: 'True',
        		number: '5',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Martha Wayne',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: 'Monday, December 9th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '6',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Bruce Banner',
                website: 'www.google.com'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'True',
        		number: '3',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Luke Skywalker',
                website: 'www.google.com'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '10',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: 'Tuesday, December 10th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'True',
        		number: '20',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Senjougahara',
                website: 'www.google.com'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '40',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Ming Freeman',
                website: 'www.google.com'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '10',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: 'Wednesday, December 11th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '46',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Bruce Pennyworth',
                website: 'www.google.com'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '8',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Oswald Cobblepot',
                website: 'www.google.com'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'True',
        		number: '14',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: 'Thursday, December 12th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '34',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Alfred Martin',
                website: 'www.google.com'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '64',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Professor Strange',
                website: 'www.google.com'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '1',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: 'Friday, December 13th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '64',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Doctor Who',
                website: 'www.google.com'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '13',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Professor Zoom',
                website: 'www.google.com'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '31',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
    ];

    $scope.isAttending = function(rsvp) {
    	var isAttending = (rsvp == 'True' ? true : false);
    	return isAttending;
    }

    $scope.isNotAttending = function(rsvp) {
    	var isNotAttending = (rsvp == 'False' ? true : false);
    	return isNotAttending;
    }

    $scope.addRsvp = function(index, parentIndex) {
        $scope.eventData[parentIndex].events[index].rsvp = 'True';
    }

    $scope.removeRsvp = function(index, parentIndex) {
        $scope.eventData[parentIndex].events[index].rsvp = 'False';
    }

    $scope.goToEvent = function(index, parentIndex) {
        $location.url("/eventInfo?index=" + index + "&parent=" + parentIndex);
    }

    $scope.getDetails = function() {
        var search = $location.search();
        var parentIndex = search.parent;
        var childIndex = search.index;
        $scope.date = $scope.eventData[parentIndex].when;
        $scope.eventInfo = $scope.eventData[parentIndex].events[childIndex];
    }

    $scope.goToPage = function(page) {
        $location.url(page);
    }

});