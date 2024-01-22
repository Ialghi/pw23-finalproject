function daftar(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let alert_nm = document.getElementById("alert-nm");
    let alert_em = document.getElementById("alert-em");
    let alert_ps = document.getElementById("alert-ps");

    if (username == ""){
        alert_nm.innerHTML = "*Masukan Username"
    }else{
        alert_nm.innerHTML = ""
        if (email == ""){
            alert_em.innerHTML = "*Masukan Email"
        }else{
            alert_em.innerHTML = ""
            if (password == ""){
                alert_ps.innerHTML = "*Masukan Password"
            }else{
                window.location.replace("../Login & Register/login.html")
            }
        }
    }
}