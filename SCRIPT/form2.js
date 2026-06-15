$(document).ready(function () {
    const emailInput = $("#emailInput");
    const passwordInput = $("#passwordInput");
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
        if (!password) {
            passwordInput.addClass("is-invalid").closest(".input-group").after('<div class="invalid-feedback">Password is required.</div>');
            isValid = false;
        } else {
            passwordInput.addClass("is-valid");
        }

        if (isValid) {
            submitBtn.prop("disabled", true);
            authForm.append('<div class="alert alert-success mt-3" role="alert"><i class="bi bi-check-circle-fill me-2"></i>Sign-in successful! Redirecting...</div>');

            setTimeout(function () {
                window.location.href = "home.html";
            }, 1500);
        }
    });
});
