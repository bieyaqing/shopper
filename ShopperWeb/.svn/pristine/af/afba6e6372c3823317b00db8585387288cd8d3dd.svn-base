function launchUsernameEdit(){
	$("#settingUsername").prop("disabled", false);
	$("#settingUpdate").removeClass("sr-only");
}

function launchPhoneEdit(){
	$("#settingPhone").prop("disabled", false);
	$("#settingUpdate").removeClass("sr-only");
}

function launchEmailEdit(){
	$("#settingEmail").prop("disabled", false);
	$("#settingUpdate").removeClass("sr-only");
}

function launchCountryEdit(){
	$("#settingCountry").prop("disabled", false);
	$("#settingUpdate").removeClass("sr-only");
}

function launchSettingUpdateBtn(){
	$("#settingUpdate").removeClass("sr-only");
}

var UserImgURL;
function uploadSetPhoto(){
	$(document).ready(function() {
		var fd = new FormData(document.getElementById("setPhoto"));
		$.ajax({
			url : '/ShopperWeb/FileUploadServlet?json={"fileType":"image,jpeg,jpg,png","uploadDirectory":"org_files","folderName":"logo"}',
			type : "POST",
			data : fd,
			dataType: 'json',
			processData : false,
			contentType : false,
			error : function(err) {
				alert("upload fail");
			},
			success : function(data) {
				console.log(data);
				var status = data["status"];
				var message = data["message"];
				if(status==0){
					alert("upload fail");
				}else{
					var fileUrl = data["fileUrl"];
					UserImgURL = fileUrl;
					$("#forSetUpload").html('<img src="'+UserImgURL+'" class="img-responsive img-rounded mybigimg">');
				}
			}
		});
	});
	$("#settingUpdate").removeClass("sr-only");
}

function launchEditPassword(){
	$("#settingPassword1").removeClass("sr-only");
	$("#settingPassword2").removeClass("sr-only");
	$("#editPasswordLaunchBtn").addClass("sr-only");
	$("#settingUpdate").removeClass("sr-only");
}

function settingUpdate(){
	var userId = window.localStorage.getItem("userId");
	var sUsername = $("#settingUsername").val();
	var sPassword1 = $("#settingPassword1").val();
	var sPassword2 = $("#settingPassword2").val();
	var sPhone = $("#settingPhone").val();
	var sEmail = $("#settingEmail").val();
	var sCountry = $("#settingCountry").val();
	var sPhoto = UserImgURL;
	var sInterest = '';
	if($("#clothesCB").prop("checked")){
		sInterest += "Clothes,";
	}
	if($("#beautyCB").prop("checked")){
		sInterest += "Beauty,";
	}
	if($("#glassesCB").prop("checked")){
		sInterest += "Glasses,";
	}
	if($("#sportsCB").prop("checked")){
		sInterest += "Sports,";
	}
	if($("#entertainmentsCB").prop("checked")){
		sInterest += "Entertainments,";
	}
	if($("#electronicsCB").prop("checked")){
		sInterest += "Electronics,";
	}
	if($("#healthyCB").prop("checked")){
		sInterest += "Healthy Care,";
	}
	if($("#kitchenCB").prop("checked")){
		sInterest += "Kitchen,";
	}
	
	if(sInterest.length > 1){
		sInterest = sInterest.substring(0, sInterest.length - 1);
	}
	
	if(sPassword1 != sPassword2){
		alert("Confirm your passwords:)");
	}else{
		var updateUserJson = '{"userId":"'+userId+'","username":"'+sUsername+'","password":"'+sPassword1+'","phone":"'+sPhone+'","email":"'+sEmail+'","country":"'+sCountry+'","interest":"'+sInterest+'","photo":"'+sPhoto+'"}';
		updateUserJson = encodeURIComponent(updateUserJson);
		$(document).ready(function(){
			$.ajax({
				url: '/ShopperWeb/UpdateUserServlet?json='+updateUserJson,
				type: 'POST',
				dataType: 'json',
				error: function(err){
					alert("update user ajax error!");
				},
				success: function(data){
					//success
//					$("#settingUsername").prop("disabled", true);
//					$("#settingPhone").prop("disabled", true);
//					$("#settingEmail").prop("disabled", true);
//					$("#settingCountry").prop("disabled", true);
//					$("#settingPassword1").addClass("sr-only");
//					$("#settingPassword2").addClass("sr-only");
//					$("#editPasswordLaunchBtn").removeClass("sr-only");
//					$("#settingUpdate").addClass("sr-only");
					uiMainContentHtml("setting");
				}
			});
		});
	}
}