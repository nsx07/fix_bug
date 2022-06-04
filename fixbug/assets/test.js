function validaSenha() {
    senha = document.getElementById("senha").value;
    if (senha.length < 8) {
        alert("Senha fraca.");
        return 0
    } else {
        console.log('passou senha');
        return 1
    }
}

function validaEmail() {
    email = document.getElementById('email').value
    if (email.indexOf('@') == -1) {
        alert('Email inválido. Insira um email válido!');
        console.log('sem @');
        return 0
    } else {
        console.log('com @');
        if (email.indexOf('.com') == -1) {
            alert('Email inválido. Insira um email válido!');
            console.log('sem .com');
        } else {
            console.log('passou email');
            return 1
        }
    }
}
var usuarios = armazena_usuario();

function cadastrarUser() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senha_confirma = document.getElementById('confirma_senha').value;

    if (senha == senha_confirma) {
        if (validaSenha() == 1) {
            if (email == undefined) {
                usuarios = [{ email, senha }];
            }
            if (validaEmail() == 1) {
                for (i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].email == email) {
                        alert('email já está em uso!')
                        var em_uso = true
                        break
                    } else {
                        em_uso = false
                    }

                }
                if (em_uso == false) {
                    usuarios.push({ email, senha });
                    alert('cadastrou!');
                    document.location = 'feed.html';
                }
            } else {
                return;
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        } else {
            return;
        }
    } else {
        alert('As senhas não são iguais');
    }
}

function logar_usuario() {
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    for (i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            if (usuarios[i].senha == senha) {
                console.log('Login efetuado com sucesso');
                document.location = 'feed.html';
                return;
            } else {
                alert('Senha incorreta.');
                return;
            }
        }

    }
    alert('Email e senha inexistem!');
    console.log(email, senha);
}

function armazena_usuario() {
    return JSON.parse(localStorage.getItem("usuarios"));
}

function validacao() {
    email = validaEmail();
    senha = validaSenha();
    if (email == 1 && senha == 1) {
        console.log('Dados válidos');
    } else {
        console.log('Dados invalidos');
    }
    logar_usuario();
}