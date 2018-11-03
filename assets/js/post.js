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
			$(this).css("background-image","url('"+$(this).attr("data-src")+"')");
		}
	});
	$("#gallery .pic button").click(function(){
		$(this).parent().addClass("closing");
		$(this).css("background-image","url('"+$(this).attr("data-thumbnail")+"')");
		$(this).parent().removeClass("viewing");
		setTimeout(function(){
			$("#gallery").removeClass("opened");
			$("#gallery .pic").removeClass("closing");
		},100);
	});
});