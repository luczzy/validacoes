// CÓDIGO DE VALIDAÇÃO DE EMAIL
//--------------------------------------------------------------------------------
function checarEmail(){
    
    // Obtem o valor do campo de email
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf('@') == -1 ||
       document.forms[0].email.value.indexOf('.') == -1){
        // Verifica se o email inserido é válido
        alert("Por favor, informe um e-mail válido");
        return false;
        // Se o email informado for o correto, ira aparecer um alert na tela
       }else alert("Email informado com sucesso")
        document.getElementById('email').innerHTML = document.forms[0].email.value;
       }
    
