particlesJS("snowfall", {
  "particles": {
    "number": {
      "value": 100
    },
    "color": {
  "value": "#ffffff"
},
    "shape": {
  "type": "circle",
  "stroke": {
     "width": .25,
     "color": "transparent"
  },
  "polygon": {
     "nb_sides": 6
  }
},
    "size": {
      "value": 5,
      "random": true
    },
       "opacity": {
      "value": .5,
      
    },
    "line_linked": {
      "enable": true
    },
    "move": {
      "enable": true,
      "speed": 5
    }
  },

  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true
      }
    },
      "events": {
  "onhover": {
    "enable": true,
    "mode": "repulse"
  },
  "onclick": {
    "enable": true,
    "mode": "push"
  },
    "resize": true
}
  }
});
$(document).ready(function(){
    
var controller = new ScrollMagic.Controller();
    
var pinaboutmeScene = new ScrollMagic.Scene({
    triggerElement: '.aboutme',
    triggerHook: 0
})    
.setPin('.aboutme',{pushFollowers:false})
.addTo(controller);   
    
var pinscrollScene = new ScrollMagic.Scene({
    triggerElement: '.aboutme',
    triggerHook: 0
})    
 
.setPin('.parallax h3',{pushFollowers:false})
.addTo(controller);   
    
var tween = TweenMax.to(".parallax h3", .25, {opacity:0, scale: 0});
var scene = new ScrollMagic.Scene({triggerElement:"#section1", triggerHook:.99}) 
//.addIndicators({
//			name: 'fade scene',
//			colorTrigger: 'black',
//			colorStart: '#75C695',
//			colorEnd: 'pink'
//		})  
.setTween(tween)
.addTo(controller);  
    
$('.slideshow-container').each(function(){
    var scene = new ScrollMagic.Scene({
		triggerElement: this.children[0],	
		triggerHook: 0.9,
        //duration removed for reverse false
	})
 scene.reverse(false)  
    .addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		})  
.setClassToggle(this,'fade-in')
.addTo(controller);
});       
    
$('h2').each(function(){
    var scene = new ScrollMagic.Scene({
		triggerElement: this,	
		triggerHook: 0.5,
        //duration removed for reverse false
	})
 scene.reverse(false)  
        .addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		})  
.setClassToggle(this,'fade-in')
.addTo(controller);
});       
    
$('p').each(function(){
    var scene = new ScrollMagic.Scene({
		triggerElement: this,	
		triggerHook: 0.9,
        //duration removed for reverse false
	})
 scene.reverse(false) 
        .addIndicators({
			name: 'fade scene',
			colorTrigger: 'WHITE',
			colorStart: '#75C695',
			colorEnd: 'pink'
		})  
.setClassToggle(this,'fade-in')
.addTo(controller);
});     
});

(function ($) {
    'use strict';

    var options = $.lazyLoadXT;

    options.forceEvent += ' lazyautoload';
    options.autoLoadTime = options.autoLoadTime || 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyautoload');
        }, options.autoLoadTime);
    });

})(window.jQuery || window.Zepto || window.$);
