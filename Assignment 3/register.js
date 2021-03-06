"use strict";
var $ = function(id) { return document.getElementById(id); };

  var mailR,mailText, hide,options;           	// Declare variables 
  options = document.getElementsByName('contact');		// Get the radio buttons
  mailR=$('mailR');		// Get the radio buttons
  mailText=document.getElementsByName('Mail-Text');
  mailText[0].className = '';      	// Other text input';  
  mailText[1].className = '';      	// Other text input';  

	for (var i = [0]; i < options.length; i++) 			// Loop through radios
  {         
	if (options[i].addEventListener)    				// Add event listener        
		options[i].addEventListener('click', radioChanged); // If event listener supported                               
	else                                      			// Otherwise
		options[i].attachEvent('onclick', radioChanged);    // IE fallback: onclick
  }
   function radioChanged() 
  {
    if (mailR.checked)  			// Is other checked?
		hide ='';
    else 
		hide='hide';                
	mailText[0].className = hide;     // Text input visibility
    mailText[1].className = hide;     // Text input visibility

	if (hide)                       // If text input hidden
      mailText[0].value = '';         // Empty its contents
      mailText[1].value = '';         // Empty its contents

 }

var processEntries = function() {
	var isValid = true;
	// get values for user entries   
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var terms = $("terms").checked;  
  
	// check user entries for validity
    if (email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    }
	else {
		$("email_address").nextElementSibling.firstChild.nodeValue = "";	
	}
	if (phone == "") {
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    }
	else {
		$("phone").nextElementSibling.firstChild.nodeValue = "";
	}
    if (country == "") {
        $("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
		isValid = false;
    }
	else {
		$("country").nextElementSibling.firstChild.nodeValue = "";	
	}
	if (terms == false) {
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
		isValid = false;
    }
	else {
		$("terms").nextElementSibling.firstChild.nodeValue = "";	
	}
    if(isValid)
	{
		$("registration_form").submit();
	}
};

var resetForm = function() {
    $("registration_form").reset();
	$("email_address").nextElementSibling.firstChild.nodeValue = "*";
	$("phone").nextElementSibling.firstChild.nodeValue = "*";	
	$("country").nextElementSibling.firstChild.nodeValue = "*";	
	$("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};