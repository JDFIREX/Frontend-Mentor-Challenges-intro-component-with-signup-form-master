window.addEventListener('resize', () => {
    heroImg()
});
window.addEventListener('load',heroImg());

function heroImg(){
    if(window.innerWidth > 1000){
        document.querySelector(".main").style.backgroundImage = 'url("images/bg-intro-desktop.png")';
    }else if( window.innerWidth <= 1000){
        document.querySelector(".main").style.backgroundImage = "url('images/bg-intro-mobile.png')";
    }
}

let nameInput = document.querySelector("#name")
let lastInput = document.querySelector("#last")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let Submit = document.querySelector("#submit");

Submit.addEventListener('click', (e) => Submitform(e));

function Submitform(e){
    let nameValue = nameInput.value;
    let lastValue = lastInput.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value
    
    let CheckName = CheckEmpty(nameValue,".name");
    let CheckLast = CheckEmpty(lastValue, ".last");
    let CheckEmail = Checkemail(emailValue);
    let CheckPass = CheckEmpty(passwordValue, ".password");
    let arr = [CheckName,CheckLast,CheckEmail,CheckPass];
    arr = arr.every(a => a)
    if(arr){
        window.location.reload();
        alert("pass")
    }
}


function CheckEmpty(v,t){
    let errormsg = document.querySelector(`${t} .error_msg`)
        errormsg.style.maxHeight = "0px";
        errormsg.style.visibility = "hidden";

    let result = v.toString().length > 0 ? true : false;
    if(result){
        return true;
    }else{
        errormsg.style.maxHeight = "auto";
        errormsg.style.visibility = "visible";
        return false;
    }
}
function Checkemail(e){
    let errormsg = document.querySelector(".email .error_msg")
        errormsg.style.maxHeight = "0px";
        errormsg.style.visibility = "hidden";

    let regex = new RegExp(/\w@\w+\.+\w/gi)
    let result = regex.test(e.toString());
    
    if(result){
        let indexMonkey = e.toString().indexOf("@");
        let string  = e.toString();
        string = string.slice(indexMonkey+1).split("");
        string.map(a => a == "@" ? result = false : null)
        if(result){
            let checknumber = string.map(a => parseInt(a) ? true : false);
            let numberNoInclude = checknumber.every(a => !a)
            result = numberNoInclude;
        }
    }

    if(result){
        return true;
    }else if(!result){
        errormsg.style.maxHeight = "auto";
        errormsg.style.visibility = "visible";
        return false;
    }
}