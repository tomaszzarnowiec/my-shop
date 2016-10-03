(function() {
    'use strict';

    function SearchItemController($scope, $element, $attrs){
    	var ctrl = this;

    	this.$onInit = function(){

    	}
    };

    angular.module("components")
    	.component('searchItem', {
    		templateUrl: './app/components/search-item/search-item.component.html',
    		controller: SearchItemController,
    		bindings: {
                image: '@',
                desc: '@',
                id: '@'
    		}
    	});
})();
