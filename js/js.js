function validateform(fm){
	if (fm.Firstname.value == "") {
		alert("Please enter your Firstname.");
		return false;
	}
	if (fm.Lastname.value == "") {
		alert("Please enter your Lastname.");
		return false;
	}
	if (fm.Email.value == "") {
		alert("Please enter your Email.");
		return false;
    }
    if (fm.countryname.value == "") {
		alert("Please enter your country name.");
		return false;
	}
	if (fm.localaddress.value == "") {
		alert("Please enter your Local Address.");
		return false;
	}
	if (fm.permanentaddress.value == "") {
		alert("Please enter your Permanent address.");
		return false;
	}
	if (fm.purpose.value == "") {
		alert("Please enter what post you are applying for.");
		return false;
	}
	if (fm.currentjob.value == "") {
		alert("Please type your current job if none then type 'NONE'");
		return false;
	}
}
