$(document).ready(function () {
	var roof = $('#flat-roof'),
			wall = $('#wall-house'),
			frontHouse = $('#front-house'),
			flwindow = $('.first-left-window'),
			slwindow = $('.second-left-window'),
			frwindow = $('.first-right-window'),
			srwindow = $('.second-right-window'),
      tl = new TimelineMax({ paused: true }),
      tlSlideDown = new TimelineMax({ paused: true }),
      tlSlideUp = new TimelineMax({ paused: true }),
			tlEasing = Elastic.easeOut.config( 0.8, 0.3),
			tlTime = 0.75,
      roomActive = $('.room.active'),
      roomNonActive = $('.room:not(.active)');


		tl
			.add('slide-6-5')
			.to(roof, tlTime, {
      	y: -30,
      	rotation: 5,
      	scaleX: 0.8,
      	scaleY: 1.2,
      	ease: tlEasing
      }, 'slide-6-5')
      .to(frontHouse, tlTime, {
      	scaleX: 0.85,
      	scaleY: 1.2,
      	y: -22,
      	ease: tlEasing
      }, 'slide-6-5')
      .to(wall, tlTime, {
      	scaleX: 0.8,
      	scaleY: 1.2,
      	y: -22,
      	ease: tlEasing
      }, 'slide-6-5')
      .to(flwindow, tlTime/8, {
      	autoAlpha: 0,
      	ease: Power0.easeOut
      }, 'slide-6-5')
      .to(frwindow, tlTime/8, {
      	autoAlpha: 0,
      	ease: Power0.easeOut
      }, 'slide-6-5')
      .to(slwindow, tlTime/3, {
      	x: -15,
      	ease: Power0.easeOut
      }, 'slide-6-5')
      .to(srwindow, tlTime/3, {
      	x: 15,
      	ease: Power0.easeOut,   
        onStart: function() {
          explodeLeftCircle();
          setTimeout(function() {
            explodeRightCircle();
          }, 150);
        },  	
      	onComplete: function() {
      		TweenMax.to(wall, tlTime, {
		      	scaleY: 1,
		      	y: 0,
		      	ease: tlEasing
		      });
      		TweenMax.to(roof, tlTime, {
		      	y: 0,
		      	rotation: 0,
		      	scaleY: 1,
		      	ease: tlEasing
		      });
		      TweenMax.to(frontHouse, tlTime, {
		      	y: 0,
		      	scaleY: 1,
		      	scaleX: 1,
		      	ease: tlEasing
		      });
      		tl.pause();
      	}
      }, 'slide-6-5')
      .add('slide-5-6')
			.to(roof, tlTime, {
      	y: -20,
      	rotation: 5,
      	scaleX: 1,
      	scaleY: 1.2,
      	ease: tlEasing
      }, 'slide-5-6')
      .to(frontHouse, tlTime, {
      	scaleX: 1,
      	scaleY: 1.2,
      	y: -22,
      	ease: tlEasing
      }, 'slide-5-6')
      .to(wall, tlTime, {
      	scaleX: 1,
      	scaleY: 1.2,
      	y: -22,
      	ease: tlEasing
      }, 'slide-5-6')
      .to(flwindow, tlTime/8, {
      	autoAlpha: 1,
      	ease: Power0.easeOut
      }, 'slide-5-6')
      .to(frwindow, tlTime/8, {
      	autoAlpha: 1,
      	ease: Power0.easeOut
      }, 'slide-5-6')
      .to(slwindow, tlTime/3.5, {
      	x: 0,
      	ease: Power0.easeOut
      }, 'slide-5-6')
      .to(srwindow, tlTime/3.5, {
      	x: 0,
      	ease: Power0.easeOut,   
        onStart: function() {
          explodeLeftCircle();
          setTimeout(function() {
            explodeRightCircle();
          }, 150);
        },
      	onComplete: function() {
      		TweenMax.to(wall, tlTime, {
		      	scaleY: 1,
		      	y: 0,
		      	ease: tlEasing
		      });
      		TweenMax.to(roof, tlTime, {
		      	y: 0,
		      	rotation: 0,
		      	scaleY: 1,
		      	ease: tlEasing
		      });
		      TweenMax.to(frontHouse, tlTime, {
		      	y: 0,
		      	scaleY: 1,
		      	scaleX: 1,
		      	ease: tlEasing
		      });
      		tl.pause();
      	}
      }, 'slide-5-6')
      .add('slide-5-4')
      .to('.big-window', tlTime/5, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-5-4')
      .to('.hide-line', tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-5-4')
      .to(roof, tlTime, {
        y: -30,
        rotation: -5,
        scaleX: 0.8,
        scaleY: 1.2,
        ease: tlEasing
      }, 'slide-5-4')
      .to(frontHouse, tlTime, {
        scaleX: 0.85,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-5-4')
      .to(wall, tlTime, {
        scaleX: 0.8,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-5-4')
      .to(flwindow, tlTime/80, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-5-4')
      .to(frwindow, tlTime/80, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-5-4')
      .to(slwindow, tlTime/3, {
        x: -15,
        ease: Power0.easeOut
      }, 'slide-5-4')
      .to(srwindow, tlTime/3, {
        x: 15,
        ease: Power0.easeOut,
        onStart: function() {
          explodeCenterCircle();
        },   
        onComplete: function() {
          TweenMax.to(wall, tlTime, {
            scaleY: 1,
            y: 0,
            ease: tlEasing
          });
          TweenMax.to(roof, tlTime, {
            y: 0,
            rotation: 0,
            scaleY: 1,
            ease: tlEasing
          });
          TweenMax.to(frontHouse, tlTime, {
            y: 0,
            scaleY: 1,
            scaleX: 1,
            ease: tlEasing
          });
          TweenMax.set($('.first-left-window-circle'), {
            className: '+=move-right'
          });
          TweenMax.set($('.second-right-window-circle'), {
            className: '+=move-left'
          });
          tl.pause();
        }
      }, 'slide-5-4')
      .add('slide-4-5')
      .to('.big-window', tlTime/5, {
        autoAlpha: 1,
        ease: Power0.easeOut
      }, 'slide-4-5')
      .to('.hide-line', tlTime/8, {
        autoAlpha: 1,
        ease: Power0.easeOut
      }, 'slide-4-5')
      .to(roof, tlTime, {
        y: -20,
        rotation: -5,
        scaleX: 0.8,
        scaleY: 1.2,
        ease: tlEasing
      }, 'slide-4-5')
      .to(frontHouse, tlTime, {
        scaleX: 0.85,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-4-5')
      .to(wall, tlTime, {
        scaleX: 0.8,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-4-5')
      .to(flwindow, tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-4-5')
      .to(frwindow, tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-4-5')
      .to(slwindow, tlTime/3, {
        x: -15,
        ease: Power0.easeOut
      }, 'slide-4-5')
      .to(srwindow, tlTime/3, {
        x: 15,
        ease: Power0.easeOut,
        onStart: function() {
          explodeCenterCircle();
        },        
        onComplete: function() {
          TweenMax.to(wall, tlTime, {
            scaleY: 1,
            y: 0,
            ease: tlEasing
          });
          TweenMax.to(roof, tlTime, {
            y: 0,
            rotation: 0,
            scaleY: 1,
            ease: tlEasing
          });
          TweenMax.to(frontHouse, tlTime, {
            y: 0,
            scaleY: 1,
            scaleX: 1,
            ease: tlEasing
          });
          tl.pause();
        }
      }, 'slide-4-5')
      .add('slide-4-3')
      .to(slwindow, tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-4-3')
      .to('.big-window', tlTime/50, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-4-3')
      .to('.hide-line', tlTime/50, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-4-3')
      .to(srwindow, tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-4-3')
      .to(roof, tlTime, {
        y: -30,
        rotation: 5,
        scaleX: 0.6,
        scaleY: 1.2,
        ease: tlEasing
      }, 'slide-4-3')
      .to(frontHouse, tlTime, {
        scaleX: 0.75,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-4-3')
      .to(wall, tlTime, {
        scaleX: 0.6,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-4-3')
      .to(slwindow, tlTime/8, {
        x: -15,
        ease: Power0.easeOut
      }, 'slide-4-3')
      .to(srwindow, tlTime/8, {
        x: 15,
        ease: Power0.easeOut,
        onStart: function() {
          explodeRightCircle();
          setTimeout(function() {
            explodeLeftCircle();
          }, 50);
        },
        onComplete: function() {
          TweenMax.to(wall, tlTime, {
            scaleY: 1,
            y: 0,
            ease: tlEasing
          });
          TweenMax.to(roof, tlTime, {
            y: 0,
            rotation: 0,
            scaleY: 1,
            ease: tlEasing
          });
          TweenMax.to(frontHouse, tlTime, {
            y: 0,
            scaleY: 1,
            scaleX: 1,
            ease: tlEasing
          });
          TweenMax.set($('.first-left-window-circle'), {
            className: '-=move-right',
            delay: 1
          });
          TweenMax.set($('.second-right-window-circle'), {
            className: '-=move-left',
            delay: 1
          });
          tl.pause();
        }
      }, 'slide-4-3')
      .add('slide-3-4')
      .to(slwindow, tlTime/8, {
        autoAlpha: 1,
        ease: Power0.easeOut
      }, 'slide-3-4')
      .to(srwindow, tlTime/8, {
        autoAlpha: 1,
        ease: Power0.easeOut
      }, 'slide-3-4')
      .to(roof, tlTime, {
        y: -30,
        rotation: 5,
        scaleX: 0.8,
        scaleY: 1.2,
        ease: tlEasing
      }, 'slide-3-4')
      .to(frontHouse, tlTime, {
        scaleX: 0.85,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-3-4')
      .to(wall, tlTime, {
        scaleX: 0.8,
        scaleY: 1.2,
        y: -22,
        ease: tlEasing
      }, 'slide-3-4')
      .to(flwindow, tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-3-4')
      .to(frwindow, tlTime/8, {
        autoAlpha: 0,
        ease: Power0.easeOut
      }, 'slide-3-4')
      .to(slwindow, tlTime/3, {
        x: -15,
        ease: Power0.easeOut
      }, 'slide-3-4')
      .to(srwindow, tlTime/3, {
        x: 15,
        ease: Power0.easeOut,
        onStart: function() {
          explodeRightCircle();
          setTimeout(function() {
            explodeLeftCircle();
          }, 150);
        },     
        onComplete: function() {
          TweenMax.to(wall, tlTime, {
            scaleY: 1,
            y: 0,
            ease: tlEasing
          });
          TweenMax.to(roof, tlTime, {
            y: 0,
            rotation: 0,
            scaleY: 1,
            ease: tlEasing
          });
          TweenMax.to(frontHouse, tlTime, {
            y: 0,
            scaleY: 1,
            scaleX: 1,
            ease: tlEasing
          });
          TweenMax.set($('.first-left-window-circle'), {
            className: '+=move-right',
            delay: 1
          });
          TweenMax.set($('.second-right-window-circle'), {
            className: '+=move-left',
            delay: 1
          });
          tl.pause();
        }
      }, 'slide-3-4');

    var tlSlideDuration = 0.4;

    tlSlideDown
      .add('slide-down')
      .fromTo('.room:not(.active)', tlSlideDuration, {
        y: '100%',
        z: 0,
        scale: 1.75,
        autoAlpha: 0
      }, {
        y: '0%',
        scale: 1.5,
        autoAlpha: 1,
        ease: Expo.easeOut,
        onComplete: function() {
          TweenMax.to('.room:not(.active)', tlSlideDuration, {
            scale: 1,
            ease: Expo.easeOut
          });
        }
      }, 'slide-down')
      .fromTo('.room.active', tlSlideDuration, {
        y: '0%',
        z: 0,
        autoAlpha: 1,
        scale: 1
      }, {
        y: '-100%',
        autoAlpha: 0,
        scale: 2,
        ease: Expo.easeOut
      }, 'slide-down');

      tlSlideUp
      .add('slide-up')
      .fromTo('.room:not(.active)', tlSlideDuration, {
        y: '0%',
        z: 0,
        scale: 1,
        autoAlpha: 1
      }, {
        y: '100%',
        scale: 2,
        autoAlpha: 0,
        ease: Expo.easeOut
      }, 'slide-up')
      .fromTo('.room.active', tlSlideDuration, {
        y: '-100%',
        z: 0,
        autoAlpha: 0,
        scale: 1.75
      }, {
        y: '0%',
        autoAlpha: 1,
        scale: 1.5,
        ease: Expo.easeOut,
        onComplete: function() {
          TweenMax.to('.room.active', tlSlideDuration, {
            scale: 1,
            ease: Expo.easeOut
          });
        }
      }, 'slide-up');

   function explodeLeftCircle() {
    TweenMax.set($('.first-left-window-circle'), {
      className: '+=explode-effect',
      onComplete: function() {
        TweenMax.set($('.first-left-window-circle'), {
          className: '-=explode-effect',
          delay: 1
        });
      }
    });
   }

   function explodeRightCircle() {
    TweenMax.set($('.second-right-window-circle'), {
      className: '+=explode-effect',
      onComplete: function() {
        TweenMax.set($('.second-right-window-circle'), {
          className: '-=explode-effect',
          delay: 1
        });
      }
    });
   }

   function explodeCenterCircle() {
    TweenMax.set($('.center-window-circle'), {
      className: '+=explode-effect',
      onComplete: function() {
        TweenMax.set($('.center-window-circle'), {
          className: '-=explode-effect',
          delay: 1
        });
      }
    });
   }

  function slideTo(prev, next) {
    tl.play('slide-'+prev+'-'+next);
  }

  function setRoomsNumber(prev, next) {
    roomNonActive.text(next);
    roomActive.text(prev);
  }
        
  $( "#slider-range-max" ).slider({
    range: "max",
    min: 3,
    max: 6,
    value: 6,
    slide: function( event, ui ) {
      var prev = $(this).slider("value"),
          next = ui.value;


      if (prev > next) {
        ay = 100;
        by = -100;
        slideTo(next+1, next);
        setRoomsNumber(prev, next);
        tlSlideDown.play('slide-down');

      } else {
        slideTo(next-1, next);
        setRoomsNumber(next, prev);
        tlSlideUp.play('slide-up');
      }
    }
  });
});