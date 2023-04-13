
function validarLogin(){

    var  email = document.getElementById("email").value;
    var  senha = document.getElementById("password").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(email == "" || senha == "") {
        
        alert("Por favor, preencha todos os campos !!!");
    
    
    }else if(!emailRegex.test(email)) {// Verificar se o e-mail é válido
        alert("Por favor, digite um e-mail válido.");

    }else if(!senhaRegex.test(senha) || !senhaRegex.test(confirmSenha)){
        alert("Respeite o padrão de senha: \n\n. Ao menos 8 caracteres; \n. Ao menos uma letra maiúscula; \n. Ao menos uma letra minúscula; \n. Ao menos um número \n. Ao menos um caractere especial (como !, @, #, $, %, etc.)");

    }

}