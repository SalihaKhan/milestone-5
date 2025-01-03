var form = document.getElementById('Resume-Builder');
var dynamicResume = document.getElementById('Dynamic-resume');
var shareableLink = document.getElementById('ShareableLink');
var link = document.getElementById('Link');
var downloadPdf = document.getElementById('pdf-download');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('userName').value;
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('add').value;
    var education = document.getElementById('fieldOfStudy').value;
    var degree = document.getElementById('degree').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var interest = document.getElementById('interest').value;
    var resumeData = {
        name: name,
        fatherName: fatherName,
        email: email,
        contact: contact,
        address: address,
        education: education,
        degree: degree,
        skills: skills,
        experience: experience,
        interest: interest,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n     <p><b>Name:</b><span contentEditable=\"true\">".concat(name, "</span></p>\n     \n    <h3>Personal information</h2> <br><br>\n    <p><b>Fathername:</b><span contentEditable=\"true\">").concat(fatherName, "</span></p>\n    <p><b>Email:</b><span contentEditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact:</b><span contentEditable=\"true\">").concat(contact, "</span></p> \n     <p><b>Address:</b><span contentEditable=\"true\">").concat(address, "</span></p> \n     \n     \n    <h3>Education</h3>\n    <p><b>Field of study:</b><span contentEditable=\"true\">").concat(education, "</span></p> \n    <p><b>Degree:</b><span contentEditable=\"true\">").concat(degree, "</span></p>\n\n\n     <h3>Skills:</h3>\n     <p contentEditable=\"true\">").concat(skills, "</p>\n\n\n     <h3>Experience:</h3>\n     <p contentEditable=\"true\">").concat(experience, "</p>\n\n      <h3>Interest:</h3>\n     <p contentEditable=\"true\">").concat(interest, "</p>");
    dynamicResume.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?userName=").concat((encodeURIComponent(username)));
    shareableLink.style.display = 'block';
    link.href = shareableURL;
    link.textContent = shareableURL;
});
downloadPdf.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get('username');
    if (userName) {
        var savedResumeData = localStorage.getItem(userName);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('userName').value = userName;
            document.getElementById('name').value = userName;
            document.getElementById('fatherName').value = userName;
            document.getElementById('email').value = userName;
            document.getElementById('contact').value = userName;
            document.getElementById('add').value = userName;
            document.getElementById('fieldOfstudy').value = userName;
            document.getElementById('degree').value = userName;
            document.getElementById('skills').value = userName;
            document.getElementById('experience').value = userName;
            document.getElementById('interest').value = userName;
        }
    }
});
