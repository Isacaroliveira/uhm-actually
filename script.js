/* =========================================================
   UHM, ACTUALLY...
   SCRIPT.JS

   90 desafios de inglês
   3 desafios por dia
   30 dias antes de completar o ciclo
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

let idiomaAtual = null;
let perguntaAtual = 0;

/* =========================================================
   BANCO DE PERGUNTAS
   ========================================================= */

const perguntas = {

    /* =====================================================
       ENGLISH LAB
       90 DESAFIOS
       ===================================================== */

    ingles: [

        /* 01 */
        {
            palavra: "actually",
            categoria: "FALSO AMIGO",
            pergunta: "O que “actually” significa?",
            alternativas: [
                "Atualmente",
                "Na verdade",
                "Antigamente",
                "Eventualmente"
            ],
            correta: 1,
            explicacao:
                "Actually significa “na verdade”. Para dizer “atualmente”, podemos usar currently.",
            exemplo:
                "Actually, I don't drink coffee.",
            traducao:
                "Na verdade, eu não bebo café."
        },


        /* 02 */
        {
            palavra: "pretend",
            categoria: "FALSO AMIGO",
            pergunta: "Complete: The child ___ to be asleep.",
            alternativas: [
                "pretended",
                "intended",
                "expected",
                "realized"
            ],
            correta: 0,
            explicacao:
                "Pretend significa fingir, não pretender.",
            exemplo:
                "She pretended not to hear me.",
            traducao:
                "Ela fingiu não me ouvir."
        },


        /* 03 */
        {
            palavra: "parents",
            categoria: "NÃO CAIA NESSA",
            pergunta: "Se alguém diz “my parents”, está falando de quem?",
            alternativas: [
                "Dos parentes",
                "Dos pais",
                "Dos primos",
                "Dos avós"
            ],
            correta: 1,
            explicacao:
                "Parents são os pais. “Parentes” em geral são relatives.",
            exemplo:
                "My parents are visiting me.",
            traducao:
                "Meus pais estão me visitando."
        },


        /* 04 */
        {
            palavra: "library",
            categoria: "SITUAÇÃO",
            pergunta: "Você precisa pegar um livro emprestado. Para onde vai?",
            alternativas: [
                "Library",
                "Bookstore",
                "Bakery",
                "Office"
            ],
            correta: 0,
            explicacao:
                "Library é biblioteca. Livraria é bookstore.",
            exemplo:
                "I borrowed this book from the library.",
            traducao:
                "Peguei este livro emprestado na biblioteca."
        },


        /* 05 */
        {
            palavra: "college",
            categoria: "PEGADINHA",
            pergunta: "Nos EUA, “I'm in college” normalmente quer dizer:",
            alternativas: [
                "Estou no colégio",
                "Estou na faculdade",
                "Estou no ensino fundamental",
                "Estou fazendo um curso de idiomas"
            ],
            correta: 1,
            explicacao:
                "College normalmente se refere ao ensino superior, não ao colégio brasileiro.",
            exemplo:
                "She's starting college next year.",
            traducao:
                "Ela vai começar a faculdade no ano que vem."
        },


        /* 06 */
        {
            palavra: "lunch",
            categoria: "VOCABULÁRIO",
            pergunta: "It's noon. Let's have lunch! O que vamos fazer?",
            alternativas: [
                "Tomar café da manhã",
                "Fazer um lanche",
                "Almoçar",
                "Jantar"
            ],
            correta: 2,
            explicacao:
                "Lunch é almoço. “Lanche” pode ser snack.",
            exemplo:
                "What did you have for lunch?",
            traducao:
                "O que você comeu no almoço?"
        },


        /* 07 */
        {
            palavra: "fabric",
            categoria: "NA LOJA",
            pergunta: "Você entra numa loja de “fabric”. O que provavelmente encontra?",
            alternativas: [
                "Máquinas industriais",
                "Tecidos",
                "Comida",
                "Móveis"
            ],
            correta: 1,
            explicacao:
                "Fabric significa tecido. Fábrica é factory.",
            exemplo:
                "This fabric is very soft.",
            traducao:
                "Este tecido é muito macio."
        },


        /* 08 */
        {
            palavra: "costume",
            categoria: "HALLOWEEN MODE 🎃",
            pergunta: "What are you wearing for Halloween?",
            alternativas: [
                "A costume",
                "A custom",
                "A habit",
                "A fantasy"
            ],
            correta: 0,
            explicacao:
                "Costume é fantasia ou traje. “Costume” no sentido de hábito é custom ou habit.",
            exemplo:
                "He wore a vampire costume.",
            traducao:
                "Ele usou uma fantasia de vampiro."
        },


        /* 09 */
        {
            palavra: "push",
            categoria: "NA PORTA",
            pergunta: "A placa diz PUSH. O que você faz?",
            alternativas: [
                "Puxa",
                "Empurra",
                "Pula",
                "Espera"
            ],
            correta: 1,
            explicacao:
                "Push significa empurrar.",
            exemplo:
                "Push the door to open it.",
            traducao:
                "Empurre a porta para abri-la."
        },


        /* 10 */
        {
            palavra: "pull",
            categoria: "NA PORTA",
            pergunta: "Agora a placa diz PULL. O que você faz?",
            alternativas: [
                "Empurra",
                "Pula",
                "Puxa",
                "Fecha"
            ],
            correta: 2,
            explicacao:
                "Pull significa puxar. O par clássico é push = empurrar e pull = puxar.",
            exemplo:
                "Pull the handle.",
            traducao:
                "Puxe a maçaneta."
        },


        /* 11 */
        {
            palavra: "sensible",
            categoria: "QUEM É QUEM?",
            pergunta: "A sensible person é uma pessoa...",
            alternativas: [
                "Sensível",
                "Sensata",
                "Sentimental",
                "Tímida"
            ],
            correta: 1,
            explicacao:
                "Sensible significa sensato. Sensível é sensitive.",
            exemplo:
                "That sounds like a sensible decision.",
            traducao:
                "Isso parece uma decisão sensata."
        },


        /* 12 */
        {
            palavra: "sensitive",
            categoria: "QUEM É QUEM?",
            pergunta: "Qual palavra corresponde melhor a “sensível”?",
            alternativas: [
                "Sensible",
                "Sensitive",
                "Sensational",
                "Sentimental"
            ],
            correta: 1,
            explicacao:
                "Sensitive é sensível. Sensible é sensato.",
            exemplo:
                "He's sensitive to criticism.",
            traducao:
                "Ele é sensível a críticas."
        },


        /* 13 */
        {
            palavra: "eventually",
            categoria: "NO CONTEXTO",
            pergunta: "“Eventually, she found a job.” O que aconteceu?",
            alternativas: [
                "Ela eventualmente encontrou trabalho",
                "Ela finalmente encontrou trabalho",
                "Ela talvez encontre trabalho",
                "Ela encontrou trabalho imediatamente"
            ],
            correta: 1,
            explicacao:
                "Eventually significa finalmente, por fim ou com o tempo.",
            exemplo:
                "Eventually, everything worked out.",
            traducao:
                "No fim, tudo deu certo."
        },


        /* 14 */
        {
            palavra: "realize",
            categoria: "COMPLETE A FRASE",
            pergunta: "I suddenly ___ that I had forgotten my keys.",
            alternativas: [
                "realized",
                "performed",
                "produced",
                "completed"
            ],
            correta: 0,
            explicacao:
                "Realize frequentemente significa perceber ou dar-se conta.",
            exemplo:
                "I didn't realize it was so late.",
            traducao:
                "Eu não percebi que estava tão tarde."
        },


        /* 15 */
        {
            palavra: "lecture",
            categoria: "VIDA UNIVERSITÁRIA",
            pergunta: "Your professor is giving a lecture. O que está acontecendo?",
            alternativas: [
                "Ele está fazendo uma leitura silenciosa",
                "Ele está dando uma aula ou palestra",
                "Ele está aplicando uma prova",
                "Ele está lendo um romance"
            ],
            correta: 1,
            explicacao:
                "Lecture é uma palestra ou aula expositiva.",
            exemplo:
                "We attended a lecture on history.",
            traducao:
                "Assistimos a uma palestra sobre história."
        },


        /* 16 */
        {
            palavra: "novel",
            categoria: "NA LIVRARIA",
            pergunta: "Você compra um novel. O que comprou?",
            alternativas: [
                "Uma novela em vídeo",
                "Um romance/livro de ficção",
                "Um jornal",
                "Uma revista"
            ],
            correta: 1,
            explicacao:
                "Novel é um romance literário. Novela de televisão é soap opera ou telenovela.",
            exemplo:
                "She's reading a mystery novel.",
            traducao:
                "Ela está lendo um romance de mistério."
        },


        /* 17 */
        {
            palavra: "exit",
            categoria: "PLACA MISTERIOSA",
            pergunta: "Você vê EXIT acima de uma porta. O que há ali?",
            alternativas: [
                "Sucesso",
                "Entrada",
                "Saída",
                "Elevador"
            ],
            correta: 2,
            explicacao:
                "Exit significa saída. Não significa êxito.",
            exemplo:
                "Where is the emergency exit?",
            traducao:
                "Onde fica a saída de emergência?"
        },


        /* 18 */
        {
            palavra: "assist",
            categoria: "VERBO TRAIÇOEIRO",
            pergunta: "“Can you assist me?” significa:",
            alternativas: [
                "Você pode me assistir?",
                "Você pode me ajudar?",
                "Você pode me observar?",
                "Você pode me acompanhar na TV?"
            ],
            correta: 1,
            explicacao:
                "Assist significa ajudar ou auxiliar. Assistir TV é watch TV.",
            exemplo:
                "A nurse assisted the doctor.",
            traducao:
                "Uma enfermeira auxiliou o médico."
        },


        /* 19 */
        {
            palavra: "injury",
            categoria: "NO HOSPITAL",
            pergunta: "An athlete has a knee injury. O que aconteceu?",
            alternativas: [
                "Ele sofreu uma injúria verbal",
                "Ele sofreu uma lesão no joelho",
                "Ele perdeu o jogo",
                "Ele está com gripe"
            ],
            correta: 1,
            explicacao:
                "Injury significa ferimento ou lesão.",
            exemplo:
                "He returned after a knee injury.",
            traducao:
                "Ele voltou depois de uma lesão no joelho."
        },


        /* 20 */
        {
            palavra: "argument",
            categoria: "DRAMA 👀",
            pergunta: "“They had an argument last night.” O casal...",
            alternativas: [
                "Apresentou um argumento acadêmico",
                "Teve uma discussão",
                "Fez um acordo",
                "Contou uma história"
            ],
            correta: 1,
            explicacao:
                "Argument pode significar argumento, mas também é muito usado para uma discussão ou briga verbal.",
            exemplo:
                "We had an argument about money.",
            traducao:
                "Nós tivemos uma discussão sobre dinheiro."
        },


        /* 21 */
        {
            palavra: "terrific",
            categoria: "PLOT TWIST",
            pergunta: "“The concert was terrific!” é um elogio ou uma crítica?",
            alternativas: [
                "Crítica: foi terrível",
                "Elogio: foi fantástico",
                "Nenhum dos dois",
                "Significa que foi assustador"
            ],
            correta: 1,
            explicacao:
                "Terrific normalmente significa excelente, fantástico ou ótimo.",
            exemplo:
                "You did a terrific job!",
            traducao:
                "Você fez um trabalho fantástico!"
        },


        /* 22 */
        {
            palavra: "sympathy",
            categoria: "SENTIMENTOS",
            pergunta: "“I have a lot of sympathy for her.” transmite principalmente:",
            alternativas: [
                "Simpatia no sentido de achar alguém divertido",
                "Compaixão e solidariedade",
                "Paixão",
                "Antipatia"
            ],
            correta: 1,
            explicacao:
                "Sympathy costuma expressar compaixão ou solidariedade.",
            exemplo:
                "I felt sympathy for the family.",
            traducao:
                "Senti compaixão pela família."
        },


        /* 23 */
        {
            palavra: "intend",
            categoria: "INTENÇÕES",
            pergunta: "“I intend to travel next year.” significa:",
            alternativas: [
                "Eu entendo viajar",
                "Eu pretendo viajar",
                "Eu preciso viajar",
                "Eu evito viajar"
            ],
            correta: 1,
            explicacao:
                "Intend significa pretender ou ter a intenção de.",
            exemplo:
                "I intend to finish this today.",
            traducao:
                "Pretendo terminar isso hoje."
        },


        /* 24 */
        {
            palavra: "notice",
            categoria: "VOCÊ PERCEBEU?",
            pergunta: "“Did you notice her new haircut?” significa:",
            alternativas: [
                "Você noticiou o corte?",
                "Você percebeu o corte novo dela?",
                "Você cortou o cabelo dela?",
                "Você aprovou o corte?"
            ],
            correta: 1,
            explicacao:
                "Como verbo, notice significa notar ou perceber.",
            exemplo:
                "I noticed something strange.",
            traducao:
                "Eu percebi algo estranho."
        },


        /* 25 */
        {
            palavra: "data",
            categoria: "TECH ENGLISH",
            pergunta: "A company collects customer data. Ela coleta...",
            alternativas: [
                "Datas do calendário",
                "Dados dos clientes",
                "Agendas",
                "Aniversários"
            ],
            correta: 1,
            explicacao:
                "Data significa dados. Uma data do calendário é date.",
            exemplo:
                "We need more data.",
            traducao:
                "Precisamos de mais dados."
        },


        /* 26 */
        {
            palavra: "journal",
            categoria: "LEITURA",
            pergunta: "Em contexto acadêmico, journal costuma ser:",
            alternativas: [
                "Jornal diário de notícias",
                "Periódico ou revista acadêmica",
                "Programa de TV",
                "Livro escolar"
            ],
            correta: 1,
            explicacao:
                "Journal pode ser diário pessoal ou periódico acadêmico, dependendo do contexto.",
            exemplo:
                "The study was published in a scientific journal.",
            traducao:
                "O estudo foi publicado em um periódico científico."
        },


        /* 27 */
        {
            palavra: "exquisite",
            categoria: "RESTAURANTE CHIQUE",
            pergunta: "“The food was exquisite.” O chef deveria ficar...",
            alternativas: [
                "Ofendido",
                "Preocupado",
                "Feliz",
                "Confuso"
            ],
            correta: 2,
            explicacao:
                "Exquisite é um elogio: requintado, excelente, primoroso.",
            exemplo:
                "The restaurant serves exquisite desserts.",
            traducao:
                "O restaurante serve sobremesas requintadas."
        },


        /* 28 */
        {
            palavra: "comprehensive",
            categoria: "QUALIDADE",
            pergunta: "A comprehensive guide é um guia...",
            alternativas: [
                "Compreensivo emocionalmente",
                "Abrangente e completo",
                "Curto",
                "Confuso"
            ],
            correta: 1,
            explicacao:
                "Comprehensive significa abrangente, completo ou amplo.",
            exemplo:
                "This is a comprehensive introduction.",
            traducao:
                "Esta é uma introdução abrangente."
        },


        /* 29 */
        {
            palavra: "support",
            categoria: "ESCOLHA O SENTIDO",
            pergunta: "“My family supports my decision.” significa:",
            alternativas: [
                "Minha família tolera minha decisão",
                "Minha família apoia minha decisão",
                "Minha família esqueceu minha decisão",
                "Minha família impede minha decisão"
            ],
            correta: 1,
            explicacao:
                "Support normalmente significa apoiar, sustentar ou dar suporte.",
            exemplo:
                "Thank you for supporting me.",
            traducao:
                "Obrigado por me apoiar."
        },


        /* 30 */
        {
            palavra: "application",
            categoria: "FACULDADE",
            pergunta: "“I sent my university application yesterday.” O que foi enviado?",
            alternativas: [
                "Uma aplicação matemática",
                "Uma candidatura/inscrição",
                "Um aplicativo",
                "Uma prova"
            ],
            correta: 1,
            explicacao:
                "Application pode ser inscrição ou candidatura, além de aplicação e aplicativo em outros contextos.",
            exemplo:
                "The application deadline is Friday.",
            traducao:
                "O prazo para a inscrição é sexta-feira."
        },


        /* 31 */
        {
            palavra: "resume",
            categoria: "PROCURANDO EMPREGO",
            pergunta: "Nos EUA, você envia seu résumé para uma empresa. O que é?",
            alternativas: [
                "Um resumo da reunião",
                "Seu currículo",
                "Uma carta de demissão",
                "Seu diploma"
            ],
            correta: 1,
            explicacao:
                "Résumé, frequentemente escrito resume, significa currículo profissional.",
            exemplo:
                "Please send us your resume.",
            traducao:
                "Por favor, envie-nos seu currículo."
        },


        /* 32 */
        {
            palavra: "policy",
            categoria: "EMPRESA",
            pergunta: "“It's against company policy.” refere-se a...",
            alternativas: [
                "Um político da empresa",
                "Uma regra ou política da empresa",
                "Uma eleição",
                "Um policial"
            ],
            correta: 1,
            explicacao:
                "Policy significa política no sentido de regra, diretriz ou princípio.",
            exemplo:
                "What's your return policy?",
            traducao:
                "Qual é a política de devolução de vocês?"
        },


        /* 33 */
        {
            palavra: "mayor",
            categoria: "NA CIDADE",
            pergunta: "Who is the mayor?",
            alternativas: [
                "Quem é o maior?",
                "Quem é o prefeito?",
                "Quem é o governador?",
                "Quem é o vereador?"
            ],
            correta: 1,
            explicacao:
                "Mayor significa prefeito ou prefeita.",
            exemplo:
                "The mayor announced a new project.",
            traducao:
                "O prefeito anunciou um novo projeto."
        },


        /* 34 */
        {
            palavra: "mayor × major",
            categoria: "UM R MUDA TUDO",
            pergunta: "Qual palavra significa “principal/importante”?",
            alternativas: [
                "Mayor",
                "Major",
                "Mayority",
                "Majory"
            ],
            correta: 1,
            explicacao:
                "Major pode significar principal ou importante. Mayor é prefeito.",
            exemplo:
                "This is a major problem.",
            traducao:
                "Este é um problema importante."
        },


        /* 35 */
        {
            palavra: "legend",
            categoria: "STORY TIME",
            pergunta: "Uma “legend” é normalmente...",
            alternativas: [
                "Uma legenda de filme",
                "Uma lenda",
                "Uma legenda de Instagram",
                "Uma tradução"
            ],
            correta: 1,
            explicacao:
                "Legend significa lenda. Legenda de filme é subtitle; legenda de foto pode ser caption.",
            exemplo:
                "According to legend, the castle is haunted.",
            traducao:
                "Segundo a lenda, o castelo é assombrado."
        },


        /* 36 */
        {
            palavra: "caption",
            categoria: "INSTAGRAM MODE",
            pergunta: "“Write a caption for this photo.” O que você deve escrever?",
            alternativas: [
                "Uma legenda",
                "Uma lenda",
                "Uma tradução completa",
                "Uma carta"
            ],
            correta: 0,
            explicacao:
                "Caption é a legenda ou texto associado a uma foto, imagem ou postagem.",
            exemplo:
                "I can't think of a good caption.",
            traducao:
                "Não consigo pensar em uma boa legenda."
        },


        /* 37 */
        {
            palavra: "subtitle",
            categoria: "NETFLIX MODE",
            pergunta: "Você quer assistir ao filme com legendas. Ativa...",
            alternativas: [
                "Legends",
                "Captions only",
                "Subtitles",
                "Translations"
            ],
            correta: 2,
            explicacao:
                "Subtitles são legendas de filmes, séries e vídeos.",
            exemplo:
                "I watch French movies with subtitles.",
            traducao:
                "Eu assisto a filmes franceses com legendas."
        },


        /* 38 */
        {
            palavra: "pasta",
            categoria: "NO RESTAURANTE 🍝",
            pergunta: "Você pede pasta na Itália. O garçom traz...",
            alternativas: [
                "Uma pasta de documentos",
                "Macarrão/massa",
                "Pasta de dentes",
                "Uma mochila"
            ],
            correta: 1,
            explicacao:
                "Pasta em inglês refere-se principalmente a massas alimentícias.",
            exemplo:
                "I ordered pasta with tomato sauce.",
            traducao:
                "Pedi massa com molho de tomate."
        },


        /* 39 */
        {
            palavra: "balcony",
            categoria: "EM CASA",
            pergunta: "“Let's sit on the balcony.” Para onde vamos?",
            alternativas: [
                "Para o balcão da cozinha",
                "Para a varanda/sacada",
                "Para o banheiro",
                "Para o porão"
            ],
            correta: 1,
            explicacao:
                "Balcony significa varanda ou sacada. Balcão pode ser counter.",
            exemplo:
                "Our hotel room has a balcony.",
            traducao:
                "Nosso quarto de hotel tem uma varanda."
        },


        /* 40 */
        {
            palavra: "deception",
            categoria: "PARECE, MAS NÃO É",
            pergunta: "Deception significa...",
            alternativas: [
                "Decepção",
                "Engano",
                "Tristeza",
                "Desistência"
            ],
            correta: 1,
            explicacao:
                "Deception significa engano ou fraude. Decepção costuma ser disappointment.",
            exemplo:
                "The plan relied on deception.",
            traducao:
                "O plano dependia de engano."
        },


        /* 41 */
        {
            palavra: "disappointed",
            categoria: "SENTIMENTOS",
            pergunta: "Qual é a melhor tradução de “I'm disappointed”?",
            alternativas: [
                "Estou enganado",
                "Estou decepcionado",
                "Estou desesperado",
                "Estou distraído"
            ],
            correta: 1,
            explicacao:
                "Disappointed significa decepcionado.",
            exemplo:
                "I was disappointed with the result.",
            traducao:
                "Fiquei decepcionado com o resultado."
        },


        /* 42 */
        {
            palavra: "expert",
            categoria: "QUEM É ESSA PESSOA?",
            pergunta: "An expert in languages é...",
            alternativas: [
                "Uma pessoa esperta",
                "Um especialista em idiomas",
                "Um estudante iniciante",
                "Um tradutor necessariamente"
            ],
            correta: 1,
            explicacao:
                "Expert significa especialista. Esperto pode ser smart ou clever.",
            exemplo:
                "She's an expert in linguistics.",
            traducao:
                "Ela é especialista em linguística."
        },


        /* 43 */
        {
            palavra: "educated",
            categoria: "PERSONALIDADE?",
            pergunta: "An educated person é principalmente alguém...",
            alternativas: [
                "Educado e gentil",
                "Com boa formação/instrução",
                "Silencioso",
                "Elegante"
            ],
            correta: 1,
            explicacao:
                "Educated refere-se principalmente a alguém instruído ou com formação.",
            exemplo:
                "She is highly educated.",
            traducao:
                "Ela tem um alto nível de instrução."
        },


        /* 44 */
        {
            palavra: "polite",
            categoria: "BOAS MANEIRAS",
            pergunta: "Qual palavra significa “educado” no sentido de boas maneiras?",
            alternativas: [
                "Educated",
                "Polite",
                "Learned",
                "Cultured"
            ],
            correta: 1,
            explicacao:
                "Polite é educado, cortês. Educated é instruído.",
            exemplo:
                "He was very polite to the waiter.",
            traducao:
                "Ele foi muito educado com o garçom."
        },


        /* 45 */
        {
            palavra: "particular",
            categoria: "NO CONTEXTO",
            pergunta: "“I'm not looking for anything in particular.” significa:",
            alternativas: [
                "Não estou procurando nada particular/privado",
                "Não estou procurando nada específico",
                "Não estou procurando nada caro",
                "Não estou procurando nada estranho"
            ],
            correta: 1,
            explicacao:
                "In particular significa em particular ou especificamente.",
            exemplo:
                "Is there anything in particular you want?",
            traducao:
                "Há algo específico que você quer?"
        },


        /* 46 */
        {
            palavra: "preservative",
            categoria: "NO SUPERMERCADO",
            pergunta: "“This food contains no preservatives.” significa que não contém...",
            alternativas: [
                "Preservativos",
                "Conservantes",
                "Vitaminas",
                "Açúcar"
            ],
            correta: 1,
            explicacao:
                "Preservative é conservante. Preservativo é condom.",
            exemplo:
                "This product contains artificial preservatives.",
            traducao:
                "Este produto contém conservantes artificiais."
        },


        /* 47 */
        {
            palavra: "condom",
            categoria: "VOCABULÁRIO",
            pergunta: "Qual palavra inglesa corresponde a “preservativo”?",
            alternativas: [
                "Preservative",
                "Condom",
                "Conservative",
                "Protectioner"
            ],
            correta: 1,
            explicacao:
                "Condom significa preservativo. Preservative é conservante.",
            exemplo:
                "Condoms help reduce the risk of sexually transmitted infections.",
            traducao:
                "Preservativos ajudam a reduzir o risco de infecções sexualmente transmissíveis."
        },


        /* 48 */
        {
            palavra: "tax",
            categoria: "DINHEIRO 💸",
            pergunta: "“The price doesn't include tax.” O preço não inclui...",
            alternativas: [
                "Taxa de táxi",
                "Imposto",
                "Gorjeta",
                "Desconto"
            ],
            correta: 1,
            explicacao:
                "Tax significa imposto.",
            exemplo:
                "How much do you pay in taxes?",
            traducao:
                "Quanto você paga em impostos?"
        },


        /* 49 */
        {
            palavra: "rate",
            categoria: "NÚMEROS",
            pergunta: "Em “interest rate”, rate significa...",
            alternativas: [
                "Rato",
                "Taxa",
                "Ritmo musical",
                "Renda"
            ],
            correta: 1,
            explicacao:
                "Rate pode significar taxa, índice ou ritmo, dependendo do contexto.",
            exemplo:
                "The unemployment rate fell.",
            traducao:
                "A taxa de desemprego caiu."
        },


        /* 50 */
        {
            palavra: "estate",
            categoria: "CASAS",
            pergunta: "O que faz uma “real estate agent”?",
            alternativas: [
                "Trabalha para o Estado",
                "Trabalha com imóveis",
                "Trabalha com estatísticas",
                "Trabalha em cartório"
            ],
            correta: 1,
            explicacao:
                "Real estate significa mercado imobiliário ou bens imóveis.",
            exemplo:
                "She works in real estate.",
            traducao:
                "Ela trabalha no mercado imobiliário."
        },


        /* 51 */
        {
            palavra: "commodity",
            categoria: "ECONOMIA",
            pergunta: "No inglês econômico, commodity é...",
            alternativas: [
                "Comodidade/conforto",
                "Mercadoria ou matéria-prima negociável",
                "Apartamento",
                "Desconto"
            ],
            correta: 1,
            explicacao:
                "Commodity refere-se a mercadorias, especialmente matérias-primas comercializadas em grande escala.",
            exemplo:
                "Coffee is an important commodity.",
            traducao:
                "O café é uma commodity importante."
        },


        /* 52 */
        {
            palavra: "event",
            categoria: "AGENDA",
            pergunta: "“There's an event tonight.” significa:",
            alternativas: [
                "Há algo eventual esta noite",
                "Há um evento esta noite",
                "Talvez aconteça algo",
                "Há uma emergência"
            ],
            correta: 1,
            explicacao:
                "Event significa evento ou acontecimento.",
            exemplo:
                "The event starts at eight.",
            traducao:
                "O evento começa às oito."
        },


        /* 53 */
        {
            palavra: "eventual",
            categoria: "NÍVEL HARD",
            pergunta: "Em inglês, “eventual success” é um sucesso...",
            alternativas: [
                "Ocasional",
                "Que aconteceu finalmente/com o tempo",
                "Improvável",
                "Acidental"
            ],
            correta: 1,
            explicacao:
                "Eventual está ligado ao resultado final de um processo, não necessariamente a algo ocasional.",
            exemplo:
                "Their eventual victory surprised everyone.",
            traducao:
                "A vitória que eles finalmente alcançaram surpreendeu todos."
        },


        /* 54 */
        {
            palavra: "ordinary",
            categoria: "DESCRIÇÃO",
            pergunta: "“It was just an ordinary day.” foi um dia...",
            alternativas: [
                "Organizado",
                "Comum",
                "Extraordinário",
                "Obrigatório"
            ],
            correta: 1,
            explicacao:
                "Ordinary significa comum, normal ou habitual.",
            exemplo:
                "There's nothing ordinary about her work.",
            traducao:
                "Não há nada de comum no trabalho dela."
        },


        /* 55 */
        {
            palavra: "lecture × reading",
            categoria: "ESCOLHA CERTA",
            pergunta: "Qual palavra você usa para “leitura”?",
            alternativas: [
                "Lecture",
                "Reading",
                "Lesson",
                "Literature"
            ],
            correta: 1,
            explicacao:
                "Reading é leitura. Lecture é palestra ou aula expositiva.",
            exemplo:
                "Reading helps me relax.",
            traducao:
                "Ler me ajuda a relaxar."
        },


        /* 56 */
        {
            palavra: "record",
            categoria: "PRONÚNCIA + SENTIDO",
            pergunta: "“I recorded a video.” significa:",
            alternativas: [
                "Eu recordei/lembrei de um vídeo",
                "Eu gravei um vídeo",
                "Eu assisti a um vídeo",
                "Eu apaguei um vídeo"
            ],
            correta: 1,
            explicacao:
                "To record significa gravar ou registrar.",
            exemplo:
                "Can you record the lesson?",
            traducao:
                "Você pode gravar a aula?"
        },


        /* 57 */
        {
            palavra: "remember",
            categoria: "MEMÓRIA",
            pergunta: "Qual verbo corresponde melhor a “lembrar-se”?",
            alternativas: [
                "Record",
                "Remember",
                "Remind",
                "Recognize"
            ],
            correta: 1,
            explicacao:
                "Remember significa lembrar-se. Record normalmente é registrar ou gravar.",
            exemplo:
                "I remember meeting her.",
            traducao:
                "Eu me lembro de tê-la conhecido."
        },


        /* 58 */
        {
            palavra: "remind",
            categoria: "MEMÓRIA 2.0",
            pergunta: "“Remind me to call her.” significa:",
            alternativas: [
                "Lembre-se de ligar para ela",
                "Me lembre de ligar para ela",
                "Grave minha ligação",
                "Avise a ela que eu liguei"
            ],
            correta: 1,
            explicacao:
                "Remind é fazer alguém se lembrar de alguma coisa.",
            exemplo:
                "Please remind me tomorrow.",
            traducao:
                "Por favor, me lembre amanhã."
        },


        /* 59 */
        {
            palavra: "appoint",
            categoria: "TRABALHO",
            pergunta: "“She was appointed director.” significa:",
            alternativas: [
                "Ela marcou uma consulta com o diretor",
                "Ela foi nomeada diretora",
                "Ela demitiu o diretor",
                "Ela entrevistou o diretor"
            ],
            correta: 1,
            explicacao:
                "Appoint significa nomear ou designar alguém para um cargo.",
            exemplo:
                "They appointed a new manager.",
            traducao:
                "Eles nomearam um novo gerente."
        },


        /* 60 */
        {
            palavra: "appointment",
            categoria: "AGENDA",
            pergunta: "“I have a doctor's appointment.” significa:",
            alternativas: [
                "Tenho uma nomeação como médico",
                "Tenho uma consulta médica",
                "Tenho uma reunião escolar",
                "Tenho uma emergência"
            ],
            correta: 1,
            explicacao:
                "Appointment é um compromisso marcado, inclusive consulta médica.",
            exemplo:
                "I have a dentist appointment at three.",
            traducao:
                "Tenho uma consulta com o dentista às três."
        },


        /* 61 */
        {
            palavra: "convict",
            categoria: "TRIBUNAL",
            pergunta: "“The jury convicted him.” significa:",
            alternativas: [
                "O júri o convenceu",
                "O júri o condenou",
                "O júri conversou com ele",
                "O júri o absolveu"
            ],
            correta: 1,
            explicacao:
                "To convict significa declarar alguém culpado ou condenar judicialmente.",
            exemplo:
                "He was convicted of fraud.",
            traducao:
                "Ele foi condenado por fraude."
        },


        /* 62 */
        {
            palavra: "convince",
            categoria: "NÃO CONFUNDA",
            pergunta: "Qual verbo significa “convencer”?",
            alternativas: [
                "Convict",
                "Convince",
                "Convene",
                "Confess"
            ],
            correta: 1,
            explicacao:
                "Convince significa convencer. Convict está relacionado a condenação criminal.",
            exemplo:
                "She convinced me to go.",
            traducao:
                "Ela me convenceu a ir."
        },


        /* 63 */
        {
            palavra: "comprehensive",
            categoria: "NA ESCOLA",
            pergunta: "“The exam requires a comprehensive understanding.” Você precisa de uma compreensão...",
            alternativas: [
                "Gentil",
                "Abrangente",
                "Pequena",
                "Emocional"
            ],
            correta: 1,
            explicacao:
                "Comprehensive indica algo amplo e completo.",
            exemplo:
                "The book provides a comprehensive overview.",
            traducao:
                "O livro oferece uma visão geral abrangente."
        },


        /* 64 */
        {
            palavra: "compromise",
            categoria: "NEGOCIAÇÃO",
            pergunta: "“We need to reach a compromise.” significa:",
            alternativas: [
                "Precisamos assumir um compromisso",
                "Precisamos chegar a um meio-termo",
                "Precisamos cancelar tudo",
                "Precisamos fazer uma promessa"
            ],
            correta: 1,
            explicacao:
                "A compromise é um acordo ou meio-termo em que as partes fazem concessões.",
            exemplo:
                "Both sides agreed to a compromise.",
            traducao:
                "Os dois lados concordaram com um meio-termo."
        },


        /* 65 */
        {
            palavra: "commitment",
            categoria: "PROMESSAS",
            pergunta: "Qual palavra expressa melhor “compromisso” no sentido de dedicação?",
            alternativas: [
                "Compromise",
                "Commitment",
                "Combination",
                "Compliance"
            ],
            correta: 1,
            explicacao:
                "Commitment é compromisso, dedicação ou obrigação assumida.",
            exemplo:
                "Learning a language takes commitment.",
            traducao:
                "Aprender um idioma exige dedicação."
        },


        /* 66 */
        {
            palavra: "prejudice",
            categoria: "SOCIEDADE",
            pergunta: "Prejudice significa...",
            alternativas: [
                "Prejuízo financeiro",
                "Preconceito",
                "Benefício",
                "Julgamento legal"
            ],
            correta: 1,
            explicacao:
                "Prejudice significa preconceito. Prejuízo financeiro pode ser loss ou damage.",
            exemplo:
                "We need to challenge prejudice.",
            traducao:
                "Precisamos combater o preconceito."
        },


        /* 67 */
        {
            palavra: "loss",
            categoria: "DINHEIRO",
            pergunta: "“The company reported a financial loss.” significa:",
            alternativas: [
                "A empresa relatou preconceito",
                "A empresa relatou prejuízo financeiro",
                "A empresa recebeu investimento",
                "A empresa aumentou o lucro"
            ],
            correta: 1,
            explicacao:
                "Loss significa perda ou prejuízo.",
            exemplo:
                "The business suffered a major loss.",
            traducao:
                "A empresa sofreu um grande prejuízo."
        },


        /* 68 */
        {
            palavra: "intoxicated",
            categoria: "PALAVRA TRAIÇOEIRA",
            pergunta: "Em inglês cotidiano, “He was intoxicated” frequentemente quer dizer que ele estava...",
            alternativas: [
                "Com intoxicação alimentar necessariamente",
                "Embriagado",
                "Muito cansado",
                "Com sono"
            ],
            correta: 1,
            explicacao:
                "Intoxicated pode indicar intoxicação, mas é muito usado para alguém sob efeito de álcool ou drogas.",
            exemplo:
                "The driver appeared intoxicated.",
            traducao:
                "O motorista parecia estar embriagado."
        },


        /* 69 */
        {
            palavra: "actually × currently",
            categoria: "DUELO ⚔️",
            pergunta: "Qual frase significa “Atualmente moro no Brasil”?",
            alternativas: [
                "Actually, I live in Brazil.",
                "Currently, I live in Brazil.",
                "Eventually, I live in Brazil.",
                "Actually, I lived in Brazil."
            ],
            correta: 1,
            explicacao:
                "Currently significa atualmente. Actually significa na verdade.",
            exemplo:
                "I'm currently studying English.",
            traducao:
                "Atualmente estou estudando inglês."
        },


        /* 70 */
        {
            palavra: "pretend × intend",
            categoria: "DUELO ⚔️",
            pergunta: "Você quer dizer “Pretendo viajar”. Qual frase escolhe?",
            alternativas: [
                "I pretend to travel.",
                "I intend to travel.",
                "I pretend travelling.",
                "I fake to travel."
            ],
            correta: 1,
            explicacao:
                "Intend = pretender. Pretend = fingir.",
            exemplo:
                "I intend to travel in December.",
            traducao:
                "Pretendo viajar em dezembro."
        },


        /* 71 */
        {
            palavra: "parents × relatives",
            categoria: "DUELO ⚔️",
            pergunta: "Como dizer “Meus parentes moram longe”?",
            alternativas: [
                "My parents live far away.",
                "My relatives live far away.",
                "My familiars live far away.",
                "My parentals live far away."
            ],
            correta: 1,
            explicacao:
                "Relatives são parentes. Parents são especificamente pai e mãe/pais.",
            exemplo:
                "We're visiting relatives this weekend.",
            traducao:
                "Vamos visitar parentes neste fim de semana."
        },


        /* 72 */
        {
            palavra: "library × bookstore",
            categoria: "DUELO ⚔️",
            pergunta: "Você quer COMPRAR um livro. Qual lugar procura?",
            alternativas: [
                "Library",
                "Bookstore",
                "Bookhouse",
                "Literary"
            ],
            correta: 1,
            explicacao:
                "Bookstore é livraria. Library é biblioteca.",
            exemplo:
                "There's a bookstore near my house.",
            traducao:
                "Há uma livraria perto da minha casa."
        },


        /* 73 */
        {
            palavra: "fabric × factory",
            categoria: "DUELO ⚔️",
            pergunta: "Qual palavra significa “fábrica”?",
            alternativas: [
                "Fabric",
                "Factory",
                "Fabrication",
                "Factor"
            ],
            correta: 1,
            explicacao:
                "Factory é fábrica. Fabric é tecido.",
            exemplo:
                "My grandfather worked in a factory.",
            traducao:
                "Meu avô trabalhou em uma fábrica."
        },


        /* 74 */
        {
            palavra: "costume × custom",
            categoria: "DUELO ⚔️",
            pergunta: "Qual palavra pode significar um costume/tradição de uma sociedade?",
            alternativas: [
                "Costume",
                "Custom",
                "Clothing",
                "Fantasy"
            ],
            correta: 1,
            explicacao:
                "Custom pode significar costume ou tradição. Costume normalmente é traje ou fantasia.",
            exemplo:
                "It's a local custom.",
            traducao:
                "É um costume local."
        },


        /* 75 */
        {
            palavra: "novel × soap opera",
            categoria: "TV OU LIVRO?",
            pergunta: "Como dizer “Minha avó está assistindo à novela”?",
            alternativas: [
                "My grandmother is watching a novel.",
                "My grandmother is watching a soap opera.",
                "My grandmother is reading a TV novel.",
                "My grandmother is seeing a romance."
            ],
            correta: 1,
            explicacao:
                "Soap opera é usado para novelas televisivas. Novel é um romance literário.",
            exemplo:
                "She never misses her favorite soap opera.",
            traducao:
                "Ela nunca perde sua novela favorita."
        },


        /* 76 */
        {
            palavra: "support × tolerate",
            categoria: "QUAL É A IDEIA?",
            pergunta: "Você quer dizer “Eu não aguento esse barulho”. Qual opção é natural?",
            alternativas: [
                "I don't support this noise.",
                "I can't stand this noise.",
                "I don't sustain this noise.",
                "I can't assist this noise."
            ],
            correta: 1,
            explicacao:
                "Support não é normalmente usado como “aguentar”. Can't stand é muito natural para “não aguentar”.",
            exemplo:
                "I can't stand this heat.",
            traducao:
                "Eu não aguento este calor."
        },


        /* 77 */
        {
            palavra: "legend × caption",
            categoria: "SOCIAL MEDIA",
            pergunta: "Você postou uma foto. Como chama o texto abaixo dela?",
            alternativas: [
                "Legend",
                "Caption",
                "Subtitle",
                "Novel"
            ],
            correta: 1,
            explicacao:
                "Caption é a legenda de uma foto/post. Legend significa lenda.",
            exemplo:
                "Her caption made me laugh.",
            traducao:
                "A legenda dela me fez rir."
        },


        /* 78 */
        {
            palavra: "college × school",
            categoria: "ESTUDOS",
            pergunta: "Uma criança de 10 anos normalmente diz:",
            alternativas: [
                "I go to college.",
                "I go to school.",
                "I go to university.",
                "I go to faculty."
            ],
            correta: 1,
            explicacao:
                "School é usado para escola. College está associado ao ensino superior.",
            exemplo:
                "The kids are at school.",
            traducao:
                "As crianças estão na escola."
        },


        /* 79 */
        {
            palavra: "faculty",
            categoria: "UNIVERSIDADE",
            pergunta: "Em inglês americano, “the faculty” de uma universidade frequentemente se refere...",
            alternativas: [
                "Ao prédio da faculdade",
                "Ao corpo docente",
                "Aos alunos",
                "À cantina"
            ],
            correta: 1,
            explicacao:
                "Faculty frequentemente significa o conjunto de professores de uma instituição ou departamento.",
            exemplo:
                "She joined the university faculty.",
            traducao:
                "Ela passou a integrar o corpo docente da universidade."
        },


        /* 80 */
        {
            palavra: "graduation",
            categoria: "FORMATURA 🎓",
            pergunta: "“My graduation is next month.” significa:",
            alternativas: [
                "Minha graduação começa mês que vem",
                "Minha formatura é mês que vem",
                "Minha pós-graduação é mês que vem",
                "Minha aula começa mês que vem"
            ],
            correta: 1,
            explicacao:
                "Graduation pode se referir à conclusão/formatura de um curso.",
            exemplo:
                "Her parents came to her graduation.",
            traducao:
                "Os pais dela vieram à formatura."
        },


        /* 81 */
        {
            palavra: "graduate",
            categoria: "DEPOIS DA FACULDADE",
            pergunta: "“I graduated last year.” significa:",
            alternativas: [
                "Comecei a graduação ano passado",
                "Me formei ano passado",
                "Abandonei a faculdade",
                "Passei de ano"
            ],
            correta: 1,
            explicacao:
                "To graduate significa concluir um curso ou formar-se.",
            exemplo:
                "She graduated from university in 2025.",
            traducao:
                "Ela se formou na universidade em 2025."
        },


        /* 82 */
        {
            palavra: "eventually × occasionally",
            categoria: "DUELO ⚔️",
            pergunta: "Qual palavra significa “ocasionalmente”?",
            alternativas: [
                "Eventually",
                "Occasionally",
                "Actually",
                "Finally"
            ],
            correta: 1,
            explicacao:
                "Occasionally = ocasionalmente. Eventually = finalmente/com o tempo.",
            exemplo:
                "I occasionally work from home.",
            traducao:
                "Ocasionalmente trabalho de casa."
        },


        /* 83 */
        {
            palavra: "actually",
            categoria: "CORRIJA O ERRO",
            pergunta: "Uma pessoa escreveu: “Actually I am studying French” querendo dizer “Atualmente estudo francês”. Qual é a correção?",
            alternativas: [
                "Eventually I am studying French.",
                "Currently I am studying French.",
                "Pretend I am studying French.",
                "Actually está perfeito nesse sentido."
            ],
            correta: 1,
            explicacao:
                "Para “atualmente”, currently é a escolha adequada. Actually seria “na verdade”.",
            exemplo:
                "I'm currently learning French.",
            traducao:
                "Atualmente estou aprendendo francês."
        },


        /* 84 */
        {
            palavra: "pretend",
            categoria: "CORRIJA O ERRO",
            pergunta: "“I pretend to study abroad next year” queria dizer “Pretendo estudar fora”. Qual palavra deve entrar?",
            alternativas: [
                "fake",
                "intend",
                "suppose",
                "simulate"
            ],
            correta: 1,
            explicacao:
                "Intend expressa intenção. Pretend significa fingir.",
            exemplo:
                "I intend to study abroad.",
            traducao:
                "Pretendo estudar no exterior."
        },


        /* 85 */
        {
            palavra: "parents",
            categoria: "CORRIJA O ERRO",
            pergunta: "“I have many parents in Brazil” queria dizer “Tenho muitos parentes no Brasil”. Troque parents por:",
            alternativas: [
                "parentals",
                "relatives",
                "families",
                "familiar people"
            ],
            correta: 1,
            explicacao:
                "Relatives significa parentes. Parents significa pais.",
            exemplo:
                "Most of my relatives live in Brazil.",
            traducao:
                "A maioria dos meus parentes mora no Brasil."
        },


        /* 86 */
        {
            palavra: "library",
            categoria: "CORRIJA O ERRO",
            pergunta: "“I bought the book at the library.” Se a pessoa quer dizer “livraria”, qual palavra deve usar?",
            alternativas: [
                "Literature",
                "Bookstore",
                "Book library",
                "Book office"
            ],
            correta: 1,
            explicacao:
                "Bookstore é livraria. Library é biblioteca.",
            exemplo:
                "I bought it at a bookstore.",
            traducao:
                "Eu comprei em uma livraria."
        },


        /* 87 */
        {
            palavra: "sensible",
            categoria: "CORRIJA O ERRO",
            pergunta: "“She's very sensible and cries easily.” Para dizer “sensível”, seria melhor usar:",
            alternativas: [
                "Sensible",
                "Sensitive",
                "Sensational",
                "Emotionality"
            ],
            correta: 1,
            explicacao:
                "Sensitive significa sensível. Sensible significa sensato.",
            exemplo:
                "She's a very sensitive person.",
            traducao:
                "Ela é uma pessoa muito sensível."
        },


        /* 88 */
        {
            palavra: "exit",
            categoria: "MISSÃO DE SOBREVIVÊNCIA",
            pergunta: "Há fumaça no prédio e você precisa encontrar a saída. Qual placa procura?",
            alternativas: [
                "SUCCESS",
                "EXIT",
                "ENTRANCE",
                "ESCAPE ROOM"
            ],
            correta: 1,
            explicacao:
                "Exit significa saída.",
            exemplo:
                "Follow the signs to the nearest exit.",
            traducao:
                "Siga as placas até a saída mais próxima."
        },


        /* 89 */
        {
            palavra: "push × pull",
            categoria: "PORTA FINAL BOSS",
            pergunta: "A porta diz PULL, mas você está empurrando. Por que ela não abre?",
            alternativas: [
                "Porque pull significa empurrar com força",
                "Porque pull significa puxar",
                "Porque pull significa esperar",
                "Porque pull significa trancar"
            ],
            correta: 1,
            explicacao:
                "Pull = puxar. Push = empurrar. A humilde porta venceu novamente.",
            exemplo:
                "Pull the door, don't push it.",
            traducao:
                "Puxe a porta, não a empurre."
        },


        /* 90 */
        {
            palavra: "THE FINAL TRAP",
            categoria: "BOSS FINAL ☝️🤓",
            pergunta: "Qual frase está completamente correta?",
            alternativas: [
                "Actually, my parents are my relatives from Argentina.",
                "I pretend to visit the library to buy a novel.",
                "Currently, I intend to visit my relatives.",
                "Eventually means eventualmente."
            ],
            correta: 2,
            explicacao:
                "Currently = atualmente, intend = pretender e relatives = parentes. Essa frase escapou de todas as armadilhas.",
            exemplo:
                "Currently, I intend to visit my relatives.",
            traducao:
                "Atualmente, pretendo visitar meus parentes."
        }

    ],


    /* =====================================================
       FRANCÊS
       Mantemos o banco atual por enquanto.
       Depois podemos transformar em outro banco de 90.
       ===================================================== */

    frances: [

        {
            palavra: "poser un lapin",
            categoria: "EXPRESSION CURIEUSE",
            pergunta:
                "O que essa expressão significa?",
            alternativas: [
                "Comprar um coelho",
                "Dar bolo em alguém",
                "Estar com medo",
                "Contar uma mentira"
            ],
            correta: 1,
            explicacao:
                "Poser un lapin significa não aparecer a um encontro combinado.",
            exemplo:
                "Il m'a posé un lapin.",
            traducao:
                "Ele me deu um bolo."
        },

        {
            palavra: "avoir le cafard",
            categoria: "EXPRESSION CURIEUSE",
            pergunta:
                "O que essa expressão significa?",
            alternativas: [
                "Ter uma barata",
                "Estar animado",
                "Estar triste",
                "Estar cansado"
            ],
            correta: 2,
            explicacao:
                "Avoir le cafard é uma maneira informal de dizer que alguém está triste ou para baixo.",
            exemplo:
                "J'ai le cafard aujourd'hui.",
            traducao:
                "Estou meio para baixo hoje."
        },

        {
            palavra: "beaucoup",
            categoria: "VOCABULAIRE",
            pergunta:
                "O que beaucoup significa?",
            alternativas: [
                "Pouco",
                "Muito",
                "Sempre",
                "Talvez"
            ],
            correta: 1,
            explicacao:
                "Beaucoup significa muito ou muitos e expressa quantidade ou intensidade.",
            exemplo:
                "J'aime beaucoup ce film.",
            traducao:
                "Eu gosto muito desse filme."
        }

    ]

};

/* =========================================================
   UHM, ACTUALLY...
   SISTEMA DO QUIZ
   SEM LIMITE DIÁRIO
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

const TAMANHO_RODADA = 3;


/* =========================================================
   CHAVES DO LOCAL STORAGE
   ========================================================= */

function chaveProgresso(idioma) {
    return `uhmActuallyProgresso_${idioma}`;
}

function chaveOrdem(idioma) {
    return `uhmActuallyOrdem_${idioma}`;
}


/* =========================================================
   PROGRESSO
   ========================================================= */

function carregarProgresso(idioma) {

    const valor = localStorage.getItem(
        chaveProgresso(idioma)
    );

    if (valor === null) {
        return 0;
    }

    const numero = Number(valor);

    if (Number.isNaN(numero) || numero < 0) {
        return 0;
    }

    return numero;
}


function salvarProgresso(idioma, quantidade) {

    localStorage.setItem(
        chaveProgresso(idioma),
        String(quantidade)
    );

}


/* =========================================================
   EMBARALHAR ARRAY
   ========================================================= */

function embaralharArray(array) {

    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        const temporario = copia[i];

        copia[i] = copia[j];
        copia[j] = temporario;
    }

    return copia;
}


/* =========================================================
   ORDEM DAS PERGUNTAS
   ========================================================= */

function carregarOrdem(idioma) {

    const banco = perguntas[idioma];

    if (!banco || banco.length === 0) {
        return [];
    }

    const salvo = localStorage.getItem(
        chaveOrdem(idioma)
    );

    if (salvo) {

        try {

            const ordem = JSON.parse(salvo);

            if (
                Array.isArray(ordem) &&
                ordem.length === banco.length
            ) {
                return ordem;
            }

        } catch (erro) {

            console.error(
                "Não foi possível carregar a ordem:",
                erro
            );

        }
    }


    const indices = banco.map(
        (_, indice) => indice
    );

    const novaOrdem = embaralharArray(indices);

    localStorage.setItem(
        chaveOrdem(idioma),
        JSON.stringify(novaOrdem)
    );

    return novaOrdem;
}


/* =========================================================
   CRIAR NOVO CICLO
   ========================================================= */

function criarNovoCiclo(idioma) {

    const banco = perguntas[idioma];

    if (!banco || banco.length === 0) {
        return;
    }

    const indices = banco.map(
        (_, indice) => indice
    );

    const novaOrdem = embaralharArray(indices);

    localStorage.setItem(
        chaveOrdem(idioma),
        JSON.stringify(novaOrdem)
    );

    salvarProgresso(idioma, 0);

    perguntaAtual = 0;
}


/* =========================================================
   PEGAR PERGUNTA ATUAL
   ========================================================= */

function pegarPerguntaAtual() {

    if (!idiomaAtual) {
        return null;
    }

    const banco = perguntas[idiomaAtual];

    if (!banco || banco.length === 0) {
        return null;
    }

    const ordem = carregarOrdem(idiomaAtual);

    if (perguntaAtual >= ordem.length) {
        return null;
    }

    const indiceReal = ordem[perguntaAtual];

    return banco[indiceReal];
}


/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

function mostrarPagina(nome) {

    const paginas = document.querySelectorAll(
        ".pagina"
    );

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });


    const paginaEscolhida =
        document.getElementById(nome);

    if (!paginaEscolhida) {

        console.error(
            `Página "${nome}" não encontrada.`
        );

        return;
    }


    paginaEscolhida.classList.add("ativa");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (nome === "home") {

        atualizarDashboard();
        return;

    }


    if (
        nome === "ingles" ||
        nome === "frances"
    ) {

        iniciarIdioma(nome);

    }
}


/* =========================================================
   INICIAR IDIOMA
   ========================================================= */

function iniciarIdioma(idioma) {

    idiomaAtual = idioma;

    perguntaAtual = carregarProgresso(
        idioma
    );


    const banco = perguntas[idioma];

    if (!banco || banco.length === 0) {

        console.error(
            `Não existem perguntas para ${idioma}.`
        );

        return;
    }


    if (perguntaAtual >= banco.length) {

        mostrarFimDoCiclo();
        return;

    }


    mostrarPergunta();
}


/* =========================================================
   MOSTRAR PERGUNTA
   ========================================================= */

function mostrarPergunta() {

    const pergunta = pegarPerguntaAtual();

    if (!pergunta) {

        mostrarFimDoCiclo();
        return;

    }


    const container = document.querySelector(
        `#${idiomaAtual} .quiz`
    );


    if (!container) {

        console.error(
            "O elemento .quiz não foi encontrado."
        );

        return;
    }


    const total = perguntas[idiomaAtual].length;

    const numero = perguntaAtual + 1;

    const porcentagem = Math.round(
        (perguntaAtual / total) * 100
    );


    const alternativasHTML =
        pergunta.alternativas
            .map((alternativa, indice) => {

                const letra =
                    String.fromCharCode(
                        65 + indice
                    );

                return `
                    <button
                        type="button"
                        onclick="responder(${indice})"
                    >
                        <strong>
                            ${letra}.
                        </strong>

                        ${alternativa}
                    </button>
                `;

            })
            .join("");


    container.innerHTML = `

        <button
            type="button"
            class="voltar"
            onclick="mostrarPagina('home')"
        >
            <span class="voltar-seta">
                ←
            </span>

            <span>
                Voltar ao início
            </span>
        </button>


        <div class="progresso-topo">
            Desafio ${numero} de ${total}
        </div>


        <div
            class="barra-quiz"
            style="
                width: 100%;
                height: 8px;
                background: #EEE8FF;
                border-radius: 999px;
                overflow: hidden;
                margin: 12px 0 28px;
            "
        >
            <div
                style="
                    width: ${porcentagem}%;
                    height: 100%;
                    background: #B59DFF;
                    border-radius: 999px;
                    transition: width .3s ease;
                "
            ></div>
        </div>


        <p class="categoria">
            ${pergunta.categoria}
        </p>


        <h3>
            ${pergunta.palavra}
        </h3>


        <p class="pergunta">
            ${pergunta.pergunta}
        </p>


        <div class="alternativas">
            ${alternativasHTML}
        </div>


        <div
            id="resposta-atual"
            class="resposta"
        ></div>

    `;
}


/* =========================================================
   RESPONDER
   ========================================================= */

function responder(escolha) {

    const pergunta = pegarPerguntaAtual();

    if (!pergunta) {
        return;
    }


    const resposta = document.getElementById(
        "resposta-atual"
    );


    if (!resposta) {
        return;
    }


    const botoes = document.querySelectorAll(
        `#${idiomaAtual} .alternativas button`
    );


    const acertou =
        escolha === pergunta.correta;


    /* Bloqueia todos os botões */

    botoes.forEach((botao) => {

        botao.disabled = true;

    });


    /* Mostra a alternativa correta */

    botoes.forEach((botao, indice) => {

        if (indice === pergunta.correta) {

            botao.classList.add(
                "alternativa-correta"
            );

        }

    });


    /* Marca a alternativa errada escolhida */

    if (!acertou && botoes[escolha]) {

        botoes[escolha].classList.add(
            "alternativa-errada"
        );

    }


    const total = perguntas[idiomaAtual].length;

    const ultimaPergunta =
        perguntaAtual === total - 1;


    const textoBotao =
        ultimaPergunta
            ? "Finalizar"
            : "Próximo";


    if (acertou) {

        resposta.className =
            "resposta mostrar correto";


        resposta.innerHTML = `

            <h4>
                ✨ Mandou bem!
            </h4>

            <p>
                ${pergunta.explicacao}
            </p>


            <div class="exemplo-resposta">

                <strong>
                    Exemplo
                </strong>

                <p>
                    <em>
                        ${pergunta.exemplo}
                    </em>
                </p>

                <p>
                    ${pergunta.traducao}
                </p>

            </div>


            <button
                type="button"
                class="botao principal botao-proximo"
                onclick="proximaPergunta()"
            >
                ${textoBotao}

                <span>
                    →
                </span>
            </button>

        `;

    } else {

        resposta.className =
            "resposta mostrar errado";


        resposta.innerHTML = `

            <h4>
                ☝️🤓 Uhm, actually...
            </h4>

            <p>
                Essa tentou te sabotar.
            </p>

            <p>
                ${pergunta.explicacao}
            </p>


            <div class="exemplo-resposta">

                <strong>
                    Exemplo
                </strong>

                <p>
                    <em>
                        ${pergunta.exemplo}
                    </em>
                </p>

                <p>
                    ${pergunta.traducao}
                </p>

            </div>


            <button
                type="button"
                class="botao principal botao-proximo"
                onclick="proximaPergunta()"
            >
                ${
                    ultimaPergunta
                        ? "Finalizar"
                        : "Agora eu sei"
                }

                <span>
                    →
                </span>
            </button>

        `;
    }
}


/* =========================================================
   PRÓXIMA PERGUNTA
   ========================================================= */

function proximaPergunta() {

    perguntaAtual++;


    salvarProgresso(
        idiomaAtual,
        perguntaAtual
    );


    const total =
        perguntas[idiomaAtual].length;


    if (perguntaAtual >= total) {

        mostrarFimDoCiclo();
        atualizarDashboard();

        return;
    }


    /*
       A cada 3 desafios aparece uma pequena
       comemoração, MAS NÃO EXISTE BLOQUEIO.

       O usuário pode continuar imediatamente.
    */

    if (
        perguntaAtual % TAMANHO_RODADA === 0
    ) {

        mostrarFimDaRodada();
        atualizarDashboard();

        return;
    }


    mostrarPergunta();
}


/* =========================================================
   FIM DA RODADA
   ========================================================= */

function mostrarFimDaRodada() {

    const container = document.querySelector(
        `#${idiomaAtual} .quiz`
    );


    if (!container) {
        return;
    }


    const total =
        perguntas[idiomaAtual].length;


    const feitas =
        perguntaAtual;


    const restantes =
        Math.max(
            0,
            total - feitas
        );


    const porcentagem =
        Math.round(
            (feitas / total) * 100
        );


    container.innerHTML = `

        <button
            type="button"
            class="voltar"
            onclick="mostrarPagina('home')"
        >
            <span class="voltar-seta">
                ←
            </span>

            <span>
                Voltar ao início
            </span>
        </button>


        <div class="fim-dia">

            <div class="icone-final">
                ✨
            </div>


            <p class="categoria">
                CHECKPOINT
            </p>


            <h3>
                Mais 3 desafios concluídos!
            </h3>


            <p>
                Quer fazer uma pausa?
                Pode parar aqui.
                Seu progresso já está salvo.
            </p>


            <div class="contador-card">

                <small>
                    PROGRESSO
                </small>

                <strong>
                    ${feitas}/${total}
                </strong>

                <p>
                    ${porcentagem}% concluído
                </p>

            </div>


            <p>
                Restam
                <strong>
                    ${restantes}
                </strong>
                desafios.
            </p>


            <div
                class="botoes"
                style="
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                "
            >

                <button
                    type="button"
                    class="botao principal"
                    onclick="continuarQuiz()"
                >
                    Continuar aprendendo
                    <span>→</span>
                </button>


                <button
                    type="button"
                    class="botao amarelo"
                    onclick="mostrarPagina('home')"
                >
                    Parar por agora
                </button>

            </div>

        </div>

    `;
}


/* =========================================================
   CONTINUAR QUIZ
   ========================================================= */

function continuarQuiz() {

    mostrarPergunta();

}


/* =========================================================
   FIM DO CICLO
   ========================================================= */

function mostrarFimDoCiclo() {

    const container = document.querySelector(
        `#${idiomaAtual} .quiz`
    );


    if (!container) {
        return;
    }


    const total =
        perguntas[idiomaAtual].length;


    container.innerHTML = `

        <button
            type="button"
            class="voltar"
            onclick="mostrarPagina('home')"
        >
            <span class="voltar-seta">
                ←
            </span>

            <span>
                Voltar ao início
            </span>
        </button>


        <div class="fim-dia">

            <div class="icone-final">
                🏆
            </div>


            <p class="categoria">
                CICLO COMPLETO
            </p>


            <h3>
                Você zerou!
            </h3>


            <p>
                Você completou todos os
                <strong>
                    ${total} desafios
                </strong>
                disponíveis.
            </p>


            <div class="contador-card">

                <small>
                    PROGRESSO
                </small>

                <strong>
                    ${total}/${total}
                </strong>

                <p>
                    100% concluído ✨
                </p>

            </div>


            <p>
                Você pode embaralhar as perguntas
                e começar um novo ciclo.
            </p>


            <div
                class="botoes"
                style="
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                "
            >

                <button
                    type="button"
                    class="botao principal"
                    onclick="reiniciarCiclo()"
                >
                    Jogar novamente
                    <span>↻</span>
                </button>


                <button
                    type="button"
                    class="botao amarelo"
                    onclick="mostrarPagina('home')"
                >
                    Voltar ao dashboard
                </button>

            </div>

        </div>

    `;
}


/* =========================================================
   REINICIAR CICLO
   ========================================================= */

function reiniciarCiclo() {

    criarNovoCiclo(idiomaAtual);

    atualizarDashboard();

    mostrarPergunta();
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function atualizarDashboard() {

    atualizarCardDashboard(
        "dashboard-ingles",
        "ingles"
    );


    atualizarCardDashboard(
        "dashboard-frances",
        "frances"
    );


    atualizarSaudacao();
}


/* =========================================================
   ATUALIZAR CARD
   ========================================================= */

function atualizarCardDashboard(
    idCard,
    idioma
) {

    const card =
        document.getElementById(idCard);


    if (!card) {
        return;
    }


    const total =
        perguntas[idioma].length;


    const progresso =
        Math.min(
            carregarProgresso(idioma),
            total
        );


    const porcentagem =
        total > 0
            ? (progresso / total) * 100
            : 0;


    const texto =
        card.querySelector(
            ".dashboard-progresso-texto"
        );


    const barra =
        card.querySelector(
            ".dashboard-barra-preenchida"
        );


    const botao =
        card.querySelector(
            ".dashboard-botao"
        );


    if (texto) {

        texto.textContent =
            `${progresso}/${total} desafios`;

    }


    if (barra) {

        barra.style.width =
            `${porcentagem}%`;

    }


    if (!botao) {
        return;
    }


    if (progresso >= total) {

        card.classList.add(
            "dashboard-concluido"
        );


        botao.innerHTML = `
            Ver resultado
            <span>✓</span>
        `;

    } else {

        card.classList.remove(
            "dashboard-concluido"
        );


        if (progresso === 0) {

            botao.innerHTML = `
                Começar
                <span>→</span>
            `;

        } else {

            botao.innerHTML = `
                Continuar
                <span>→</span>
            `;

        }
    }
}


/* =========================================================
   SAUDAÇÃO
   ========================================================= */

function atualizarSaudacao() {

    const elemento =
        document.getElementById(
            "saudacao"
        );


    if (!elemento) {
        return;
    }


    const hora =
        new Date().getHours();


    if (hora >= 5 && hora < 12) {

        elemento.textContent =
            "Bom dia ☀️";

    } else if (
        hora >= 12 &&
        hora < 18
    ) {

        elemento.textContent =
            "Boa tarde ✨";

    } else {

        elemento.textContent =
            "Boa noite 🌙";

    }
}


/* =========================================================
   RESET OPCIONAL

   Esta função NÃO aparece para o aluno.
   É útil durante seus testes.
   ========================================================= */

function resetarProgresso() {

    localStorage.removeItem(
        chaveProgresso("ingles")
    );

    localStorage.removeItem(
        chaveProgresso("frances")
    );

    localStorage.removeItem(
        chaveOrdem("ingles")
    );

    localStorage.removeItem(
        chaveOrdem("frances")
    );

    atualizarDashboard();

    console.log(
        "Progresso do Uhm, Actually... resetado."
    );
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        atualizarDashboard();

    }
);