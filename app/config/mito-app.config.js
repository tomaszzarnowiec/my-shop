(function() {
    'use strict';

    angular
        .module('mitoApp')
        .config(function($routeProvider){

            $routeProvider
                .when(
                    '/search/:id?',{
                        templateUrl: 'app/search/views/search.html',
                        controller: 'SearchController'
                    }
                )
                .when(
                    '/item/:id?',{
                        templateUrl: 'app/item/views/item.html',
                        controller: 'ItemController'
                    }
                )
                .otherwise(
                    {
                        templateUrl: 'app/main/views/main.html',
                        controller: 'MainController'
                    }
            );

        });

})();
