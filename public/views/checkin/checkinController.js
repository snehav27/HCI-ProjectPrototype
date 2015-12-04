/*
    Author : Team 7 -HCI
    File   : checkinController.js
    Details: checkin Controller for application.
    Email  : hci.cs5340@gmail.com
*/

app.controller('checkinCtrl', function ($scope, $rootScope, $location) {
	
	$scope.foundNoUncheckedEvents = function(events) {
		for (var ev = 0; ev < events.length; ev ++) {
			event = ""
			event = events[ev];
			if (!event.checkin) {
				return false;
			}
		}
		return true;
	}
	
    $scope.checkinAtevent = function() {
		var search = $location.search();
        var parentIndex = search.parent;
        var childIndex = search.index;
        $scope.eventData[parentIndex].events[childIndex].checkin = true;
		$scope.goToEventCheckinConfirmation(childIndex, parentIndex);
    }

	$scope.goToEventCheckinConfirmation = function(index, parentIndex) {
        $location.url("/eventCheckinConfirmation?index=" + index + "&parent=" + parentIndex);
    }
	
    $scope.goToEventCheckin = function(index, parentIndex) {
        $location.url("/eventCheckin?index=" + index + "&parent=" + parentIndex);
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
	
	$scope.goToConfirmationPage = function(page) {
        $location.url(page);
    }
	
	$scope.eventData = [
      {
        when: 'Sunday, November 29th 2015',
        events: [
        	{
        		name: '35th Anderson Tree Lighting',
        		from: '1:00 PM',
        		to: '10:34 PM',
        		description: 'Come enjoy Boston\'s Biggest & Best Neighborhood Tree Lighting!',
        		checkin: true,
        		number: '5',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Martha Wayne',
                website: 'www.google.com'
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
        		checkin: false,
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
        		checkin: true,
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
        		checkin: false,
        		number: '10',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
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
        		checkin: true,
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
        		checkin: false,
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
        		checkin: false,
        		number: '10',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
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
        		checkin: false,
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
        		checkin: false,
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
        		checkin: true,
        		number: '14',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
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
        		checkin: false,
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
        		checkin: false,
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
        		checkin: false,
        		number: '1',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
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
        		checkin: false,
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
        		checkin: false,
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
        		checkin: false,
        		number: '31',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
    ];
	
	$scope.map = {
      center: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      zoom: 4,
      bounds: {}
    };
	
	$scope.options = {
      scrollwheel: false
    };
    
	var createRandomMarker = function(i, bounds, idKey) {
      var lat_min = bounds.southwest.latitude,
        lat_range = bounds.northeast.latitude - lat_min,
        lng_min = bounds.southwest.longitude,
        lng_range = bounds.northeast.longitude - lng_min;
      if (idKey == null) {
        idKey = "id";
      }
      var latitude = lat_min + (Math.random() * lat_range);
      var longitude = lng_min + (Math.random() * lng_range);
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'Event Name' + (i+1)
      };
      ret[idKey] = i;
      return ret;
    };
    
	$scope.randomMarkers = [];
    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        for (var i = 0; i < 3; i++) {
          markers.push(createRandomMarker(i, $scope.map.bounds))
        }
        $scope.randomMarkers = markers;
      }
    }, true);
	
});