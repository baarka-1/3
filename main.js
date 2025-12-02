
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirm-password");
const form = document.querySelector("#form");
const showError = (input,message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const erroricon = parentElement.querySelectorAll("i")[1];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    small.innerText = message;
}
const showSuccess = (input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const successIcon = parentElement.querySelectorAll("i")[0];
    const erroricon = parentElement.querySelectorAll("i")[1];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";

}


// Function to check empty fields
const checkEmpty = (elements) => {
    elements.forEach((element) => {
        if (element.value === '') {  
            showError(element,'input required');
        }else{
            showSuccess(element);
        }
    });
};

const checkEmail = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{\}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // hubi in email.value la isticmaalo
    if (reg.test(email.value)) {
        showSuccess(email);
    } else {
        showError(email, 'invalid email');
    }
};
 const checkPasswordLength = (input,min,max) =>{
    if(input.value.length < min){
        showError(input, `password atleast ${min} character`);
    }else if (input.value.length > max){
        showError(input,`password maximum character is ${max}`);
    }else{
        showSuccess(input);
    }
    };

 

// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkEmpty([username, email, password, confirmpassword]);
    checkEmail(email);
    checkPasswordLength(password,6,10);
    checkPasswordLength(confirmpassowrd,6,10);

});
