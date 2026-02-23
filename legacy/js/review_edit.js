


	function modalhide() {
		document.getElementById('myModal').style.display='none';
		$('#main').remove();
		$('#videoplayer').remove();
		$('#img01').attr('src', '');
	}

function displayImageForm(id){
	window.jscolor = undefined; 
	$.getScript("/ca/kb/jscolor.min.js", function () { });
	$('div[reviewid="'+id+'"]')[0].children[0].innerHTML='<div class=" col-lg-12 col-md-12 "><div class="form-group col-sm-6"><label class="useThemeWhole"><input type="checkbox" reviewid="'+id+'" class="useTheme" checked> Use Selected Theme</label></div><div class="form-group col-sm-6"><label class="control-label" for="numbers">Themes</label><select class="form-control selectTheme" reviewid="'+id+'" id="selectTheme"><option>-</option></select></div><div class="customsections"><div class="form-group col-sm-6"><label class="control-label" for="focusedInput">Custom Theme Name</label><input class="form-control themename" value=""></div><div class="form-group col-sm-6"><label class="control-label" for="focusedInput">Text Color</label><input class="form-control jscolor kb-color1" id="color1" value=""></div><div class="form-group col-sm-6"><label class="control-label" for="focusedInput">Background Color</label><input class="form-control jscolor kb-color2 " id="color2" value="000000"></div><div class="form-group col-sm-6"><label class="control-label" for="focusedInput">Foreground Color</label><input class="form-control jscolor kb-color3" id="color3" value="000000"></div><div class="form-group col-sm-6"><label class="control-label" for="focusedInput">Icon Color</label><input class="form-control jscolor kb-color4" id="color4" value="000000"></div><div class="form-group col-sm-6"><label class="control-label" for="focusedInput">Add Height</label><input class="form-control extraHeight" value="320"></div><div class="form-group col-sm-6"><label for="select" class="control-label">Rating Icon</label><select class="form-control" id="select"> <option>star</option><option>heart</option></select></div><div class="form-group col-sm-6"><label class="control-label" for="fonts">Header Font Select</label><select class="form-control " id="headFont"><option>roboto</option><option value="robotobold">roboto bold</option><option>lato</option><option>anton</option><option>crimson</option><option>dancing</option><option>inconsolata</option><option>archivoblack</option><option>indie</option><option>josefin</option><option>lobster</option><option>pacifico</option><option>quicksand</option></select></div><div class="form-group col-sm-6"><label class="control-label" for="fonts">Content Font Select</label><select class="form-control " id="contentFont"><option>roboto</option><option value="robotobold">roboto bold</option><option>lato</option><option>anton</option><option>crimson</option><option>dancing</option><option>inconsolata</option><option>archivoblack</option><option>indie</option><option>josefin</option><option>lobster</option><option>pacifico</option><option>quicksand</option></select></div><div class="form-group col-sm-6"><label class="control-label" for="fonts">Footer Font Select</label><select class="form-control " id="selectFont"><option>roboto</option><option value="robotobold">roboto bold</option><option>lato</option><option>anton</option><option>crimson</option><option>dancing</option><option>inconsolata</option><option>archivoblack</option><option>indie</option><option>josefin</option><option>lobster</option><option>pacifico</option><option>quicksand</option></select></div></div></div>';

}


function displayReviewForm(rid, data,options){
	//display form and inputs are filled out
	let createdateDisplay = new Date(data.createdate).format('Y-m-d');
	let createRPSdatDisplay = ( data.rep_date )?( new Date(data.rep_date).format('Y-m-d') ):( '' );
	$('div[reviewid="'+rid+'"]')[0].children[0].innerHTML="<div class='form-group'><label for='fname' class='control-label  col-md-4 '>First Name:</label>\
	<div class='col-md-8'><input type='text'  class='form-control' id='fname' name='fname' value='"+data['fname']+"'></div></div>\
	<div class='form-group'><label for='lname' class='control-label  col-md-4 '>Last Name:</label>\
	<div class='col-md-8'><input type='text'  class='form-control' id='lname' name='lname' value='"+data['lname']+"'></div></div>\
	<div class='form-group'><label for='signature' class='control-label  col-md-4 '>Signature Name:</label>\
	<div class='col-md-8'><input type='text'  class='form-control' id='signature' name='signature' value='"+data['signature']+"'></div></div>\
	<div class='form-group'><label for='email' class='control-label  col-md-4 '>Email:</label>\
	<div class='col-md-8'><input type='text'  class='form-control' id='email' name='email' value='"+data['email']+"'></div></div>\
	<div class='form-group'>\
		<label for='number' class='control-label  col-md-4 '>Phone Number:</label>\
		<div class='col-md-8'><input type='text'  class='form-control' id='number' name='number' value='"+data['number']+"'></div>\
	</div>\
	<div class='form-group'>\
		<label for='datepicker' class='control-label  col-md-4 '>Added Date:</label>\
		<div class='col-md-8'><input type='date'  class='form-control datepicker' id='datepicker' name='datepicker' value='"+createdateDisplay+"'></div>\
	</div>\
	<div class='form-group'>\
		<label for='rpsdatepicker' class='control-label  col-md-4 '>RPS Date:</label>\
		<div class='col-md-8'><input type='date'  class='form-control rpsdatepicker' id='rpsdatepicker' name='rpsdatepicker' value='"+createRPSdatDisplay+"'></div>\
	</div>\
	<div class='form-group'><label for='status' class='control-label  col-md-4 '>Status:</label>\
	<div class='col-md-8'><select class='form-control' id='status' name='status'><option  value='New'>New</option><option  value='Added'>Added</option><option  value='Skipped'>Skipped</option></select></div></div>\
	<div class='form-group'><label for='starcount' class='control-label  col-md-4 '>Star Rating:</label>\
	<div class='col-md-8'><select class='form-control' id='starcount' name='starcount'><option  value='5'>5</option><option  value='4'>4</option><option  value='3'>3</option><option value='2'>2</option><option  value='1'>1</option></select></div></div>\
	<div class='form-group'><label for='clinic' class='control-label  col-md-4 '>Clinic Location:</label>\
	<div class='col-md-8'><select class='form-control' id='clinic' name='clinic'>"+options+"</select></div></div>\
	<div class='form-group'><label for='review' class='control-label  col-md-4 '>Review:</label>\
	<div class='col-md-8'><textarea class='form-control' id='review' name='review' >"+data['review']+"</textarea></div></div>";
}
function displayVideoForm(rid){
	$('div[reviewid="'+rid+'"]')[0].children[0].innerHTML="<div class='form-group'>\
	<label for='Spokesperson' class='control-label  col-md-4 '>Spokesperson:</label>\
	<div class='col-md-8'><select class='form-control' id='Spokesperson' name='Spokesperson'>\
	<option  value='random' selected>Random</option>\
	<option  value='erehab1'>Young Female 1</option>\
	<option  value='erehab2'>Young Female 2</option>\
	<option  value='erehab3'>Young Female 3</option>\
	<option  value='erehab_male_1'>Male 1</option>\
	<option  value='erehab_male_2'>Male 2</option>\
	<option  value='erehab_male_3'>Male 3</option>\
	<option  value='erehab_olderfemale_1'>Older Female 1</option>\
	<option  value='erehab_olderfemale_2'>Older Female 2</option>\
	<option  value='erehab_olderfemale_3'>Older Female 3</option>\
	</select>\
	</div></div>\
	<div class='form-group'><label for='bgmfile' class='control-label  col-md-4 '>BGMfile:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='bgmfile' name='bgmfile'>\
	<option  value='random'>Random</option>\
	<option  value='Looking_on_the_Bright_Side'>Looking on the Bright Side</option>\
	<option  value='A_Bright_Future'>A Bright A_Bright_Future</option>\
	<option  value='Feeling_of_Success'>Feeling of Success</option>\
	</select></div></div>\
	<div class='form-group'><label for='lowerthird' class='control-label  col-md-4 '>Lower Third:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='lowerthird' name='lowerthird'>\
\
	</select></div></div>\
\
	<div class='form-group'><label for='primarycolor' class='control-label  col-md-4 '>Primary Text Color:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='primarycolor' name='primarycolor'>\
	<option  value='white' selected>White</option>\
	<option  value='black'>Black</option>\
	<option  value='grey'>Grey</option>\
	<option  value='purple'>Purple</option>\
	<option  value='lightgrey'>Light Grey</option>\
	<option  value='brown'>Brown</option>\
	<option  value='blue'>Blue</option>\
	<option  value='teal'>Teal</option>\
	<option  value='green'>Green</option>\
	</select></div></div>\
\
	<div class='form-group'><label for='secondarycolor' class='control-label  col-md-4 '>Secondary Text Color:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='secondarycolor' name='secondarycolor'>\
	<option  value='white'>White</option>\
	<option  value='black'>Black</option>\
	<option  value='grey'>Grey</option>\
	<option  value='purple'>Purple</option>\
	<option  value='lightgrey' selected>Light Grey</option>\
	<option  value='brown'>Brown</option>\
	<option  value='blue'>Blue</option>\
	<option  value='teal'>Teal</option>\
	<option  value='green'>Green</option>\
	</select></div></div>\
\
	<div class='form-group'><label for='resolution' class='control-label  col-md-4 '>Resolution:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='resolution' name='resolution'>\
	<option  value='360p' selected>360p</option>\
	<option  value='720p' >720p</option>\
	</select></div></div>";
}



function displayNewVideoForm(rid){
	$(`#review-display-${rid} .panel-body`).append("<div class='form-group'>\
	<label for='Spokesperson' class='control-label  col-md-4 '>Spokesperson:</label>\
	<div class='col-md-8'><select class='form-control' id='Spokesperson' name='Spokesperson'>\
	<option  value='random' selected>Random</option>\
	<option  value='erehab1'>Young Female 1</option>\
	<option  value='erehab2'>Young Female 2</option>\
	<option  value='erehab3'>Young Female 3</option>\
	<option  value='erehab_male_1'>Male 1</option>\
	<option  value='erehab_male_2'>Male 2</option>\
	<option  value='erehab_male_3'>Male 3</option>\
	<option  value='erehab_olderfemale_1'>Older Female 1</option>\
	<option  value='erehab_olderfemale_2'>Older Female 2</option>\
	<option  value='erehab_olderfemale_3'>Older Female 3</option>\
	</select>\
	</div></div>\
	<div class='form-group'><label for='bgmfile' class='control-label  col-md-4 '>BGMfile:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='bgmfile' name='bgmfile'>\
	<option  value='random'>Random</option>\
	<option  value='Looking_on_the_Bright_Side'>Looking on the Bright Side</option>\
	<option  value='A_Bright_Future'>A Bright A_Bright_Future</option>\
	<option  value='Feeling_of_Success'>Feeling of Success</option>\
	</select></div></div>\
	<div class='form-group'><label for='lowerthird' class='control-label  col-md-4 '>Lower Third:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='lowerthird' name='lowerthird'>\
\
	</select></div></div>\
\
	<div class='form-group'><label for='primarycolor' class='control-label  col-md-4 '>Primary Text Color:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='primarycolor' name='primarycolor'>\
	<option  value='white' selected>White</option>\
	<option  value='black'>Black</option>\
	<option  value='grey'>Grey</option>\
	<option  value='purple'>Purple</option>\
	<option  value='lightgrey'>Light Grey</option>\
	<option  value='brown'>Brown</option>\
	<option  value='blue'>Blue</option>\
	<option  value='teal'>Teal</option>\
	<option  value='green'>Green</option>\
	</select></div></div>\
\
	<div class='form-group'><label for='secondarycolor' class='control-label  col-md-4 '>Secondary Text Color:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='secondarycolor' name='secondarycolor'>\
	<option  value='white'>White</option>\
	<option  value='black'>Black</option>\
	<option  value='grey'>Grey</option>\
	<option  value='purple'>Purple</option>\
	<option  value='lightgrey' selected>Light Grey</option>\
	<option  value='brown'>Brown</option>\
	<option  value='blue'>Blue</option>\
	<option  value='teal'>Teal</option>\
	<option  value='green'>Green</option>\
	</select></div></div>\
\
	<div class='form-group'><label for='resolution' class='control-label  col-md-4 '>Resolution:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='resolution' name='resolution'>\
	<option  value='360p' selected>360p</option>\
	<option  value='720p' >720p</option>\
	</select></div></div>");
}





function getReviewsDisplay(id){
	$.ajax({
		url: '/ca/page/img_gen/getReviews.php',
		type: 'POST',
		dataType:'json',
		data: {
			rid: id
		},
		complete:function(s){
			var g=0;
			s = JSON.parse(s.responseText);

			if(s.data['status'] == "Added"){
				$("#skipFeed[reviewid ='"+id+"']").removeClass('hidden');
				$("#addToFeed[reviewid ='"+id+"']").addClass('hidden');
				$('.reviewsDisplay[reviewid="'+id+'"]').css('background', '#1E993D');
			}else if(s.data['status'] == "Skipped"){
				$("#addToFeed[reviewid ='"+id+"']").removeClass('hidden');
				$("#skipFeed[reviewid ='"+id+"']").addClass('hidden');
				$('.reviewsDisplay[reviewid="'+id+'"]').css('background', '#FF4136');
			}else{
				$("#addToFeed[reviewid ='"+id+"']").removeClass('hidden');
				$("#skipFeed[reviewid ='"+id+"']").removeClass('hidden');
				$('.reviewsDisplay[reviewid="'+id+'"]').css('background', 'whitesmoke');
			}
			redisplayContent(id,s.data)
		}
	})
}

function redisplayContent(id,data){
	let g = 0;
	let theDate,tempDate,rpsDate;
	if ( data.rep_date != ""  ) {
		tempDate = new Date(data.createdate).format('M d,y');
		rpsDate = new Date(data.rep_date).format('M d,y');
		theDate = `<span class='label label-primary addedFromRPS'>Added from RPS : ${tempDate}</span> ${rpsDate}`;
	}else{
		theDate = new Date(data.createdate).format('M d,y');
	}
	//displays content
	$('.reviewsDisplay[reviewid="'+id+'"] .innerLeftSide').empty();
	$('.reviewsDisplay[reviewid="'+id+'"] .innerLeftSide').append('<div class="insideLeft" style="display: flex; justify-content: space-between; flex-wrap: wrap; ">');
	$('.reviewsDisplay[reviewid="'+id+'"] .innerLeftSide .insideLeft').append('<div class="stars'+id+'" style="color: yellow; text-align: left; flex: 1 50%;">');
	while(data['stars']>g++){
		$('.reviewsDisplay[reviewid="'+id+'"] .innerLeftSide .insideLeft .stars'+id+' ').append('<i class="fa fa-star" aria-hidden="true"></i>');
	}
	$('.reviewsDisplay[reviewid="'+id+'"] .innerLeftSide .insideLeft')
		.append('<div style="text-align: right; flex: 1 50%;">'+theDate+'</div>')
		.append('<div style="text-align: left; flex: 1 50%;" class="status'+data['status']+'">'+data['status']+'</div>')
		.append('<div style="text-align: right; flex: 1 50%;">'+data['patname']+'</div>')
		.append('<div style="text-align: left; flex: 1 50%;">'+data['email']+'</div>')
		.append('<div style="text-align: right; flex: 1 50%;">'+data['location']+'</div>')
		.append('<div style="text-align: left; flex: 1 50%;  background: rgba(240, 248, 255, 0.76); padding: 10px; margin: 10px 0;">Review:<br>'+data['edited_review']+'<div style="text-align: right; font-style: italic;">'+data['signature']+'</div></div>');
return false;
}
