function validateForm() {
    var username = document.forms["registration"]["username"].value;
    var email = document.forms["registration"]["email"].value;
    var password = document.forms["registration"]["password"].value;
    var confirm_password = document.forms["registration"]["confirm_password"].value;

    if (username == "" || email == "" || password == "" || confirm_password == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password != confirm_password) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function validateLoginForm() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;

    if (username == "" || password == "") {
        alert("Username and Password must be filled out");
        return false;
    }

    return true;
}
