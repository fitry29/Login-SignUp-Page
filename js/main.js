function showHidePassword(){
    const passwordInput = document.querySelector("#password");
    const confrimPasswordInput = document.querySelector("#confirm-password");
    const eye = document.querySelector("#eye");

    eye.addEventListener("click", function(){
        this.classList.toggle("fa-eye-slash");
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        confrimPasswordInput.setAttribute("type", type);
    })
}

let username = "Fitry29";
let pass = "1234asdf";
function validateForm() {
    let fUsername = document.forms["login-form"]["name"].value;
    let fPass = document.forms["login-form"]["password"].value;

    let errUsername = document.getElementById("username-err-msg");
    let errPass = document.getElementById("pass-err-msg");

    if(fUsername === username && fPass === pass){
        errUsername.innerHTML = "";
        errPass.innerHTML = "";
        alert("Login Succesful");
    }
    else if(fUsername == username){
        errUsername.innerHTML = "";
    }
    else if(fPass === pass){
        errPass.innerHTML = "";
    }
    if(fUsername != username && fPass != pass){
        errUsername.innerHTML = "Wrong username or password";
        errPass.innerHTML = "Wrong username or password";
        return false;
    }
    if(fUsername != username){
        errUsername.innerHTML = "Wrong username";
        return false;
    }
    if(fPass != pass){
        errPass.innerHTML = "Wrong password";
        return false;
    }
    return(true);
    
  }
