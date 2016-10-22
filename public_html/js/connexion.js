function clicked() {
    var login = document.getElementById('login')
    var pass =  document.getElementById('password')
    
    var corlog = "admin";
    var corpass = "inf2005";
    
    if(login.value == corlog){
        if(pass.value == corpass){
            window.open("../HTML/connexion.html");
        }else{
            window.alert("MAUVAIS MOT DE PASSE");
        }
    }else{
        window.alert("MAUVAIS LOGIN");
    }    
    
}
