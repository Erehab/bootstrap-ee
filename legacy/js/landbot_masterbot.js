// Paste this at Landbot.io Masterbot -> Design Tab -> Add JS Custom scripts) code block
var siteScope = window;
let practiceid = 12; //Fallback ID if no div is available
var practiceidDiv = siteScope.document.getElementById("practiceid");
if (practiceidDiv) {
    practiceid = practiceidDiv.textContent;
}
var landbotScope = this;

function loadJson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var botParams1 = JSON.parse(this.responseText);
            console.log("botParams");
            console.log(botParams1);
            customizeBot(botParams1);
        }
    };
    xhttp.open("GET", "https://ptclinic.biz/ca/ajax/landbot_master_data.php?practice_id=" + practiceid, true);
    xhttp.send();
}

this.onLoad(function () {
    landbotScope.window.gotto = function (url) {
        window.location.href = url
    }
    loadJson();
});

function customizeBot(botParams) {
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.launcher__bubble{background-color:#' + botParams.color_line + ' !important;}');
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.Header--hasSeparator{border-bottom-color:#' + botParams.color_line + ' !important;border-bottom-width:3px;}');
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.Header__Logo img{content:url("https://gs-img.imgix.net/square/' + practiceid + '.png?w=35")!important}');
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.Header__Title:before {text-indent: 0; content: "' + botParams.name + '"; float: left;}');

    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.input-button{background-color:#' + botParams.color_framing + ' !important;}');
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.input-button-label{color:#' + botParams.color_listtext + '!important;}');
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.MessageBubble{background-color:#' + botParams.color_framing + ';}');
    landbotScope.window.document.getElementById("custom-styles").sheet.insertRule('.MessageBubble__content{color:#' + botParams.color_listtext + '!important;}');
    // landbotScope.window.document.getElementById("custom-styles").sheet.insertRule(`.is_author_user{background-color:red!important;}`);
    // landbotScope.window.document.getElementById("custom-styles").sheet.insertRule(`.is_author_user{color:white!important;}`);

    landbotScope.setCustomData({practiceid: practiceid});
    landbotScope.setCustomData({color_line: botParams.color_line});
    landbotScope.setCustomData({color_framing: botParams.color_framing});
    landbotScope.setCustomData({color_listtext: botParams.color_listtext});
    landbotScope.setCustomData({main_url: botParams.website});
    landbotScope.setCustomData({facebook_url: botParams.facebookurl});
    landbotScope.setCustomData({locationlist: botParams.locations});
    var locations = botParams.locations;
    var loc;
    if (locations.length > 1) loc = "True";
    else loc = "False";
    landbotScope.setCustomData({multiple_locations: loc});
    var phone = '<html>';
    var yelp = '<html>';
    var address = '<html>';
    locations.forEach(function (item) {
        address += '<p><b>' + item["LocationName"] + ':</b><br><a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(item["nap_name"] + ' ' + item["street1"] + item["city"] + ' ' + item["state"]) + '" target="_blank">' + item["street1"] + ', ' + item["city"] + ', ' + item["state"] + ' ' + item["zip"] + '</a><br><br></p>';
        if (item["yelp"] != "None") {
            yelp += '<p><a href="' + item["yelp"] + '" target="_blank">' + item["yelpname"] + ' Link</a><br><br>';
        }
        var pnum = "None";
        if (item["phonenumberonly"] != "None") pnum = item["phonenumberonly"];
        else pnum = item["phone"]
        phone += '<p><b>' + item["LocationName"] + ' Phone:</b><br><a href="tel:' + pnum + '">' + item["phone"] + '</a><br><br>';
    });
    address += '</html>';
    yelp += '</html>';
    phone += '</html>';
    landbotScope.setCustomData({address: address});
    landbotScope.setCustomData({yelp_link: yelp});
    landbotScope.setCustomData({phone_number: phone});
    var fbpage = botParams.facebookurl.split('/')[3];
    landbotScope.setCustomData({facebook_page: fbpage});
    landbotScope.setCustomData({office_hours: 'Call for hours'});
}
