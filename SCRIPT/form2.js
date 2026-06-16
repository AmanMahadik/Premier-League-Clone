$(document).ready(function () {

    $("#passwordToggleBtn").click(function () {
        let password = $("#passwordInput");

        if (password.attr("type") == "password") {
            password.attr("type", "text");
            $("#passwordToggleIcon").removeClass("bi-eye-slash");
            $("#passwordToggleIcon").addClass("bi-eye");
        } else {
            password.attr("type", "password");
            $("#passwordToggleIcon").removeClass("bi-eye");
            $("#passwordToggleIcon").addClass("bi-eye-slash");
        }
    });

    $("#authForm").submit(function (e) {
        e.preventDefault();

        let email = $("#emailInput").val().trim();
        let password = $("#passwordInput").val();

        let emailValid = false;
        let passwordValid = false;

        if (email == "") {
            $("#emailMsg").text("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#emailMsg").text("Enter valid email");
        } else {
            $("#emailMsg").text("");
            emailValid = true;
        }

        if (password == "") {
            $("#passwordMsg").text("Password is required");
        } else {
            $("#passwordMsg").text("");
            passwordValid = true;
        }

        if (emailValid && passwordValid) {
            $("#successMsg").text("Sign-in successful! Redirecting...");

            setTimeout(function () {
                window.location.href = "home.html";
            }, 1500);
        }
    });

});