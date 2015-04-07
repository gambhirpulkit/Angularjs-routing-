var app= angular.module('myApp',[]);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider

		.when('/page1',{
			templateUrl : 'pages/page1.html',
			controller  : 'myController2'
		})
		.when('/page2',{
			templateUrl : 'pages/page2.html',
			controller  : 'myController3'
		})
		.otherwise({
			redirectTo: '/page1'
      });
}]);


app.controller('myController2', ['$scope', function($scope){
	$scope.pulkit="Content on page 1";
	$scope.myClick=function(){
		$scope.pulkit="Content changed after click on page 1";
	}
}]);
app.controller('myController3', ['$scope', function($scope){
	$scope.pulkit="page 3 content";
	$scope.myClick=function(){
		$scope.pulkit="Content changed again for page 3 after click";
	}
}]);