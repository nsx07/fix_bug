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
    email = validaEmail();
    senha = validaSenha();   
    if(email == 1 && senha == 1) {
        avancar = document.getElementsByClassName('button')[0];
        avancar.outerHTML = '<a target="_self" href="feed.html"><button class="button" onclick="validaEmail()" onclick="validaSenha()" onclick="validacao()">Enviar</button></a>';
        console.log('Dados válidos');
    }
    else {
        console.log('Dados invalidos');
    }
}
usuarios = cadastra_usuario()
function cadastrarUser() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var senha_confirma = document.getElementById('senha_confirma');
    
    if(senha == senha_confirma) {
        if(email == undefined){
            usuarios = [{ email, senha }]
        } else {
            usuarios.push({ email, senha })
        }
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
    } else {
        alert('As senhas não são iguais')
    }
}
function loga_usuario() {
    email = document.getElementById('email').value;
    senha = docuemnt.getElementById('senha').value;
    for(i=0; i < usuario.length; i++) {
        if(email[i].usuarios == email){
            if(senha[i].usuarios == senha){
                alert('Login efetuado com sucesso');
                document.location = '/feed.html';
                return;
            }
            else {
                alert('Senha incorreta.');
                return;
            }
        }
        
    }
    alert('Email e senha inexistem!')

}
function armazena_usuarios(){
    return JSON.parse(localStorage.getItem('usuarios'))
}