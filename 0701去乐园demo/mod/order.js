define(["text!../../tpl/order.html"],function(html){
	function render(){
//		console.log(html);
		$("#tc").html(html);

//		return "<div>首页的内容</div>"
	}
	
	return {
		render:render
	}
})