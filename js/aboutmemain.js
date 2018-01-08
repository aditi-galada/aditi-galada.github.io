particlesJS("snowfall", {
  "particles": {
    "number": {
      "value": 100
    },
    "color": {
  "value": "#fff"
},
    "shape": {
  "type": "circle",
  "stroke": {
     "width": .5,
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
      "value": 0.5,
      
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
//this is just for >> on first page
var scrollY = 0;
var distance = 0;
var speed = 0;
function autoScrollTo(el) {
	var currentY = (window.pageYOffset)+106;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',30);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

//this is for navigation bar
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navi", offset: 50}); 

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(document).ready(function(){
    
var controller = new ScrollMagic.Controller();
    
var pinaboutmeScene = new ScrollMagic.Scene({
    triggerElement: '.aboutme',
    triggerHook: 0
})    
.setPin('.aboutme',{pushFollowers:false})
.addTo(controller);    
    
    
var pinnavScene = new ScrollMagic.Scene({
    triggerElement: '#navi',
    triggerHook: 0.099 //or else the content is seen between h1 and navi
})    

.setPin('#navi',{pushFollowers:false})
.addTo(controller);
 
var tween = TweenMax.to(".mypic", .5, {opacity:0, scale: .0});
var scene = new ScrollMagic.Scene({triggerElement:".nextpage", triggerHook:.6,duration: 300})  
.setTween(tween)
.addTo(controller);
    
var scene = new ScrollMagic.Scene({triggerElement:".quote", triggerHook:.7,duration: 400})  
.setClassToggle('.quote h2','fade-in-left')
.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) 
.addTo(controller);    

var timeline = new TimelineMax()
    .add(TweenMax.from(("#panel2 h2"),1,{opacity:0, scale:3}))
    .from('.skillcontent', 1, {x: '-150%', delay:.5, opacity:0, ease:Power0.easeOut},0)
    
var scene= new ScrollMagic.Scene({triggerElement:'#panel2', triggerHook:.8})
scene.reverse(false)
.setTween(timeline)
.addTo(controller);

var timeline = new TimelineMax()
    .add(TweenMax.from(("#panel3 h2"),1,{opacity:0, scale:3}))
    .from('#panel3 h3', 1, {x: '-10%', delay:.5, opacity:0, ease:Power0.easeOut},0)
    .from('#panel3 p', 1, {x: '10%', delay:.5, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#panel3', triggerHook:.6})
scene.reverse(false)
.setTween(timeline)
.addTo(controller);    
    
var timeline = new TimelineMax()
    .add(TweenMax.from(("#panel4 h2"),1,{opacity:0, scale:3}))
    .from('#panel4 ul', 1, {y: '30%', delay:.5, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#panel4', triggerHook:.6})
scene.reverse(false)
.setTween(timeline)
.addTo(controller);  
    
var timeline = new TimelineMax()
    .add(TweenMax.from(("#panel5 h2"),1,{opacity:0, scale:3}))
    .from('#panel5 h3', 1, {x: '70%', delay:.5, opacity:0, ease:Power0.easeOut},0)
    .from('#panel5 p', .5, {x: '-10%', delay:.85, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#panel5', triggerHook:.6})
scene.reverse(false)
.setTween(timeline)
.addTo(controller);      
    
var timeline = new TimelineMax()
    .add(TweenMax.from(("#panel6 h2"),1,{opacity:0, scale:3}))
    .from('#panel6 p', 1, {x: '70%', delay:.5, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#panel6', triggerHook:.6})
scene.reverse(false)
.setTween(timeline)
.addTo(controller);      
    
});
// this is horizontal scroll
//var controller = new ScrollMagic.Controller();
//var PhilosophyScene;
//var PhilosophyTween;
//
//jQuery(document).ready(function () {
//    PhilosophyTween = new TimelineLite()
//    .add([TweenMax.fromTo("#panel3", 2, { marginLeft: '100%' }, { marginLeft: 0, ease: Linear.easeOut })])
//    .add([TweenMax.fromTo("#panel4", 2, { marginLeft: '100%' }, { marginLeft: 0, ease: Linear.easeOut })])
//    .add([TweenMax.fromTo("#panel5", 2, { marginLeft: '100%' }, { marginLeft: 0, ease: Linear.easeOut })])
//    
//    PhilosophyScene = new ScrollMagic.Scene({ triggerElement: "#screen2", duration: 5000, offset: 370 })
//    .setTween(PhilosophyTween)
//    .setPin("#screen2")
//    .addTo(controller)
//});
//
//var enableAfterScroll = [PhilosophyScene];
//
//// change scrolling behavior
//controller.scrollTo(function (top) {
//   	jQuery("html,body").animate({scrollTop: top - 0, scrollLeft: 0}, 1000,
//    function () { $.each(enableAfterScroll, function(index, scene) { scene.enabled(true);}); });
//});
//
//$('#scrollToEl').click( function(e) {
//        e.preventDefault();
//		PhilosophyScene.progress(0);
//		PhilosophyScene.enabled(false);
//		controller.scrollTo("#screen2");
//});
