function masuk(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let alert_name = document.getElementById("alert-nm");
    let alert_pass = document.getElementById("alert-ps");

    if (username == "admin"){
        alert_name.innerHTML = "" ;
        if (password == "admin"){
            window.location.replace("../Dashboard/tables.html")
        }else if (password == ""){
            alert_pass.innerHTML = "*Masukan Password" ;
        }else{
            alert_pass.innerHTML = "*Password Salah" ;
        }
    }else if(username == ""){
        alert_name.innerHTML = "*Masukan Username";
    }else{
        alert_name.innerHTML = "*Username Salah";
    }
}

function lupa(){
    window.alert("Username : admin\nPassword : admin");
}