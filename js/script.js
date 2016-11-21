//
//alert("hello");

// This is declaring a module. More on this in a moment
var app = angular.module("catDogMod", ["ngRoute"]);




app.config(function($routeProvider){
    $routeProvider
    .when('/cat', {
        controller:'simpleCtrl',
        templateUrl: 'cat.html'
    })
    
    .when('/dog', {
        controller:'simpleCtrl',
        templateUrl: 'dog.html'
    });
    
});

    app.controller('simpleCtrl', function(){
        
    });





//
// app.config(function($routeProvider){
//    $routeProvider
//    //whne on this location do this stuff
//     
//    .when('/cat', {
//        controller: 'simpleCtrl',
//        templateUrl: 'cat.html'
//    })
//      .when('/dog', {
//        controller: 'simpleCtrl',
//        templateUrl: 'dog.html'
//    });
//     
//});
//
//app.controller('simpleCtrl', function(){
//         
//     });