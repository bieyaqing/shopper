function viewUser(id){
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
						<div class="col-xs-6"><img src="img/Crown.png" class="img-responsive img-rounded"></div>\
						<div class="col-xs-6 myleftpadding"><strong>'+id+'</strong></div>\
					</div>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-up" onclick="like('+id+')"></span><strong id="likeCount">'+id+'</strong>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-down" onclick="dislike('+id+')"></span><strong id="dislikeCount">'+id+'</strong>\
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
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html('Accept');
	$("#headerbtn2").attr("onclick","addFriend()");
}

function viewFriend(id){
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
						<div class="col-xs-6"><img src="img/Crown.png" class="img-responsive img-rounded"></div>\
						<div class="col-xs-6 myleftpadding"><strong>'+id+'</strong></div>\
					</div>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-up" onclick="like('+id+')"></span><strong id="likeCount">'+id+'</strong>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-down" onclick="dislike('+id+')"></span><strong id="dislikeCount">'+id+'</strong>\
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
}

function backToSocial(){
	$("#sidecontent3").css("left","100%");
	$("#headertext").html("Friends");
	$("#backbtn").addClass("sr-only");
	$("#headerbtn2").addClass("sr-only");
}

function viewUserFromMine(id){
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
						<div class="col-xs-6"><img src="img/Crown.png" class="img-responsive img-rounded"></div>\
						<div class="col-xs-6 myleftpadding"><strong>'+id+'</strong></div>\
					</div>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-up" onclick="like('+id+')"></span><strong id="likeCount">'+id+'</strong>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-down" onclick="dislike('+id+')"></span><strong id="dislikeCount">'+id+'</strong>\
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
	$("#backbtn").attr("onclick","backToMyEventPar()");
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html('Add');
	$("#headerbtn2").attr("onclick","addFriendFromMineEventPar()");
}

function backToMyEventPar(){
	$("#headerbtn2").addClass("sr-only");
	$("#sidecontent3").css("left","100%");
	$("#headertext").html("Participants");
	$("#backbtn").attr("onclick","backToEvent()");
}

function viewUserFromDiscover(id){
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
						<div class="col-xs-6"><img src="img/Crown.png" class="img-responsive img-rounded"></div>\
						<div class="col-xs-6 myleftpadding"><strong>'+id+'</strong></div>\
					</div>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-up" onclick="like('+id+')"></span><strong id="likeCount">'+id+'</strong>\
				</div>\
				<div class="col-xs-4">\
					<span class="glyphicon glyphicon-thumbs-down" onclick="dislike('+id+')"></span><strong id="dislikeCount">'+id+'</strong>\
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
	$("#backbtn").attr("onclick","backToDiscEventPar()");
	
	$("#headerbtn2").addClass("sr-only");
//	$("#headerbtn2").removeClass("sr-only");
//	$("#headerbtn2").html('Add');
//	$("#headerbtn2").attr("onclick","addFriend()");
}

function backToDiscEventPar(){
	$("#sidecontent3").css("left","100%");
	$("#headertext").html("Participants");
	$("#headerbtn2").attr("onclick","joinEvent("+VIEWINGEVENT+")");
	$("#headerbtn2").html("Join");
	$("#headerbtn2").removeClass("sr-only");
	$("#backbtn").attr("onclick","backToEvent2()");
}

function addFriend(){
	
	
	//success
	backToSocial();
}

function addFriendFromMineEventPar(){
	
	
	//success
	backToMyEventPar();
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
	
	//success
	var likeCount = Number($("#likeCount").html());
	$("#likeCount").html(likeCount + 1);
}

function dislike(id){
	
	//success
	var dislikeCount = Number($("#dislikeCount").html());
	$("#dislikeCount").html(dislikeCount + 1);
}

function rejectUser(id){
	
	
	//success
	social();
}

function removeUser(id){
	
	
	//success
	social();
}