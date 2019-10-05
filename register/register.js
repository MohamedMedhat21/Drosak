function validateForm()
{
	var valid = true,text="Input not valid",text2="passwords doesn't match";
	if(document.inputForm.email.value=="")
	{
		document.getElementById("demo").innerHTML = "Please Enter an email";
		document.inputForm.email.focus();
		valid=false; 
	}
	else
	{
		if(document.inputForm.email.value.indexOf("@")==-1||document.inputForm.email.value.indexOf(".")==-1)
		{
			document.getElementById("demo").innerHTML = text;
			document.inputForm.email.focus();
			valid=false; 
		}
	}
	if(document.inputForm.pass.value=="")
	{
		document.getElementById("demo2").innerHTML = "Please Enter a password";
		document.inputForm.email.focus();
		valid=false; 
	}
	else if(document.inputForm.pass.value!=document.inputForm.passcon.value)
	{
		document.getElementById("demo2").innerHTML = text2;
		document.inputForm.email.focus();
		valid=false; 
	}
	if (valid==true)
	{
		alert("Thanks for registration!");
	}
	return valid;
}