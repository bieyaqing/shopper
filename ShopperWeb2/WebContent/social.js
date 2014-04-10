function viewUser(id){
//	$(document).ready(function(){
//		var viewUserJson = '{"useId":"'+id+'"}';
//		$.ajax({
//			url: '/ShopperWeb/GetUserServlet?json='+viewUserJson,
//			type: 'POST',
//			dataType: 'json',
//			error: function(err){
//				alert("mine error!");
//			},
//			success: function(data){
//				console.log(data);
//				var status = data["status"];
//				var message = data["message"];
//				
//				
//			}
//		});
//	});

	var userHtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<div class="thumbnail">\
						<img src="img/photo0'+id+'.png" class="img-responsive img-rounded" id="userProfileImg" onclick="pImgExpend()">\
					</div>\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-4">\
					<div class="row">\
						<div class="col-xs-4 myrightpadding"><span class="glyphicon glyphicon-star"></span></div>\
						<div class="col-xs-8 myleftpadding"><strong>1'+id+'</strong></div>\
					</div>\
				</div>\
				<div class="col-xs-4">\
					<strong class="pull-right" id="likeCount">'+id+'</strong><span class="glyphicon glyphicon-thumbs-up pull-right" onclick="like('+id+')"></span>\
				</div>\
				<div class="col-xs-4">\
					<strong class="pull-right" id="dislikeCount">'+id+'</strong><span class="glyphicon glyphicon-thumbs-down pull-right" onclick="dislike('+id+')"></span>\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-12">\
					<div class="thumbnail" id="chatBox">\
						<div class="row">\
							<div class="col-xs-3 col-sm-2"><img src="img/photo0'+id+'.png" class="img-responsive img-rounded myimg"></div>\
							<div class="col-xs-9 col-sm-10">\
								<div class="row mynegtop"><font size="1"><strong>Very nice organizer!!</strong></font></div>\
								<div class="row mynegtop"><font size="1"><small>Bie Yaqing <em>29 days ago</em></small></font></div>\
							</div>\
						</div>\
					</div>\
					<div class="thumbnail">\
						<div class="row">\
							<div class="col-xs-9 col-sm-10"><input type="text" class="form-control input-sm"></div>\
							<div class="col-xs-3 col-sm-2 myleftpadding"><button class="btn btn-primary btn-sm">Post</button></div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>';
	
	$("#sidecontent3").html(userHtml);
	$("#sidecontent3").css("left","0");
	
	$("#headertext").html("User Name");
	$("#backbtn").removeClass("sr-only");
	$("#backbtn").attr("onclick","backToSocial()");
	$("#helpbtn").addClass("sr-only");
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html('Accept');
	$("#headerbtn2").attr("onclick","addFriend()");
}

function viewFriend(id){
	$(document).ready(function(){
		var viewUserJson = '{"userId":"'+id+'"}';
		$.ajax({
			url: '/ShopperWeb/GetUserServlet?json='+viewUserJson,
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("mine error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				
				if(status == 0){
					alert(message);
				}else{
					var userObj = data["user"];
					var tPhoto = userObj["photo"];
					var tPoints = userObj["points"];
					var tGood = userObj["good"];
					var tBad = userObj["bad"];
					var tName = userObj["username"];
					
					var userHtml = '\
						<div class="container">\
							<div class="row">\
								<div class="col-xs-12">\
									<div class="thumbnail">\
										<img src="'+tPhoto+'" class="img-responsive img-rounded" id="userProfileImg" onclick="pImgExpend()">\
									</div>\
								</div>\
							</div>\
							<div class="row mytopbuffer">\
								<div class="col-xs-4">\
									<div class="row">\
										<div class="col-xs-4 myrightpadding"><span class="glyphicon glyphicon-star"></span></div>\
										<div class="col-xs-8 myleftpadding"><strong>'+tPoints+'</strong></div>\
									</div>\
								</div>\
								<div class="col-xs-4">\
									<strong class="pull-right" id="likeCount">'+tGood+'</strong><span class="glyphicon glyphicon-thumbs-up pull-right" onclick="like('+id+')"></span>\
								</div>\
								<div class="col-xs-4">\
									<strong class="pull-right" id="dislikeCount">'+tBad+'</strong><span class="glyphicon glyphicon-thumbs-down pull-right" onclick="dislike('+id+')"></span>\
								</div>\
							</div>\
							<div class="row mytopbuffer">\
								<div class="col-xs-12">\
									<div class="thumbnail" id="chatBox">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="img/photo02.png" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-9 col-sm-10">\
												<div class="row mynegtop"><font size="1"><strong>Very nice organizer!!</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small>Bie Yaqing <em>29 days ago</em></small></font></div>\
											</div>\
										</div>\
									</div>\
									<div class="thumbnail">\
										<div class="row">\
											<div class="col-xs-9 col-sm-10"><input type="text" class="form-control input-sm"></div>\
											<div class="col-xs-3 col-sm-2 myleftpadding"><button class="btn btn-primary btn-sm">Post</button></div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>';
					
					$("#sidecontent3").html(userHtml);
					$("#sidecontent3").css("left","0");
					
					$("#headertext").html(tName);
					$("#backbtn").removeClass("sr-only");
					$("#backbtn").attr("onclick","backToSocial()");
					$("#helpbtn").addClass("sr-only");
				}
			}
		});
	});
}

function backToSocial(){
	$("#sidecontent3").css("left","100%");
	$("#headertext").html("Friends");
	$("#backbtn").addClass("sr-only");
	$("#headerbtn2").addClass("sr-only");
	$("#helpbtn").removeClass("sr-only");
}

function viewUserFromMine(id, eventId){
	$(document).ready(function(){
		var viewUserJson = '{"userId":"'+id+'"}';
		$.ajax({
			url: '/ShopperWeb/GetUserServlet?json='+viewUserJson,
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("mine error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				
				if(status == 0){
					alert(message);
				}else{
					var userObj = data["user"];
					var tPhoto = userObj["photo"];
					var tPoints = userObj["points"];
					var tGood = userObj["good"];
					var tBad = userObj["bad"];
					var tName = userObj["username"];
					
					var userHtml = '\
						<div class="container">\
							<div class="row">\
								<div class="col-xs-12">\
									<div class="thumbnail">\
										<img src="'+tPhoto+'" class="img-responsive img-rounded" id="userProfileImg" onclick="pImgExpend()">\
									</div>\
								</div>\
							</div>\
							<div class="row mytopbuffer">\
								<div class="col-xs-4">\
									<div class="row">\
										<div class="col-xs-4 myrightpadding"><span class="glyphicon glyphicon-star"></span></div>\
										<div class="col-xs-8 myleftpadding"><strong>'+tPoints+'</strong></div>\
									</div>\
								</div>\
								<div class="col-xs-4">\
									<strong class="pull-right" id="likeCount">'+tGood+'</strong><span class="glyphicon glyphicon-thumbs-up pull-right" onclick="like('+id+')"></span>\
								</div>\
								<div class="col-xs-4">\
									<strong class="pull-right" id="dislikeCount">'+tBad+'</strong><span class="glyphicon glyphicon-thumbs-down pull-right" onclick="dislike('+id+')"></span>\
								</div>\
							</div>\
							<div class="row mytopbuffer">\
								<div class="col-xs-12">\
									<div class="thumbnail" id="chatBox">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="img/photo01.png" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-9 col-sm-10">\
												<div class="row mynegtop"><font size="1"><strong>Very nice organizer!!</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small>Bie Yaqing <em>29 days ago</em></small></font></div>\
											</div>\
										</div>\
									</div>\
									<div class="thumbnail">\
										<div class="row">\
											<div class="col-xs-9 col-sm-10"><input type="text" class="form-control input-sm"></div>\
											<div class="col-xs-3 col-sm-2 myleftpadding"><button class="btn btn-primary btn-sm">Post</button></div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>';
					
					$("#sidecontent3").html(userHtml);
					$("#sidecontent3").css("left","0");
					
					$("#headertext").html(tName);
					$("#backbtn").removeClass("sr-only");
					$("#backbtn").attr("onclick","backToMyEventPar()");
					$("#helpbtn").addClass("sr-only");
					if(eventId != 0){
						$("#headerbtn2").removeClass("sr-only");
						$("#headerbtn2").html('Add');
						$("#headerbtn2").attr("onclick","addFriendInMyEvent("+id+","+eventId+")");
					}
				}
			}
		});
	});
}

function backToMyEventPar(){
	$("#headerbtn2").addClass("sr-only");
	$("#sidecontent3").css("left","100%");
	$("#headertext").html("Participants");
	$("#backbtn").attr("onclick","backToEvent()");
}

function viewUserFromDiscover(id){
	$(document).ready(function(){
		var viewUserJson = '{"userId":"'+id+'"}';
		$.ajax({
			url: '/ShopperWeb/GetUserServlet?json='+viewUserJson,
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("mine error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				
				if(status == 0){
					alert(message);
				}else{
					var userObj = data["user"];
					var tPhoto = userObj["photo"];
					var tPoints = userObj["points"];
					var tGood = userObj["good"];
					var tBad = userObj["bad"];
					var tName = userObj["username"];
					
					var userHtml = '\
						<div class="container">\
							<div class="row">\
								<div class="col-xs-12">\
									<div class="thumbnail">\
										<img src="'+tPhoto+'" class="img-responsive img-rounded" id="userProfileImg" onclick="pImgExpend()">\
									</div>\
								</div>\
							</div>\
							<div class="row mytopbuffer">\
								<div class="col-xs-4">\
									<div class="row">\
										<div class="col-xs-4 myrightpadding"><span class="glyphicon glyphicon-star"></span></div>\
										<div class="col-xs-8 myleftpadding"><strong>'+tPoints+'</strong></div>\
									</div>\
								</div>\
								<div class="col-xs-4">\
									<strong class="pull-right" id="likeCount">'+tGood+'</strong><span class="glyphicon glyphicon-thumbs-up pull-right" onclick="like('+id+')"></span>\
								</div>\
								<div class="col-xs-4">\
									<strong class="pull-right" id="dislikeCount">'+tBad+'</strong><span class="glyphicon glyphicon-thumbs-down pull-right" onclick="dislike('+id+')"></span>\
								</div>\
							</div>\
							<div class="row mytopbuffer">\
								<div class="col-xs-12">\
									<div class="thumbnail" id="chatBox">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="img/photo03.png" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-9 col-sm-10">\
												<div class="row mynegtop"><font size="1"><strong>Very nice organizer!!</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small>Bie Yaqing <em>29 days ago</em></small></font></div>\
											</div>\
										</div>\
									</div>\
									<div class="thumbnail">\
										<div class="row">\
											<div class="col-xs-9 col-sm-10"><input type="text" class="form-control input-sm"></div>\
											<div class="col-xs-3 col-sm-2 myleftpadding"><button class="btn btn-primary btn-sm">Post</button></div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>';
					
					$("#sidecontent3").html(userHtml);
					$("#sidecontent3").css("left","0");
					
					$("#headertext").html(tName);
					$("#backbtn").removeClass("sr-only");
					$("#backbtn").attr("onclick","backToDiscEventPar()");
					$("#helpbtn").addClass("sr-only");
					
					$("#headerbtn2").addClass("sr-only");
//					$("#headerbtn2").removeClass("sr-only");
//					$("#headerbtn2").html('Add');
//					$("#headerbtn2").attr("onclick","addFriend()");
				}
			}
		});
	});
}

function backToDiscEventPar(){
	$("#sidecontent3").css("left","100%");
	$("#headertext").html("Participants");
	$("#headerbtn2").attr("onclick","joinEvent("+VIEWINGEVENT+")");
	$("#headerbtn2").html("Join");
	$("#headerbtn2").removeClass("sr-only");
	$("#backbtn").attr("onclick","backToEvent2()");
	$("#helpbtn").addClass("sr-only");
}

function addFriend(){
	$(document).ready(function(){
		var addFriendJson = '{"userId":"","friendId":""}';
		$.ajax({
			url: '/ShopperWeb/AddFriendServlet?json=',
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("add friend ajax error!");
			},
			success: function(data){
				
			}
		});
	});

	
	//success
	backToSocial();
}

function addFriendInMyEvent(id, eventId){
	$(document).ready(function(){
		var userId = window.localStorage.getItem("userId");
		var addFriendJson = '{"userId":"'+userId+'","friendId":"'+id+'"}';
		$.ajax({
			url: '/ShopperWeb/AddFriendServlet?json='+addFriendJson,
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("add friend ajax error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				
				if(status == 0){
					alert(message);
				}else{
					backToMyEventPar();
					viewParticipants(eventId);
				}
			}
		});
	});
}

function removeFriend(id){
	var r = confirm("Are you sure remove this friend?");
	
	if(r){
		$(document).ready(function(){
			var userId = window.localStorage.getItem("userId");
			var removeFriendJson = '{"userId":"'+userId+'","friendId":"'+id+'"}';
			$.ajax({
				url: '/ShopperWeb/RemoveFriendServlet?json='+removeFriendJson,
				type: 'POST',
				dataType: 'json',
				error: function(err){
					alert("add friend ajax error!");
				},
				success: function(data){
					console.log(data);
					var status = data["status"];
					var message = data["message"];
					
					if(status == 0){
						alert(message);
					}else{
						uiMainContentHtml("social");
					}
				}
			});
		});
	}else{
		
	}
}

var pImgExpInx = 0;
function pImgExpend(){
	if(pImgExpInx % 2 == 0){
		$("#userProfileImg").css("height", "140px");
	}else{
		$("#userProfileImg").css("height", "40px");
	}
	pImgExpInx += 1;
}

function like(id){
//	$.ajax({
//	url: '',
//	type: 'POST',
//	dataType: 'json',
//	error: function(err){
//		alert("mine error!");
//	},
//	success: function(data){
//		
//	}
//});
	//success
	var likeCount = Number($("#likeCount").html());
	$("#likeCount").html(likeCount + 1);
}

function dislike(id){
//	$.ajax({
//	url: '',
//	type: 'POST',
//	dataType: 'json',
//	error: function(err){
//		alert("mine error!");
//	},
//	success: function(data){
//		
//	}
//});
	//success
	var dislikeCount = Number($("#dislikeCount").html());
	$("#dislikeCount").html(dislikeCount + 1);
}

function rejectUser(id){
//	$.ajax({
//	url: '',
//	type: 'POST',
//	dataType: 'json',
//	error: function(err){
//		alert("mine error!");
//	},
//	success: function(data){
//		
//	}
//});
	
	//success
	social();
}

function removeUser(id){
//	$.ajax({
//	url: '',
//	type: 'POST',
//	dataType: 'json',
//	error: function(err){
//		alert("mine error!");
//	},
//	success: function(data){
//		
//	}
//});
	
	//success
	social();
}