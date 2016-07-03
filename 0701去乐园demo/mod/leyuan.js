define(["text!../../tpl/leyuan.html"],function(html){
	function render(){
		
		$("#tc").html(html);
		getCity();
//		common.getJson();//用ajax+动态创建DOM节点的方法创建页面结构
		getJs();//用ajax+百度Template的方法创建页面结构
	}
	
	//用ajax+百度Template的方法创建页面结构
	function getJs(){
		$.get("json/p21.json",callBack,"json");

		function callBack(objs){
//			console.log(objs);
			var html = baidu.template('tx',objs);
			content.innerHTML = html;
		}
	}

	//全城列表	
	function getCity(){
		
		var btn = $("a",$("#sort"));
		var city = $(".city",$("#sort"));
		btn.on("click",function(){
			btn.attr("style","border-bottom: none;");
			$(this).attr("style","border-bottom: 0.15rem solid #ec6d65;");
			
			city.toggle();
			city.html("");
			
		});
		
//		btn.eq(0).on("click",getSortList);
		btn.eq(1).on("click",getCityList);
//		btn.eq(2).on("click",getRankList);
		
		function getCityList(){
			
			$.get("json/city.json",onSuccess,"json");
			function onSuccess(jsons){
				var data_sort = jsons["sort"];
				var data_city = jsons["province"][0]["city"];
				var data_rank = jsons["rank"];				
				
				for (var i = 0;i < data_city.length; i++) {
					var a = $("<a></a>").text(data_city[i]);
					a.attr("style","border-right: 0.075rem solid #d8d8d8;");
					a.click(function(){
						btn.eq(1).text($(this).text());
						city.css("display","none");
					})
					city.append(a);
				}
		
				for (var i = 2; i < city.children().length; i+=3) {
					city.children().eq(i).attr("style","border-right: none; !important;");
				}
				
				btn.not(btn.eq(1)).click(function(){
					city.css("display","none");
				});
				$("#content").click(function(){
					city.css("display","none");
				});
			}
		}		
	}

	return {
		render:render
	}
})