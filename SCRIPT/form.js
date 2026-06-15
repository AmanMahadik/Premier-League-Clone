$(document).ready(function () {
    const emailInput = $("#emailInput");
    const passwordInput = $("#passwordInput");
    const confirmPasswordInput = $("#confirmPasswordInput");
    const authForm = $("#authForm");
    const submitBtn = $("#submitBtn");

    $("#passwordToggleBtn").click(function () {
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            $("#passwordToggleIcon").removeClass("bi-eye-slash").addClass("bi-eye");
        } else {
            passwordInput.attr("type", "password");
            $("#passwordToggleIcon").removeClass("bi-eye").addClass("bi-eye-slash");
        }
    });

    $("#confirmPasswordToggleBtn").click(function () {
        if (confirmPasswordInput.attr("type") === "password") {
            confirmPasswordInput.attr("type", "text");
            $("#confirmPasswordToggleIcon").removeClass("bi-eye-slash").addClass("bi-eye");
        } else {
            confirmPasswordInput.attr("type", "password");
            $("#confirmPasswordToggleIcon").removeClass("bi-eye").addClass("bi-eye-slash");
        }
    });

    function updateCriteria(id, isValid) {
        const el = $(id);
        const icon = el.find("i");
        if (isValid) {
            el.css("color", "green");
            icon.removeClass("bi-x-circle-fill").addClass("bi-check-circle-fill");
        } else {
            el.css("color", "red");
            icon.removeClass("bi-check-circle-fill").addClass("bi-x-circle-fill");
        }
    }

    passwordInput.on("input", function () {
        const password = $(this).val();
        const lengthValid = password.length >= 8 && password.length <= 20;
        const capitalValid = /[A-Z]/.test(password);
        const numberValid = /[0-9]/.test(password);
        const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        updateCriteria("#passwordHelp", lengthValid);
        updateCriteria("#capital", capitalValid);
        updateCriteria("#number", numberValid);
        updateCriteria("#special", specialValid);
    });

    authForm.on("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        $(".form-control").removeClass("is-invalid is-valid");
        $(".invalid-feedback").remove();
        $(".alert").remove();

        const email = emailInput.val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            emailInput.addClass("is-invalid").after('<div class="invalid-feedback">Email is required.</div>');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailInput.addClass("is-invalid").after('<div class="invalid-feedback">Please enter a valid email address.</div>');
            isValid = false;
        } else {
            emailInput.addClass("is-valid");
        }

        const password = passwordInput.val();
        const lengthValid = password.length >= 8 && password.length <= 20;
        const capitalValid = /[A-Z]/.test(password);
        const numberValid = /[0-9]/.test(password);
        const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!password) {
            passwordInput.addClass("is-invalid").closest(".input-group").after('<div class="invalid-feedback">Password is required.</div>');
            isValid = false;
        } else if (!lengthValid || !capitalValid || !numberValid || !specialValid) {
            passwordInput.addClass("is-invalid").closest(".input-group").after('<div class="invalid-feedback">Password does not meet the requirements.</div>');
            isValid = false;
        } else {
            passwordInput.addClass("is-valid");
        }

        const confirmPassword = confirmPasswordInput.val();
        if (!confirmPassword) {
            confirmPasswordInput.addClass("is-invalid").closest(".input-group").after('<div class="invalid-feedback">Please confirm your password.</div>');
            isValid = false;
        } else if (confirmPassword !== password) {
            confirmPasswordInput.addClass("is-invalid").closest(".input-group").after('<div class="invalid-feedback">Passwords do not match.</div>');
            isValid = false;
        } else {
            if (password && password === confirmPassword && lengthValid && capitalValid && numberValid && specialValid) {
                confirmPasswordInput.addClass("is-valid");
            }
        }

        if (isValid) {
            submitBtn.prop("disabled", true);
            authForm.append('<div class="alert alert-success mt-3" role="alert"><i class="bi bi-check-circle-fill me-2"></i>Registration successful! Redirecting...</div>');

            setTimeout(function () {
                window.location.href = "signin.html";
            }, 1500);
        }
    });
});
