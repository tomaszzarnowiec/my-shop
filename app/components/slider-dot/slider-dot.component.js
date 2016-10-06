(function() {
    'use strict';

    function SliderDotController($scope, $element, $attrs){
    	var ctrl = this;

    	this.$onInit = function(){

    	}

        this.setToItem = function(itemid){
            angular.forEach(ctrl.model.items, function(v, k){
                ctrl.model.items[k].isActive = false;
            });

            ctrl.model.items[itemid].isActive = true;
            $('body .slider-container').css('left', '-'+ (itemid * 100) +'%');
        }
    };

    angular.module("components")
    	.component('sliderDot', {
    		templateUrl: './app/components/slider-dot/slider-dot.component.html',
    		controller: SliderDotController,
    		bindings: {
                itemId: '@',
                model: '='
    		}
    	});
})();
