function launchParticipantBox(){
	$("#sidecontent2").css("left","0");
	$("#headertext").html("Participant");
	$("#backbtn").attr("onclick","backToEvent()");
}

function launchParticipantBox2(){
	$("#sidecontent2").css("left","0");
	$("#headertext").html("Participant");
	$("#backbtn").attr("onclick","backToEvent2()");
}

function backToEvent(){
	$("#sidecontent2").css("left","100%");
	$("#headertext").html("EventTitle");
	$("#backbtn").attr("onclick","backToMine()");
}

function backToEvent2(){
	$("#sidecontent2").css("left","100%");
	$("#headertext").html("EventTitle");
	$("#backbtn").attr("onclick","backToDiscover()");
}

function viewParticipants(id){
	$(document).ready(function(){
		var viewPartJson = '{"eventId":"'+id+'"}';
		$.ajax({
			url: '/ShopperWeb/GetEventServlet?json='+viewPartJson,
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("get user ajax error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				if(status == 0){
					alert(message);
				}else{
					var userHtml = '';
					var tEvent = message;
					var tParticipantJArr = tEvent["participateJArr"];
					for(var o in tParticipantJArr){
						var tPart = tParticipantJArr[o];
						var tPhoto = tPart["photo"];
						var tPoints = tPart["points"];
						var tId = tPart["userId"];
						var tName = tPart["username"];
						userHtml += '\
							<div class="thumbnail">\
								<div class="row">\
									<div class="col-xs-2 col-sm-2" onclick="viewUserFromMine('+tId+')"><img src="'+tPhoto+'" class="img-responsive img-rounded myimg"></div>\
									<div class="col-xs-3 col-sm-2 myrightpadding" onclick="viewUserFromMine('+tId+')"><div style="padding-top:7px"><font size="4"><span class="glyphicon glyphicon-star"></span><strong>'+tPoints+'</strong></font></div></div>\
									<div class="col-xs-4 col-sm-6 myleftpadding" onclick="viewUserFromMine('+tId+')"><div style="padding-top:7px"><font size="4"><strong>'+tName+'</strong></font></div></div>\
									<div class="col-xs-3 col-sm-2"><div style="padding-top:9px"><button style="font-size:10px;width:52px;" class="btn btn-success btn-xs pull-right" onclick="addFriendInMyEvent('+tId+')">Add</button></div></div>\
								</div>\
							</div>';
					}
					var participantsHtml = '\
						<div class="container">\
							<div class="row">\
								<div class="col-xs-12" id="partiBox">\
									'+userHtml+'\
								</div>\
							</div>\
						</div>';
					$("#sidecontent2").html(participantsHtml);
					launchParticipantBox();
				}
			}
		});
	});
}

function viewParticipants2(id){
	$(document).ready(function(){
		var viewPartJson = '{"eventId":"'+id+'"}';
		$.ajax({
			url: '/ShopperWeb/GetEventServlet?json='+viewPartJson,
			type: 'POST',
			dataType: 'json',
			error: function(err){
				alert("get user ajax error!");
			},
			success: function(data){
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				if(status == 0){
					alert(message);
				}else{
					var userHtml = '';
					var tEvent = message;
					var tParticipantJArr = tEvent["participateJArr"];
					for(var o in tParticipantJArr){
						var tPart = tParticipantJArr[o];
						var tPhoto = tPart["photo"];
						var tPoints = tPart["points"];
						var tId = tPart["userId"];
						var tName = tPart["username"];
						userHtml += '\
							<div class="thumbnail">\
								<div class="row">\
									<div class="col-xs-2 col-sm-2" onclick="viewUserFromDiscover('+tId+')"><img src="'+tPhoto+'" class="img-responsive img-rounded myimg"></div>\
									<div class="col-xs-3 col-sm-2 myrightpadding" onclick="viewUserFromDiscover('+tId+')"><div style="padding-top:7px"><font size="4"><span class="glyphicon glyphicon-star"></span><strong>'+tPoints+'</strong></font></div></div>\
									<div class="col-xs-4 col-sm-6 myleftpadding" onclick="viewUserFromDiscover('+tId+')"><div style="padding-top:7px"><font size="4"><strong>'+tName+'</strong></font></div></div>\
								</div>\
							</div>';
					}
					var participantsHtml = '\
						<div class="container">\
							<div class="row">\
								<div class="col-xs-12" id="partiBox">\
									'+userHtml+'\
								</div>\
							</div>\
						</div>';
					$("#sidecontent2").html(participantsHtml);
					launchParticipantBox2();
				}
			}
		});
	});
}