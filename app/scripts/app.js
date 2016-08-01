'use strict';

angular.module('confusionApp', ['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/contactus', {
                templateUrl : 'contactus.html',
                controller  : 'ContactController'
            })
        
            .when('/aboutus', {
                templateUrl : 'aboutus.html',
                controller  : 'AboutController'
            })
        
            .when('/home', {
                templateUrl : 'home.html',
                controller  : 'IndexController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'menu.html',
                controller  : 'MenuController'
            })
            // route for the dish details page
            .when('/menu/:id', {
                templateUrl : 'dishdetail.html',
                controller  : 'DishDetailController'
            })
            .otherwise('/home');
    })
   
;