define(["text!../../tpl/home.html","../mod/common.js"],function(html,common){
	function render(){
		$("#tc").html(html);
		$("#navbar").css("display","block");
		getData();		
	}
	
	//创建精彩推荐的框架
	function rendContentItem(url){
		return '<a href="tpl/pbsa.html"><img src="'+url+'" alt="" /></a>'
	}
	
	//创建轮播的框架
	function rendSlideItem(url){
		return '<li><a href="#"><img src='+url+'></a></li>'
	}
	
	//创建专区的框架
	function rendRegionItem(url){
		return '<a><img src='+url+'></a>'
	}
	
	//获取Json文件
	function getData(){
		
		$.get("json/p1.json",callBack,"json");

		function callBack(jsons){		
			//精彩推荐的图片
			for (var i = 0; i < jsons["reclist"].length; i++) {
				$("#content").append(rendContentItem(jsons["reclist"][i]["img"]));
			}
			//轮播的图片
			for (var i = 0; i < jsons["slider"].length; i++) {
				$("ul",$("#slide .bd")).append(rendSlideItem(jsons["slider"][i]["img"]));
			}		
			common.getSlide();
			//专区的图片
			for (var i = 0; i < jsons["arealist"].length; i++) {
				$("#activity").append(rendRegionItem(jsons["arealist"][i]["img"]));
				$("a",$("#activity")).eq(0).attr("href","#/hbzq");
				$("a",$("#activity")).eq(1).attr("href","#/lxzq");
			}
		}
	}	
	
	return {
		render:render
	}
})