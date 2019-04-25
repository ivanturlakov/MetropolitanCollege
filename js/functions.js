$(document).ready(function () {
	
	
	
	//Home Intro
	var hideIntro = $(".hide-intro");
	hideIntro.click(function(){
		$(".home-intro").addClass("hide");
		$("nav").removeClass("intro-nav");
		$(".home-main").removeClass("intro-content");
		return false;
	});
	
	function introTimer(){
        $(".home-intro").addClass("hide");
		$("nav").removeClass("intro-nav");
		$(".home-main").removeClass("intro-content");
    }
	setTimeout(introTimer, 10000);
	
	
	
	
	//Popup
	var popupToggle = $(".toggle-degree-options");
	popupToggle.click(function(){
		$(".degree-options").fadeToggle();
		return false;
	});
	
	
	//ScrollBar
	$(".scroll-box").mCustomScrollbar({
         theme:"rounded-dots"
    });
	
		
	
	//Tabs
	$(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

	
	
	
	//Nav
	var navToggle = $("#toggle-nav");
	navToggle.click(function(){
		$("nav ul").slideToggle("slow");
		navToggle.toggleClass("opened");
		return false;
	});
		


});