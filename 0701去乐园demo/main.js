require.config({
	baseUrl:"./lib",
	paths:{
		jquery:"jquery-2.2.3",
		backbone:"backbone",
		underscore:"underscore",
		text:"text",
		touchSlide:"TouchSlide.1.1",
		baiduTemplate:"baiduTemplate"
	}
});

require(["jquery","./router.js","touchSlide","baiduTemplate"],function($,touchSlide,baiduTemplate){
	Backbone.history.start();
	
})

