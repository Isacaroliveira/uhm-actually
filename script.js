/* =========================================================
   UHM, ACTUALLY...
   JavaScript principal
   Firebase Authentication + verificação por código
========================================================= */


/* =========================================================
   FIREBASE
========================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyBXrHueOkR79dmIiqZgKzQWGwVvP3jWH7A",
    authDomain: "uhm-actually.firebaseapp.com",
    projectId: "uhm-actually",
    storageBucket: "uhm-actually.firebasestorage.app",
    messagingSenderId: "727676725999",
    appId: "1:727676725999:web:e35929041bb4eb412e491a",
    measurementId: "G-41RCZ4QV33"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();


/* =========================================================
   CLOUDFLARE WORKER
========================================================= */

const VERIFICATION_API =
    "https://uhm-actually-verification.isabellacarolini450.workers.dev/";

let verificacao = {
    finalidade: null,
    email: "",
    senha: "",
    ultimoEnvio: 0
};


/* =========================================================
   ELEMENTOS
========================================================= */

const authOverlay = document.getElementById("auth-overlay");
const authDeslogado = document.getElementById("auth-deslogado");
const authLogado = document.getElementById("auth-logado");

const authForm = document.getElementById("auth-form");
const authEmail = document.getElementById("auth-email");
const authSenha = document.getElementById("auth-senha");

const authCriar = document.getElementById("auth-criar");
const authRecuperar = document.getElementById("auth-recuperar");
const authSair = document.getElementById("auth-sair");

const authMensagem = document.getElementById("auth-mensagem");
const authEmailLogado = document.getElementById("auth-email-logado");

const botaoConta = document.getElementById("botao-conta");
const alunoEmail = document.getElementById("aluno-email");

const formAlterarSenha = document.getElementById(
    "form-alterar-senha-menu"
);

const novaSenha = document.getElementById("nova-senha-menu");

const confirmarNovaSenha = document.getElementById(
    "confirmar-nova-senha-menu"
);

const senhaMensagem = document.getElementById(
    "senha-mensagem-menu"
);


/* =========================================================
   ELEMENTOS DA VERIFICAÇÃO
========================================================= */

const authVerificacao = document.getElementById(
    "auth-verificacao"
);

const authVerificacaoForm = document.getElementById(
    "auth-verificacao-form"
);

const authVerificacaoEmail = document.getElementById(
    "auth-verificacao-email"
);

const authVerificacaoTitulo = document.getElementById(
    "auth-verificacao-titulo"
);

const authCodigo = document.getElementById(
    "auth-codigo"
);

const authReenviarCodigo = document.getElementById(
    "auth-reenviar-codigo"
);

const authVoltarVerificacao = document.getElementById(
    "auth-voltar-verificacao"
);

const authVerificacaoMensagem = document.getElementById(
    "auth-verificacao-mensagem"
);


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function mostrarPagina(id) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    const paginaDestino = document.getElementById(id);

    if (paginaDestino) {
        paginaDestino.classList.add("ativa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function irParaAulas() {

    mostrarPagina("home");

    setTimeout(() => {

        const aulas = document.getElementById("aulas");

        if (aulas) {
            aulas.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }, 100);
}


/* =========================================================
   MENU MOBILE
========================================================= */

function alternarMenu() {

    const menu = document.getElementById("menu-principal");
    const botao = document.querySelector(".menu-hamburguer");

    if (!menu) return;

    menu.classList.toggle("aberto");

    const aberto = menu.classList.contains("aberto");

    if (botao) {
        botao.setAttribute(
            "aria-expanded",
            aberto ? "true" : "false"
        );
    }
}


function fecharMenu() {

    const menu = document.getElementById("menu-principal");
    const botao = document.querySelector(".menu-hamburguer");

    if (menu) {
        menu.classList.remove("aberto");
    }

    if (botao) {
        botao.setAttribute("aria-expanded", "false");
    }
}


/* =========================================================
   ABRIR / FECHAR LOGIN
========================================================= */

function abrirConta() {

    fecharMenu();

    if (!authOverlay) return;

    authOverlay.classList.add("ativo");
    authOverlay.classList.add("aberto");

    authOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-aberto");
    document.body.classList.add("auth-travado");

    atualizarTelaConta(auth.currentUser);
}


function fecharConta() {

    if (!authOverlay) return;

    authOverlay.classList.remove("ativo");
    authOverlay.classList.remove("aberto");

    authOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-aberto");
    document.body.classList.remove("auth-travado");

    limparMensagemAuth();
    fecharTelaVerificacao();
}


/* =========================================================
   MENSAGENS
========================================================= */

function mostrarMensagemAuth(texto, tipo = "") {

    if (!authMensagem) return;

    authMensagem.hidden = false;
    authMensagem.textContent = texto;

    authMensagem.classList.remove(
        "erro",
        "sucesso"
    );

    if (tipo) {
        authMensagem.classList.add(tipo);
    }
}


function limparMensagemAuth() {

    if (!authMensagem) return;

    authMensagem.textContent = "";

    authMensagem.classList.remove(
        "erro",
        "sucesso"
    );
}


function mostrarMensagemVerificacao(
    texto,
    tipo = ""
) {

    if (!authVerificacaoMensagem) return;

    authVerificacaoMensagem.textContent = texto;

    authVerificacaoMensagem.classList.remove(
        "erro",
        "sucesso"
    );

    if (tipo) {
        authVerificacaoMensagem.classList.add(tipo);
    }
}


function limparMensagemVerificacao() {

    if (!authVerificacaoMensagem) return;

    authVerificacaoMensagem.textContent = "";

    authVerificacaoMensagem.classList.remove(
        "erro",
        "sucesso"
    );
}


/* =========================================================
   TRADUZ ERROS DO FIREBASE
========================================================= */

function traduzirErroFirebase(erro) {

    const codigo = erro?.code || "";

    const erros = {

        "auth/invalid-email":
            "Digite um endereço de e-mail válido.",

        "auth/missing-password":
            "Digite sua senha.",

        "auth/weak-password":
            "Sua senha precisa ter pelo menos 6 caracteres.",

        "auth/email-already-in-use":
            "Já existe uma conta cadastrada com esse e-mail.",

        "auth/user-not-found":
            "Não encontramos uma conta com esse e-mail.",

        "auth/wrong-password":
            "A senha está incorreta.",

        "auth/invalid-credential":
            "E-mail ou senha incorretos.",

        "auth/too-many-requests":
            "Muitas tentativas foram feitas. Aguarde um pouco e tente novamente.",

        "auth/network-request-failed":
            "Não foi possível conectar ao servidor. Verifique sua internet.",

        "auth/user-disabled":
            "Esta conta foi desativada.",

        "auth/requires-recent-login":
            "Por segurança, saia da conta, entre novamente e tente alterar a senha.",

        "auth/operation-not-allowed":
            "Esse método de login ainda não está habilitado no Firebase."
    };

    return (
        erros[codigo] ||
        "Não foi possível concluir a ação. Tente novamente."
    );
}


/* =========================================================
   COMUNICAÇÃO COM O WORKER
========================================================= */

async function chamarWorker(dados) {

    const resposta = await fetch(
        VERIFICATION_API,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dados)
        }
    );

    let resultado = {};

    try {
        resultado = await resposta.json();
    } catch (erro) {
        console.error(
            "Resposta inválida do Worker:",
            erro
        );
    }

    if (!resposta.ok || !resultado.success) {

        throw new Error(
            resultado.error ||
            resultado.message ||
            "Não foi possível enviar ou validar o código."
        );
    }

    return resultado;
}


/* =========================================================
   MOSTRAR TELA DE VERIFICAÇÃO
========================================================= */

function mostrarTelaVerificacao(
    finalidade,
    email,
    senha = ""
) {

    verificacao = {
        finalidade: finalidade,
        email: email,
        senha: senha,
        ultimoEnvio: Date.now()
    };

    if (authForm) {
        authForm.hidden = true;
    }

    if (authMensagem) {
        authMensagem.hidden = true;
    }

    if (authVerificacao) {
        authVerificacao.hidden = false;
    }

    if (authVerificacaoEmail) {
        authVerificacaoEmail.textContent = email;
    }

    if (authVerificacaoTitulo) {

        if (finalidade === "cadastro") {

            authVerificacaoTitulo.textContent =
                "Confirme seu e-mail ✦";

        } else {

            authVerificacaoTitulo.textContent =
                "Confirme seu e-mail para recuperar a senha ✦";
        }
    }

    if (authCodigo) {
        authCodigo.value = "";
    }

    mostrarMensagemVerificacao(
        "Código enviado. Confira sua caixa de entrada.",
        "sucesso"
    );

    setTimeout(() => {
        authCodigo?.focus();
    }, 100);
}


/* =========================================================
   FECHAR TELA DE VERIFICAÇÃO
========================================================= */

function fecharTelaVerificacao() {

    if (authVerificacao) {
        authVerificacao.hidden = true;
    }

    if (authForm) {
        authForm.hidden = false;
    }

    if (authMensagem) {
        authMensagem.hidden = false;
    }

    if (authCodigo) {
        authCodigo.value = "";
    }

    limparMensagemVerificacao();
}


/* =========================================================
   ENVIAR CÓDIGO
========================================================= */

async function enviarCodigo(
    finalidade,
    email,
    senha = ""
) {

    mostrarMensagemAuth(
        "Enviando código de verificação..."
    );

    try {

        await chamarWorker({
            action: "send",
            email: email
        });

        mostrarTelaVerificacao(
            finalidade,
            email,
            senha
        );

        limparMensagemAuth();

    } catch (erro) {

        console.error(
            "Erro ao enviar código:",
            erro
        );

        mostrarMensagemAuth(
            erro.message ||
            "Não foi possível enviar o código. Tente novamente.",
            "erro"
        );
    }
}


/* =========================================================
   LOGIN NORMAL
========================================================= */

if (authForm) {

    authForm.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();

            limparMensagemAuth();

            const email =
                authEmail.value.trim();

            const senha =
                authSenha.value;

            if (!email || !senha) {

                mostrarMensagemAuth(
                    "Preencha seu e-mail e sua senha.",
                    "erro"
                );

                return;
            }

            try {

                mostrarMensagemAuth(
                    "Entrando..."
                );

                await auth
                    .signInWithEmailAndPassword(
                        email,
                        senha
                    );

                mostrarMensagemAuth(
                    "Login realizado! ✨",
                    "sucesso"
                );

                authForm.reset();

                setTimeout(() => {

                    fecharConta();
                    abrirAreaAluno();

                }, 500);

            } catch (erro) {

                console.error(
                    "Erro no login:",
                    erro
                );

                mostrarMensagemAuth(
                    traduzirErroFirebase(erro),
                    "erro"
                );
            }
        }
    );
}


/* =========================================================
   CRIAR CONTA
   1. Envia código
   2. Confirma código
   3. Só depois cria no Firebase
========================================================= */

if (authCriar) {

    authCriar.addEventListener(
        "click",
        async () => {

            limparMensagemAuth();

            const email =
                authEmail.value.trim();

            const senha =
                authSenha.value;

            if (!email) {

                mostrarMensagemAuth(
                    "Digite o e-mail que deseja usar na sua conta.",
                    "erro"
                );

                authEmail.focus();

                return;
            }

            if (!senha) {

                mostrarMensagemAuth(
                    "Agora escolha uma senha.",
                    "erro"
                );

                authSenha.focus();

                return;
            }

            if (senha.length < 6) {

                mostrarMensagemAuth(
                    "A senha precisa ter pelo menos 6 caracteres.",
                    "erro"
                );

                return;
            }

            await enviarCodigo(
                "cadastro",
                email,
                senha
            );
        }
    );
}


/* =========================================================
   ESQUECI MINHA SENHA
   Primeiro confirma o código
========================================================= */

if (authRecuperar) {

    authRecuperar.addEventListener(
        "click",
        async () => {

            limparMensagemAuth();

            const email =
                authEmail.value.trim();

            if (!email) {

                mostrarMensagemAuth(
                    "Digite seu e-mail primeiro e depois clique em “Esqueci minha senha”.",
                    "erro"
                );

                authEmail.focus();

                return;
            }

            await enviarCodigo(
                "recuperacao",
                email
            );
        }
    );
}


/* =========================================================
   CONFIRMAR CÓDIGO
========================================================= */

if (authVerificacaoForm) {

    authVerificacaoForm.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();

            const codigo = (
                authCodigo?.value || ""
            ).replace(/\D/g, "");

            if (!/^\d{6}$/.test(codigo)) {

                mostrarMensagemVerificacao(
                    "Digite os 6 números do código.",
                    "erro"
                );

                return;
            }

            mostrarMensagemVerificacao(
                "Confirmando código..."
            );

            try {

                await chamarWorker({
                    action: "verify",
                    email: verificacao.email,
                    code: codigo
                });


                /* =========================================
                   CÓDIGO CERTO: CRIAR CONTA
                ========================================= */

                if (
                    verificacao.finalidade ===
                    "cadastro"
                ) {

                    mostrarMensagemVerificacao(
                        "Código confirmado. Criando sua conta..."
                    );

                    await auth
                        .createUserWithEmailAndPassword(
                            verificacao.email,
                            verificacao.senha
                        );

                    mostrarMensagemVerificacao(
                        "Conta criada com sucesso! ✨",
                        "sucesso"
                    );

                    authForm?.reset();

                    setTimeout(() => {

                        fecharConta();
                        abrirAreaAluno();

                    }, 700);
                }


                /* =========================================
                   CÓDIGO CERTO: REDEFINIR SENHA
                ========================================= */

                else if (
                    verificacao.finalidade ===
                    "recuperacao"
                ) {

                    mostrarMensagemVerificacao(
                        "Código confirmado. Enviando o e-mail para redefinir sua senha..."
                    );

                    await auth
                        .sendPasswordResetEmail(
                            verificacao.email
                        );

                    mostrarMensagemVerificacao(
                        "Código confirmado! Enviamos o link para você criar uma nova senha. 📩",
                        "sucesso"
                    );
                }

            } catch (erro) {

                console.error(
                    "Erro ao confirmar código:",
                    erro
                );

                if (erro?.code) {

                    mostrarMensagemVerificacao(
                        traduzirErroFirebase(erro),
                        "erro"
                    );

                } else {

                    mostrarMensagemVerificacao(
                        erro.message ||
                        "O código está incorreto ou expirou.",
                        "erro"
                    );
                }
            }
        }
    );
}


/* =========================================================
   REENVIAR CÓDIGO
========================================================= */

if (authReenviarCodigo) {

    authReenviarCodigo.addEventListener(
        "click",
        async () => {

            if (!verificacao.email) {
                return;
            }

            const tempoPassado =
                Date.now() -
                verificacao.ultimoEnvio;

            const tempoRestante =
                60000 - tempoPassado;

            if (tempoRestante > 0) {

                mostrarMensagemVerificacao(
                    `Aguarde ${Math.ceil(
                        tempoRestante / 1000
                    )} segundos para reenviar.`,
                    "erro"
                );

                return;
            }

            mostrarMensagemVerificacao(
                "Reenviando código..."
            );

            try {

                await chamarWorker({
                    action: "send",
                    email: verificacao.email
                });

                verificacao.ultimoEnvio =
                    Date.now();

                mostrarMensagemVerificacao(
                    "Novo código enviado. Confira seu e-mail.",
                    "sucesso"
                );

            } catch (erro) {

                console.error(
                    "Erro ao reenviar código:",
                    erro
                );

                mostrarMensagemVerificacao(
                    erro.message ||
                    "Não foi possível reenviar o código.",
                    "erro"
                );
            }
        }
    );
}


/* =========================================================
   VOLTAR DA VERIFICAÇÃO
========================================================= */

if (authVoltarVerificacao) {

    authVoltarVerificacao.addEventListener(
        "click",
        () => {

            fecharTelaVerificacao();

            verificacao = {
                finalidade: null,
                email: "",
                senha: "",
                ultimoEnvio: 0
            };
        }
    );
}


/* =========================================================
   ESTADO DA AUTENTICAÇÃO
========================================================= */

auth.onAuthStateChanged((usuario) => {

    atualizarTelaConta(usuario);

});


function atualizarTelaConta(usuario) {

    if (usuario) {

        if (botaoConta) {
            botaoConta.textContent =
                "Minha conta";
        }

        if (authDeslogado) {
            authDeslogado.hidden = true;
        }

        if (authLogado) {
            authLogado.hidden = false;
        }

        if (authEmailLogado) {
            authEmailLogado.textContent =
                usuario.email || "";
        }

        if (alunoEmail) {
            alunoEmail.textContent =
                usuario.email || "";
        }

    } else {

        if (botaoConta) {
            botaoConta.textContent =
                "Entrar";
        }

        if (authDeslogado) {
            authDeslogado.hidden = false;
        }

        if (authLogado) {
            authLogado.hidden = true;
        }

        if (authEmailLogado) {
            authEmailLogado.textContent = "";
        }

        if (alunoEmail) {
            alunoEmail.textContent = "";
        }

        const paginaAluno =
            document.getElementById("aluno");

        if (
            paginaAluno &&
            paginaAluno.classList.contains("ativa")
        ) {
            mostrarPagina("home");
        }
    }
}


/* =========================================================
   ÁREA DO ALUNO
========================================================= */

function abrirAreaAluno() {

    const usuario = auth.currentUser;

    if (!usuario) {

        abrirConta();

        mostrarMensagemAuth(
            "Entre na sua conta para acessar a Área do Aluno.",
            "erro"
        );

        return;
    }

    fecharConta();

    mostrarPagina("aluno");

    if (alunoEmail) {
        alunoEmail.textContent =
            usuario.email || "";
    }
}


/* =========================================================
   SAIR
========================================================= */

async function sairDaConta() {

    try {

        await auth.signOut();

        fecharConta();
        fecharMenuAluno();
        fecharSegurancaAluno();

        mostrarPagina("home");

    } catch (erro) {

        console.error(
            "Erro ao sair da conta:",
            erro
        );

        alert(
            "Não foi possível sair da conta. Tente novamente."
        );
    }
}


if (authSair) {

    authSair.addEventListener(
        "click",
        sairDaConta
    );
}


/* =========================================================
   MENU DA ÁREA DO ALUNO
========================================================= */

function alternarMenuAluno() {

    const menu = document.getElementById(
        "aluno-menu-dropdown"
    );

    if (!menu) return;

    menu.hidden = !menu.hidden;
}


function fecharMenuAluno() {

    const menu = document.getElementById(
        "aluno-menu-dropdown"
    );

    if (menu) {
        menu.hidden = true;
    }
}


/* =========================================================
   MODAL ALTERAR SENHA
========================================================= */

function abrirSegurancaAluno() {

    fecharMenuAluno();

    if (!auth.currentUser) {
        abrirConta();
        return;
    }

    const modal = document.getElementById(
        "modal-senha"
    );

    if (!modal) return;

    modal.hidden = false;

    if (novaSenha) {
        novaSenha.value = "";
    }

    if (confirmarNovaSenha) {
        confirmarNovaSenha.value = "";
    }

    if (senhaMensagem) {

        senhaMensagem.textContent = "";

        senhaMensagem.classList.remove(
            "erro",
            "sucesso"
        );
    }

    setTimeout(() => {
        novaSenha?.focus();
    }, 100);
}


function fecharSegurancaAluno() {

    const modal = document.getElementById(
        "modal-senha"
    );

    if (modal) {
        modal.hidden = true;
    }

    if (formAlterarSenha) {
        formAlterarSenha.reset();
    }

    if (senhaMensagem) {

        senhaMensagem.textContent = "";

        senhaMensagem.classList.remove(
            "erro",
            "sucesso"
        );
    }
}


/* =========================================================
   ALTERAR SENHA QUANDO JÁ ESTÁ LOGADO
========================================================= */

if (formAlterarSenha) {

    formAlterarSenha.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();

            const usuario =
                auth.currentUser;

            if (!usuario) {

                if (senhaMensagem) {

                    senhaMensagem.textContent =
                        "Sua sessão expirou. Entre novamente.";

                    senhaMensagem.classList.add(
                        "erro"
                    );
                }

                return;
            }

            const senha1 =
                novaSenha.value;

            const senha2 =
                confirmarNovaSenha.value;

            if (senhaMensagem) {

                senhaMensagem.textContent = "";

                senhaMensagem.classList.remove(
                    "erro",
                    "sucesso"
                );
            }

            if (senha1.length < 6) {

                if (senhaMensagem) {

                    senhaMensagem.textContent =
                        "A nova senha precisa ter pelo menos 6 caracteres.";

                    senhaMensagem.classList.add(
                        "erro"
                    );
                }

                return;
            }

            if (senha1 !== senha2) {

                if (senhaMensagem) {

                    senhaMensagem.textContent =
                        "As duas senhas não são iguais.";

                    senhaMensagem.classList.add(
                        "erro"
                    );
                }

                return;
            }

            try {

                if (senhaMensagem) {

                    senhaMensagem.textContent =
                        "Alterando senha...";
                }

                await usuario.updatePassword(
                    senha1
                );

                if (senhaMensagem) {

                    senhaMensagem.textContent =
                        "Senha alterada com sucesso! ✨";

                    senhaMensagem.classList.add(
                        "sucesso"
                    );
                }

                formAlterarSenha.reset();

            } catch (erro) {

                console.error(
                    "Erro ao alterar senha:",
                    erro
                );

                if (senhaMensagem) {

                    senhaMensagem.textContent =
                        traduzirErroFirebase(erro);

                    senhaMensagem.classList.add(
                        "erro"
                    );
                }
            }
        }
    );
}


/* =========================================================
   FECHAR LOGIN CLICANDO FORA
========================================================= */

if (authOverlay) {

    authOverlay.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                authOverlay
            ) {
                fecharConta();
            }
        }
    );
}


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    (evento) => {

        if (evento.key !== "Escape") {
            return;
        }

        if (
            authOverlay &&
            (
                authOverlay.classList.contains("ativo") ||
                authOverlay.classList.contains("aberto")
            )
        ) {
            fecharConta();
        }

        fecharMenuAluno();
        fecharSegurancaAluno();
        fecharMenu();
    }
);


/* =========================================================
   FECHAR MENU MOBILE AO REDIMENSIONAR
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 850) {
            fecharMenu();
        }
    }
);


document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (authVerificacao) {
            authVerificacao.hidden = true;
        }

        mostrarPagina("home");
    }
);