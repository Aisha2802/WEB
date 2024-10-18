document.addEventListener("DOMContentLoaded", function() {
    const btnAcceso = document.getElementById("btnAcceso");
    
    btnAcceso.addEventListener("click", function(event) {
        
        const usuario = document.getElementById("usuario").value;
        const pass = document.getElementById("pass").value;
        const message = document.getElementById("message");
        if(usuario!=""&&pass!=""){
            if(usuario=="ANA"){
                if(pass=="1234"){
                   message.style.color="green";
                   message.innerHTML="Datos, correctos :)"
                   window.location.href = "principal.html";
                }else{
                 message.style.color="red";
                 message.innerHTML="usuario y/o contraseña incorrectos"
                }
            }else{
                message.style.color="red";
                message.innerHTML="usuario y/o contraseña incorrectos" 
            }
        }else{
            message.style.color="yellow";
            message.innerHTML="Por favor, ingresa todos los campos." 
        }
    });
});