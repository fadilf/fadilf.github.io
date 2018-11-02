$(document).ready(function(){
	$(".galleryb").click(function(){
		$("#gallery-container").css("display","block");
	});
	$("#gallery-back").click(function(){
		$("#gallery-container").css("display","none");
	});
	$("#gallery .pic").click(function(){
		if(!$(this).hasClass("viewing") && !$(this).hasClass("closing")){
			$("#gallery").addClass("opened");
			$("#gallery .pic").removeClass("viewing");
			$(this).addClass("viewing");
		}
	});
	$("#gallery .pic button").click(function(){
		$(this).parent().addClass("closing");
		$(this).parent().removeClass("viewing");
		setTimeout(function(){
			$("#gallery").removeClass("opened");
			$("#gallery .pic").removeClass("closing");
		},100);
	});
});