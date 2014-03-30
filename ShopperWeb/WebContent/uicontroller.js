// screen height

$(document).ready(function(){
	$("#maincontent").outerHeight($(window).outerHeight()-$("#header").outerHeight()-$("#footer").outerHeight()+2);
	$("#sidecontent").outerHeight($("#maincontent").outerHeight());
	$("#sidecontent").css("top",$("#header").outerHeight()-1+"px");
	$("#sidecontent2").outerHeight($("#maincontent").outerHeight());
	$("#sidecontent2").css("top",$("#header").outerHeight()-1+"px");
	$("#sidecontent3").outerHeight($("#maincontent").outerHeight());
	$("#sidecontent3").css("top",$("#header").outerHeight()-1+"px");
	$("#helpcontent").outerHeight($("#maincontent").outerHeight());
	$("#helpcontent").css("top",$("#header").outerHeight()-1+"px");
});

var USERID = window.localStorage.getItem("userId");
if(USERID == null){
	initialApp();
}else{
	uiMainContentHtml("mine");
}

function initialApp(){
	$(document).ready(function(){
		$(".tagBtn").attr("disabled", true);
		uiMainContentHtml("welcome");
	});
}

function removeBtnActive(){
	$("#mineBtn").removeClass("ui-btn-active");
	$("#discoverBtn").removeClass("ui-btn-active");
	$("#socialBtn").removeClass("ui-btn-active");
	$("#settingBtn").removeClass("ui-btn-active");
}

function uiMainContentHtml(page){
	$(document).ready(function(){
		removeBtnActive();
		$("#headerbtn").addClass("sr-only");
		$("#headerbtn").removeAttr("onclick");
		$("#headerbtn2").addClass("sr-only");
		$("#headerbtn2").removeAttr("onclick");
		$("#backbtn").addClass("sr-only");
		$("#backbtn").removeAttr("onclick");
		$("#helpbtn").addClass("sr-only");
		$("#sidecontent").css("left","100%");
		$("#sidecontent2").css("left","100%");
		$("#sidecontent3").css("left","100%");
		$("#helpcontent").css("left","-100%");
		switch(page){
			case "welcome":
				$("#headertext").html("Welcome");
				
				var welcomeHtml = '\
					<div class="container">\
					<img class="img-responsive" src="img/LSlogoHeader.png">\
						<div class="row mytopbuffer">\
							<div class="col-xs-12">\
								<div class="thumbnail">\
									<input type="text" class="form-control input-sm" id="lusername" placeholder="username">\
									<input type="password" class="form-control input-sm" id="lpassword" placeholder="password">\
									<button type="button" class="btn btn-primary btn-sm mytopbuffer" style="width:100%;" onclick="login()">Login</button>\
								</div>\
								<div class="thumbnail mytopbuffer">\
									<input type="text" class="form-control input-sm" id="susername" placeholder="username">\
									<input type="password" class="form-control input-sm" id="spassword1" placeholder="password">\
									<input type="password" class="form-control input-sm" id="spassword2" placeholder="confirm password">\
									<button type="button" class="btn btn-primary btn-sm mytopbuffer" style="width:100%;" onclick="signup()">Sign up</button>\
								</div>\
							</div>\
						</div>\
					</div>';
				$("#maincontent").html(welcomeHtml);
				break;
			case "mine":
				$("#headertext").html("Mine");
				$("#mineBtn").addClass("ui-btn-active");
				$("#headerbtn").removeClass("sr-only");
				$("#headerbtn").attr("onclick","launchCreateEvent()");
				
				$("#helpbtn").removeClass("sr-only");
				$("#helpbtn").attr("onclick","mineHelp()");
				
				var getMyEventJson = '{"userId":"'+USERID+'"}';
				
				$.ajax({
					url: '/ShopperWeb/GetMyEventsServlet?json='+getMyEventJson,
					type: 'POST',
					dataType: 'json',
					error: function(err){
						alert("get my events ajax error!");
					},
					success: function(data){
						console.log(data);
						var status = data["status"];
						var message = data["message"];
						if(status == 0){
							alert(message);
						}else{
							var myCreatedEvents = data["myCreatedEvents"];
							var myJoinedEvents = data["myJoinedEvents"];
							
							var createHtml = '';
							
							for(var o in myCreatedEvents){
								var tempEO = myCreatedEvents[o];
								var tempDescription = tempEO["description"];
								var tempDuration = tempEO["duration"];
								var tempEventId = tempEO["eventId"];
								var tempImage = tempEO["image"];
								var tempLocation = tempEO["location"];
								if(tempLocation.length > 15){
									tempLocation = tempLocation.substring(0,15) + "...";
								}
								var tempOrganizer = tempEO["organizer"];
								var tempParticipants = tempEO["participates"];
								var numOfPart = 0;
								if(tempParticipants.length == 1){
									numOfPart = 1;
								}else{
									numOfPart = (tempParticipants.split(",")).length;
								}
								var tempPeopleLimit = tempEO["peopleLimit"];
								var tempPublish = tempEO["publish"];
								var tempStartTime = tempEO["startTime"];
								var tempTag = tempEO["tag"];
								var tempTitle = tempEO["title"];
								
								if(tempTitle.length > 15){
									tempTitle = tempTitle.substring(0,15) + "...";
								}
								
								createHtml += '\
									<div class="thumbnail" onclick="launchEventDetail('+tempEventId+')">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="'+tempImage+'" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-6 col-sm-8">\
												<div class="row mynegtop"><font size="2"><strong>'+tempTitle+'</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small><em>'+tempDuration+' mins</em>&nbsp;&nbsp;'+tempLocation+'</small></font></div>\
											</div>\
											<div class="col-xs-3 col-sm-2 mynegtop partVsCap">\
												<div class="row"><div class="col-md-12">'+numOfPart+'</div></div>\
												<div class="row"><div class="col-md-12"><div class="pull-right">'+tempPeopleLimit+'</div></div></div>\
											</div>\
										</div>\
									</div>';
							}
							
							var joinHtml = '';
							
							for(var o in myJoinedEvents){
								var tempEO = myJoinedEvents[o];
								var tempDescription = tempEO["description"];
								var tempDuration = tempEO["duration"];
								var tempEventId = tempEO["eventId"];
								var tempImage = tempEO["image"];
								var tempLocation = tempEO["location"];
								var tempDistance = tempEO["distance"];
								if(tempDistance.length > 4){
									tempDistance = tempDistance.substring(0,4);
								}
								var tempOrganizer = tempEO["organizer"];
								var tempParticipants = tempEO["participates"];
								var numOfPart = 0;
								if(tempParticipants.length == 1){
									numOfPart = 1;
								}else{
									numOfPart = (tempParticipants.split(",")).length;
								}
								var tempPeopleLimit = tempEO["peopleLimit"];
								var tempPublish = tempEO["publish"];
								var tempStartTime = tempEO["startTime"];
								var tempTag = tempEO["tag"];
								var tempTitle = tempEO["title"];
								
								if(tempTitle.length > 15){
									tempTitle = tempTitle.substring(0,15) + "...";
								}
								
								joinHtml += '\
									<div class="thumbnail" onclick="launchEventDetailForView('+tempEventId+')">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="'+tempImage+'" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-6 col-sm-8">\
												<div class="row mynegtop"><font size="2"><strong>'+tempTitle+'</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small><em>'+tempDuration+' mins</em>&nbsp;&nbsp;'+tempLocation+'</small></font></div>\
											</div>\
											<div class="col-xs-3 col-sm-2 myleftpadding myrightpadding"><div style="padding-top:5px"><font size="2"><strong>'+tempDistance+' km</strong></font></div></div>\
										</div>\
									</div>';
							}
							
							var mineHtml = '\
								<div class="container">\
									<div class="row">\
										<div class="col-xs-6" id="createeventheader">\
											<h4 class="myzerotop"><small style="color:#000000">My Events</small></h4>\
										</div>\
										<div class="col-xs-6" id="createeventexp">\
											<button onclick="expendCreateEvent()" class="btn btn-default btn-xs pull-right"><span id="ceexpBtn" class="glyphicon glyphicon-collapse-down"></span></button>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-12" id="createeventbox">\
											'+createHtml+'\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-6" id="joineventheader">\
											<h4><small style="color:#000000">Joined Events</small></h4>\
										</div>\
										<div class="col-xs-6" id="joineventexp">\
											<h4><button onclick="expendJoinEvent()" class="btn btn-default btn-xs pull-right"><span id="jeexpBtn" class="glyphicon glyphicon-collapse-down"></span></button></h4>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-12" id="joineventbox">\
											'+joinHtml+'\
										</div>\
									</div>\
								</div>';
							$("#maincontent").html(mineHtml);
							$("#createeventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#createeventheader").outerHeight()-16);
							$("#joineventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#joineventheader").outerHeight()-16);
						}
					}
				});
				break;
			case "discover":
				var getDiscoverJson = '{"userId":"'+USERID+'"}';
				$("#headertext").html("Discover");
				$("#discoverBtn").addClass("ui-btn-active");
				
				$("#helpbtn").removeClass("sr-only");
				$("#helpbtn").attr("onclick","discoverHelp()");
				
				$.ajax({
					url: '/ShopperWeb/GetDiscoverEventsServlet?json='+getDiscoverJson,
					type: 'POST',
					dataType: 'json',
					error: function(err){
						alert("discover ajax error!");
					},
					success: function(data){
						console.log(data);
						var status = data["status"];
						var message = data["message"];
						if(status == 0){
							alert(message);
						}else{
							var friendEvents = data["friendEvents"];
							var publiEvents = data["publicEvents"];
							
							var friendEventHtml = '';
							for(var o in friendEvents){
								var tempE = friendEvents[o];
								var teDescription = tempE["description"];
								var teDuration = tempE["duration"];
								var teImage = tempE["image"];
								var teLocation = tempE["location"];
								var teEventId = tempE["eventId"];
								var teParticipates = tempE["participates"];
								var teDistance = tempE["distance"];
								if(teDistance.length > 4){
									teDistance = teDistance.substring(0,4);
								}
								var tePeopleLimit = tempE["peopleLimit"];
								var teTitle = tempE["title"];
								
								if(teTitle.length > 15){
									teTitle = teTitle.substring(0,15) + "...";
								}
								
								friendEventHtml += '\
									<div class="thumbnail" onclick="viewAndJoinEvent('+teEventId+')">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="'+teImage+'" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-6 col-sm-8">\
												<div class="row mynegtop"><font size="2"><strong>'+teTitle+'</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small><em>'+teDuration+' mins</em>&nbsp;&nbsp;'+teLocation+'</small></font></div>\
											</div>\
											<div class="col-xs-3 col-sm-2 myleftpadding myrightpadding"><div style="padding-top:5px"><font size="2"><strong>'+teDistance+' km</strong></font></div></div>\
										</div>\
									</div>';
							}
							var publicEventHtml = '';
							for(var o in publiEvents){
								var tempE = publiEvents[o];
								var teDescription = tempE["description"];
								var teDuration = tempE["duration"];
								var teImage = tempE["image"];
								var teLocation = tempE["location"];
								var teEventId = tempE["eventId"];
								var teParticipates = tempE["participates"];
								var teDistance = tempE["distance"];
								if(teDistance.length > 4){
									teDistance = teDistance.substring(0,4);
								}
								var tePeopleLimit = tempE["peopleLimit"];
								var teTitle = tempE["title"];
								if(teTitle.length > 15){
									teTitle = teTitle.substring(0,15) + "...";
								}
								
								publicEventHtml += '\
									<div class="thumbnail" onclick="viewAndJoinEvent('+teEventId+')">\
										<div class="row">\
											<div class="col-xs-3 col-sm-2"><img src="'+teImage+'" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-6 col-sm-8">\
												<div class="row mynegtop"><font size="2"><strong>'+teTitle+'</strong></font></div>\
												<div class="row mynegtop"><font size="1"><small><em>'+teDuration+' mins</em>&nbsp;&nbsp;'+teLocation+'</small></font></div>\
											</div>\
											<div class="col-xs-3 col-sm-2 myleftpadding myrightpadding"><div style="padding-top:5px"><font size="2"><strong>'+teDistance+' km</strong></font></div></div>\
										</div>\
									</div>';
							}
							var discoverHtml = '\
								<div class="container">\
									<div class="row">\
										<div class="col-xs-12" id="searchbar">\
											<div class="form-horizontal" role="form">\
												<div class="form-group has-feedback"><div class="col-xs-12">\
													<input type="text" class="form-control input-sm" id="discoversearch">\
													<span class="glyphicon glyphicon-search form-control-feedback"></span>\
												</div></div>\
											</div>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-6" id="friendeventheader">\
											<h4><small>Friend Events</small></h4>\
										</div>\
										<div class="col-xs-6" id="createeventexp">\
											<h4><button onclick="expendFriendEvent()" class="btn btn-default btn-xs pull-right"><span id="feexpBtn" class="glyphicon glyphicon-collapse-down"></span></button></h4>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-12" id="friendeventbox">\
											'+friendEventHtml+'\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-6" id="publiceventheader">\
											<h4><small>Public Events</small></h4>\
										</div>\
										<div class="col-xs-6" id="publiceventexp">\
											<h4><button onclick="expendPublicEvent()" class="btn btn-default btn-xs pull-right"><span id="peexpBtn" class="glyphicon glyphicon-collapse-down"></span></button></h4>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-12" id="publiceventbox">\
											'+publicEventHtml+'\
										</div>\
									</div>\
								</div>';
							$("#maincontent").html(discoverHtml);
							$("#friendeventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#friendeventheader").outerHeight()-16);
							$("#publiceventbox").outerHeight((($("#maincontent").outerHeight()-$("#searchbar").outerHeight())/2)-$("#publiceventheader").outerHeight()-16);
						}
					}
				});
				break;
			case "social":
				$("#helpbtn").removeClass("sr-only");
				$("#helpbtn").attr("onclick","socialHelp()");
				
				var getFriendsJson = '{"userId":"'+USERID+'"}';
				
				$.ajax({
					url: '/ShopperWeb/GetMyFriendsServlet?json='+getFriendsJson,
					type: 'POST',
					dataType: 'json',
					error: function(err){
						alert("social ajax error!");
					},
					success: function(data){
						console.log(data);
						var status = data["status"];
						var message = data["message"];
						if(status == 0){
							alert(message);
						}else{
							var myFriends = data["myFriends"];

							$("#headertext").html("Friends");
							$("#socialBtn").addClass("ui-btn-active");
							var friendHtml = '';
							for(var o in myFriends){
								var tfObj = myFriends[o];
								var fName = tfObj["username"];
								var fId = tfObj["userId"];
								var fPoint = tfObj["points"];
								var fPhoto = tfObj["photo"];
								
								friendHtml += '\
									<div class="thumbnail">\
										<div class="row">\
											<div class="col-xs-2 col-sm-2" onclick="viewFriend('+fId+')"><img src="'+fPhoto+'" class="img-responsive img-rounded myimg"></div>\
											<div class="col-xs-3 col-sm-2 myrightpadding" onclick="viewFriend('+fId+')"><div style="padding-top:7px"><font size="4"><span class="glyphicon glyphicon-star"></span><strong>'+fPoint+'</strong></font></div></div>\
											<div class="col-xs-4 col-sm-6 myleftpadding" onclick="viewFriend('+fId+')"><div style="padding-top:7px"><font size="4"><strong>'+fName+'</strong></font></div></div>\
											<div class="col-xs-3 col-sm-2"><div style="padding-top:9px"><button style="font-size:10px;width:52px;" class="btn btn-danger btn-xs pull-right" onclick="removeFriend('+fId+')">Remove</button></div></div>\
										</div>\
									</div>';
							}
							var socialHtml = '\
								<div class="container">\
									<div class="row">\
										<div class="col-xs-12" id="searchbar">\
											<form class="form-horizontal" role="form">\
												<div class="form-group has-feedback"><div class="col-xs-12">\
													<input type="text" class="form-control input-sm" id="socialsearch">\
													<span class="glyphicon glyphicon-search form-control-feedback"></span>\
												</div></div>\
											</form>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-xs-12" id="friendbox">\
											'+friendHtml+'\
										</div>\
									</div>\
								</div>';
							$("#maincontent").html(socialHtml);
							$("#friendbox").outerHeight($("#maincontent").outerHeight()-$("#searchbar").outerHeight()-32);
						}
					}
				});
				break;
			case "setting":
				$("#helpbtn").removeClass("sr-only");
				$("#helpbtn").attr("onclick","settingHelp()");
				
				var getSettingJson = '{"userId":"'+USERID+'"}';
				
				$.ajax({
					url: '/ShopperWeb/GetUserServlet?json='+getSettingJson,
					type: 'POST',
					dataType: 'json',
					error: function(err){
						alert("social ajax error!");
					},
					success: function(data){
						console.log(data);
						var status = data["status"];
						var message = data["message"];
						if(status == 0){
							alert(message);
						}else{
							var tUser = data["user"];
							var tPhoto = tUser["photo"];
							var tEmail = tUser["email"];
							var tUsername = tUser["username"];
							var tPoints = tUser["points"];
							var tPassword = tUser["password"];
							var tCountry = tUser["country"];
							var tPhone = tUser["phone"];
							var tInterests = tUser["interests"];
							var tGood = tUser["good"];
							var tBad = tUser["bad"];
							
							UserImgURL = tPhoto;
							
							$("#headertext").html("Setting");
							$("#settingBtn").addClass("ui-btn-active");
							
							var settingHtml = '\
								<div class="container">\
									<div class="row">\
										<div class="col-xs-12" id="settingbox">\
											<div class="row">\
												<div class="col-xs-12"><font size="4"><span class="glyphicon glyphicon-star"></span><strong>'+tPoints+'</strong></font></div>\
											</div>\
											<div class="row">\
												<div class="col-xs-4">\
													<form class="form-group" enctype="multipart/form-data" method="post" name="setPhoto" id="setPhoto">\
														<label class="thumbnail" for="setUploadLogo" id="forSetUpload">\
															<img src="'+tPhoto+'" class="img-responsive img-rounded mybigimg">\
														</label>\
														<input type="file" class="sr-only" name="file" id="setUploadLogo" onchange="uploadSetPhoto()">\
													</form>\
												</div>\
												<div class="col-xs-8 myleftpadding">\
													<div class="row">\
														<div class="col-xs-9">\
															<input id="settingUsername" class="form-control input-sm" type="text" placeholder="User name" disabled>\
														</div>\
														<div class="col-xs-3 myleftpadding">\
															<button class="btn btn-default btn-sm" onclick="launchUsernameEdit()"><span class="glyphicon glyphicon-edit"></span></button>\
														</div>\
													</div>\
													<div class="row">\
														<div class="col-xs-12">\
															<button id="editPasswordLaunchBtn" onclick="launchEditPassword()" class="btn btn-default btn-sm" style="width: 100%;"><span class="glyphicon glyphicon-edit"></span> Change password</button>\
															<input id="settingPassword1" class="form-control input-sm sr-only" type="password" placeholder="Password">\
															<input id="settingPassword2" class="form-control input-sm sr-only" type="password" placeholder="Confirm Password">\
														</div>\
													</div>\
												</div>\
											</div>\
											<div class="row mytopbuffer">\
												<div class="col-xs-10">\
													<input id="settingPhone" class="form-control input-sm" type="text" placeholder="Phone number" disabled>\
												</div>\
												<div class="col-xs-2 myleftpadding">\
													<button class="btn btn-default btn-sm" onclick="launchPhoneEdit()"><span class="glyphicon glyphicon-edit"></span></button>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-xs-10">\
													<input id="settingEmail" class="form-control input-sm" type="text" placeholder="Email" disabled>\
												</div>\
												<div class="col-xs-2 myleftpadding">\
													<button class="btn btn-default btn-sm" onclick="launchEmailEdit()"><span class="glyphicon glyphicon-edit"></span></button>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-xs-10">\
													<input id="settingCountry" class="form-control input-sm" type="text" placeholder="Country" disabled>\
												</div>\
												<div class="col-xs-2 myleftpadding">\
													<button class="btn btn-default btn-sm" onclick="launchCountryEdit()"><span class="glyphicon glyphicon-edit"></span></button>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-xs-12">\
													<div class="thumbnail mytopbuffer">\
														<h4 class="myzerotop"><small>Interest</small></h4>\
														<div class="row">\
															<div class="col-xs-6">\
																<div class="checkbox myzerotop"><label>\
																	<input id="clothesCB" value="Clothes" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Clothes</font>\
							      								</label></div>\
																<div class="checkbox myzerotop"><label>\
																	<input id="glassesCB" value="Glasses" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Glasses</font>\
																</label></div>\
																<div class="checkbox myzerotop"><label>\
																	<input id="sportsCB" value="Sports" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Sports</font>\
																</label></div>\
																<div class="checkbox myzerotop"><label>\
																	<input id="entertainmentsCB" value="Entertainments" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Entertainments</font>\
																</label></div>\
															</div>\
															<div class="col-xs-6">\
																<div class="checkbox myzerotop"><label>\
																	<input id="beautyCB" value="Beauty" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Beauty</font>\
																</label></div>\
																<div class="checkbox myzerotop"><label>\
																	<input id="healthyCB" value="Healthy Care" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Healthy Care</font>\
																</label></div>\
																<div class="checkbox myzerotop"><label>\
																	<input id="kitchenCB" value="Kitchen" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Kitchen</font>\
																</label></div>\
																<div class="checkbox myzerotop"><label>\
																	<input id="electronicsCB" value="Electronics" type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Electronics</font>\
																</label></div>\
															</div>\
														</div>\
													</div>\
												</div>\
											</div>\
											<div class="row">\
												<div id="settingUpdate" class="col-xs-12 sr-only">\
													<button onclick="settingUpdate()" class="btn btn-sm btn-info mytopbuffer" style="width:100%">Update</button>\
												</div>\
												<div class="col-xs-12">\
													<button onclick="logout()" class="btn btn-sm btn-danger mytopbuffer" style="width:100%">Log out</button>\
												</div>\
											</div>\
										</div>\
									</div>\
								</div>';
							$("#maincontent").html(settingHtml);
							
							$("#settingUsername").val(tUsername);
							$("#settingPassword1").val(tPassword);
							$("#settingPassword2").val(tPassword);
							$("#settingCountry").val(tCountry);
							$("#settingPhone").val(tPhone);
							$("#settingEmail").val(tEmail);
							
							if(tInterests != null){
								if(tInterests.indexOf("Clothes") >= 0){
									$("#clothesCB").prop("checked",true);
								}
								if(tInterests.indexOf("Beauty") >= 0){
									$("#beautyCB").prop("checked",true);
								}
								if(tInterests.indexOf("Glasses") >= 0){
									$("#glassesCB").prop("checked",true);
								}
								if(tInterests.indexOf("Sports") >= 0){
									$("#sportsCB").prop("checked",true);
								}
								if(tInterests.indexOf("Entertainments") >= 0){
									$("#entertainmentsCB").prop("checked",true);
								}
								if(tInterests.indexOf("Electronics") >= 0){
									$("#electronicsCB").prop("checked",true);
								}
								if(tInterests.indexOf("Healthy Care") >= 0){
									$("#healthyCB").prop("checked",true);
								}
								if(tInterests.indexOf("Kitchen") >= 0){
									$("#kitchenCB").prop("checked",true);
								}
							}
							
							$("#settingbox").outerHeight($("#maincontent").outerHeight()-32);
						}
					}
				});
				break;
			default:
				
				break;
		}
	});
}

function mine(){
	uiMainContentHtml("mine");
}

function discover(){
	uiMainContentHtml("discover");
}

function social(){
	uiMainContentHtml("social");
}

function setting(){
	uiMainContentHtml("setting");
}

// ui effect

// global parameters

var VIEWINGEVENT = 0;
