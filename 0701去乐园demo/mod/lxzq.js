define(["text!../../tpl/lxzq.html","../mod/common.js"],function(html,common){
	function render(){
		$("#tc").html(html);
		$("#navbar").css("display","none");
		common.getJson();
	}
	
	return {
		render:render
	}
})