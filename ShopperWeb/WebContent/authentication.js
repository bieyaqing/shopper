function login(){
	$(document).ready(function(){
		
		
		//success
		$(".tagBtn").attr("disabled", false);
		$("#headertext").html("Mine");
		uiMainContentHtml("mine");
	});
}

function signup(){
	$(document).ready(function(){
		
		
		//success
		$(".tagBtn").attr("disabled", false);
		$("#headertext").html("Mine");
		uiMainContentHtml("mine");
	});
}

function logout(){
	window.localStorage.removeItem("userId");
	initialApp();
}