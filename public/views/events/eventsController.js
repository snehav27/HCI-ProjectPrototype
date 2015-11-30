/*
    Author : Team 7 -HCI
    File   : eventsController.js
    Details: events Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('eventsCtrl', function ($scope) {

	$scope.eventData = [
      {
        when: 'Sunday, November 29th 2015',
        events: [
        	{
        		name: '35th Anderson Tree Lighting',
        		from: '1:00 PM',
        		to: '10:34 PM',
        		description: 'Come enjoy Boston\'s Biggest & Best Neighborhood Tree Lighting!',
        		rsvp: 'True',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Monday, November 30th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'True',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Tuesday, December 1st 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'True',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Wednesday, December 2nd 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'True',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Thursday, December 3rd 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Friday, December 4th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program.',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays!',
        		rsvp: 'False',
        		number: '0'
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

});