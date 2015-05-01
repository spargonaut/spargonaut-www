function greeting() {
	var visitorName = prompt("Hey there, welcome to my projects page.\n" +
			"If you tell me your name, I'll remember it when you come back\n" +
			"note: cookies needs to be enabled" );

	/* if the user entered a name, update the page */
	if( ( visitorName != "" ) && visitorName )
	{
		/* update the page  with the visitors name*/
		document.getElementById( "greetName" ).innerHTML = ", " + visitorName;
		
		/* write a cookie to remember it next time */
		writeCookie( visitorName, "visitorName", 30 );
	}
}  // end greeting()


/* write the cookie to the users machine */
function writeCookie( name, value, days ) {
	// by default, the cookie never expires, making it temporary
	var expires = "";
	
	alert( "days = " + days );

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
