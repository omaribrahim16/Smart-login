document.getElementById("userName").innerHTML = localStorage.getItem("currentUser");

document.getElementById("logout").addEventListener("click", function (){
    localStorage.removeItem("currentUser");
    location.href = "../index.html";
})