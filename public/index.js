/*var scrollEventHandler = function()
	{
		window.scroll(0, window.pageYOffset)
	}
window.addEventListener("scroll", scrollEventHandler, false);
*/
setTimeout(() => {
      var element = document.getElementById("loader");
    	element && element. parentNode && element. parentNode .removeChild(element);
      // $("#root").css('visibility', 'visible');
	  $("body").css("overflow-y","scroll");
      $("body").css("height","auto");
      $("#root").fadeIn(1800);    
      $(".Back").fadeIn(10);    
}, 4200);
setTimeout(() => {
}, 6000);

/*
if (
			"IntersectionObserver" in window &&
			"IntersectionObserverEntry" in window &&
			"intersectionRatio" in window.IntersectionObserverEntry.prototype
		) {
			debugger;
			let observer = new IntersectionObserver((entries) => {
				if (entries[0].boundingClientRect.y < 0) {
					document
						.getElementsByClassName("backg")[0]
						.classList.add("backga");
					document
						.getElementsByClassName("hello")[0]
						.classList.add("helloa");
					document
						.getElementsByClassName("milo")[0]
						.classList.add("miloa");
				} else {
					document
						.getElementsByClassName("backg")[0]
						.classList.remove("backga");
					document
						.getElementsByClassName("hello")[0]
						.classList.remove("helloa");
					document
						.getElementsByClassName("milo")[0]
						.classList.remove("miloa");
				}
			});
			observer.observe(document.querySelector("#Aboutid"));
		}*/


$(document).ready(function(){












	/* // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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
    } // End if
  });*/
});