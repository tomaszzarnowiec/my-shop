(function() {
    'use strict';

    angular
        .module('apps')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    /* @ngInject */
    function MainController($scope) {
        var mainCtrl = this;

        $('header').removeClass('darker');

        $scope.isSearchOpen = false;

        $scope.sliderModel = {
            count: 4,
            autoplay: true,
            items: [
                {
                    id: 'tshirt1',
                    title: "Let's begin",
                    price: "$49",
                    background: "assets/images/tshirts/11a.jpg",
                    isActive: true,
                    isCTA: true
                },
                {
                    id: 'tshirt2',
                    title: "Move, bitch!",
                    price: "$69",
                    background: "assets/images/tshirts/22a.jpg",
                    isCTA: true
                },
                {
                    id: 'tshirt3',
                    title: "Not now, man!",
                    price: "$39",
                    background: "assets/images/tshirts/33a.jpg",
                    isCTA: true
                },
                {
                    id: 'tshirt4',
                    title: "Later or never.",
                    price: "$29",
                    background: "assets/images/tshirts/44a.jpg",
                    isCTA: true
                }
            ]
        };
    }
})();
