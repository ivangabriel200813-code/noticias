// CADASTRO

const cadastroForm = document.getElementById("cadastroForm");

if(cadastroForm){

    cadastroForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("novoEmail").value;
        const senha = document.getElementById("novaSenha").value;

        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        alert("Cadastro realizado com sucesso!");

        window.location.href = "login.html";

    });

}

// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const emailSalvo = localStorage.getItem("email");
        const senhaSalva = localStorage.getItem("senha");

        if(email === emailSalvo && senha === senhaSalva){

            alert("Login realizado!");

            window.location.href = "index.html";

        }else{

            alert("Email ou senha incorretos!");

        }

    });
}
// RECUPERAR SENHA

const recuperarForm = document.getElementById("recuperarForm");

if(recuperarForm){

    recuperarForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("emailRecuperacao").value;
        const novaSenha = document.getElementById("novaSenhaRecuperada").value;

        const emailSalvo = localStorage.getItem("email");

        if(email === emailSalvo){

            localStorage.setItem("senha", novaSenha);

            alert("Senha alterada com sucesso!");

            window.location.href = "login.html";

        }else{

            alert("Email não encontrado!");

        }

    });

}