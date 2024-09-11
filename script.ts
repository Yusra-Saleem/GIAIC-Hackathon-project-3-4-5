// Select the form and resume display elements
const form = document.getElementById("myForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
const downloadBtn = document.getElementById(
  "download-btn"
) as HTMLButtonElement;
const profilePictureInput = document.getElementById(
  "profile-picture"
) as HTMLInputElement;

// Resume Fields (Dynamic display)
const displayName = document.getElementById("display-name") as HTMLElement;
const displayIntro = document.getElementById(
  "display-introduction"
) as HTMLElement;
const displayAbout = document.getElementById("display-about") as HTMLElement;
const displayEducation = document.getElementById(
  "display-education"
) as HTMLElement;
const displaySkills = document.getElementById("display-skills") as HTMLElement;
const displayExperience = document.getElementById(
  "display-experience"
) as HTMLElement;
const displayEmail = document.getElementById("display-email") as HTMLElement;
const displayPhone = document.getElementById("display-phone") as HTMLElement;

// Handle Form Submission to Generate Resume
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect user input from the form
  const nameInput = document.querySelector(
    'input[name="name"]'
  ) as HTMLInputElement;
  const introInput = document.querySelector(
    'textarea[name="introduction"]'
  ) as HTMLTextAreaElement;
  const aboutInput = document.querySelector(
    'textarea[name="about"]'
  ) as HTMLTextAreaElement;
  const qualificationInput = document.querySelector(
    'input[name="qualification"]'
  ) as HTMLInputElement;
  const experienceInput = document.querySelector(
    'textarea[name="experience"]'
  ) as HTMLTextAreaElement;
  const skillsInput = document.querySelector(
    'textarea[name="skills"]'
  ) as HTMLTextAreaElement;
  const emailInput = document.querySelector(
    'input[name="email"]'
  ) as HTMLInputElement;
  const phoneInput = document.querySelector(
    'input[name="phone"]'
  ) as HTMLInputElement;

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
  const profilePictureFile = profilePictureInput.files?.[0];
  if (profilePictureFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const profilePictureURL = e.target?.result as string;
      const displayImage = document.getElementById(
        "display-image"
      ) as HTMLImageElement;
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
downloadBtn?.addEventListener("click", () => {
  if (
    !displayName ||
    !displayIntro ||
    !displayAbout ||
    !displayEducation ||
    !displaySkills ||
    !displayExperience ||
    !displayEmail ||
    !displayPhone
  ) {
    console.error("Required elements are missing");
    return;
  }

  const name = displayName.textContent || "";
  const intro = displayIntro.textContent || "";
  const about = displayAbout.textContent || "";
  const education = displayEducation.textContent || "";
  const skills = displaySkills.textContent || "";
  const experience = displayExperience.textContent || "";
  const email = displayEmail.textContent || "";
  const phone = displayPhone.textContent || "";

  // Split skills by comma and format them line by line
  const formattedSkills = skills
    .split(",")
    .map((skill) => `<li>${skill.trim()}</li>`)
    .join("");

  // Handle profile picture data URL
  const profilePictureURL =
    (document.getElementById("display-image") as HTMLImageElement).src || "";

  // Define the styles to be applied in the downloaded HTML
  const resumeStyles = `
<style>
  /* Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-weight: 600;
  }

  .container {
    position: relative;
    width: 90%;
    max-width: 1000px;
    min-height: 800px;
    min-width: 100px;
    background: hsl(0, 0%, 100%);
    margin: 50px;
    display: grid;
    padding-bottom: 10px;
    grid-template-columns: 1fr 3fr;
    box-shadow:0 35px 55px rgba(0,0,0,0.1);
  }

  .container .side1 {
    background-color: #003147;
    position: relative;
    padding: 0;
    top: 0;
  }

  .profile-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 15px;
    margin-top:30px;
  }

  .profileText {
    position: relative;
    space-between: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  

  .profileText h2 {
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 600;
  }

  .profileText h2 span {
    font-size: 0.7em;
    font-weight: 300;
  }

  .contactInfo {
    padding-top: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding-bottom: 20px;
    align-items: center;
  }

  .contactInfo ul {
    position: relative;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 300;
    padding-left: 20px;
    padding-right: 10px;
  }

  .contactInfo ul li {
    position: relative;
    list-style: none;
    margin: 10px 0; 
    cursor: pointer;
    text-align: center;
  }
  .title1{
  text-transform: uppercase;
   color:fff;
    padding: 15px;
    font-size: 1.3em;
    font-weight: 600;
    text-align: center;

  }

  .education{
     padding: 20px;
  }

  
   .edu-p{
    color: #fff;
    text-align: center;
    font-weight:400;
    font-size: 1.2em;


   }

  .container .side2 {
    position: relative;
    background-color: #fff;
    padding: 40px;
    width:90%;
    min-height:800px;
  }



  .about {
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .experience{
    padding: 20px;
    margin-bottom: 20px;
  }


  .title{
    color: #003147;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  p{
    color: #272626;
    font-weight: 600;

  }

  .skills{
    padding: 20px;
    margin-bottom: 20px;
  }

  .skills .box {
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: center;
  }

  .skills .box h4 {
    color: #848c99;
  }

  .copy{
    position:absolute;
    text-align:Center;
    font-size:11px;
    color: black;
    bottom:10px;
  }
</style>
`;

  // Create the HTML content for the resume

  const resumeHTML = `
<html>
  <head>
    <title>Resume of ${name}</title>
    ${resumeStyles}
  </head>
  <body>
    <div class="container">
      <div class="side1">
        <div class="profileText">
          ${
            profilePictureURL
              ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-img">`
              : ""
          }
          <h2>${name}</h2>
          <span>${intro}</span>
        </div>
        <div class="contactInfo">
          <h2 class="title1">Contact Info</h2>
          <ul>
            <li>${email}</li>
            <li>${phone}</li
          </ul>
        </div>
        <div class="education">
          <h2 class="title1">Education</h2>
          <p class="edu-p">${education}</p>
        </div>
      </div>
      <div class="side2">
        <div class="about">
          <h2 class="title">About</h2>
          <p>${about}</p>
        </div>
        <div class="experience">
          <h2 class="title">Experience</h2>
          <p>${experience}</p>
        </div>
        <div class="skills">
          <h2 class="title">Skills</h2>
          <div class="box">
            <h4>${formattedSkills}</h4>
            <div class="copy">&copy; 2024 by Yusra Saleem . </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
  // Create a Blob object with the resume HTML content
  const blob = new Blob([resumeHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  // Create a temporary link element to trigger the download
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}-Resume.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Release the object URL
  URL.revokeObjectURL(url);
});
