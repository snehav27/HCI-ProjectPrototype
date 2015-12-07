/*
    Author : Team 7 -HCI
    File   : checkinController.js
    Details: checkin Controller for application.
    Email  : hci.cs5340@gmail.com
*/

app.controller('checkinCtrl', function ($scope, $rootScope, $location) {
	$scope.currentDate = new Date();
	$scope.event = {
		name : "",
		hours: 2
	};
	$scope.foundNoUncheckedEvents = function(events) {
		for (var ev = 0; ev < events.length; ev ++) {
			event = ""
			event = events[ev];
			if (!event.checkin) {
				return false;
			}
		}
		return true;
	};
    $scope.checkinAtevent = function() {
		var search = $location.search();
        var parentIndex = search.parent;
        var childIndex = search.index;
        $scope.eventData[parentIndex].events[childIndex].checkin = true;
		
		if(	$scope.event.hours != null && 
			($scope.event.hours >= 1) && 
			($scope.event.hours <= 8)) {
				$scope.goToEventCheckinConfirmation(childIndex, parentIndex);
		}
    }
	$scope.goToEventCheckinConfirmation = function(index, parentIndex) {
        $location.url("/eventCheckinConfirmation?index=" + index + "&parent=" + parentIndex);
    }
    $scope.goToEventCheckin = function(index, parentIndex) {
        $location.url("/eventCheckin?index=" + index + "&parent=" + parentIndex);
    }
	$scope.DateToday = new Date();
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
        when: new Date('2015/12/8'),
        events: [
        	{
        		name: '35th Anderson Tree Lighting',
        		from: '1:00 PM',
        		to: '10:34 PM',
        		description: 'Come enjoy Boston\'s Biggest & Best Neighborhood Tree Lighting!',
        		checkin: false,
        		number: '5',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: 'Martha Wayne',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: new Date ('2015/12/7'),
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
        		checkin: true,
        		number: '10',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: new Date('2015/12/1'),
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
        		checkin: true,
        		number: '10',
                address: 'Union Capital Boston, Boston',
                points: '100',
                speaker: '',
                website: 'www.google.com'
        	}
        ]
      },
      {
        when: new Date('2015/11/2'),
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30',
        		checkin: true,
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
        		checkin: true,
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
        when: new Date('2015/12/6'),
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
        when: new Date('2015/3/2015'),
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
        latitude: 42.370781078403844,
        longitude: -71.06075301055908
      },
      zoom: 10,
      bounds: {}
    };
	$scope.options = {
      scrollwheel: false
    };
    $scope.map.bounds = new google.maps.LatLngBounds();
	var createRandomMarker = function(i, bounds, idKey) {
      var lat_min = bounds.southwest.latitude,
        lat_range = bounds.northeast.latitude - lat_min,
        lng_min = bounds.southwest.longitude,
        lng_range = bounds.northeast.longitude - lng_min;
      if (idKey == null) {
        idKey = "id";
      }
      var latitude = 42.370781078403844 + Math.random()*0.002;
      var longitude = -71.06075301055908 + Math.random()*0.002;
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