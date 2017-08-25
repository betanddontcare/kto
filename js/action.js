$(document).ready(function(){

//CLICK ACTION
    $("#transporter").click(function(){
        
        var transparentDelay;
        var saluteDelay;
        clearInterval(shimmer);
        $("section").removeClass();
		$("section").addClass("transporter");
        $("button").remove();
        $(".main-stage").css('animation' , 'bounce-right 5s ease-in-out forwards');
        $(".head").removeClass().addClass("head-to-left");
//CREATING ELEMENTS WITH DELAY
        setTimeout(function(){
            
            $(".stage").prepend('<div class="description">' + '</div>');
//HUMAN TYPING EFFECT FOR ELEMENT
            function typeEffect(element, speed){
            
                var text = $(element).text();
                $(element).html('');
                var i = 0;
//TYPING LETTER AFTER LETTER
                var timer = setInterval(function(){
                    
					if (i < text.length){
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
            }
            var speed = 75;
            var data = {
                cannon: '1 x 30 x 173 mm ATK Mk44 BUSHMASTER II',
                engine: 'DI 12 Scania Diesel 360 kW or 405 kW',
                suspension: '8×8 wheeled',
                crew: '3 + 8 crew'
                        }; 
//FIRST H3 CREATING
            var turret = [31, 32, 33, 34, 35, 42];
            $(".description").append('<h3>' + data.cannon +'</h3>');
            $('h3:eq(0)').text().length * speed + speed;
            typeEffect($('h3:eq(0)'), speed);
//FIRST H3 ACTION AFTER MOUSE OVER
            $('h3:eq(0)').hover(function(){
                
                $(this).addClass('bigger');   
                for (x=0; x <= turret.length; x++){
                    $('.transporter .t-'+ turret[x] + '').removeClass('t-'+ turret[x] + '').addClass('r'+ turret[x] + '');
                    }
                $('.triangle:lt(30)').addClass('transparent');
                $('.triangle:gt(34):not(.r42)').addClass('transparent');  
            })
//FIRST H3 ACTION AFTER MOUSE OUT
            $('h3:eq(0)').mouseout(function(){
                
                $(this).removeClass('bigger');
                for (x=0; x <= turret.length; x++){
                        $('.transporter .r'+ turret[x] + '').removeClass('r'+ turret[x] + '').addClass('t-'+ turret[x] + '');
                    }
                $('.triangle:lt(58):not(.r31 , .r32 , .r33 , .r34 , .r35 , r42)').removeClass('transparent');
            })   
//SECOND H3 CREATING
            $(".description").append('<h3>' +'</h3>');
            setTimeout(function(){
                
                $('h3:eq(1)').append(data.engine);
                $('h3:eq(1)').text().length * speed + speed;
                typeEffect($('h3:eq(1)'), speed);
            }, 2000);
//SECOND H3 ACTION AFTER MOUSE OVER
            $('h3:eq(1)').hover(function(){
                
                $(this).addClass('bigger');    
                $('.transporter .t-22').removeClass('t-22').addClass('r22');
                $('.transporter .t-23').removeClass('t-23').addClass('r23');
                $('.triangle:lt(58):not(.r22 , .r23)').addClass('transparent'); 
            })
//SECOND H3 ACTION AFTER MOUSE OUT
            $('h3:eq(1)').mouseout(function(){
                
                $(this).removeClass('bigger');
                $('.transporter .r22').removeClass('r22').addClass('t-22');
                $('.transporter .r23').removeClass('r23').addClass('t-23');
                $('.triangle:lt(58):not(.t-22 , .t-23)').removeClass('transparent');
            })  
//THIRD H3 CREATING  
            $(".description").append('<h3>' +'</h3>');
            setTimeout(function(){
                $('h3:eq(2)').append(data.suspension);
                $('h3:eq(2)').text().length * speed + speed;
                typeEffect($('h3:eq(2)'), speed); 
            }, 4000);       
//THIRD H3 ACTION AFTER MOUSE OVER
            $('h3:eq(2)').hover(function(){
                
                $(this).addClass('bigger');   
                var light = [0, 4, 44, 45, 48, 49, 51, 52, 55, 56];
                for(x=0; x <= light.length; x++) {                  
                    $('.triangle:eq('+ light[x] + ')').addClass('rolling-light');
                }
                var dark = [1, 5, 42, 43, 46, 47, 50, 53, 54, 57];
                for(x=0; x <= dark.length; x++) {
                    $('.triangle:eq('+ dark[x] + ')').addClass('rolling-dark');
                    $('.triangle:lt(42):not(.t-1 , .t-2 , .t-5 , .t-6)').addClass('shudder');
                }
                    $('.triangle:lt(42):not(.t-1 , .t-2 , .t-5 , .t-6)').addClass('transparent');    
            })
//THIRD H3 ACTION AFTER MOUSE OUT
            $('h3:eq(2)').mouseout(function(){
                  
                $(this).removeClass('bigger');
                var light = [0, 4, 44, 45, 48, 49, 51, 52, 55, 56];
                for(x=0; x <= light.length; x++) {                  
                    $('.triangle:eq('+ light[x] + ')').removeClass('rolling-light');
                }
                var dark = [1, 5, 42, 43, 46, 47, 50, 53, 54, 57];
                for(x=0; x <= dark.length; x++) {
                    $('.triangle:eq('+ dark[x] + ')').removeClass('rolling-dark');
                }
                $('.triangle:lt(42):not(.t-1 , .t-2 , .t-5 , .t-6)').removeClass('transparent').removeClass('shudder');
            }) 
//FOURTH H3 CREATING
            $(".description").append('<h3>' +'</h3>');
            setTimeout(function(){
                
                $('h3:eq(3)').append(data.crew);
                $('h3:eq(3)').text().length * speed + speed;
                typeEffect($('h3:eq(3)'), speed);
                }, 5000);
//FOURTH H3 ACTION AFTER MOUSE OVER
                $('h3:eq(3)').hover(function(){
                    $(this).addClass('bigger'); 
                    $('.main-stage').append('<div class="triangle t-59">' + '</div>');
                    $('.transporter .t-59').addClass('hatch-open');
                    var salute = [60, 61, 64, 65, 66, 67];
                    for(x=0; x < salute.length; x++){       
                        $('.main-stage').append('<div class="triangle t-'+ salute[x] + '">' + '</div>');
                        $('.transporter .t-'+ salute[x] + '').addClass('soldier-up');
                    }
                    $('.main-stage').append('<div class="empty">' + '</div>');
                    saluteDelay = setTimeout(function(){
                        
                        $('.empty').removeClass().addClass('triangle t-62');
                        $('.t-60').removeClass('t-60').addClass('t-63');
                    }, 3000);
                    $('.triangle:lt(58):not(.t-31 , .t-32 , .t-33)').addClass('transparent');
                })
//FOURTH H3 ACTION AFTER MOUSE OUT              
                $('h3:eq(3)').mouseout(function(){
                    
                    $(this).removeClass('bigger');
                    clearTimeout(saluteDelay);
                    var salute = [60, 61, 63, 64, 65, 66, 67];
                    for(x=0; x < salute.length; x++){       
                        $('.transporter .t-'+ salute[x] + '').removeClass('soldier-up').addClass('soldier-down');
                    }
                    $('.transporter .t-62').remove();
                    $('.t-63').removeClass('t-63').addClass('t-60');
                    $('.empty').remove();
                    $('.transporter .t-59').removeClass('hatch-open').addClass('hatch-close');
                    $('.triangle:lt(58)').removeClass('transparent');
                })    
        }, 5000);
	})
//INTERACTIVE TRIANGLES (ROTATION EFFECT)
    $(".triangle").hover(function(){
        
        $(this).addClass("scale");    
    })
    $(".triangle").mouseout(function(){
        
        $(this).removeClass("scale");    
    })
//SHIMMER EFFECT
    var shimmer = setInterval(function(){
        
	    $(".main-stage").toggleClass("glimmer");
	}, 3000);	
});

