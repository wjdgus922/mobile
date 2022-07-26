window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)




        if(scrollTop >= 100){

           
        }


        if(scrollTop >= 130){

            
        }


        if(scrollTop >= 160){

            
        }


        if(scrollTop >= 160){

            
        }


        if(scrollTop >= 190){
            
        }


        if(scrollTop >= 220){
            
        }


        if(scrollTop >= 190){

            $('.title_de').addClass('on');
        }


        if(scrollTop >= 240){

            $('.iphone').addClass('on');
        }


        if(scrollTop >= 240){

            $('.mov').addClass('on');
        }

        if(scrollTop >= 240){

            $('.sticker').addClass('on');
        }


        if(scrollTop >= 240){

            $('.sticker1_2').addClass('on');
        }


        if(scrollTop >= 280){

            $('.sub_ti').addClass('on');
        } 


        if(scrollTop >= 320){

            $('.sub_de').addClass('on');
        }  


        if(scrollTop >= 280){

            $('.sub_de2').addClass('on');
        } 


        if(scrollTop >= 900){

            $('.sticker2').addClass('on');
        }


        if(scrollTop >= 900){

            $('.photo').addClass('on');
        }


        if(scrollTop >= 920){

            $('.photo2').addClass('on');
        }


        if(scrollTop >= 920){

            $('.sub_ti2').addClass('on');
        }


        if(scrollTop >= 980){

            $('.sub_ti2_2').addClass('on');
        }


        if(scrollTop >= 1100){

            $('.sub_de2_2').addClass('on');
        }





        if(scrollTop >= 3200){

            $('.tit_line').addClass('on');
        }


        if(scrollTop >= 3100){

            $('.detail01').addClass('on');
        }


        if(scrollTop >= 3200){

            $('.sec2_line').addClass('on');
        }


        if(scrollTop >= 3200){

            $('.screen').addClass('on');
        }


        if(scrollTop >= 3200){

            $('.onbo').addClass('on');
        }


        if(scrollTop >= 3200){

            $('.onbo_de').addClass('on');
        }


        if(scrollTop >= 3300){

            $('.login').addClass('on');
        }


        if(scrollTop >= 3400){

            $('.sign').addClass('on');
        }


        if(scrollTop >= 3700){

            $('.mainpage').addClass('on');
        }


        if(scrollTop >= 3800){

            $('.map').addClass('on');
        }


        if(scrollTop >= 3800){

            $('.map_de').addClass('on');
        }


        if(scrollTop >= 3900){

            $('.profile').addClass('on');
        }


        if(scrollTop >= 4100){

            $('.finding').addClass('on');
        }


        if(scrollTop >= 4100){

            $('.apply').addClass('on');
        }


        if(scrollTop >= 4100){

            $('.personal').addClass('on');
        }


        if(scrollTop >= 4200){

            $('.message').addClass('on');
        }


        if(scrollTop >= 4200){

            $('.photo').addClass('on');
        }


        if(scrollTop >= 4300){

            $('.detailpage').addClass('on');
        }


        if(scrollTop >= 4300){

            $('.shop').addClass('on');
        }


        if(scrollTop >= 4300){

            $('.cal').addClass('on');
        }





        if(scrollTop >= 5100){

            $('.round_bg').addClass('on');
        }


        if(scrollTop >= 4800){

            $('.line').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.brand').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.sports').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.health').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.hobby').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.social').addClass('on');
        }


        if(scrollTop >= 5100){

            $('.positive').addClass('on');
        }


        if(scrollTop >= 7900){

            $('.tit').addClass('on');
        }


        if(scrollTop >= 7900){

            $('.tit2').addClass('on');
        }


        if(scrollTop >= 8200){

            $('.tit2_s').addClass('on');
        }


        if(scrollTop >= 8300){

            $('.senten1').addClass('on');
        }


        if(scrollTop >= 8350){

            $('.senten2').addClass('on');
        }

        if(scrollTop >= 8400){

            $('.senten3').addClass('on');
        }

        if(scrollTop >= 8450){

            $('.senten4').addClass('on');
        }

        if(scrollTop >= 8500){

            $('.found').addClass('on');
        }

        if(scrollTop >= 8550){

            $('.create').addClass('on');
        }

        if(scrollTop >= 8600){

            $('.spobby').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box1').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box2').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box3').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box4').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box5').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box6').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box7').addClass('on');
        }

        if(scrollTop >= 8800){

            $('.box8').addClass('on');
        }



        if(scrollTop >= 9500){

            $('.bgline').addClass('on');
        }

        if(scrollTop >= 9500){

            $('.mockup1').addClass('on');
        }

        if(scrollTop >= 9900){

            $('.mockup2').addClass('on');
        }



        if(scrollTop >= 11500){

            $('.title_sec6').addClass('on');
        }

        if(scrollTop >= 11700){

            $('.title_sh_sec6').addClass('on');
        }

        if(scrollTop >= 11900){

            $('.detail_sec6').addClass('on');
        }


        if(scrollTop >= 11500){

            $('.gauge').addClass('on');
        }

        if(scrollTop >= 11700){

            $('.gauge2').addClass('on');
        }

        if(scrollTop >= 11900){

            $('.gauge3').addClass('on');
        }



        if(scrollTop >= 12400){

            $('.thickline1').addClass('on');
        }

        if(scrollTop >= 12400){

            $('.small_tit1').addClass('on');
        }

        if(scrollTop >= 12400){

            $('.small_de1').addClass('on');
        }



        if(scrollTop >= 12500){

            $('.small_tit2').addClass('on');
        }

        if(scrollTop >= 12500){

            $('.small_de2').addClass('on');
        }



        if(scrollTop >= 12600){

            $('.thickline3').addClass('on');
        }

        if(scrollTop >= 12600){

            $('.small_tit3').addClass('on');
        }

        if(scrollTop >= 12600){

            $('.small_de3').addClass('on');
        }



        if(scrollTop >= 12700){

            $('.thickline4').addClass('on');
        }

        if(scrollTop >= 12700){

            $('.small_tit4').addClass('on');
        }

        if(scrollTop >= 12700){

            $('.small_de4').addClass('on');
        }

        if(scrollTop >= 13800){

            $('.font').addClass('on');
        }
        
        if(scrollTop >= 13900){

            $('.sporty').addClass('on');
        }
        
        if(scrollTop >= 13900){

            $('.Aa').addClass('on');
        }
        
        if(scrollTop >= 13800){

            $('.color').addClass('on');
        }
    
        if(scrollTop >= 13700){

            $('.chart1').addClass('on');
        }
    
        if(scrollTop >= 13800){

            $('.chart2').addClass('on');
        }
    
        if(scrollTop >= 13800){

            $('.chart3').addClass('on');
        }
    
        if(scrollTop >= 13800){

            $('.chart4').addClass('on');
        }
    

        if(scrollTop >= 14700){

            $('.word1').addClass('on');
        }

        if(scrollTop >= 14800){

            $('.word2').addClass('on');
        }

        if(scrollTop >= 14900){

            $('.word3').addClass('on');
        }

        if(scrollTop >= 15000){

            $('.plusdot').addClass('on');
        }

        if(scrollTop >= 15000){

            $('.plusdot2').addClass('on');
        }

        if(scrollTop >= 15900){

            $('.north').addClass('on');
        }

        if(scrollTop >= 16200){

            $('.west').addClass('on');
        }

        if(scrollTop >= 16500){

            $('.east').addClass('on');
        }

        if(scrollTop >= 16800){

            $('.south').addClass('on');
        }


        if(scrollTop >= 17200){

            $('.map_title').addClass('on');
        }

        if(scrollTop >= 17300){

            $('.map_detail').addClass('on');
        }

        if(scrollTop >= 17300){

            $('.map_title1_s').addClass('on');
        }

        if(scrollTop >= 17300){

            $('.ikon1').addClass('on');
        }

        if(scrollTop >= 17500){

            $('.ikon2').addClass('on');
        }

        if(scrollTop >= 17700){

            $('.ikon3').addClass('on');
        }

        if(scrollTop >= 17600){

            $('.Arrow').addClass('on');
        }

        if(scrollTop >= 17800){

            $('.tobe_title').addClass('on');
        }

        if(scrollTop >= 18000){

            $('.a_line').addClass('on');
        }

        if(scrollTop >= 18100){

            $('.a_line2').addClass('on');
        }

        if(scrollTop >= 18200){

            $('.a_line3').addClass('on');
        }

        if(scrollTop >= 18300){

            $('.a_line4').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.a_line5').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.color01').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.color02').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.color03').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.color04').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.color05').addClass('on');
        }

        if(scrollTop >= 18400){

            $('.color06').addClass('on');
        }
   
        if(scrollTop >= 19500){

            $('.mockup01_b').addClass('on');
        }
   
        if(scrollTop >= 20200){

            $('.mockup02_b').addClass('on');
        }
           
        if(scrollTop >= 21000){

            $('.mockup03_b').addClass('on');
        }
           
        if(scrollTop >= 20200){

            $('.mockup04_b').addClass('on');
        }
           
        if(scrollTop >= 19100){

            $('.num0').addClass('on');
        }
           
        if(scrollTop >= 19500){

            $('.num1').addClass('on');
        }
           
        if(scrollTop >= 19600){

            $('.num1_1').addClass('on');
        }
           
        if(scrollTop >= 19600){

            $('.num2').addClass('on');
        }

        if(scrollTop >= 19600){

            $('.num2_1').addClass('on');
        }

        if(scrollTop >= 19700){

            $('.num2_2').addClass('on');
        }

        if(scrollTop >= 19700){

            $('.num4').addClass('on');
        }

        if(scrollTop >= 19700){

            $('.num4_1').addClass('on');
        }

        if(scrollTop >= 19900){

            $('.num3').addClass('on');
        }

        if(scrollTop >= 20000){

            $('.num3_1').addClass('on');
        }

        if(scrollTop >= 21000){

            $('.pro_title').addClass('on');
        }

        if(scrollTop >= 21200){

            $('.pro_detail1').addClass('on');
        }

        if(scrollTop >= 21400){

            $('.pro_detail2').addClass('on');
        }

        if(scrollTop >= 21600){

            $('.pro_detail3').addClass('on');
        }

        if(scrollTop >= 21600){

            $('.pro_line').addClass('on');
        }

        if(scrollTop >= 22200){

            $('.pro_mockup').addClass('on');
        }
        
        if(scrollTop >= 22800){

            $('.pro_title2').addClass('on');
        }
        
        if(scrollTop >= 22800){

            $('.pro_title2_2').addClass('on');
        }
      
        if(scrollTop >= 23300){

            $('.pro_shape1_1').addClass('on');
        }

        if(scrollTop >= 23500){

            $('.pro_detail4').addClass('on');
        }

        if(scrollTop >= 24000){

            $('.pro_detail5').addClass('on');
        }

        if(scrollTop >= 24200){

            $('.pro_shape2').addClass('on');
        }

        if(scrollTop >= 24200){

            $('.pro_shape2_2').addClass('on');
        }

        if(scrollTop >= 24200){

            $('.mockup_b').addClass('on');
        }

        if(scrollTop >= 24200){

            $('.pro_main2').addClass('on');
        }

        if(scrollTop >= 24500){

            $('.pro_shape3').addClass('on');
        }

        if(scrollTop >= 24500){

            $('.mockup_b2').addClass('on');
        }

        if(scrollTop >= 24500){

            $('.pro_main').addClass('on');
        }

        if(scrollTop >= 24500){

            $('.pro_detail6').addClass('on');
        }

        if(scrollTop >= 25000){

            $('.pro_img1').addClass('on');
        }

        if(scrollTop >= 25000){

            $('.pro_img2').addClass('on');
        }

        if(scrollTop >= 27000){

            $('.shop_tit').addClass('on');
        }

        if(scrollTop >= 27200){

            $('.shop_de').addClass('on');
        }

        if(scrollTop >= 27400){

            $('.shop_sec1').addClass('on');
        }

        if(scrollTop >= 27600){

            $('.shop_sec2').addClass('on');
        }

        if(scrollTop >= 27800){

            $('.shop_sec3').addClass('on');
        }

        if(scrollTop >= 28000){

            $('.shop_sec4').addClass('on');
        }

        if(scrollTop >= 28200){

            $('.shop_sec5').addClass('on');
        }

        if(scrollTop >= 28200){

            $('.shop_mockup').addClass('on');
        }

        if(scrollTop >= 28200){

            $('.shop_mov').addClass('on');
        }

        if(scrollTop >= 28300){

            $('.shop_line').addClass('on');
        }

        if(scrollTop >= 28400){

            $('.shop_tit2').addClass('on');
        }

        if(scrollTop >= 28600){

            $('.shop_de2').addClass('on');
        }

        if(scrollTop >= 28800){

            $('.shop_mockup2').addClass('on');
        }

        if(scrollTop >= 28800){

            $('.shop_mockup3').addClass('on');
        }

        if(scrollTop >= 28900){

            $('.shop_sti').addClass('on');
        }

        if(scrollTop >= 28900){

            $('.shop_sti2').addClass('on');
        }














        if(scrollTop >= 600){

            $('.box').addClass('on');
        }


        if(scrollTop >= 1400){

            $('.block').addClass('on');
        }

    
    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {

        $('.person').addClass('on');

        $('.title').addClass('on');

        $('.title2').addClass('on');
        
        $('.title_sh').addClass('on');
        
        $('.title3').addClass('on');
        
        $('.title_sh2').addClass('on');




        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)

/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
