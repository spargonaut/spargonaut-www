// Global Ajax request
var ajaxReq = new AjaxRequest();

// Add a new blog entry to an XML doc on the server using Ajax
function addBlogEntry() {
  // Disable the Add button and set the status to busy
  document.getElementById("add").disabled = true;
  document.getElementById("status").innerHTML = "Adding...";

  // Send the new blog entry data as an Ajax request
  ajaxReq.send("POST", "addblogentry.php", handleRequest, "application/x-www-form-urlencoded; charset=UTF-8",
	"date=" + document.getElementById("date").value + "&body=" + document.getElementById("body").value +
	"&image=" + document.getElementById("image").value);
}

// Handle the Ajax request
function handleRequest() {
  if (ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
	// Enable the Add button and clear the status
	document.getElementById("add").disabled = false;
	document.getElementById("status").innerHTML = "";

	// Confirm the addition of the blog entry
	alert("The new blog entry was successfully added.");
  }
}

// Initialize the blog entry form
function initForm() {
  document.getElementById("date").value = (new Date()).shortFormat();
  document.getElementById("body").focus();
}


// AjaxRequest object constructor
function AjaxRequest() {
  // Try the XMLHttpRequest object first
  if (window.XMLHttpRequest) {
    try {
      this.request = new XMLHttpRequest();
    } catch(e) {
      this.request = null;
    }
  // Now try the ActiveX (IE) version
  } else if (window.ActiveXObject) {
    try {
      this.request = new ActiveXObject("Msxml2.XMLHTTP");
    // Try the older ActiveX object for older versions of IE
    } catch(e) {
      try {
        this.request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        this.request = null;
      }
    }
  }

  // If the request creation failed, notify the user
  if (this.request == null)
    alert("Ajax error creating the request.\n" + "Details: " + e);
}

// Send an Ajax request to the server
AjaxRequest.prototype.send = function(type, url, handler, postDataType, postData) {
  if (this.request != null) {
    // Kill the previous request
    this.request.abort();

    // Tack on a dummy parameter to override browser caching
    url += "?dummy=" + new Date().getTime();

    try {
      this.request.onreadystatechange = handler;
      this.request.open(type, url, true); // always asynchronous (true)
      if (type.toLowerCase() == "get") {
        // Send a GET request; no data involved
        this.request.send(null);
      } else {
        // Send a POST request; the last argument is data
        this.request.setRequestHeader("Content-Type", postDataType);
        this.request.send(postData);
      }
    } catch(e) {
      alert("Ajax error communicating with the server.\n" + "Details: " + e);
    }
  }
}

AjaxRequest.prototype.getReadyState = function() {
  return this.request.readyState;
}

AjaxRequest.prototype.getStatus = function() {
  return this.request.status;
}

AjaxRequest.prototype.getResponseText = function() {
  return this.request.responseText;
}

AjaxRequest.prototype.getResponseXML = function() {
  return this.request.responseXML;
}
