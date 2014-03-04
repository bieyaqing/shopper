// screan height

$(document).ready(function(){
	$("#maincontent").outerHeight($(window).outerHeight()-$("#header").outerHeight()-$("#footer").outerHeight()+2);
	$("#sidecontent").outerHeight($("#maincontent").outerHeight());
	$("#sidecontent").css("top",$("#header").outerHeight()-1+"px");
	$("#sidecontent2").outerHeight($("#maincontent").outerHeight());
	$("#sidecontent2").css("top",$("#header").outerHeight()-1+"px");
	$("#sidecontent3").outerHeight($("#maincontent").outerHeight());
	$("#sidecontent3").css("top",$("#header").outerHeight()-1+"px");
});

var USERID = window.localStorage.getItem("userId");
if(USERID == null){
	initialApp();
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
		$("#sidecontent").css("left","100%");
		$("#sidecontent2").css("left","100%");
		$("#sidecontent3").css("left","100%");
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
									<input type="password" class="form-control input-sm" id="lusername" placeholder="password">\
									<button type="button" class="btn btn-primary btn-sm mytopbuffer" style="width:100%" onclick="login()">Login</button>\
								</div>\
								<div class="thumbnail mytopbuffer">\
									<input type="text" class="form-control input-sm" id="susername" placeholder="username">\
									<input type="password" class="form-control input-sm" id="spassword1" placeholder="password">\
									<input type="password" class="form-control input-sm" id="spassword2" placeholder="confirm password">\
									<button type="button" class="btn btn-primary btn-sm mytopbuffer" style="width:100%" onclick="signup()">Sign up</button>\
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
				
				var createHtml = '';
				for(var i = 1;i <= 6; i ++){
					createHtml += '\
						<div class="thumbnail" onclick="launchEventDetail('+i+')">\
							<div class="row">\
								<div class="col-xs-3 col-sm-2"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
								<div class="col-xs-6 col-sm-8">\
									<div class="row mynegtop"><font size="2"><strong>Uniqlo Socks</strong></font></div>\
									<div class="row mynegtop"><font size="1"><small><em>29 mins</em>&nbsp;&nbsp;UNIQL ION</small></font></div>\
								</div>\
								<div class="col-xs-3 col-sm-2 mynegtop partVsCap">\
									<div class="row"><div class="col-md-12">'+i+'</div></div>\
									<div class="row"><div class="col-md-12"><div class="pull-right">5</div></div></div>\
								</div>\
							</div>\
						</div>';
				}
				var joinHtml = '';
				for(var i = 1;i <= 5; i ++){
					joinHtml += '\
						<div class="thumbnail" onclick="launchEventDetailForView('+i+')">\
							<div class="row">\
								<div class="col-xs-3 col-sm-2"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
								<div class="col-xs-6 col-sm-8">\
									<div class="row mynegtop"><font size="2"><strong>Uniqlo Socks</strong></font></div>\
									<div class="row mynegtop"><font size="1"><small><em>29 mins</em>&nbsp;&nbsp;UNIQL ION</small></font></div>\
								</div>\
								<div class="col-xs-3 col-sm-2"><div style="padding-top:5px"><font size="2"><strong>'+i+' km</strong></font></div></div>\
							</div>\
						</div>';
				}
				var mineHtml = '\
					<div class="container">\
						<div class="row">\
							<div class="col-xs-6" id="createeventheader">\
								<h4 class="myzerotop"><small>My Create Events</small></h4>\
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
								<h4><small>My Join Events</small></h4>\
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
				break;
			case "discover":
				$("#headertext").html("Discover");
				$("#discoverBtn").addClass("ui-btn-active");
				
				var friendEventHtml = '';
				for(var i = 1;i <= 4; i ++){
					friendEventHtml += '\
						<div class="thumbnail" onclick="viewAndJoinEvent('+i+')">\
							<div class="row">\
								<div class="col-xs-3 col-sm-2"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
								<div class="col-xs-6 col-sm-8">\
									<div class="row mynegtop"><font size="2"><strong>Uniqlo Socks</strong></font></div>\
									<div class="row mynegtop"><font size="1"><small><em>29 mins</em>&nbsp;&nbsp;UNIQL ION</small></font></div>\
								</div>\
								<div class="col-xs-3 col-sm-2"><div style="padding-top:5px"><font size="2"><strong>'+i+' km</strong></font></div></div>\
							</div>\
						</div>';
				}
				var publicEventHtml = '';
				for(var i = 1;i <= 5; i ++){
					publicEventHtml += '\
						<div class="thumbnail" onclick="viewAndJoinEvent('+i+')">\
							<div class="row">\
								<div class="col-xs-3 col-sm-2"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
								<div class="col-xs-6 col-sm-8">\
									<div class="row mynegtop"><font size="2"><strong>Uniqlo Socks</strong></font></div>\
									<div class="row mynegtop"><font size="1"><small><em>29 mins</em>&nbsp;&nbsp;UNIQL ION</small></font></div>\
								</div>\
								<div class="col-xs-3 col-sm-2"><div style="padding-top:5px"><font size="2"><strong>'+i+' km</strong></font></div></div>\
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
				break;
			case "social":
				$("#headertext").html("Friends");
				$("#socialBtn").addClass("ui-btn-active");
				var friendHtml = '';
				for(var i=1;i<=2;i++){
					friendHtml += '\
						<div class="thumbnail">\
							<div class="row">\
								<div class="col-xs-2 col-sm-2" onclick="viewUser('+i+')"> <img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
								<div class="col-xs-2 col-sm-2" onclick="viewUser('+i+')"><div class="thumbnail crown" style="text-align:center"><font size="4"><strong>1'+i+'</strong></font></div></div>\
								<div class="col-xs-4 col-sm-6" onclick="viewUser('+i+')"><div style="padding-top:7px"><font size="4"><strong>Richard</strong></font></div></div>\
								<div class="col-xs-4 col-sm-2"><div style="padding-top:9px"><button style="font-size:10px;width:52px;" class="btn btn-warning btn-xs pull-right" onclick="rejectUser('+i+')">Reject</button></div></div>\
							</div>\
						</div>';
				}
				for(var i=1;i<=6;i++){
					friendHtml += '\
						<div class="thumbnail">\
							<div class="row">\
								<div class="col-xs-2 col-sm-2" onclick="viewFriend('+i+')"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
								<div class="col-xs-2 col-sm-2" onclick="viewFriend('+i+')"><div class="thumbnail crown" style="text-align:center"><font size="4"><strong>1'+i+'</strong></font></div></div>\
								<div class="col-xs-4 col-sm-6" onclick="viewFriend('+i+')"><div style="padding-top:7px"><font size="4"><strong>Richard</strong></font></div></div>\
								<div class="col-xs-4 col-sm-2"><div style="padding-top:9px"><button style="font-size:10px;width:52px;" class="btn btn-danger btn-xs pull-right" onclick="removeUser('+i+')">Remove</button></div></div>\
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
				break;
			case "setting":
				$("#headertext").html("Setting");
				$("#settingBtn").addClass("ui-btn-active");
				
				var settingHtml = '\
					<div class="container">\
						<div class="row">\
							<div class="col-xs-12" id="settingbox">\
								<div class="row">\
									<div class="col-xs-4">\
										<div class="thumbnail">\
											<img src="img/photo01.png" class="img-responsive img-rounded mybigimg">\
										</div>\
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
												<button class="btn btn-default btn-sm" style="width: 100%;"><span class="glyphicon glyphicon-edit"></span> Change password</button>\
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
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Clothes</font>\
				      								</label></div>\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Glasses</font>\
													</label></div>\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Sports</font>\
													</label></div>\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Entertainment</font>\
													</label></div>\
												</div>\
												<div class="col-xs-6">\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Beauty</font>\
													</label></div>\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Healthy Care</font>\
													</label></div>\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Kitchen</font>\
													</label></div>\
													<div class="checkbox myzerotop"><label>\
														<input type="checkbox" onchange="launchSettingUpdateBtn()"><font size="2">Electronic</font>\
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
				$("#settingbox").outerHeight($("#maincontent").outerHeight()-32);
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
