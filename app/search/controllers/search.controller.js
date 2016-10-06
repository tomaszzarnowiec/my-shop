(function() {
    'use strict';

    angular
        .module('searchModule')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope', '$routeParams'];

    /* @ngInject */
    function SearchController($scope, $routeParams) {
        var searchCtrl = this;

        activate();

        function activate() {
            console.log('search log', $routeParams.id);
            $('header').addClass('darker');
        }
    }
})();
