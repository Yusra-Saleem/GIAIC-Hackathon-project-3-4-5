// Select the form and resume display elements
var form = document.getElementById("myForm");
var resumeDisplay = document.getElementById("resume-display");
var downloadBtn = document.getElementById("download-btn");
var profilePictureInput = document.getElementById("profile-picture");
// Resume Fields (Dynamic display)
var displayName = document.getElementById("display-name");
var displayIntro = document.getElementById("display-introduction");
var displayAbout = document.getElementById("display-about");
var displayEducation = document.getElementById("display-education");
var displaySkills = document.getElementById("display-skills");
var displayExperience = document.getElementById("display-experience");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
// Handle Form Submission to Generate Resume
form.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // Collect user input from the form
    var nameInput = document.querySelector('input[name="name"]');
    var introInput = document.querySelector('textarea[name="introduction"]');
    var aboutInput = document.querySelector('textarea[name="about"]');
    var qualificationInput = document.querySelector('input[name="qualification"]');
    var experienceInput = document.querySelector('textarea[name="experience"]');
    var skillsInput = document.querySelector('textarea[name="skills"]');
    var emailInput = document.querySelector('input[name="email"]');
    var phoneInput = document.querySelector('input[name="phone"]');
    // Validate Inputs
    if (!nameInput.value || !emailInput.value || !phoneInput.value) {
        alert("Please fill in all required fields.");
        return;
    }
    // Populate resume fields with form input values
    displayName.textContent = nameInput.value;
    displayIntro.textContent = introInput.value;
    displayAbout.textContent = aboutInput.value;
    displayEducation.textContent = qualificationInput.value;
    displaySkills.textContent = skillsInput.value;
    displayExperience.textContent = experienceInput.value;
    displayEmail.textContent = emailInput.value;
    displayPhone.textContent = phoneInput.value;
    // Handle profile picture
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePictureFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var profilePictureURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            var displayImage = document.getElementById("display-image");
            if (displayImage) {
                displayImage.src = profilePictureURL;
                displayImage.style.display = "block";
            }
        };
        reader.readAsDataURL(profilePictureFile);
    }
    // Show the generated resume
    resumeDisplay.style.display = "block";
    // Hide the form after displaying the resume
    form.style.display = "none";
});
// Function to Download the Resume as an HTML File
downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener("click", function () {
    if (!displayName ||
        !displayIntro ||
        !displayAbout ||
        !displayEducation ||
        !displaySkills ||
        !displayExperience ||
        !displayEmail ||
        !displayPhone) {
        console.error("Required elements are missing");
        return;
    }
    var name = displayName.textContent || "";
    var intro = displayIntro.textContent || "";
    var about = displayAbout.textContent || "";
    var education = displayEducation.textContent || "";
    var skills = displaySkills.textContent || "";
    var experience = displayExperience.textContent || "";
    var email = displayEmail.textContent || "";
    var phone = displayPhone.textContent || "";
    // Split skills by comma and format them line by line
    var formattedSkills = skills
        .split(",")
        .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
        .join("");
    // Handle profile picture data URL
    var profilePictureURL = document.getElementById("display-image").src || "";
    // Define the styles to be applied in the downloaded HTML
    var resumeStyles = "\n<style>\n  /* Google Fonts */\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n  }\n\n  body {\n    background-color: lightblue;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    font-weight: 600;\n  }\n\n  .container {\n    position: relative;\n    width: 90%;\n    max-width: 1000px;\n    min-height: 800px;\n    min-width: 100px;\n    background: hsl(0, 0%, 100%);\n    margin: 50px;\n    display: grid;\n    padding-bottom: 10px;\n    grid-template-columns: 1fr 3fr;\n    box-shadow:0 35px 55px rgba(0,0,0,0.1);\n  }\n\n  .container .side1 {\n    background-color: #003147;\n    position: relative;\n    padding: 0;\n    top: 0;\n  }\n\n  .profile-img {\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    margin-bottom: 15px;\n    margin-top:30px;\n  }\n\n  .profileText {\n    position: relative;\n    space-between: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    color: #fff;\n  }\n\n  \n\n  .profileText h2 {\n    text-transform: uppercase;\n    font-size: 1.3em;\n    font-weight: 600;\n  }\n\n  .profileText h2 span {\n    font-size: 0.7em;\n    font-weight: 300;\n  }\n\n  .contactInfo {\n    padding-top: 20px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    color: #fff;\n    padding-bottom: 20px;\n    align-items: center;\n  }\n\n  .contactInfo ul {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    color: #fff;\n    font-weight: 300;\n    padding-left: 20px;\n    padding-right: 10px;\n  }\n\n  .contactInfo ul li {\n    position: relative;\n    list-style: none;\n    margin: 10px 0; \n    cursor: pointer;\n    text-align: center;\n  }\n  .title1{\n  text-transform: uppercase;\n   color:fff;\n    padding: 15px;\n    font-size: 1.3em;\n    font-weight: 600;\n    text-align: center;\n\n  }\n\n  .education{\n     padding: 20px;\n  }\n\n  \n   .edu-p{\n    color: #fff;\n    text-align: center;\n    font-weight:400;\n    font-size: 1.2em;\n\n\n   }\n\n  .container .side2 {\n    position: relative;\n    background-color: #fff;\n    padding: 40px;\n    width:90%;\n    min-height:800px;\n  }\n\n\n\n  .about {\n    padding: 20px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n\n  .experience{\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n\n  .title{\n    color: #003147;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 10px;\n  }\n\n  p{\n    color: #272626;\n    font-weight: 600;\n\n  }\n\n  .skills{\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n  .skills .box {\n    display: grid;\n    grid-template-columns: 150px 1fr;\n    align-items: center;\n  }\n\n  .skills .box h4 {\n    color: #848c99;\n  }\n\n  .copy{\n    position:absolute;\n    text-align:Center;\n    font-size:11px;\n    color: black;\n    bottom:10px;\n  }\n</style>\n";
    // Create the HTML content for the resume
    var resumeHTML = "\n<html>\n  <head>\n    <title>Resume of ".concat(name, "</title>\n    ").concat(resumeStyles, "\n  </head>\n  <body>\n    <div class=\"container\">\n      <div class=\"side1\">\n        <div class=\"profileText\">\n          ").concat(profilePictureURL
        ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-img\">")
        : "", "\n          <h2>").concat(name, "</h2>\n          <span>").concat(intro, "</span>\n        </div>\n        <div class=\"contactInfo\">\n          <h2 class=\"title1\">Contact Info</h2>\n          <ul>\n            <li>").concat(email, "</li>\n            <li>").concat(phone, "</li\n          </ul>\n        </div>\n        <div class=\"education\">\n          <h2 class=\"title1\">Education</h2>\n          <p class=\"edu-p\">").concat(education, "</p>\n        </div>\n      </div>\n      <div class=\"side2\">\n        <div class=\"about\">\n          <h2 class=\"title\">About</h2>\n          <p>").concat(about, "</p>\n        </div>\n        <div class=\"experience\">\n          <h2 class=\"title\">Experience</h2>\n          <p>").concat(experience, "</p>\n        </div>\n        <div class=\"skills\">\n          <h2 class=\"title\">Skills</h2>\n          <div class=\"box\">\n            <h4>").concat(formattedSkills, "</h4>\n            <div class=\"copy\">&copy; 2024 by Yusra Saleem . </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n");
    // Create a Blob object with the resume HTML content
    var blob = new Blob([resumeHTML], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    // Create a temporary link element to trigger the download
    var a = document.createElement("a");
    a.href = url;
    a.download = "".concat(name, "-Resume.html");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Release the object URL
    URL.revokeObjectURL(url);
});
