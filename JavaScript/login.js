//Variaveis
let eyePassLogin = document.querySelector('#eyePasslogin');
let eyePassSignup = document.querySelector('#eyePassSignup');
let eyePassSignupConfirm = document.querySelector('#eyePassSignupConfirm');
let eyePassOngSignup = document.querySelector('#eyePassOngSignup');
let eyePassOngSignupConfirm = document.querySelector('#eyePassOngSignupConfirm');

let redirectSignup = document.querySelector('#redirectSignup');
let redirectLogin = document.querySelector('#redirectLogin');
let redirectOngSignup = document.querySelector('#redirectOngSignup');
let redirectLoginOng = document.querySelector('#redirectLoginOng');
let redirectSignupOng = document.querySelector('#redirectSignup-Ong');

let loginSubmitBtn = document.querySelector('#loginSubmitBtn');
let signupSubmitBtn = document.querySelector('#signupSubmitBtn');
let signupOngSubmitBtn = document.querySelector('#signupOngSubmitBtn');

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
eyePassOngSignup.addEventListener('click', () => {
    console.log('Password hide')
    let textOngPass = document.querySelector('#pass-OSignup-Input');
    eyePassOngSignup.classList.toggle("on");
    if (eyePassOngSignup.classList.contains("on")) {
        eyePassOngSignup.src = "../imgs/olho-aberto.png"
        textOngPass.type = "password"
    } else {
        eyePassOngSignup.src = "../imgs/olho-vermelho.png"
        textOngPass.type = "text"
    }
})
eyePassOngSignupConfirm.addEventListener('click', () => {
    console.log('Password hide')
    let textOngConfirmPass = document.querySelector('#passConfirm-OSignup-Input');
    eyePassOngSignupConfirm.classList.toggle("on");
    if (eyePassOngSignupConfirm.classList.contains("on")) {
        eyePassOngSignupConfirm.src = "../imgs/olho-aberto.png"
        textOngConfirmPass.type = "password"
    } else {
        eyePassOngSignupConfirm.src = "../imgs/olho-vermelho.png"
        textOngConfirmPass.type = "text"
    }
})


//Troca de páginas
redirectSignup.addEventListener('click', () => {
    let loginContainer = document.querySelector('#loginContainer');
    let signupContainer = document.querySelector('#signupContainer');
    let signupOngContainer = document.querySelector('#signupOngContainer');
    console.log('signup change')
    loginContainer.classList.add('hide')
    signupContainer.classList.add('show')
    signupContainer.classList.remove('hide')
    signupOngContainer.classList.add('hide')
})

redirectLogin.addEventListener('click', () => {
    let loginContainer = document.querySelector('#loginContainer');
    let signupContainer = document.querySelector('#signupContainer');
    let signupOngContainer = document.querySelector('#signupOngContainer');
    console.log('signup change')
    loginContainer.classList.add('show')
    loginContainer.classList.remove('hide')
    signupContainer.classList.add('hide')
    signupOngContainer.classList.add('hide')
})

redirectOngSignup.addEventListener('click', () => {
    let signupContainer = document.querySelector('#signupContainer');
    let signupOngContainer = document.querySelector('#signupOngContainer');
    console.log('signup change')
    signupContainer.classList.add('hide')
    signupOngContainer.classList.add('show')
    signupOngContainer.classList.remove('hide')
})
redirectLoginOng.addEventListener('click', () => {
    let loginContainer = document.querySelector('#loginContainer');
    let signupContainer = document.querySelector('#signupContainer');
    let signupOngContainer = document.querySelector('#signupOngContainer');
    console.log('signup change')
    loginContainer.classList.add('show')
    loginContainer.classList.remove('hide')
    signupContainer.classList.add('hide')
    signupOngContainer.classList.add('hide')
})
redirectSignupOng.addEventListener('click', () => {
    let loginContainer = document.querySelector('#loginContainer');
    let signupContainer = document.querySelector('#signupContainer');
    let signupOngContainer = document.querySelector('#signupOngContainer');
    console.log('signup change')
    signupContainer.classList.add('show')
    signupContainer.classList.remove('hide')
    signupOngContainer.classList.add('hide')
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
        accountType: "ONG"
    }
    const admin2 = {  //Acesso Admin
        name: "Admin",
        nick: "Admin",
        email: "Admin",
        senhaUser: "123456",
        number: "11963752185",
        accountType: "ONG"
    }
    let userList = []
    userList.push(admin)
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
                window.location.href = "./index.html";
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
        accountType: "user",
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

//Sistema de Cadastro de ONG
new Cleave('#cnpj-OSignup-Input', {
    blocks: [2, 3, 3, 4, 2],
    delimiters: ['.', '.', '/', '-'],
    numericOnly: true
});
new Cleave('#number-OSignup-Input', {
    prefix: '+55',
    blocks: [3, 2, 5, 4],
    delimiters: ['(', ')', '-'],
    numericOnly: true
});
signupOngSubmitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    //Variáveis de cadastro de ONG
    let signupOngMsgAlert = document.querySelector('#signupOngAlert')
    let nameOngInput = document.querySelector('#name-OSignup-Input').value;
    let agentOngInput = document.querySelector('#agent-OSignup-Input').value;
    let emailOngInput = document.querySelector('#email-OSignup-Input').value;
    let numberOngInput = document.querySelector('#number-OSignup-Input').value;
    let cnpjOngInput = document.querySelector('#cnpj-OSignup-Input').value;
    let addressOngInput = document.querySelector('#address-OSignup-Input').value;
    let passwordOngInput = document.querySelector('#pass-OSignup-Input').value;
    let passConfirmOngInput = document.querySelector('#passConfirm-OSignup-Input').value;

    //Confirmação de cadastro de ONG
    if (nameOngInput == "" || agentOngInput == "" || emailOngInput == "" || numberOngInput == "" || cnpjOngInput == "" || addressOngInput == "" || passwordOngInput == "" || passConfirmOngInput == "") {
        console.log('Todos os campos devem ser preenchidos');
        signupOngMsgAlert.innerHTML = 'Todos os campos devem ser preenchidos';
        signupOngMsgAlert.classList.remove('hide');
        signupOngMsgAlert.classList.add('redAlert');
        return;
    }

    //Validações de email de ONG
    if (emailOngInput.length < 5) {
        console.log('Email deve conter mais de 5 letras');
        signupOngMsgAlert.innerHTML = 'Email deve conter mais de 5 caracteres';
        signupOngMsgAlert.classList.remove('hide')
        signupOngMsgAlert.classList.add('redAlert');
        return;
    } else if (emailOngInput.indexOf('@') === -1) {
        console.log('Email invalido, deve conter "@"');
        signupOngMsgAlert.innerHTML = 'Email invalido, deve conter "@"';
        signupOngMsgAlert.classList.remove('hide')
        signupOngMsgAlert.classList.add('redAlert');
        return;
    }
    //Validações de número de ONG
    if (numberOngInput.length < 17) {
        console.log('O número de telefone deve conter 11 dígitos');
        signupOngMsgAlert.innerHTML = 'O número de telefone deve conter 11 dígitos';
        signupOngMsgAlert.classList.remove('hide')
        signupOngMsgAlert.classList.add('redAlert');
        return;
    }
    //Validações CNPJ de ONG
    if (cnpjOngInput.length < 18) {
        console.log('O CNPJ deve conter 14 dígitos');
        signupOngMsgAlert.innerHTML = 'O CNPJ deve conter 14 dígitos';
        signupOngMsgAlert.classList.remove('hide')
        signupOngMsgAlert.classList.add('redAlert');
        return;
    }
    //Validações senha de ONG
    if (passwordOngInput.length < 6) {
        console.log('Senha deve conter no minimo 6 digitos');
        signupOngMsgAlert.innerHTML = 'Senha deve conter no minimo 6 digitos'
        signupOngMsgAlert.classList.remove('hide')
        signupOngMsgAlert.classList.add('redAlert');
        return;
    }
    //Validações confirmação de senha de ONG
    if (passConfirmOngInput != passwordOngInput) {
        console.log('Senhas digitadas não coincidem');
        signupOngMsgAlert.innerHTML = 'Senhas digitadas não coincidem';
        signupOngMsgAlert.classList.remove('hide')
        signupOngMsgAlert.classList.add('redAlert');
        return;
    }

    const newUser = {
        name: nameOngInput,
        ongAgent: agentOngInput,
        emailUser: emailOngInput,
        number: numberOngInput,
        cnpj: cnpjOngInput,
        password: passwordOngInput,
        accountType: "ONG"
    }
    console.log(newUser)

    //Armazenar dados de ONG
    let UsersListBack = JSON.parse(localStorage.getItem("usersList"));
    UsersListBack.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(UsersListBack));

    //Reações do site para ONG
    console.log('Cadastro efetuado com sucesso!');
    signupOngMsgAlert.classList.remove('redAlert', 'hide');
    signupOngMsgAlert.classList.add('greenAlert');
    signupOngMsgAlert.innerHTML = 'Cadastro efetuado com sucesso!';

    //Limpar caixas de texto de ONG
    let nameOngInputClear = document.querySelector('#name-OSignup-Input');
    let agentOngInputClear = document.querySelector('#agent-OSignup-Input');
    let emailOngInputClear = document.querySelector('#email-OSignup-Input');
    let numberOngInputClear = document.querySelector('#number-Signup-Input');
    let cnpjOngInputClear = document.querySelector('#cnpj-OSignup-Input');
    let addressOngInputClear = document.querySelector('#address-OSignup-Input');
    let passwordOngInputClear = document.querySelector('#pass-OSignup-Input');
    let passConfirmOngInputClear = document.querySelector('#passConfirm-OSignup-Input');
    nameOngInputClear.value = ""
    agentOngInputClear.value = ""
    emailOngInputClear.value = ""
    numberOngInputClear.value = ""
    cnpjOngInputClear.value = ""
    addressOngInputClear.value = ""
    passwordOngInputClear.value = ""
    passConfirmOngInputClear.value = ""
})

