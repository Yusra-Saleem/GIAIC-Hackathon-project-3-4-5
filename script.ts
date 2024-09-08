// Select the form and resume display elements
const form = document.querySelector('form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;
const uniqueLink = document.getElementById('unique-link') as HTMLAnchorElement; // Ensure it's an anchor tag
const copyLinkBtn = document.getElementById('copy-link-btn') as HTMLButtonElement;
const shareSection = document.getElementById('share-section') as HTMLElement;

// Resume Fields (Dynamic display)
const displayName = document.getElementById('display-name') as HTMLElement;
const displayIntro = document.getElementById('display-introduction') as HTMLElement;
const displayAbout = document.getElementById('display-about') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;

// Handle Form Submission to Generate Resume
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect user input from the form
  const nameInput = document.querySelector('input[placeholder="Enter name here"]') as HTMLInputElement;
  const introInput = document.querySelector('textarea[name="introduction"]') as HTMLTextAreaElement;
  const aboutInput = document.querySelector('textarea[name="about"]') as HTMLTextAreaElement;
  const qualificationInput = document.getElementById('qualification') as HTMLInputElement;
  const experienceInput = document.querySelector('textarea[name="Experience"]') as HTMLTextAreaElement;
  const skillsInput = document.querySelector('textarea[name="skills"]') as HTMLTextAreaElement;
  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
  const phoneInput = document.querySelector('input[type="tel"]') as HTMLInputElement;
  const usernameInput = document.querySelector('input[name="username"]') as HTMLInputElement;

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
   const baseURL = window.location.href;
   const resumeURL = `${baseURL}?user=${encodeURIComponent(usernameInput.value)}`;
 
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
downloadBtn.addEventListener('click', () => {
  const name = displayName.textContent;
  const intro = displayIntro.textContent;
  const about = displayAbout.textContent;
  const education = displayEducation.textContent;
  const skills = displaySkills.textContent;
  const experience = displayExperience.textContent;
  const email = displayEmail.textContent;
  const phone = displayPhone.textContent;

  // Define the styles to be applied in the downloaded HTML
  const resumeStyles = `
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f9;
        color: #333;
        margin: 0;
        padding: 20px;
      }
      h1, h2, h3 {
        margin-bottom: 10px;
        color: #333;
      }
      p {
        margin-bottom: 15px;
        line-height: 1.6;
        color: #666;
      }
      #resume-display {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 30px;
        max-width: 800px;
        margin: 20px auto;
      }
      h1 {
        font-size: 2.5rem;
        color: #007bff;
        text-align: center;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 1.5rem;
        color: #007bff;
        margin-bottom: 10px;
      }
      h2 {
        margin-top: 30px;
        font-size: 1.8rem;
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
        color: #333;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      ul li {
        background-color: #f4f4f9;
        margin-bottom: 10px;
        padding: 10px;
        border-left: 4px solid #007bff;
        font-size: 1.1rem;
      }
      .contact-info p {
        margin-bottom: 5px;
        color: #007bff;
      }
    </style>
  `;


  // Create the HTML content for the resume
  const resumeHTML = `
    <html>
      <head><title>Resume of ${name}</title>
      ${resumeStyles}
      </head>
      <body>
        <h1>${name}</h1>
        <h3>${intro}</h3>
        <p>${about}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Contact</h2>
        <p>${email}</p>
        <p>${phone}</p>
      </body>
      
    </html>
  `;

  // Create a Blob for the HTML file
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${name}_resume.html`;
  link.click();
});
