var myApp = angular.module('store', []);

// function studentController($scope,$http) {
// var url = "data.txt";
//
//    $http.get('http://localhost:3000/posts/2').success( function(response) {
//       $scope.students = $(".insert").append(json.title + " ");
// ;
//    });
// }

angular.module("store", ["ngResource"])
	.controller("index", ["$scope", "$resource", function($scope, $resource) {
		var users = $resource("http://localhost:3000/posts/:id");

		$scope.getUser = function () {
			$scope.user = users.get({id: 1});
		};

		$scope.postUser = function () {
			var response = $scope.user.$save(function () {
				alert("User saved!");
			});
		};
	}]);



// $.ajax({
//
//     url : 'http://localhost:3000/posts',
//     type : 'POST',
//     data : {"name":"JSON_Request",
//             "size":"3m"},
//     dataType:'json',
//     success : function(data) {
//         alert('Data: ');
//     },
//     error : function(request,error)
//     {
//         alert("Request: "+JSON.stringify(request));
//     }
// });


// $.ajax({
//
//     url : 'http://localhost:3000/posts/1/',
//     type : 'PUT',
//     data : {'bohoo':'hahaha'},
//     dataType:'json',
//     success : function(data) {
//         alert('Data: ');
//     },
//     error : function(request,error)
//     {
//         alert("Request: "+JSON.stringify(request));
//     }
// });


// $.getJSON("http://localhost:3000/posts/2", function( json ){
//
// $(".insert").append(json.name + " ");
// $(".insert").append(json.size + " ");
// $(".insert").append(json.id);
//
//
// });
