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
	var userHtml = '';
	for(var i = 1; i <= 3; i++){
		userHtml += '\
			<div class="thumbnail">\
				<div class="row">\
					<div class="col-xs-2 col-sm-2" onclick="viewUserFromMine('+i+')"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
					<div class="col-xs-2 col-sm-2" onclick="viewUserFromMine('+i+')"><div class="thumbnail crown" style="text-align:center"><font size="4"><strong>1'+i+'</strong></font></div></div>\
					<div class="col-xs-4 col-sm-6" onclick="viewUserFromMine('+i+')"><div style="padding-top:7px"><font size="4"><strong>Richard</strong></font></div></div>\
					<div class="col-xs-4 col-sm-2"><div style="padding-top:9px"><button style="font-size:10px;width:52px;" class="btn btn-success btn-xs pull-right">Add</button></div></div>\
				</div>\
			</div>';
	}
	var participantsHtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12" id="friendbox">\
					'+userHtml+'\
				</div>\
			</div>\
		</div>';
	$("#sidecontent2").html(participantsHtml);
	launchParticipantBox();
}

function viewParticipants2(id){
	var userHtml = '';
	for(var i = 1; i <= 3; i++){
		userHtml += '\
			<div class="thumbnail" onclick="viewUserFromDiscover('+i+')">\
				<div class="row">\
					<div class="col-xs-2 col-sm-2"><img src="img/photo0'+i+'.png" class="img-responsive img-rounded myimg"></div>\
					<div class="col-xs-2 col-sm-2"><div class="thumbnail crown" style="text-align:center"><font size="4"><strong>1'+i+'</strong></font></div></div>\
					<div class="col-xs-4 col-sm-6"><div style="padding-top:7px"><font size="4"><strong>Richard</strong></font></div></div>\
					<div class="col-xs-4 col-sm-2"><div style="padding-top:9px" class="sr-only"><button style="font-size:10px;width:52px;" class="btn btn-success btn-xs pull-right">Add</button></div></div>\
				</div>\
			</div>';
	}
	var participantsHtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12" id="friendbox">\
					'+userHtml+'\
				</div>\
			</div>\
		</div>';
	$("#sidecontent2").html(participantsHtml);
	launchParticipantBox2();
}