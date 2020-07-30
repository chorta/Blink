// Time based greeting code - moment.js dependent

function getGreetingTime (m) {
	var g = null; //return g

	if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(m.format("HH"));

	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "afternoon";
	} else if(currentHour >= split_evening) {
		g = "evening";
	} else {
		g = "morning";
	}

	return g;

}

/* USE */
    //The var "humanizedGreeting" below will equal (assuming the time is 8pm) "Good evening, James."
    var day = moment().format('dddd');
    var date = moment().format('MMMM D');
    // var user = ", Cristian";
    var humanizedGreeting = "Good " + getGreetingTime(moment()) + ". It's "+ day +", "+ date +".";

    $("#personal-greeting").append(humanizedGreeting);




// Match Height - jquery-match-height dependent

$(".toolset-container").matchHeight({
  property: 'min-height'
});



// MyBlink Session


function jsonpCallback(jsonStr) {
        var json = JSON.parse(jsonStr);
        $('#_myblink_toolbox').html(json.message);


				// Show Popular on Blink if MyBlink is NOT Activate
				if (json.message.length > 243) {
					$('#popular-onblink').hide();
				}
      }

function myBlinkLogout() {
    // delete cookie
    document.cookie = '_myblink_user=; Path=/; domain=.ucsd.edu; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    $.ajax({
      method: "GET",
      url: "https://act.ucsd.edu/myblink-client/bookmarks/j-logout.htm",
      dataType: "script"
    });
}




// Footer Year

// var footerDate = moment().format('YYYY');
//
// $(".footer-copyright-year").append(footerDate);
