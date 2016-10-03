(function() {
    'use strict';

    angular
        .module('apps')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    /* @ngInject */
    function MainController($scope) {
        var vm = this;

        $scope.isSearchOpen = false;

        activate();

        function activate() {

        }
    }
})();
