var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);
setTimeout(() => {
      var element = document.getElementById("loader");
    	element && element. parentNode && element. parentNode .removeChild(element);
      // $("#root").css('visibility', 'visible');
      $("#root").fadeIn(1800);    
}, 4200);