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