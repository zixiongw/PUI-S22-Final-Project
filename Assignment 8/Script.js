$(document).ready(function(){

    $('.coverText').hide();
    
    $(".coverImage").hover(
        // Mouseover animation
        function(){
            $(this).filter(':not(:animated)').animate({
                filter:"opacity(50%) saturate(40%) brightness(130%)", 
                height: '330px', width: '630px',
                opacity: "0.3"}); 
            $(this).siblings().show();
        // Mouseleaving animation
        }, 
        function(){
            $(this).animate({
                filter: "opacity(80%) saturate(80%) brightness(100%)",
                height: '300px', width: '600px',
                opacity: '1'});
            $(this).siblings().hide();
        });

    // Scroll to element (adapted from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/)
    $('a[href="#worksTitle"]').on('click', function (e) {
        e.preventDefault()
          
        $('html, body').animate(
            {
            scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'swing'
        )
        })


  });