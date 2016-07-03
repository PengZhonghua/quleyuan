define(["text!../../tpl/hbzq.html"],function(html){
	function render(){
		$("#tc").html(html);
		$("#navbar").css("display","none");
		
//		var iHeight = $(document).height() > $('body').height() ? $(document).height() : $('body').height();
//		console.log($(window).height()/40+10+"rem");
//		$("#box").css("height",iHeight/40+10+"rem");
	}
	
	return {
		render:render
	}
})