function validaSenha() {
    senha = document.getElementById("senha").value;
    if(senha.length < 8) {
        alert("Senha fraca.");
        return 0
    }
   else {
       console.log('passou senha');
       return 1
    }
}
function validaEmail() {
    email = document.getElementById('email').value
    if(email.indexOf('@') == -1) {
        alert('Email inválido. Insira um email válido!');
        console.log('sem @');
        return 0
    }
    else {
        console.log('com @');
        if(email.indexOf('.com') == -1) {
            alert('Email inválido. Insira um email válido!');
            console.log('sem .com');
        }
        else {
            console.log('passou email');
            return 1
        }
    }
}
function validacao() {
    email = validaEmail()
    senha = validaSenha()    
    if(email == 1 && senha == 1) {
        avancar = document.getElementsByClassName('button')[0]
        avancar.outerHTML = '<a target="_self" href="feed.html"><button class="button" onclick="validaEmail()" onclick="validaSenha()" onclick="validacao()">Enviar</button></a>'
        console.log('Dados válidos')
    }
    else {
        console.log('Dados invalidos')
    }
}