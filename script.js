const languageSelect = document.getElementById("languageSelect");
const otpSection = document.getElementById("otpSection");
const loader = document.getElementById("loader");

const translations = {
    en: "Welcome",
    es: "Bienvenido",
    hi: "स्वागत है",
    pt: "Bem-vindo",
    zh: "欢迎",
    fr: "Bienvenue"
};

let generatedOTP = "123456";

languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;

    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";

        if (selectedLanguage === "fr") {
            alert("Demo OTP is: " + generatedOTP);
            otpSection.style.display = "block";
        } else {
            otpSection.style.display = "none";
            document.getElementById("welcome").innerText = translations[selectedLanguage];
        }

    }, 800);
});

function verifyOTP() {
    const userOTP = document.getElementById("otpInput").value;

    if (userOTP === generatedOTP) {
        document.getElementById("welcome").innerText = translations["fr"];
        otpSection.style.display = "none";
        alert("French language activated!");
    } else {
        alert("Invalid OTP");
    }
}
