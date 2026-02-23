function modalhide() {
    document.getElementById('myModal').style.display = 'none';
    $('#main').remove();
    $('#videoplayer').remove();
    $('#img01').attr('src', '');
}

function addSkipper(skipadd, id, theData) {
    let arrData;
    let skipaddcolor = '#808080';
    theData.tooltip('destroy')
    console.log(theData)
    if (skipadd == 'Skip') {
        theData.parent().parent().css('border', `solid 3px ${skipaddcolor}`);
        theData.parent().css('background', `${skipaddcolor}`);
        arrData = {'rid': id, 'skipadd': skipadd};
        theData.after("<span class='addSkip' data-toggle='tooltip' data-placement='bottom' title='Click to Add' data-original-title='Click to Add' style='cursor:pointer; padding:0 5px; display:inline-block;'><i class='fa fa-plus-circle green_text '></i></span>").remove()
    } else {
        skipaddcolor = '#1E993D';
        theData.parent().parent().css('border', `solid 3px ${skipaddcolor}`);
        theData.parent().css('background', `${skipaddcolor}`);
        arrData = {'rid': id, 'skipadd': skipadd};
        theData.after("<span class='addSkip' data-toggle='tooltip' data-placement='bottom' title='Click to Skip' data-original-title='Click to Add' style='cursor:pointer; padding:0 5px; display:inline-block;'><i class='fa fa-minus-circle red_text '></i></span>").remove()
    }
    // console.log(arrData);
    $('.addSkip').tooltip()
    $.ajax({
        url: 'https://ptclinic.biz/ca/docs/api/setReviewEdit.php',
        type: 'POST',
        dataType: 'json',
        data: arrData,
        complete: function (s) {
            console.log(s);
        }
    })
}

function createImage(id, theData) {
    let arrData;
    let skipaddcolor = '#808080';
    theData.tooltip('destroy')
    arrData = {'rid': id};
    $.ajax({
        url: 'https://ptclinic.biz/ca/page/img_gen/createImg.php',
        type: 'POST',
        dataType: 'json',
        data: arrData,
        complete: function (s) {
            console.log(s);
            s = JSON.parse(s.responseText);
            console.log("createImage "+s);
            theData.after(`<span>${s[2]}</span><button type='button' class='btn btn-primary btn-xs review-image-view m-l-xs' href='https://ptclinic.com/review_images/${s[0]}'><i class='fa fa-fw fa-picture-o ' ></i></button>`).remove()
            $('.review-image-view').tooltip()
        }
    })
}

function reviewEditBody(id, theData, body) {
    let arrData;
    let skipaddcolor = '#808080';
    // theData.tooltip('destroy')
    // body=encodeURI(body);
    arrData = {'rid': id, 'bod': body};
    $.ajax({
        url: 'https://ptclinic.biz/ca/docs/api/setReviewEdit.php',
        type: 'POST',
        dataType: 'json',
        data: arrData,
        complete: function (s) {
            console.log(s);
            // s=JSON.parse(s.responseText);
            theData.parent().children('textarea').remove()
            theData.after(`<div class='panel-body review-display-body' style='cursor:pointer; '>${body}</div>`).remove()
            $('.review-image-view').tooltip()
        }
    })
}

function countReviews(textHere="disReviewCount") {
    let coount = $('div[id^="review-display-"]:visible').length;
    $('.' + textHere).text(`${coount}`)
    console.log(coount)
}

function countAddedPRS(textHere="disReviewPRSCount") {
    let coount = 0;
    let coount2 = 0;
    let coount3 = 0;
    var allReviews = $('[id^="review-display-"]');
    if (textHere == 'from') {
        allReviews.each(function (index, el) {
            var resText = el.getAttribute('data');
            var pars = JSON.parse(resText);
            if (pars[textHere] == 1) {
                // if (!el.classList.contains('hidden')){
                // el.classList.add('hidden')
                coount += 1;
                // }
            } else {
                coount2 += 1;
            }
        });
        $('.disReviewPRSCount').text(coount2)
        $('.disReviewRPSCount').text(coount)
    } else {
        if (textHere == 'type') {
            allReviews.each(function (index, el) {
                var resText = el.getAttribute('data');
                var pars = JSON.parse(resText);
                if (pars[textHere] == 'Added') {
                    // if (!el.classList.contains('hidden')){
                    // el.classList.add('hidden')
                    coount += 1;
                    // }
                } else {
                    if (pars[textHere] == 'Skipped') {
                        coount2 += 1;
                    } else {
                        coount3 += 1;
                    }
                }
            });
            $('.disReviewSkippedCount').text(coount2)
            $('.disReviewNewCount').text(coount3)
            $('.disReviewAddedCount').text(coount)
        } else {
            allReviews.each(function (index, el) {
                var resText = el.getAttribute('data');
                var pars = JSON.parse(resText);
                if (pars[textHere] == 1) {
                    // if (!el.classList.contains('hidden')){
                    // el.classList.add('hidden')
                    coount += 1;
                    // }
                }
            });
        }
    }
    if (textHere == "disReviewPRSCount") {
        coount = $('.addedFromPRS').length
    } else {
        if (textHere == "disReviewRPSCount") {
            coount = $('.addedFromRPS').length
        } else {
            if (textHere == "disReviewAddedCount") {
                coount = $('.statusAdded').length
            } else {
                if (textHere == "disReviewNewCount") {
                    coount = $('.statusNew').length
                } else {
                    if (textHere == "disReviewSkippedCount") {
                        coount = $('.statusSkipped').length
                    }
                }
            }
        }
    }
    $('.' + textHere).text(coount)
}

function changeVideo(spot, v, id) {
    // global practice_id;
    let arr = {}, num = 0;
    // console.log(event)
    // console.log(v)
    // console.log(type)
    // console.log(id)
    // console.log(l)
    // if(event.type='change'){
    if (v > "2000-00-00") {
        console.log("Registered video_release_date @ " + v);
        $(spot).html("Video Made");
        $(`#review-edit-${id}`).parent().css('width', '39px').after(`<button type='button' class='btn btn-primary btn-xs viewMadeVideo disabled' data-toggle='tooltip' data-placement='bottom' title='Scheduled Video' reviewid=' {$id} ' data='$params' status='$stat'><i class='fa fa-fw fa-calendar-check-o'></i></button>`).remove()
        $('.viewMadeVideo').tooltip()
        // 	$(`#review-edit-${id}`).remove()
        arr = {'pid': practice_id, 'rid': id, 'date': v + " 10:00:00"};
        $.ajax({
            url: 'https://ptclinic.biz/ca/page/video_gen/addVideo.php',
            type: 'POST',
            dataType: 'json',
            data: arr,
            complete: function (date) {
                console.log(date)
            }
        })
        // }
    }
}


function changeName2(event, v, id, type, l='na') {
    let arr = {}, num = 0;
    console.log(event)
    console.log(v)
    console.log(type)
    console.log(id)
    console.log(l)
    if (event.type = 'change') {
        $(`#review-edit-${id}`).parent().parent().children('.review-display-location').text(v).show('300')
        $(`#review-edit-${id}`).remove()
        arr = {'rid': id, 'lid': l, 'location': v};
        $.ajax({
            url: 'https://ptclinic.biz/ca/docs/api/setReviewEdit.php',
            type: 'POST',
            dataType: 'json',
            data: arr,
            complete: function (s) {
                console.log(s)
            }
        })
    }
}

function changeName3(event, v, id, type) {
    let arr = {}, num = 0;
    if (type == 'date') {
        num = 3;
        var vt = v.split('-');
        vt[2] = String(Number(vt[2]));
        vt[1] = String(Number(vt[1]));
        vt = vt.join('-');
        console.log(vt)
        var vv = new Date(vt).format('M d,y');
        console.log(v)
        console.log(vv)
        arr = {'rid': id, 'date': v};
        // var dVal = new Date(v).format('Y-m-d');
        $(`#review-edit-${id}`).parent().parent().children('.review-display-date').empty().text(vv).attr('valdate', v).show('300')
        console.log(v)
    }
    if (event.type = 'change') {
        // $(`#review-edit-${id}`).parent().parent().children('.review-display-location').text(v).show('300')
        $(`#review-edit-${id}`).remove()
        // arr = {'rid':id,'lid':l,'location':v};
        $.ajax({
            url: 'https://ptclinic.biz/ca/docs/api/setReviewEdit.php',
            type: 'POST',
            dataType: 'json',
            data: arr,
            complete: function (s) {
                console.log(s)
            }
        })
    }
}

function changeName(event, v, id, type) {
    if (event.keyCode == 13) {
        // console.log(v)
        // console.log(id)
        let arr = {}, num = 0;
        if (type == 'email') {
            num = 2;
            arr = {'rid': id, 'email': v};
            $(`#review-edit-${id}`).parent().parent().children('.review-display-email-text').text(v)
        } else {
            if (type == 'name') {
                num = 3;
                arr = {'rid': id, 'name': v};
            } else {
                if (type == 'signature') {
                    num = 3;
                    arr = {'rid': id, 'signature': v};
                    $(`#review-edit-${id}`).parent().parent().children('.review-display-signature').text(v).show('300')
                    // console.log(v)
                } else {
                    if (type == 'location') {
                        num = 3;
                        arr = {'rid': id, 'location': v};
                        $(`#review-edit-${id}`).parent().parent().children('.review-display-location').text(v).show('300')
                        // console.log(v)
                    } else {
                        if (type == 'date') {
                            num = 3;
                            arr = {'rid': id, 'date': v};
                            v = new Date(date).format('M d,y');
                            var dVal = new Date(date).format('Y-m-d');
                            $(`#review-edit-${id}`).parent().parent().children('.review-display-date').text(v).attr('valDate', dVal).show('300')
                            // console.log(v)
                        }
                    }
                }
            }
        }
        console.log(arr)
        $(`#review-edit-${id}`).parent().parent()[0].children[num].style.display = 'inline-block';
        $(`#review-edit-${id}`).parent().parent()[0].children[num].setAttribute("data-original-title", v);
        $(`#review-edit-${id}`).remove();
        $.ajax({
            url: 'https://ptclinic.biz/ca/docs/api/setReviewEdit.php',
            type: 'POST',
            dataType: 'json',
            data: arr,
            complete: function (s) {
                // console.log(s)
            }
        })
    }
}

function displayNewVideoForm(rid, options) {
    console.log('here tings');
    $(`body`).append(`\
	<div id='displayNewVideoFormOverlay' style='width:100%; height:100%; display:block; position:fixed; z-index:999999999; background:rgba(0,0,0,.5); left: 0px; top: 0px; '>\
	<div id='displayNewVidForm' class='container' style='z-index:999999999; background: whitesmoke; padding: 20px; margin-top: 200px;'><div class='form-group'>\
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
	<option  value='A_Bright_Future'>A Bright Future</option>\
	<option  value='Spark_of_Life'>Spark of Life</option>\
	</select></div></div>\
	<div class='form-group'><label for='lowerthird' class='control-label  col-md-4 '>Lower Third:</label>\
	<div class='col-md-8'>\
	<select class='form-control' id='lowerthird' name='lowerthird'>\
\
${options}\
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
	</select></div></div>\
	<a href='#' class='btn btn-info' id='completeEditVideo' reviewid='${rid}' style='align-self: flex-end; flex: 1;'>Complete</a>\
	</div>\
	</div>`);
}

// $('body').on('click', '#displayNewVideoFormOverlay', function(event) {
// 	event.preventDefault();
// 	$(this).remove()
// });






Copied
