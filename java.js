$(document).ready(function(){


    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).onabort('load scroll',function(){

        $('fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#6c5ce7','box-shadow':'0 0.2rem 0.5rem rgba(0,0,0,0.4)'});
        }else{
            $('.header').css({'background':'#6c5ce7','box-shadow':'none'});
        }

    });






});