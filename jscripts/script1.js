/* when the page loads, look for a cookie to see if the user has been there before.
   if they have not, ask for their name
 */

window.onload = function( evt ) {
	
	var userName = readCookie( "spargonaut.com");

	/*  look for a cookie
	     if no cookie, ask for their name
	     if cookie, use info from cookie for heading
	 */
	 if( userName ) {
		 if( userName != "null" ) {
		 	updateHeading( userName );
		 }
	 }
	 else {
		 greeting();
	 }
}

/* this function gets called if no cookie is present.
 * it attempts to write cookie before exiting so that the
 * next time the user visits, the user won't have to deal
 * with a pop up again
 */
function greeting() {
	var visitorName = prompt("Hey there, welcome to my projects page.\n" +
			"If you tell me your name, I'll remember it when you come back\n" +
			"note: cookies needs to be enabled" );

	/* if the user entered a name, update the page */
	if( ( visitorName != "" ) && visitorName )
	{
		/* update the page  with the visitors name*/
		updateHeading( visitorName );
		
		/* write a cookie to remember it next time */
		writeCookie( "spargonaut.com", visitorName, 30 );
	}
	else {
		writeCookie( "spargonaut.com", null, 30 )
	}
}  // end greeting()

/* update the heading with the usersName if there is one stored
 */
function updateHeading( visitorName ) {
	
	/* if visitorName is null, don't do anything */
	document.getElementById( "greetHeading" ).innerHTML = ", " + visitorName;
}


/* write the cookie to the users machine */
function writeCookie( name, value, days ) {
	
	// testing
	//alert( "writeCookie with " + value + " called " );
	
	// by default, the cookie never expires, making it temporary
	var expires = "";

	// lets add a date to it to make it persistent
	if ( days ) {
		var date = new Date();
		date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		expires = "; expires=" + date.toGMTString();
	}

	// set the cookie to the name, value and expiration date
	document.cookie = name + "=" + value + expires + "; path=/";
}  // end writeCookie()

/* find the cookie on the users machine */
function readCookie( name ) {
	// Find the specified cookie and get the data from it
	var searchName = name + "=";
	var cookies = document.cookie.split( ';' );
	
	// search through the cookies
	for( var i = 0; i < cookies.length; i++ )
	{
		var c = cookies[ i ];
		while ( c.charAt( 0 ) == ' ' )
			c = c.substring( 1, c.length );

		if ( c.indexOf( searchName ) == 0 )
			return c.substring( searchName.length, c.length );
	}

	// if we got here, we couldn't find a cookie
	return null;
} // end readCookie()

/* erase the cookie from the users machine */
function eraseCookie( name ) {
	// Erase the specified cookie
	writeCookie( name, "", -1 );
}  // eraseCookie
