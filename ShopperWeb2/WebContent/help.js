function mineHelp(){
	var mhhtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/mine01.png" class="img-responsive"/>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/mine02.png" class="img-responsive"/>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/mine03.png" class="img-responsive"/>\
				</div>\
			</div>\
		</div>';
	
	$("#helpcontent").html(mhhtml);
	
	$("#headertext").html("Mine Help");
	
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html("Exit");
	$("#headerbtn2").attr("onclick","exitMineHelp()");
	
	$("#helpbtn").addClass("sr-only");
	
	$("#helpcontent").css("left","0");
}

function exitMineHelp(){
	$("#helpcontent").css("left","-100%");
	uiMainContentHtml("mine");
}

function discoverHelp(){
	var dhhtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/discover01.png" class="img-responsive"/>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/discover02.png" class="img-responsive"/>\
				</div>\
			</div>\
		</div>';
	
	$("#helpcontent").html(dhhtml);
	
	$("#headertext").html("Discover Help");
	
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html("Exit");
	$("#headerbtn2").attr("onclick","exitDiscoverHelp()");
	
	$("#helpbtn").addClass("sr-only");
	
	$("#helpcontent").css("left","0");
}

function exitDiscoverHelp(){
	$("#helpcontent").css("left","-100%");
	uiMainContentHtml("discover");
}

function socialHelp(){
	var fhhtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/friends01.png" class="img-responsive"/>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/friends02.png" class="img-responsive"/>\
				</div>\
			</div>\
		</div>';
	
	$("#helpcontent").html(fhhtml);
	
	$("#headertext").html("Friends Help");
	
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html("Exit");
	$("#headerbtn2").attr("onclick","exitSocialHelp()");
	
	$("#helpbtn").addClass("sr-only");
	
	$("#helpcontent").css("left","0");
}

function exitSocialHelp(){
	$("#helpcontent").css("left","-100%");
	uiMainContentHtml("social");
}

function settingHelp(){
	var shhtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<img src="img/help/setting.png" class="img-responsive"/>\
				</div>\
			</div>\
		</div>';
	
	$("#helpcontent").html(shhtml);
	
	$("#headertext").html("Setting Help");
	
	$("#headerbtn2").removeClass("sr-only");
	$("#headerbtn2").html("Exit");
	$("#headerbtn2").attr("onclick","exitSettingHelp()");
	
	$("#helpbtn").addClass("sr-only");
	
	$("#helpcontent").css("left","0");
}

function exitSettingHelp(){
	$("#helpcontent").css("left","-100%");
	uiMainContentHtml("setting");
}

