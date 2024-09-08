// Select the form and resume display elements
var form = document.querySelector('form');
var resumeDisplay = document.getElementById('resume-display');
var downloadBtn = document.getElementById('download-btn');
var uniqueLink = document.getElementById('unique-link'); // Ensure it's an anchor tag
var copyLinkBtn = document.getElementById('copy-link-btn');
var shareSection = document.getElementById('share-section');
// Resume Fields (Dynamic display)
var displayName = document.getElementById('display-name');
var displayIntro = document.getElementById('display-introduction');
var displayAbout = document.getElementById('display-about');
var displayEducation = document.getElementById('display-education');
var displaySkills = document.getElementById('display-skills');
var displayExperience = document.getElementById('display-experience');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
// Handle Form Submission to Generate Resume
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Collect user input from the form
    var nameInput = document.querySelector('input[placeholder="Enter name here"]');
    var introInput = document.querySelector('textarea[name="introduction"]');
    var aboutInput = document.querySelector('textarea[name="about"]');
    var qualificationInput = document.getElementById('qualification');
    var experienceInput = document.querySelector('textarea[name="Experience"]');
    var skillsInput = document.querySelector('textarea[name="skills"]');
    var emailInput = document.querySelector('input[type="email"]');
    var phoneInput = document.querySelector('input[type="tel"]');
    var usernameInput = document.querySelector('input[name="username"]');
    // Populate resume fields with form input values
    displayName.textContent = nameInput.value;
    displayIntro.textContent = introInput.value;
    displayAbout.textContent = aboutInput.value;
    displayEducation.textContent = qualificationInput.value;
    displaySkills.textContent = skillsInput.value;
    displayExperience.textContent = experienceInput.value;
    displayEmail.textContent = emailInput.value;
    displayPhone.textContent = phoneInput.value;
    // Show the generated resume
    resumeDisplay.style.display = 'block';
    // Generate a unique URL based on the username
    var baseURL = window.location.href;
    var resumeURL = "".concat(baseURL, "?user=").concat(encodeURIComponent(usernameInput.value));
    // Log the username and generated URL for debugging
    console.log("Username:", usernameInput.value);
    console.log("Generated URL:", resumeURL);
    // Display the unique URL in the share section
    uniqueLink.textContent = resumeURL;
    uniqueLink.setAttribute('href', resumeURL);
    // Show the share section
    shareSection.style.display = 'block';
});
//   // Show the generated resume
//   resumeDisplay.style.display = 'block';
//   // Generate a unique URL based on the username
//   const baseURL = window.location.href;
//   const resumeURL = `${baseURL}?user=${encodeURIComponent(usernameInput.value)}`;
//   // Set the generated URL in the anchor tag and make it clickable
//   uniqueLink.textContent = resumeURL;
//   uniqueLink.setAttribute('href', resumeURL);
//   // Show the share section
//   shareSection.style.display = 'block';
// }yLinkBtn.addEventListener('click', () => {
//   const link = uniqueLink.textContent;
//   navigator.clipboard.writeText(link!).then(() => {
//     alert('Link copied to clipboard!');
//   }).catch(err => {
//     console.error('Failed to copy link: ', err);
//   });
// }););
// Move this outside the form submit handler to avoid multiple event listeners
// Function to Download the Resume as an HTML File
downloadBtn.addEventListener('click', function () {
    var name = displayName.textContent;
    var intro = displayIntro.textContent;
    var about = displayAbout.textContent;
    var education = displayEducation.textContent;
    var skills = displaySkills.textContent;
    var experience = displayExperience.textContent;
    var email = displayEmail.textContent;
    var phone = displayPhone.textContent;
    // Define the styles to be applied in the downloaded HTML
    var resumeStyles = "\n    <style>\n      body {\n        font-family: 'Arial', sans-serif;\n        background-color: #f4f4f9;\n        color: #333;\n        margin: 0;\n        padding: 20px;\n      }\n      h1, h2, h3 {\n        margin-bottom: 10px;\n        color: #333;\n      }\n      p {\n        margin-bottom: 15px;\n        line-height: 1.6;\n        color: #666;\n      }\n      #resume-display {\n        background-color: white;\n        border-radius: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        padding: 30px;\n        max-width: 800px;\n        margin: 20px auto;\n      }\n      h1 {\n        font-size: 2.5rem;\n        color: #007bff;\n        text-align: center;\n        margin-bottom: 20px;\n      }\n      h3 {\n        font-size: 1.5rem;\n        color: #007bff;\n        margin-bottom: 10px;\n      }\n      h2 {\n        margin-top: 30px;\n        font-size: 1.8rem;\n        border-bottom: 2px solid #007bff;\n        padding-bottom: 10px;\n        color: #333;\n      }\n      ul {\n        list-style-type: none;\n        padding-left: 0;\n      }\n      ul li {\n        background-color: #f4f4f9;\n        margin-bottom: 10px;\n        padding: 10px;\n        border-left: 4px solid #007bff;\n        font-size: 1.1rem;\n      }\n      .contact-info p {\n        margin-bottom: 5px;\n        color: #007bff;\n      }\n    </style>\n  ";
    // Create the HTML content for the resume
    var resumeHTML = "\n    <html>\n      <head><title>Resume of ".concat(name, "</title></head>\n      <body>\n        <h1>").concat(name, "</h1>\n        <h3>").concat(intro, "</h3>\n        <p>").concat(about, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n        <h2>Contact</h2>\n        <p>").concat(email, "</p>\n        <p>").concat(phone, "</p>\n      </body>\n    </html>\n  ");
    // Create a Blob for the HTML file
    var blob = new Blob([resumeHTML], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "".concat(name, "_resume.html");
    link.click();
});
