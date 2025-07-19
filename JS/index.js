var userList = JSON.parse(localStorage.getItem("userList"));
var signName = document.getElementById("signName");
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");

document.getElementById("login").addEventListener("click", function() {
    if(signEmail.value =='' || signPassword.value == '') {
        document.getElementById('message').innerHTML = '<p class="text-center">All inputs are required</p>';}
        else{
            validateUser();
        
        }
    }
)

function validateUser() {
    for (var i = 0; i < userList.length; i++) {
        if(signEmail.value == userList[i].email && signPassword.value == userList[i].password){
            var currentUser = userList[i].name;
            localStorage.setItem('currentUser', currentUser);
            location.href='../welcome.html';
            break;
        }
        else{
            document.getElementById('message').innerHTML = '<p class="text-center">Invalid email or password</p>';
            signEmail.value = '';
            signPassword.value = '';
            break;
        }
    }
}



