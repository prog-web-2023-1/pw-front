function validarBusca(){
    var valTexto = $("#txtBusca").val();

    var biblioteca1 = ["CANECA", "CANECAS"];
    var biblioteca2 = ["FUNKO","FUNKOS","FUNKO POP", "FUNKOS POP"];
    var biblioteca3 = ["CHAVEIRO", "CHAVEIROS"];

    var regraCaneca = new RegExp(biblioteca1.join("|"), "i");
    var regraFunko = new RegExp(biblioteca2.join("|"), "i");
    var regraChaveiro = new RegExp(biblioteca3.join("|"), "i");
    
    if(regraCaneca.test(valTexto.toUpperCase())){
        load();
        window.location.href = "../src/buscaCaneca.html";
    }
    else if(regraFunko.test(valTexto.toUpperCase())){
        load();
        window.location.href = "../src/buscaFunko.html";
    }
    else if(regraChaveiro.test(valTexto.toUpperCase())){
        load();
        window.location.href = "../src/buscaChaveiro.html";
    }else{
        alert("Não encontrado");
        valTexto.val("");
    }
}

function validarLogin(){
    var  email = $("#email").val();
    var  senha = $("#password").val();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(email == "" && senha == "") {        
        alert("Por favor, preencha todos os campos !!!");    
    }else if(!emailRegex.test(email)) {// Verificar se o e-mail é válido
        alert("Por favor, digite um e-mail válido.");
    }else if(!senhaRegex.test(senha) || !senhaRegex.test(confirmSenha)){
        alert("Respeite o padrão de senha: \n\n. Ao menos 8 caracteres; \n. Ao menos uma letra maiúscula; \n. Ao menos uma letra minúscula; \n. Ao menos um número \n. Ao menos um caractere especial (como !, @, #, $, %, etc.)");
    }
}

function validarHref(tipo) {
    if(tipo == "login"){
        window.location.href = "login.html";
    }else if(tipo == "cadastro"){
        window.location.href = "cadastro.html";
    }
}

function validarCadastro(){
    var nome = $("#firstname").val();
    var sobrenome = $("#lastname").val();
    var email = $("#email").val();
    var telefone = $("#number").val();
    var senha = $("#password").val();
    var confirmSenha = $("#Confirmpassword").val();
    var nomeRegex  = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telRegex   = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/;
    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;    

      // Verificar se os campos obrigatórios foram preenchidos
    if(nome == "" && sobrenome == "" && email == "" && telefone == "" && senha == "" && confirmSenha == "") {        
        alert("Por favor, preencha todos os campos !!!");    
    }
    else if(!nomeRegex.test(nome)){//Vericar se não há numeros no campo de nome
        alert("Não digite numeros no campo de nome.");
    }
    else if(!nomeRegex.test(sobrenome) && sobrenome != ""){//Vericar se não há numeros no campo de sobrenome
        alert("Não digite numeros no campo de sobrenome.");
    }
    else if (!emailRegex.test(email)) {// Verificar se o e-mail é válido
        alert("Por favor, digite um e-mail válido.");
    }
    else if (!telRegex.test(telefone)) {// Verificar se o telefone é válido
        alert("Por favor, digite um telefone válido.");    
    }
    else if(!senhaRegex.test(senha) || !senhaRegex.test(confirmSenha)){
        alert("Respeite o padrão de senha: \n\n. Ao menos 8 caracteres; \n. Ao menos uma letra maiúscula; \n. Ao menos uma letra minúscula; \n. Ao menos um número \n. Ao menos um caractere especial (como !, @, #, $, %, etc.)");
    }
    else if(senha != confirmSenha){
        alert("As senhas estão diferentes")
    }else{
        alert("Cadastro Realizado!");
    } 
}

function load(){
    $(".inicio").hide();
    jQuery("body").prepend('<div id="preloader" class="d-flex justify-content-center" style="margin-top:20%;margin-bottom:20%">' +
                                '<div class="spinner-border text-danger" role="status">' +
                                '</div>'+
                            '</div>');
    setInterval(function() {
        jQuery("#preloader").remove();
    }, 2000);
}