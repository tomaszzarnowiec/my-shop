(function() {
    'use strict';

    function MenubarIconController($scope, $element, $attrs){
    	var ctrl = this;

    	this.$onInit = function(){

    	}
    };

    angular.module("components")
    	.component('menubarIcon', {
    		templateUrl: './app/components/menubar-icon/menubar-icon.component.html',
    		controller: MenubarIconController,
    		bindings: {

    		}
    	});
})();
