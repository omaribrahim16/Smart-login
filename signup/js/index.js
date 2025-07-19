var signName = document.getElementById("signName");
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");
var userList = [];
var loginButton = document.getElementById("login");
var signEmailReg= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

if (localStorage.getItem("userList") !== null) {
    userList = JSON.parse(localStorage.getItem("userList"));
}else {
    userList = [];
} 

function add(){
    if(signName.value == "" || signEmail.value == "" || signPassword.value == "") {
        document.getElementById('message').innerHTML ='<p class= "text-center"> all inputs are required </p>';
    
    }else{
        if(signEmailReg.test(signEmail.value) == false){
            document.getElementById('message').innerHTML ='<p class= "text-center"> Invalid email format </p>';
            signEmail.value = '';
        }
        else if(checkEmail()){
            document.getElementById('message').innerHTML ='<p class= "text-center"> Email already exists </p>';
            signEmail.value = '';
        }
        else{
           
            var obj ={
            name: signName.value,
            email: signEmail.value,
            password: signPassword.value
        }
        userList.push(obj);
        location.href = "../../login/index.html";
        localStorage.setItem("userList", JSON.stringify(userList));
        }
        
    }
}


function checkEmail() {
    for (var i = 0; i < userList.length; i++) {
        if (signEmail.value == userList[i].email) {
            return true;
        }
        else{
            return false;
        }
    }
}

loginButton.addEventListener("click", add);