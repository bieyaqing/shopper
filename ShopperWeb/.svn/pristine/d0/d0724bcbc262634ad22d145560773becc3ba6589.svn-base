function postCommentinCreate(eventId, content){
	$(document).ready(function(){
		var userId = window.localStorage.getItem("userId");
		
		var postJson = '{"eventId":"'+eventId+'","poster":"'+userId+'","content":"'+content+'"}';
		
		postJson = encodeURIComponent(postJson);
		
		$.ajax({
			url: '/ShopperWeb/CreateEventCommentServlet?json='+postJson,
			type: 'POST',
			dataType: 'json',
			asycn: false,
			error: function(err){
				alert("post comment ajax error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				if(status == 0){
					alert(message);
				}else{
					launchEventDetail(eventId);
				}
			}
		});
	});
}

function postCommentinView(eventId, content){
	$(document).ready(function(){
		var userId = window.localStorage.getItem("userId");
		
		var postJson = '{"eventId":"'+eventId+'","poster":"'+userId+'","content":"'+content+'"}';
		
		postJson = encodeURIComponent(postJson);
		
		$.ajax({
			url: '/ShopperWeb/CreateEventCommentServlet?json='+postJson,
			type: 'POST',
			dataType: 'json',
			asycn: false,
			error: function(err){
				alert("post comment ajax error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				if(status == 0){
					alert(message);
				}else{
					launchEventDetailForView(eventId);
				}
			}
		});
	});
}
