(function() {
    'use strict';

    angular
        .module('itemModule')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['$scope', '$routeParams'];

    /* @ngInject */
    function ItemController($scope, $routeParams) {
        var itemCtrl = this;

        activate();

        function activate() {
            $scope.itemId = $routeParams.id;
            $('header').addClass('darker');

            console.log('item id: ', $scope.itemId);
        }
    }
})();
