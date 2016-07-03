
define(function(){
	
	function getJson(){
		
		$.get("json/p22.json",callBack,"json");

		var content = $("#content");
		function callBack(jsons){
		//	console.log(jsons.data[0]);
			var ul = $("<ul></ul>");
			for (var i = 0; i < jsons.data.length; i++) {
				var address = $("<span class='address'></span>").text(jsons.data[i]["address"]);
				var dist = $("<span class='dist'></span>").text(jsons.data[i]["dist"]+"公里");
				var add = $("<p class='add'></p>").append(address).append(dist);
				var name = $("<p class='name'></p>").text(jsons.data[i]["name"]);
				var main_img = $("<img class='main_img'/>").attr("src",jsons.data[i]["img"]);
				var border = $("<img class='border'/>").attr("src","img/img_paradise/border.gif");
				var map = $("<img class='map'/>").attr("src","img/img_paradise/map.gif");
				var a = $("<a></a>").append(add).append(name).append(main_img).append(border).append(map);
				var li = $("<li></li>").append(a);
				ul.append(li);
				content.append(ul);			
			}				
		}
	}
	

	//轮播
	function getSlide(){
		TouchSlide({ 
			slideCell:"#slide",
			titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
			mainCell:".bd ul", 
			effect:"leftLoop", 
			autoPlay:true,//自动播放
			autoPage:"<li></li>", //自动分页
		});
	}
	

	return{
		getJson:getJson,
//		getData:getData,
//		getCity:getCity,
		getSlide:getSlide,
	}
})







