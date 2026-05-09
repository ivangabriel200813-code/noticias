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
// VERSICULOS AUTOMATICOS

const versiculos = [

    {
        texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.",
        referencia: "João 3:16"
    },

    {
        texto: "O Senhor é o meu pastor e nada me faltará.",
        referencia: "Salmos 23:1"
    },

    {
        texto: "Tudo posso naquele que me fortalece.",
        referencia: "Filipenses 4:13"
    },

    {
        texto: "Entrega o teu caminho ao Senhor; confia nele.",
        referencia: "Salmos 37:5"
    },

    {
        texto: "Não temas, porque eu sou contigo.",
        referencia: "Isaías 41:10"
    }

];

// PEGA O DIA ATUAL

const hoje = new Date().getDate();

// ESCOLHE O VERSICULO PELO DIA

const versiculoAtual = versiculos[hoje % versiculos.length];

// MOSTRA NA TELA

const texto = document.getElementById("versiculoTexto");
const referencia = document.getElementById("versiculoReferencia");

if(texto && referencia){

    texto.innerText = `"${versiculoAtual.texto}"`;

    referencia.innerText = versiculoAtual.referencia;

}
// MODO ESCURO

const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

}