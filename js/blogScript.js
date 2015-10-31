// javascript file for my blog entries

// a custom date object to display the date in mm/dd/yyyy format
Date.prototype.shortFormat = function() {
	return ( this.getMonth() + 1 ) + "." + this.getDate() + "." + this.getFullYear();
}

//////////////////   Blog object
// constructor for the Blog object
function Blog( body, date, image ) {
	this.body = body;
	this.date = date;
	this.image = image;
}

// turn the blog entry into a string
Blog.prototype.toString = function() {
	return ( "[" + this.date.shortFormat() + "] " + this.body );
}

// format the blog string to html
Blog.prototype.toHTML = function( highlight ) {
	
	// give a gray background to every other blog entry
	var blogHTML = "";
	blogHTML += highlight ? "<p id='greyBox'>" : "<p id='whiteBox'>";
	
	///// generate the formatted blog HTML code
	// if there is an image, add it
	if ( this.image ) {
		blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br /><table><tr><img src='" +
		this.image + "' /></td><td style='verticle-align: top'>" + this.body + "</td></tr></table><em>" +
		this.signature + "</em></p>";
	}
	else {
		blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br />" + this.body +
		"<br /><em>" + this.signature + "</em></p>";
	}
	
	// return the formatted blog entry
	return blogHTML;
}

// check the blog body for a string of text
Blog.prototype.containsText = function( text ) {
	return ( this.body.toLowerCase().indexOf( text.toLowerCase() ) != -1 );
}

// the signature for the blog
Blog.prototype.signature = "by James Spargo";
//////////////////     end Blog object

// the actual blog entries
var blog = [ new Blog( "This is my first blog entry", new Date( "08/14/2008" ) ),
			 new Blog( "this is my second blog entry", new Date( "08/16/2008" ) ),
			 new Blog( "this is my third blog entry", new Date( "10/15/2008" ) )
		   ];

// show the list of blog entries
function showBlog() {
	
	// show the blog entries
	var blogListHTML = "<h3>my blog</h3>";
	for( var i = 0; i < blog.length; i++ ) {
		blogListHTML += blog[i].toHTML( i % 2 == 0 );
	}
	
	// put the blogHTML code on the page
	document.getElementById( "blogBody" ).innerHTML = blogListHTML;
}


															  