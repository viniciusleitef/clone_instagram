let login = document.getElementById("login")
let senha = document.getElementById("senha")
let botaoLogin = document.getElementById("login_button")
console.log(login)

function varLogin(){
let texto_login = login.value
let texto_senha = senha.value
    if(texto_senha.length !== 0){
        if(texto_login.length !== 0){
            botaoLogin.style.opacity = "1.0"
        }
    }
}
