var app = angular.module("app", []);

app.run(function($rootScope, $http) {

	$http.get("/front.json").then(function(data) {
		$rootScope.bus = data.data;
	}, function(err) {
		console.log(err);
	});
});

app.controller("mainCtrl", function($scope,$http) {
});

app.controller("contactCtrl", function($http) {

});

app.controller("menuCtrl", function($http) {

});