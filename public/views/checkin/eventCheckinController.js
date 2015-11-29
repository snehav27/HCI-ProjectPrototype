/*
    Author : Team 7 -HCI
    File   : checkinController.js
    Details: checkin Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('eventCheckinCtrl', function ($scope, $rootScope, $location) {
	$scope.hours = 1;
	$scope.goToPage = function(page) {
		$location.url(page);
	}
	$scope.checkinAtevent = function() { 
		$location.url('/eventCheckinConfirmation');
	}

	$scope.eventInfo = {'name'      : 'Woment Empowerment',
						'date'       : '2-Jan-2016',
						'time'		: '11.00 am',
						'description'  : 'Woment Empowerment for UCB members',
						'address'     : '97 Salem St, Boston, MA 02113'
						};
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