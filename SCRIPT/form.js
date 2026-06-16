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

    $("#confirmPasswordToggleBtn").click(function () {
        let confirmPassword = $("#confirmPasswordInput");

        if (confirmPassword.attr("type") == "password") {
            confirmPassword.attr("type", "text");
            $("#confirmPasswordToggleIcon").removeClass("bi-eye-slash");
            $("#confirmPasswordToggleIcon").addClass("bi-eye");
        } else {
            confirmPassword.attr("type", "password");
            $("#confirmPasswordToggleIcon").removeClass("bi-eye");
            $("#confirmPasswordToggleIcon").addClass("bi-eye-slash");
        }
    });

    $("#passwordInput").on("input", function () {

        let password = $(this).val();

        let lengthValid = password.length >= 8 && password.length <= 20;
        let capitalValid = /[A-Z]/.test(password);
        let numberValid = /[0-9]/.test(password);
        let specialValid = /[^A-Za-z0-9]/.test(password);

        $("#passwordHelp").css("color", lengthValid ? "green" : "red");
        $("#capital").css("color", capitalValid ? "green" : "red");
        $("#number").css("color", numberValid ? "green" : "red");
        $("#special").css("color", specialValid ? "green" : "red");
    });

    $("#authForm").submit(function (e) {

        e.preventDefault();

        let email = $("#emailInput").val().trim();
        let password = $("#passwordInput").val();
        let confirmPassword = $("#confirmPasswordInput").val();

        let emailValid = false;
        let passwordValid = false;
        let confirmValid = false;

        if (email == "") {
            $("#emailMsg").text("Email is required");
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#emailMsg").text("Enter valid email");
        }
        else {
            $("#emailMsg").text("");
            emailValid = true;
        }

        let lengthValid = password.length >= 8 && password.length <= 20;
        let capitalValid = /[A-Z]/.test(password);
        let numberValid = /[0-9]/.test(password);
        let specialValid = /[^A-Za-z0-9]/.test(password);

        if (password == "") {
            $("#passwordMsg").text("Password is required");
        }
        else if (!lengthValid || !capitalValid || !numberValid || !specialValid) {
            $("#passwordMsg").text("Password does not meet requirements");
        }
        else {
            $("#passwordMsg").text("");
            passwordValid = true;
        }

        if (confirmPassword == "") {
            $("#confirmPasswordMsg").text("Confirm your password");
        }
        else if (confirmPassword != password) {
            $("#confirmPasswordMsg").text("Passwords do not match");
        }
        else {
            $("#confirmPasswordMsg").text("");
            confirmValid = true;
        }

        if (emailValid && passwordValid && confirmValid) {

            $("#successMsg").text("Registration successful! Redirecting...");

            setTimeout(function () {
                window.location.href = "signin.html";
            }, 1500);
        }

    });

});