// discover page
var expFEIndex = 0;
function expendFriendEvent(){
	expFEIndex += 1;
	if(expFEIndex % 2 == 1){
		resetPELayout();
		$("#feexpBtn").removeClass("glyphicon glyphicon-collapse-down");
		$("#feexpBtn").addClass("glyphicon glyphicon-collapse-up");
		setTimeout(function(){
			var changepxVal = $("#publiceventbox").outerHeight() - 40;
			$("#friendeventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#friendeventheader").outerHeight()-16 + changepxVal);
			$("#publiceventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#publiceventheader").outerHeight()-16 - changepxVal);
		},200);
	}else{
		resetDiscoverLayout();
	}
}

var expPEIndex = 0;
function expendPublicEvent(){
	expPEIndex += 1;
	if(expPEIndex % 2 == 1){
		resetFELayout();
		$("#peexpBtn").removeClass("glyphicon glyphicon-collapse-down");
		$("#peexpBtn").addClass("glyphicon glyphicon-collapse-up");
		setTimeout(function(){
			var changepxVal = $("#friendeventbox").outerHeight() - 40;
			$("#friendeventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#friendeventheader").outerHeight()-16 - changepxVal);
			$("#publiceventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#publiceventheader").outerHeight()-16 + changepxVal);
		},200);
	}else{
		resetDiscoverLayout();
	}
}

function resetFELayout(){
	expFEIndex = 0;
	$("#feexpBtn").removeClass("glyphicon glyphicon-collapse-up");
	$("#feexpBtn").addClass("glyphicon glyphicon-collapse-down");
	$("#friendeventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#friendeventheader").outerHeight()-16);
	$("#publiceventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#publiceventheader").outerHeight()-16);
}

function resetPELayout(){
	expPEIndex = 0;
	$("#peexpBtn").removeClass("glyphicon glyphicon-collapse-up");
	$("#peexpBtn").addClass("glyphicon glyphicon-collapse-down");
	$("#friendeventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#friendeventheader").outerHeight()-16);
	$("#publiceventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#publiceventheader").outerHeight()-16);
}

function resetDiscoverLayout(){
	resetFELayout();
	resetPELayout();
}

function viewAndJoinEvent(id){
	$(document).ready(function(){
		var viewEventJson = '{"eventId":"'+id+'"}';
		
		$.ajax({
			url: '/ShopperWeb/GetEventServlet?json='+viewEventJson,
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
					var eventObj = message;
					var eDescription = eventObj["description"];
					var eDuration = eventObj["duration"];
					var eEventId = eventObj["eventId"];
					var eImage = eventObj["image"];
					
					var eLocation = eventObj["location"];
					
					var eCor = eLocation.split(":")[0];
					var eAddress = eLocation.split(":")[1];
					
					var eOrganizer = eventObj["organizer"];
					var eParticipants = eventObj["participates"];
					var ePeopleLimit = eventObj["peopleLimit"];
					var ePublish = eventObj["publish"];
					var eStartTime = eventObj["startTime"];
					var eTag = eventObj["tag"];
					var eTitle = eventObj["title"];
					
					var numOfPart = 0;
					if(eParticipants.length == 1){
						numOfPart = 1;
					}else{
						numOfPart = (eParticipants.split(",")).length;
					}
					
					var comments = data["message2"];
					var commentHtml = '';
					for(var o in comments){
						var tempComment = comments[o];
						var tcontent = tempComment["comment"];
						var tduration = tempComment["duration"];
						var tphoto = tempComment["photo"];
						var tusername = tempComment["username"];
						commentHtml += '\
							<div class="thumbnail">\
								<div class="row">\
									<div class="col-xs-3 col-sm-2"><img src="'+tphoto+'" class="img-responsive img-rounded myimg"></div>\
									<div class="col-xs-9 col-sm-10">\
										<div class="row mynegtop"><font size="1"><strong>'+tcontent+'</strong></font></div>\
										<div class="row mynegtop"><font size="1"><small>'+tusername+' <em>'+tduration+' mins ago</em></small></font></div>\
									</div>\
								</div>\
							</div>'
					}
					
					var eventPageHtml = '\
						<div class="container">\
							<div class="row">\
								<div class="col-xs-12">\
									<div class="thumbnail">\
										<img src="'+eImage+'" class="img-rounded" onclick="imgExpend()" id="eventDetailImg">\
									</div>\
								</div>\
							</div>\
							<div class="row">\
								<div class="col-xs-12">\
									<div class="thumbnail">\
										<div class="row">\
											<div class="col-xs-12">\
												<font size="2">'+eDescription+'</font>\
											</div>\
										</div>\
										<div class="row mytopbuffer">\
											<div class="col-xs-5"><font size="2"><b>Ends in:</b></font></div>\
											<div class="col-xs-7" id="tag">\
												<font id="durationLabel" size="2">'+eDuration+' min</font>\
											</div>\
										</div>\
										<div class="row">\
											<div class="col-xs-5"><font size="2"><b>Category:</b></font></div>\
											<div class="col-xs-7" id="tag">\
												<font id="tagLabel" size="2">'+eTag+'</font>\
											</div>\
										</div>\
										<div class="row">\
											<div class="col-xs-5" id="editTime">\
												<font size="2"><b>Participants:</b></font>\
											</div>\
											<div class="col-xs-7">\
												<a href="" onclick="viewParticipants2('+id+')"><font size="2">'+numOfPart+' / '+ePeopleLimit+' Joined</font></a>\
											</div>\
										</div>\
										<div class="row mytopbuffer">\
											<div class="col-xs-12">\
												<div class="item rounded dark" style="padding: 3px;">\
													<div id="map_canvas" class="map rounded" style="height:140px;"></div>\
												</div>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>\
							<div class="row">\
								<div class="col-xs-12">'
									+commentHtml+
								'</div>\
							</div>\
						</div>';
					$("#sidecontent").html(eventPageHtml);
					$("#headertext").html(eTitle);
					$("#backbtn").removeClass("sr-only");
					$("#backbtn").attr("onclick","backToDiscover()");
					$("#helpbtn").addClass("sr-only");
					$("#headerbtn2").removeClass("sr-only");
					$("#headerbtn2").attr("onclick","joinEvent("+id+")");
					$("#headerbtn2").html("Join");
					VIEWINGEVENT = id;
					//$("#createbox").outerHeight($("#maincontent").outerHeight()-32);
					
					$("#sidecontent").css("left","0");
					$('#map_canvas').gmap().bind('init', function(ev, map) {
						$('#map_canvas').gmap('addMarker', {'position': eCor, 'zoom': 10,'disableDefaultUI':true, 'bounds': true}).click(function() {
							$('#map_canvas').gmap('openInfoWindow', {'content': eAddress}, this);
						});
					});
				}
			}
		});
	});
}

function backToDiscover(){
	$("#sidecontent").css("left","100%");
	$("#headertext").html("Discover");
	$("#backbtn").addClass("sr-only");
	$("#headerbtn2").addClass("sr-only");
	$("#helpbtn").removeClass("sr-only");
}

function joinEvent(id){
	var r = confirm("Do you wish to join this event?");
	if(r){
		$(document).ready(function(){
			var userId = window.localStorage.getItem("userId");
			var joinEventJson = '{"userId":"'+userId+'","eventId":"'+id+'"}';
			$.ajax({
				url: '/ShopperWeb/JoinEventServlet?json='+joinEventJson,
				type: 'POST',
				dataType: 'json',
				error: function(err){
					alert("join event ajax error!");
				},
				success: function(data){
					console.log(data);
					var status = data["status"];
					var message = data["message"];
					if(status == 0){
						alert(message);
					}else{
						uiMainContentHtml("mine");
					}
				}
			});
		});
	}else{
		
	}
}