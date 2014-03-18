function login(){
	$(document).ready(function(){
		var username = $("#lusername").val();
		var password = $("#lpassword").val();
		if(username.length == 0||password.length == 0){
			alert("No empty input please:)");
		}else{
			var signupJson = '{"username":"'+username+'","password":"'+password+'"}';
			signupJson = encodeURIComponent(signupJson);
			$.ajax({
				url: '/ShopperWeb/LoginServlet?json='+signupJson,
				type: 'POST',
				dataType: 'json',
				error: function(err){
					console.log(err);
					alert("login ajax error");
				},
				success: function(data){
					console.log(data);
					if(data["status"] == 0){
						alert(data["message"]);
					}else{
						var user = data["user"];
						var userId = user["userId"];
						window.localStorage.setItem("userId",userId);
						USERID = window.localStorage.getItem("userId");
						$(".tagBtn").attr("disabled", false);
						$("#headertext").html("Mine");
						uiMainContentHtml("mine");
					}
				}
			});
		}
	});
}

function signup(){
	$(document).ready(function(){
		var username = $("#susername").val();
		var password1 = $("#spassword1").val();
		var password2 = $("#spassword2").val();
		if(username.length == 0||password1.length == 0||password2.length == 0){
			alert("No empty input please:)");
		}else if(password1 != password2){
			alert("Confirm your password again:)");
		}else{
			var signupJson = '{"username":"'+username+'","password":"'+password1+'"}';
			signupJson = encodeURIComponent(signupJson);
			$.ajax({
				url: '/ShopperWeb/CreateUserServlet?json='+signupJson,
				type: 'POST',
				dataType: 'json',
				error: function(err){
					console.log(err);
					alert("signup ajax error");
				},
				success: function(data){
					console.log(data);
					var user = data["user"];
					var userId = user["userId"];
					window.localStorage.setItem("userId",userId);
					USERID = window.localStorage.getItem("userId");
					$(".tagBtn").attr("disabled", false);
					$("#headertext").html("Mine");
					uiMainContentHtml("mine");
				}
			});
		}
	});
}

function logout(){
	window.localStorage.removeItem("userId");
	initialApp();
}