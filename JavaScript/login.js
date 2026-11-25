document.addEventListener("DOMContentLoaded", function () {
    console.log("login.js u ngarkua me sukses");

    var authCard = document.getElementById("authCard");
    var toSignupBtn = document.getElementById("toSignupBtn");
    var toLoginBtn = document.getElementById("toLoginBtn");
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    var visualImage = document.getElementById("visualImage");
    var visualBadge = document.getElementById("visualBadge");
    var visualTitle = document.getElementById("visualTitle");
    var visualDesc = document.getElementById("visualDesc");
   
    var states = {
        login: {
            img: "../imazhe/landscape-mountains-nature-1365425.jpg",
            badge: "GO LEAF",
            title: "Plan your next adventure",
            desc: "Start anytime — explore trails, resorts, and journeys around the world."
        },
        signup: {
            img: "../imazhe/image (1).png",
            badge: "JOIN THE COMMUNITY",
            title: "Every route starts with a step",
            desc: "Save your favorite destinations and keep your upcoming trips organized."
        }
    };

    function setMode(mode) {
        if (!authCard) return;

        var isSignup = mode === "signup";
        if (isSignup) {
            authCard.classList.add("is-signup");
        } else {
            authCard.classList.remove("is-signup");
        }

        var data = states[mode];
        if (!data || !visualImage) return;

        visualImage.style.opacity = "0";
        setTimeout(function () {
            visualImage.src = data.img;
            if (visualBadge) visualBadge.textContent = data.badge;
            if (visualTitle) visualTitle.textContent = data.title;
            if (visualDesc) visualDesc.textContent = data.desc;
            visualImage.style.opacity = "1";
        }, 180);
    }

    if (toSignupBtn) {
        toSignupBtn.addEventListener("click", function () {
            setMode("signup");
        });
    }

    if (toLoginBtn) {
        toLoginBtn.addEventListener("click", function () {
            setMode("login");
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var emailInput = document.getElementById("loginEmail");
            var passwordInput = document.getElementById("loginPassword");
            var email = emailInput ? emailInput.value.trim() : "";
            var password = passwordInput ? passwordInput.value : "";

            if (!email || !password) {
                alert("Ju lutem plotesoni email-in dhe fjalekalimin.");
                return;
            }

            console.log("Login submitted:", { email: email });
            alert("U kyqet me sukses: " + email);
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var nameInput = document.getElementById("signupName");
            var emailInput = document.getElementById("signupEmail");
            var passwordInput = document.getElementById("signupPassword");

            var name = nameInput ? nameInput.value.trim() : "";
            var email = emailInput ? emailInput.value.trim() : "";
            var password = passwordInput ? passwordInput.value : "";

            if (!name || !email || !password) {
                alert("Ju lutem plotesoni te gjitha fushat per krijimin e llogarise.");
                return;
            }

            console.log("Signup submitted:", { name: name, email: email });
            alert("Llogaria u krijua per: " + name);
        });
    }
});