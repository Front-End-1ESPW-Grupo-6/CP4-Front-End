//Variaveis
let eyePassLogin = document.querySelector('#eyePasslogin');
let eyePassSignup = document.querySelector('#eyePassSignup');
let eyePassSignupConfirm = document.querySelector('#eyePassSignupConfirm');

let redirectSignup = document.querySelector('#redirectSignup');
let redirectLogin = document.querySelector('#redirectLogin');

let loginSubmitBtn = document.querySelector('#loginSubmitBtn');
let signupSubmitBtn = document.querySelector('#signupSubmitBtn');

function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 500);
    
});


//Icone olho
eyePassLogin.addEventListener('click', () => {
    console.log('Password hide')
    let textPassLogin = document.querySelector('#pass-Login-Input');
    eyePassLogin.classList.toggle("on");
    if (eyePassLogin.classList.contains("on")) {
        eyePassLogin.src = "../imgs/olho-aberto.png"
        textPassLogin.type = "password"
    } else {
        eyePassLogin.src = "../imgs/olho-vermelho.png"
        textPassLogin.type = "text"
    }
})
eyePassSignup.addEventListener('click', () => {
    console.log('Password hide')
    let textSignupPass = document.querySelector('#pass-Signup-Input');
    eyePassSignup.classList.toggle("on");
    if (eyePassSignup.classList.contains("on")) {
        eyePassSignup.src = "../imgs/olho-aberto.png"
        textSignupPass.type = "password"
    } else {
        eyePassSignup.src = "../imgs/olho-vermelho.png"
        textSignupPass.type = "text"
    }
})
eyePassSignupConfirm.addEventListener('click', () => {
    console.log('Password hide')
    let textSignupConfirmPass = document.querySelector('#passConfirm-Signup-Input');
    eyePassSignupConfirm.classList.toggle("on");
    if (eyePassSignupConfirm.classList.contains("on")) {
        eyePassSignupConfirm.src = "../imgs/olho-aberto.png"
        textSignupConfirmPass.type = "password"
    } else {
        eyePassSignupConfirm.src = "../imgs/olho-vermelho.png"
        textSignupConfirmPass.type = "text"
    }
})



//Troca de páginas
redirectSignup.addEventListener('click', () => {
    let loginContainer = document.querySelector('#loginContainer');
    let signupContainer = document.querySelector('#signupContainer');
    console.log('signup change')
    loginContainer.classList.add('hide')
    signupContainer.classList.add('show')
    signupContainer.classList.remove('hide')
})

redirectLogin.addEventListener('click', () => {
    let loginContainer = document.querySelector('#loginContainer');
    let signupContainer = document.querySelector('#signupContainer');
    console.log('signup change')
    loginContainer.classList.add('show')
    loginContainer.classList.remove('hide')
    signupContainer.classList.add('hide')
})



//Cadastro de usuário
let listaUser = JSON.parse(localStorage.getItem("usersList"))
console.log(listaUser)

if (listaUser == null) {
    console.log('Lista de usuarios nao encontrada, criando uma nova...')
    const admin1 = {  //Acesso GaloAdmin
        name: "GaloAdmin",
        nick: "GaloAdmin",
        email: "contatogalofiap@gmail.com",
        senhaUser: "123456",
        number: "11963752185",
    }
    const admin2 = {  //Acesso Admin
        name: "Admin",
        nick: "Admin",
        email: "Admin",
        senhaUser: "123456",
        number: "11963752185",
    }
    let userList = []
    userList.push(admin1)
    localStorage.setItem("usersList", JSON.stringify(userList))
} else {
    console.log('Lista de usuarios recuperada')
}


//Login de usuário
loginSubmitBtn.addEventListener("click", (evt) => {
    evt.preventDefault()

    let listaDeUsuario = JSON.parse(localStorage.getItem("usersList")); //Busca de contas no LocalStorage
    let baseInput = document.querySelector("#loginBaseInput").value;
    let senhaInput = document.querySelector("#pass-Login-Input").value;
    let loginAlert = document.querySelector("#loginAlert")

     //Validações de usuário e senha
    if (baseInput === "" || senhaInput === "") {
        loginAlert.innerHTML = 'Preencha todos os campos'
        loginAlert.classList.remove('hide')
        loginAlert.classList.add('redAlert')
    } else {
        const acharUsuario = listaDeUsuario.find(usuario => { //função .find para simplificar a busca de usuários
            return usuario.email === baseInput || usuario.cnpj === baseInput && usuario.senhaUser === senhaInput;
        });
        if (acharUsuario) {
            let logUser = [acharUsuario]; //define qual usuário foi logado
            localStorage.setItem("logedUser", JSON.stringify(logUser))
            localStorage.setItem("userLog", "1");
            console.log("Usuario Validado! Carregando pagina...")
            loginAlert.classList.remove('hide', 'redAlert')
            loginAlert.classList.add('greenAlert')
            loginAlert.innerHTML = "Login Efetuado! Redirecionando..."
            setTimeout(function () {
                window.location.href = "../HTML/home.html";
            }, 1000);
        } else {
            loginAlert.classList.remove('hide')
            loginAlert.classList.add('redAlert')
            loginAlert.innerHTML = "Usuario Invalido!"
            console.log("Usuario Invalido!")
        }
    }
})


//biblioteca para registro de telefone
new Cleave('#number-Signup-Input', {
    prefix: '+55',
    blocks: [3, 2, 5, 4],
    delimiters: ['(', ')', '-'],
    numericOnly: true
});

signupSubmitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    //Variáveis para cadastro
    let signupMsgAlert = document.querySelector('#signupAlert')
    let nameInput = document.querySelector('#name-Signup-Input').value;
    let nicknameInput = document.querySelector('#nick-Signup-Input').value;
    let emailInput = document.querySelector('#email-Signup-Input').value;
    let numberInput = document.querySelector('#number-Signup-Input').value;
    let passwordInput = document.querySelector('#pass-Signup-Input').value;
    let passConfirmInput = document.querySelector('#passConfirm-Signup-Input').value;


    //Confirmação de cadastro
    if (nameInput == "" || nicknameInput == "" || emailInput == "" || numberInput == "" || passwordInput == "" || passConfirmInput == "") {
        console.log('Todos os campos devem ser preenchidos');
        signupMsgAlert.innerHTML = 'Todos os campos devem ser preenchidos';
        signupMsgAlert.classList.add('redAlert');
        signupMsgAlert.classList.remove('hide');
        return;
    }
    //Validações email
    if (emailInput.length < 5) {
        console.log('Email deve conter mais de 5 letras');
        signupMsgAlert.innerHTML = 'Email deve conter mais de 5 caracteres';
        signupMsgAlert.classList.add('redAlert');
        signupMsgAlert.classList.remove('hide');
        return;
    } else if (emailInput.indexOf('@') === -1) {
        console.log('Email invalido, deve conter "@"');
        signupMsgAlert.innerHTML = 'Email invalido, deve conter "@"';
        signupMsgAlert.classList.add('redAlert');
        signupMsgAlert.classList.remove('hide');
        return;
    }
    //Validações número de telefone
    if (numberInput.length < 17) {
        console.log('O número de telefone deve conter 11 dígitos');
        signupMsgAlert.innerHTML = 'O número de telefone deve conter 11 dígitos';
        signupMsgAlert.classList.add('redAlert');
        signupMsgAlert.classList.remove('hide');
        return;
    }
    //Validações senha
    if (passwordInput.length < 6) {
        console.log('Senha deve conter no minimo 6 digitos');
        signupMsgAlert.innerHTML = 'Senha deve conter no minimo 6 digitos'
        signupMsgAlert.classList.add('redAlert');
        signupMsgAlert.classList.remove('hide');
        return;
    }
    //Validações confirmação de senha
    if (passConfirmInput != passwordInput) {
        console.log('Senhas digitadas não coincidem');
        signupMsgAlert.innerHTML = 'Senhas digitadas não coincidem';
        signupMsgAlert.classList.add('redAlert');
        signupMsgAlert.classList.remove('hide');
        return;
    }

    const newUser = {
        name: nameInput,
        nick: nicknameInput,
        email: emailInput,
        number: numberInput,
        password: passwordInput
    }
    console.log(newUser)


    //Armazenar dados de novo usuário
    let UsersListBack = JSON.parse(localStorage.getItem("usersList"));
    UsersListBack.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(UsersListBack));


    //Respostas do site
    console.log('Cadastro efetuado com sucesso!');
    signupMsgAlert.classList.remove('redAlert');
    signupMsgAlert.classList.add('greenAlert');
    signupMsgAlert.innerHTML = 'Cadastro efetuado com sucesso!';


    //Limpar caixas de texto
    let nameInputClear = document.querySelector('#name-Signup-Input');
    let nicknameInputClear = document.querySelector('#nick-Signup-Input');
    let emailInputClear = document.querySelector('#email-Signup-Input');
    let numberInputClear = document.querySelector('#number-Signup-Input');
    let passwordInputClear = document.querySelector('#pass-Signup-Input');
    let passConfirmInputClear = document.querySelector('#passConfirm-Signup-Input');
    nameInputClear.value = ""
    nicknameInputClear.value = ""
    emailInputClear.value = ""
    numberInputClear.value = ""
    passwordInputClear.value = ""
    passConfirmInputClear.value = ""
})
