/*
    Author : Team 7 -HCI
    File   : checkinController.js
    Details: checkin Controller for application.
    Email  : hci.cs5340@gmail.com
*/

app.controller('checkinCtrl', function ($scope, $rootScope, $location) {
	
	$scope.checkin = function() {
		$location.url('/eventCheckin');
	}
	$scope.eventInfo = [
        {
          'name'      : 'Woment Empowerment',
          'date'       : '2-Jan-2016',
		  'time'		: '11.00 am',
          'description'  : 'Woment Empowerment for UCB members',
          'address'     : '97 Salem St, Boston, MA 02113',
        },
        {
          'name'      : 'I Empowerment workshop',
          'date'       : '2-Jan-2016',
		  'time'		: '11.00 am',
          'description'  : 'Woment Empowerment for UCB members',
          'address'     : '97 Salem St, Boston, MA 02113',
        },
        {
          'name'      : 'II Empowerment workshop',
          'date'       : '2-Jan-2016',
		  'time'		: '11.00 am',
          'description'  : 'Woment Empowerment for UCB members',
          'address'     : '97 Salem St, Boston, MA 02113',
        },
        {
          'name'      : 'III Empowerment workshop',
          'date'       : '2-Jan-2016',
		  'time'		: '11.00 am',
          'description'  : 'Woment Empowerment for UCB members',
          'address'     : '97 Salem St, Boston, MA 02113',
        },		
        {
          'name'      : 'Voting information',
          'date'       : '1-Feb-2016',
		  'time'		: '11.00 am',
          'description'  : 'Voting information for UCB members',
          'address'     : '355 Binney St, Cambridge, MA 02139',
        },
        {
          'name'      : 'I Voting information',
          'date'       : '1-Feb-2016',
		  'time'		: '11.00 am',
          'description'  : 'Voting information for UCB members',
          'address'     : '355 Binney St, Cambridge, MA 02139',
        },
        {
          'name'      : 'II Voting information',
          'date'       : '1-Feb-2016',
		  'time'		: '11.00 am',
          'description'  : 'Voting information for UCB members',
          'address'     : '355 Binney St, Cambridge, MA 02139',
        },		
        {
          'name'      : 'Flu shot',
          'date'       : '3-Dec-2015',
		  'time'		: '11.00 am',
          'description'  : 'Flu shot for UCB members',
          'address'     : '55 Fruit St, Boston, MA 02114',
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