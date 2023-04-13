
function validarCadastro(){

    var  nome = document.getElementById("firstname").value;
    var  sobrenome = document.getElementById("lastname").value;
    var  email = document.getElementById("email").value;
    var  telefone = document.getElementById("number").value;
    var  senha = document.getElementById("password").value;
    var  confirmSenha = document.getElementById("Confirmpassword").value;
    var nomeRegex  = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telRegex   = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/;
    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

      // Verificar se os campos obrigatórios foram preenchidos
    if(nome == "" || sobrenome == "" || email == "" || telefone == "" || senha == "" || confirmSenha == "") {
        
        alert("Por favor, preencha todos os campos !!!");
    
    
    }else if(!nomeRegex.test(nome)){//Vericar se não há numeros no campo de nome
        alert("Não digite numeros no campo de nome.");

    }else if(!nomeRegex.test(sobrenome)){//Vericar se não há numeros no campo de sobrenome
        alert("Não digite numeros no campo de sobrenome.");

    }else if (!emailRegex.test(email)) {// Verificar se o e-mail é válido
        alert("Por favor, digite um e-mail válido.");

    }else if (!telRegex.test(telefone)) {// Verificar se o telefone é válido
        alert("Por favor, digite um telefone válido.");
    
    }else if(!senhaRegex.test(senha) || !senhaRegex.test(confirmSenha)){
        alert("Respeite o padrão de senha: \n\n. Ao menos 8 caracteres; \n. Ao menos uma letra maiúscula; \n. Ao menos uma letra minúscula; \n. Ao menos um número \n. Ao menos um caractere especial (como !, @, #, $, %, etc.)");

    }else if(senha != confirmSenha){
        alert("As senhas estão diferentes")
    }else{
        alert("Tudo certo");
    } 
}