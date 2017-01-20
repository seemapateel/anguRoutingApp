var app = angular.module("myApp",['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	console.log("in Route Config");
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home',{
		url: '/home',
		template: "Welcome to Home Page!!"
	})
	.state('about',{
		url: '/about',
		templateUrl: '../views/about.html',
		controller: function($scope){
			$scope.authors = ["Seema Pateel", "Angular JS", "Node JS"];
			console.log($scope.authors);
		}
	})
	.state('authors',{
		url: '/authors',
		templateUrl: '../views/authors.html',
		controller: function($scope){
			$scope.authors = ["Seema Pateel", "Angular JS", "Node JS"];
			console.log($scope.authors);
		}
	})
	.state('authors.contacts',{
		url: '/contacts/:authorName',
		views:{
			'conts':{
				templateUrl:'../views/authors-contacts.html',
				controller: 'fetchController'
			}
	}	
		
	});
	
}]);

app.controller('fetchController', ['$scope', '$stateParams','$state', function ($scope, $stateParams, $state){
	console.log("in controller");
	var authorContact = "";
	var authorName = $stateParams.authorName;
	console.log("authorName-" + authorName);
	
	if( "Seema Pateel" == authorName){
		authorContact = "seema-pateel@email.com";
	}else if("Angular JS" == authorName){
		authorContact = "https://angularjs.org/";
	}else if("Node JS" == authorName){
		authorContact = "https://nodejs.org/";
	}else{
		authorContact = "No such author";
	}
	$scope.contacts = authorContact;
	console.log("$scope.contacts-" + $scope.contacts);
}]);