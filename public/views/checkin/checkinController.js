/*
    Author : Team 7 -HCI
    File   : checkinController.js
    Details: checkin Controller for application.
    Email  : hci.cs5340@gmail.com
*/

app.controller('checkinCtrl', function ($scope, $rootScope, $location) {
	function DemoCtrl ($timeout, $q, $log) { 	
	var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    self.repos         = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
	// Internal methods
    // ******************************
    /**
     * Search for repos... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `components` list of key/value pairs
     */
    function loadAll() {
      var repos = [
        {
          'name'      : 'Woment Empowerment',
          'time'       : '3-Feb-2016',
          'description'  : 'Woment Empowerment for UCB members',
          'location'     : 'Boston, MA',
        },
        {
          'name'      : 'Voting information',
          'time'       : '3-Feb-2016',
          'description'  : 'Voting information for UCB members',
          'location'     : 'Boston, MA',
        },
        {
          'name'      : 'Flu shot',
          'time'       : '3-Feb-2016',
          'description'  : 'Flu shot for UCB members',
          'location'     : 'Boston, MA',
        },
      ];
      return repos.map( function (repo) {
        repo.value = repo.name.toLowerCase();
        return repo;
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (item.value.indexOf(lowercaseQuery) === 0);
      };
    }
	}
	$scope.clearValue = function() {
			$scope.myModel = undefined;
	};
	$scope.save = function() {
		alert('Form was valid!');
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