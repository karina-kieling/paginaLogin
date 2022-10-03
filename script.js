function logar(){

    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert ('Sucesso');
    }else{
        alert ('Usuario ou senha incorretos');
    }
}
