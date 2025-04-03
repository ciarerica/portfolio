let yesBtn = document.querySelector(".yesContainer");
let noBtn = document.querySelector(".noContainer");
let sendBtn = document.querySelector(".sendMsg");
let confirmationContainer = document.querySelector(".confirmationContainer");
let contactForm = document.querySelector(".contactForm");

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    confirmationContainer.style.display = 'flex';
})



noBtn.addEventListener("click", ()=>{
    confirmationContainer.style.display = 'none';
}); 

yesBtn.addEventListener("click", ()=>{
    confirmationContainer.style.display = 'none';
    /*
    let firstNameParagraph = document.querySelector(".fNameParagraph");
    let lastNameParagraph = document.querySelector(".lNameParagraph");
    let emailParagraph = document.querySelector(".emailParagraph");
    let messageParagraph = document.querySelector(".messageParagraph");
    */
    let informationContainer = document.querySelector(".informationContainer");
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let information = document.querySelector(".information");
    
    informationContainer.style.display = 'flex';
    information.innerHTML = `First Name: ${firstName} <br>
                             Last Name: ${lastName} <br>
                             Email: ${email} <br>
                             Message: ${message}`;


    let backBtn = document.querySelector(".backBtn");
    backBtn.addEventListener("click", ()=>{
        informationContainer.style.display = 'none';
        contactForm.reset();    
    })
});     

