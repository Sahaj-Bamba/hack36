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
      $(".Back").fadeIn(10);    
}, 4200);
setTimeout(() => {

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
}, 6000);
