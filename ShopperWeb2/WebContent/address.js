function chooseAddress(){
	$(document).ready(function(){
		var addressHtml = '\
			<div class="thumbnail" onclick="updateAddress(1)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-1">Kopitiam</font></div><div class="sr-only" id="cor-1">1.297777,103.850143</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">#01-03 Manulife Center, Singapore</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(2)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-2">Subway</font></div><div class="sr-only" id="cor-2">1.297133,103.849414</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">#01-62 School of Information Systems</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(3)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-3">The Coffee Bean & Tea Leaf</font></div><div class="sr-only" id="cor-3">1.297519,103.850315</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">#01-02B, Manulife Center, Singapore</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(4)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-4">Tea Party</font></div><div class="sr-only" id="cor-4">1.297691,103.848641</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">#01-75 SMU School of Economics</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(5)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-5">RamenPlay</font></div><div class="sr-only" id="cor-5">1.298377,103.849371</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">#01-02 Manulife Center, Singapore</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(6)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-6">Koufu</font></div><div class="sr-only" id="cor-6">1.296833,103.849886</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">SMU Concourse, Singapore</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(7)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-7">Pick and Bite</font></div><div class="sr-only" id="cor-7">1.296618,103.849886</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">SMU LKS Library</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(8)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-8">Cheers</font></div><div class="sr-only" id="cor-8">1.29473,103.849457</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">#01-03, Stamford Court, Singapore</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(9)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-9">Seven Eleven</font></div><div class="sr-only" id="cor-9">1.297219,103.849886</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">Brasbasah MRT Station</font></div>\
				</div>\
			</div>\
			<div class="thumbnail" onclick="updateAddress(10)">\
				<div class="row">\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="2" id="add-10">Rendezvous Hotel Singapore</font></div><div class="sr-only" id="cor-10">1.298463,103.849371</div>\
					<div class="col-xs-12 col-sm-12 mynegtop"><font size="1" color="#666666" id="add-1">9 Bras Basah Road, Singapore</font></div>\
				</div>\
			</div>';
			
		
		var addressContainerHtml = '\
			<div class="container">\
				<div class="row">\
					<div class="col-xs-12" id="addressBox">\
						'+addressHtml+'\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-xs-12">\
						<font size="1" color="#666666">Please enter your current address if you cannot locate from the above list</font>\
					</div>\
					<div class="col-xs-9">\
						<input type="text" id="openAddress" class="form-control input-sm">\
					</div>\
					<div class="col-xs-3 myleftpadding">\
						<button onclick="confirmCustAdd()" class="btn btn-sm btn-default">Confirm</button>\
					</div>\
				</div>\
			</div>';
		
//		var addressContainerHtml = '\
//			<div class="container">\
//				<div class="row">\
//					<div class="col-xs-12" id="addressBox">\
//						'+addressHtml+'\
//					</div>\
//				</div>\
//			</div>';
		
		
		
		$("#sidecontent2").html(addressContainerHtml);
		$("#sidecontent2").css("left","0");
		$("#backbtn").attr("onclick","backToCreateEvent()");
	});
}

function backToCreateEvent(){
	$("#sidecontent2").css("left","100%");
	$("#backbtn").attr("onclick","backToMine()");
}

function updateAddress(id){
	var address = $("#add-"+id).html();
	var cor = $("#cor-"+id).html();
	var newContent = address + " " + cor;
	$("#myCor").html(cor);
	$("#myAddress").html(address);
	if(newContent.length > 35){
		newContent = newContent.substring(0, 35) + "...";
	}
	$("#choseLocationBtn").html(newContent);
	backToCreateEvent();
}

function confirmCustAdd(){
	var address = $("#openAddress").val();
	if(address.length == 0){
		alert("Cannot leave address empty!");
	}else{
		var cor = "1.296661,103.849886";
		
		var newContent = address + " " + cor;
		$("#myCor").html(cor);
		$("#myAddress").html(address);
		if(newContent.length > 35){
			newContent = newContent.substring(0, 35) + "...";
		}
		$("#choseLocationBtn").html(newContent);
		backToCreateEvent();
	}
}

