define(["backbone"],function(){
	var Router = Backbone.Router.extend({
	
		routes: {
		    "home":                 "home",    // #help
		    "leyuan":        		"leyuan",  // #search/kiwis
		    "order": 				"order",  // #search/kiwis/p7
		    "mine":					"mine",
		    "hbzq":					"hbzq",
		    "lxzq":					"lxzq",
			"*actions":				"defaultAction"
		},
		
		home: function() {
		    require(["./mod/home.js"],function(home){
		    	home.render();
		    })
		},
		
		leyuan: function() {
		    require(["./mod/leyuan.js"],function(leyuan){
		    	leyuan.render();
		    })
		},
		
		order: function() {
		   require(["./mod/order.js"],function(order){
		    	order.render();
		    })
		},
		
		mine: function() {
	    	require(["./mod/mine.js"],function(mine){
		    	mine.render();
		    })
		},
		
		hbzq: function() {
	    	require(["./mod/hbzq.js"],function(hbzq){
		    	hbzq.render();
		    })
		},
		
		lxzq: function() {
	    	require(["./mod/lxzq.js"],function(lxzq){
		    	lxzq.render();
		    })
		},
		
		defaultAction:function(){
			location.hash = "home";
		}
		
		
	});
	
	var router = new Router();
	return router;
})