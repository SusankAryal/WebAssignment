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
    if (fm.country.value == "") {
		alert("Please enter your country name.");
		return false;
	}
	if (fm.local-address.value == "") {
		alert("Please enter your Local Address.");
		return false;
	}
	if (fm.permanent-address.value == "") {
		alert("Please enter your Permanent address.");
		return false;
	}
	if (fm.purpose-for-applying.value == "") {
		alert("Please enter what post you are applying for.");
		return false;
	}
	if (fm.current-job.value == "") {
		alert("Please type your current job if none then type 'NONE'");
		return false;
	}
}