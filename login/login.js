function notempty()
{
	var valid = true,loaded=false,text="Input not valid";
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
	if (valid==true)
	{
		alert("logged in");
		document.location='../project.html';
	}
}