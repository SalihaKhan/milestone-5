const form= document.getElementById('Resume-Builder') as HTMLFormElement;
const dynamicResume = document.getElementById('Dynamic-resume') as HTMLDivElement;
const shareableLink =document.getElementById('ShareableLink') as HTMLDivElement;
const link =document.getElementById('Link') as HTMLAnchorElement;
const downloadPdf =document.getElementById('pdf-download') as HTMLButtonElement;

form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();


    const username=(document.getElementById('userName') as HTMLInputElement).value;
    const name=(document.getElementById('name') as HTMLInputElement).value;
    const fatherName=(document.getElementById('fatherName') as HTMLInputElement).value;
    const email=(document.getElementById('email') as HTMLInputElement).value;
    const contact=(document.getElementById('contact') as HTMLInputElement).value;
    const address=(document.getElementById('add') as HTMLInputElement).value;
    const education=(document.getElementById('fieldOfStudy') as HTMLInputElement).value;
    const degree=(document.getElementById('degree') as HTMLInputElement).value;
    const skills=(document.getElementById('skills') as HTMLInputElement).value;
    const experience=(document.getElementById('experience') as HTMLInputElement).value;
    const interest=(document.getElementById('interest') as HTMLInputElement).value;
      

    const resumeData = {
      name,
      fatherName,
      email,
      contact,
      address,
      education,
      degree,
      skills,
      experience,
      interest,
    }
    localStorage.setItem(username,JSON.stringify(resumeData));

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
     <p><b>Name:</b><span contentEditable="true">${name}</span></p>
     
    <h3>Personal information</h2> <br><br>
    <p><b>Fathername:</b><span contentEditable="true">${fatherName}</span></p>
    <p><b>Email:</b><span contentEditable="true">${email}</span></p>
    <p><b>Contact:</b><span contentEditable="true">${contact}</span></p> 
     <p><b>Address:</b><span contentEditable="true">${address}</span></p> 
     
     
    <h3>Education</h3>
    <p><b>Field of study:</b><span contentEditable="true">${education}</span></p> 
    <p><b>Degree:</b><span contentEditable="true">${degree}</span></p>


     <h3>Skills:</h3>
     <p contentEditable="true">${skills}</p>


     <h3>Experience:</h3>
     <p contentEditable="true">${experience}</p>

      <h3>Interest:</h3>
     <p contentEditable="true">${interest}</p>`;

   
       dynamicResume.innerHTML = resumeHTML;
      const shareableURL =
      `${window.location.origin}?userName=${(encodeURIComponent(username))}`;
      shareableLink.style.display ='block'
      link.href =shareableURL;
      link.textContent = shareableURL;
});

downloadPdf.addEventListener('click',() =>{
  window.print();
});
window.addEventListener('DOMContentLoaded', ()=> {
  const urlParams =new URLSearchParams(window.location.search);
  const userName = urlParams.get('username');

  if (userName){
    const savedResumeData = localStorage.getItem(userName);

    if(savedResumeData){
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById('userName') as HTMLInputElement).value = userName;
      (document.getElementById('name') as HTMLInputElement).value = userName;
      (document.getElementById('fatherName') as HTMLInputElement).value = userName;
      (document.getElementById('email') as HTMLInputElement).value = userName;
      (document.getElementById('contact') as HTMLInputElement).value = userName;
      (document.getElementById('add') as HTMLInputElement).value = userName;
      (document.getElementById('fieldOfstudy') as HTMLInputElement).value = userName;
      (document.getElementById('degree') as HTMLInputElement).value = userName;
      (document.getElementById('skills') as HTMLTextAreaElement).value = userName;
      (document.getElementById('experience') as HTMLTextAreaElement).value = userName;
      (document.getElementById('interest') as HTMLTextAreaElement).value = userName;

    }
    
  }
});