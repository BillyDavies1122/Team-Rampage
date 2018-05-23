$('document').ready(function(){
  /*
  $(".top").mouseover(function(e){
    var element = $(this).find(".submenu");
    $(element).css("display","block");
  });

  $(".submenu").mouseout(function(e){
    $(".submenu").css("display","none");
  });
  */
 $('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);
});
