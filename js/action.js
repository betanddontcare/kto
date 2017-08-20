$(document).ready(function(){

//CLICK ACTION
    $("#transporter").click(function(){
        
        $("section").removeClass();
		$("section").addClass("transporter");
        $("button").remove();
        $(".main-stage").css('animation' , 'bounce-right 5s ease-in-out forwards');
        $(".head").removeClass().addClass("head-to-left");
//CREATING ELEMENTS WITH DELAY
        setTimeout(function(){
            
            $(".stage").prepend('<div class="description">' + '</div>');
//HUMAN TYPING EFFECT FOR ELEMENT
            function typeEffect(element, speed) {
            
                var text = $(element).text();
                $(element).html('');
                var i = 0;
//TYPING LETTER AFTER LETTER
                var timer = setInterval(function() {
                    
					if (i < text.length) {
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
                suspension: '8×8 wheeled'
                        }; 
//FIRST H3 CREATING
            $(".description").append('<h3>' + data.cannon +'</h3>');
            $('h3:eq(0)').text().length * speed + speed;
            typeEffect($('h3:eq(0)'), speed);
//FIRST H3 ACTION AFTER MOUSE OVER
            $('h3:eq(0)').hover(function(){
                
                clearInterval(shimmer);
                $(this).addClass('bigger');    
                $('.triangle').css('animation-duration' , '0s');
                $('.transporter .t-31').removeClass('t-31').addClass('r31');
                $('.transporter .t-32').removeClass('t-32').addClass('r32');
                $('.transporter .t-33').removeClass('t-33').addClass('r33');
                $('.transporter .t-34').removeClass('t-34').addClass('r34');
                $('.transporter .t-35').removeClass('t-35').addClass('r35');
                $('.transporter .t-42').removeClass('t-42').addClass('r42');
                $('.triangle:lt(30)').removeClass('glimmer').addClass('transparent');
                $('.triangle:gt(34):not(.r42)').removeClass('glimmer').addClass('transparent'); 
            })
//FIRST H3 ACTION AFTER MOUSE OUT
            $('h3:eq(0)').mouseout(function(){
                
                $(this).removeClass('bigger');
                $('.transporter .r31').removeClass('r31').addClass('t-31');
                $('.transporter .r32').removeClass('r32').addClass('t-32');
                $('.transporter .r33').removeClass('r33').addClass('t-33');
                $('.transporter .r34').removeClass('r34').addClass('t-34');
                $('.transporter .r35').removeClass('r35').addClass('t-35');
                $('.transporter .r42').removeClass('r42').addClass('t-42');
                $('.triangle:lt(30)').removeClass('transparent').addClass('glimmer');
                $('.triangle:gt(34):not(.r42)').removeClass('transparent').addClass('glimmer');
            })    
//SECOND H3 CREATING
            setTimeout(function() {
                
                $(".description").append('<h3>' + data.engine +'</h3>');
                $('h3:eq(1)').text().length * speed + speed;
                typeEffect($('h3:eq(1)'), speed);
            }, 2000);
//THIRD H3 CREATING
            setTimeout(function() {
                
            $(".description").append('<h3>' + data.suspension +'</h3>');
            $('h3:eq(2)').text().length * speed + speed;
            typeEffect($('h3:eq(2)'), speed);    
            }, 4000);
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