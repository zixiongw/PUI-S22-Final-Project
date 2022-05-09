$(document).ready(function(){

    $('.coverText').hide();
    
    $(".coverImage").hover(
        // Mouseover animation
        function(){
            $(this).filter(':not(:animated)').animate({
                filter:"opacity(50%) saturate(40%) brightness(130%)", 
                height: '340px', width: '640px',
                margin: '20px',
                opacity: "0.3"}); 
            $(this).siblings().show();
        // Mouseleaving animation
        }, 
        function(){
            $(this).animate({
                filter: "opacity(80%) saturate(80%) brightness(100%)",
                height: '300px', width: '600px',
                margin: '40px',
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
        });

    // About page fade-in
    // $('.overview').hide();

    $('.overview').fadeIn('slow');
    // $('.workCover').fadeIn('slow');
    // $('#worksTitle').fadeIn('slow');
})

// "Leave a comment" form popup 

  function openForm() {
    document.getElementById("leaveAComment").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("leaveAComment").style.display = "none";
    }