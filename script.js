const bancos = {

    ingles: [{
    pergunta: "Você lê: “Actually, I don't like coffee.” O que “actually” significa?",
    opcoes: [
        "Atualmente",
        "Na verdade",
        "Eventualmente",
        "Finalmente"
    ],
    correta: 1,
    explicacao: "Actually significa “na verdade” ou “na realidade”. Para “atualmente”, usamos currently."
},
{
    pergunta: "Qual frase significa “Atualmente, eu trabalho de casa”?",
    opcoes: [
        "Actually, I work from home.",
        "Eventually, I work from home.",
        "Currently, I work from home.",
        "Finally, I work from home."
    ],
    correta: 2,
    explicacao: "Currently significa “atualmente”. Actually é o famoso falso cognato e significa “na verdade”."
},
{
    pergunta: "“Eventually, she found a new job.” significa:",
    opcoes: [
        "Eventualmente, ela encontrou um novo emprego.",
        "Por fim, ela encontrou um novo emprego.",
        "Atualmente, ela encontrou um novo emprego.",
        "Possivelmente, ela encontrou um novo emprego."
    ],
    correta: 1,
    explicacao: "Eventually geralmente significa “por fim”, “finalmente” ou “com o tempo”, e não “eventualmente”."
},
{
    pergunta: "Você quer dizer “Talvez eu viaje no fim de semana”. Qual opção funciona melhor?",
    opcoes: [
        "Eventually, I'll travel this weekend.",
        "Maybe I'll travel this weekend.",
        "Actually, I'll travel this weekend.",
        "Finally, I'll travel this weekend."
    ],
    correta: 1,
    explicacao: "Maybe significa “talvez”. Eventually indica que algo acontece por fim ou depois de algum tempo."
},
{
    pergunta: "“I intend to study abroad next year.” O verbo “intend” significa:",
    opcoes: [
        "Entender",
        "Tentar",
        "Pretender / ter a intenção de",
        "Atender"
    ],
    correta: 2,
    explicacao: "To intend significa “pretender” ou “ter a intenção de”. “Entender” é to understand."
},
{
    pergunta: "Como dizer “Eu não entendi a pergunta”?",
    opcoes: [
        "I didn't intend the question.",
        "I didn't understand the question.",
        "I didn't attend the question.",
        "I didn't pretend the question."
    ],
    correta: 1,
    explicacao: "Understand significa “entender”. Intend significa “pretender/ter a intenção de”."
},
{
    pergunta: "“She pretended to be asleep.” significa:",
    opcoes: [
        "Ela pretendia dormir.",
        "Ela fingiu estar dormindo.",
        "Ela tentou dormir.",
        "Ela preferiu dormir."
    ],
    correta: 1,
    explicacao: "To pretend significa “fingir”. Para “pretender fazer algo”, normalmente usamos intend ou plan."
},
{
    pergunta: "Qual frase significa “Pretendo aprender inglês este ano”?",
    opcoes: [
        "I pretend to learn English this year.",
        "I intend to learn English this year.",
        "I pretend English this year.",
        "I attend English this year."
    ],
    correta: 1,
    explicacao: "Em inglês, intend to significa “pretender fazer algo”. Pretend significa “fingir”."
},
{
    pergunta: "“My parents are very supportive.” significa que os pais são:",
    opcoes: [
        "Muito suportáveis",
        "Muito rígidos",
        "Muito solidários e dão apoio",
        "Muito silenciosos"
    ],
    correta: 2,
    explicacao: "Supportive descreve alguém que apoia, incentiva ou ajuda outra pessoa."
},
{
    pergunta: "Qual verbo é mais natural em “Não aguento mais esse barulho”?",
    opcoes: [
        "support",
        "pretend",
        "stand",
        "attend"
    ],
    correta: 2,
    explicacao: "I can't stand this noise significa “não aguento esse barulho”. Support normalmente significa apoiar ou dar suporte."
},

{
    pergunta: "“I attended the meeting yesterday.” significa:",
    opcoes: [
        "Eu atendi a reunião ontem.",
        "Eu participei/compareci à reunião ontem.",
        "Eu organizei a reunião ontem.",
        "Eu cancelei a reunião ontem."
    ],
    correta: 1,
    explicacao: "To attend significa comparecer ou participar de um evento, aula, reunião etc."
},
{
    pergunta: "Você trabalha em uma loja e quer dizer “Vou atender o cliente”. Qual opção é adequada?",
    opcoes: [
        "I'll attend the customer.",
        "I'll help the customer.",
        "I'll pretend the customer.",
        "I'll assist to the customer."
    ],
    correta: 1,
    explicacao: "Attend não significa simplesmente “atender alguém”. Em uma loja, help the customer é uma opção natural."
},
{
    pergunta: "“She assisted me with the project.” significa:",
    opcoes: [
        "Ela assistiu ao meu projeto.",
        "Ela me ajudou com o projeto.",
        "Ela abandonou o projeto.",
        "Ela apresentou o projeto."
    ],
    correta: 1,
    explicacao: "To assist significa “ajudar” ou “auxiliar”. Para assistir a um filme, usamos watch."
},
{
    pergunta: "Como dizer “Nós assistimos a um filme ontem”?",
    opcoes: [
        "We assisted a movie yesterday.",
        "We attended a movie yesterday.",
        "We watched a movie yesterday.",
        "We supported a movie yesterday."
    ],
    correta: 2,
    explicacao: "Watch é usado para assistir a filmes, séries, TV etc. Assist significa ajudar."
},
{
    pergunta: "“The library closes at 8 p.m.” Onde essa pessoa está?",
    opcoes: [
        "Em uma livraria",
        "Em uma biblioteca",
        "Em um laboratório",
        "Em uma papelaria"
    ],
    correta: 1,
    explicacao: "Library significa “biblioteca”. “Livraria” em inglês é bookstore ou bookshop."
},
{
    pergunta: "Você quer comprar um livro. Para onde provavelmente vai?",
    opcoes: [
        "Library",
        "Bookstore",
        "Lecture",
        "College"
    ],
    correta: 1,
    explicacao: "Bookstore é “livraria”. Library é “biblioteca”."
},
{
    pergunta: "“The professor gave a lecture on history.” Nesse contexto, “lecture” é:",
    opcoes: [
        "Uma leitura silenciosa",
        "Uma palestra/aula expositiva",
        "Uma livraria",
        "Uma prova"
    ],
    correta: 1,
    explicacao: "Lecture é uma palestra ou aula expositiva. “Leitura” é reading."
},
{
    pergunta: "Como dizer “A leitura desse livro foi difícil”?",
    opcoes: [
        "The lecture of this book was difficult.",
        "The reading of this book was difficult.",
        "The library of this book was difficult.",
        "The lesson of this book was difficult."
    ],
    correta: 1,
    explicacao: "Reading corresponde a “leitura”. Lecture é palestra ou aula expositiva."
},
{
    pergunta: "“I go to college in Boston.” Nesse contexto, “college” normalmente se refere a:",
    opcoes: [
        "Ensino superior/faculdade",
        "Ensino fundamental",
        "Uma escola infantil",
        "Um curso de idiomas necessariamente"
    ],
    correta: 0,
    explicacao: "No inglês americano, college normalmente está relacionado ao ensino superior, não ao nosso “colégio”."
},
{
    pergunta: "Qual palavra corresponde melhor a “colégio/escola” de forma geral?",
    opcoes: [
        "College",
        "School",
        "Library",
        "Lecture"
    ],
    correta: 1,
    explicacao: "School é a palavra geral para escola. College, especialmente nos EUA, costuma indicar ensino superior."
},

{
    pergunta: "“The fabric is very soft.” A palavra “fabric” significa:",
    opcoes: [
        "Fábrica",
        "Tecido",
        "Fabricação",
        "Ferramenta"
    ],
    correta: 1,
    explicacao: "Fabric significa “tecido”. “Fábrica” é factory."
},
{
    pergunta: "Como dizer “Meu pai trabalha em uma fábrica”?",
    opcoes: [
        "My father works in a fabric.",
        "My father works in a factory.",
        "My father works in a costume.",
        "My father works in a cafeteria."
    ],
    correta: 1,
    explicacao: "Factory significa “fábrica”. Fabric é “tecido”."
},
{
    pergunta: "“She wore a pirate costume to the party.” O que ela usou?",
    opcoes: [
        "Um costume/hábito de pirata",
        "Uma fantasia de pirata",
        "Um terno de pirata",
        "Um uniforme escolar"
    ],
    correta: 1,
    explicacao: "Costume em inglês normalmente significa “fantasia” ou traje característico."
},
{
    pergunta: "Qual palavra significa “costume” no sentido de hábito ou tradição?",
    opcoes: [
        "Costume",
        "Custom",
        "Customer",
        "Clothes"
    ],
    correta: 1,
    explicacao: "Custom significa costume, hábito ou tradição. Costume normalmente é fantasia/traje."
},
{
    pergunta: "“The customer asked for the manager.” Quem pediu para falar com o gerente?",
    opcoes: [
        "O costume",
        "O cliente",
        "O funcionário",
        "O estilista"
    ],
    correta: 1,
    explicacao: "Customer significa “cliente”. Não confunda com custom, que pode significar costume/tradição."
},
{
    pergunta: "“This is a comprehensive guide.” significa que o guia é:",
    opcoes: [
        "Compreensivo e paciente",
        "Abrangente/completo",
        "Confuso",
        "Curto"
    ],
    correta: 1,
    explicacao: "Comprehensive significa “abrangente”, “completo”. Uma pessoa compreensiva pode ser understanding."
},
{
    pergunta: "Como dizer “Ela foi muito compreensiva comigo”?",
    opcoes: [
        "She was very comprehensive with me.",
        "She was very understanding with me.",
        "She was very eventual with me.",
        "She was very sensible with me."
    ],
    correta: 1,
    explicacao: "Understanding pode descrever alguém compreensivo. Comprehensive significa abrangente."
},
{
    pergunta: "“Be sensible and take an umbrella.” Nesse contexto, “sensible” significa:",
    opcoes: [
        "Sensível",
        "Sensato",
        "Sentimental",
        "Sociável"
    ],
    correta: 1,
    explicacao: "Sensible significa “sensato”, “prudente”. Sensitive significa “sensível”."
},
{
    pergunta: "Qual frase significa “Minha pele é muito sensível”?",
    opcoes: [
        "My skin is very sensible.",
        "My skin is very sensitive.",
        "My skin is very comprehensive.",
        "My skin is very sympathetic."
    ],
    correta: 1,
    explicacao: "Sensitive significa “sensível”. Sensible significa “sensato”."
},
{
    pergunta: "“He is a very sympathetic character.” Dependendo do contexto, “sympathetic” transmite a ideia de alguém:",
    opcoes: [
        "Necessariamente engraçado",
        "Solidário/compreensivo ou que desperta simpatia",
        "Sempre antipático",
        "Muito sensato"
    ],
    correta: 1,
    explicacao: "Sympathetic está ligado a demonstrar compreensão, solidariedade ou despertar simpatia. Não equivale automaticamente ao nosso “simpático”."
},

{
    pergunta: "Qual palavra costuma ser mais natural para dizer que alguém é “simpático” e amigável?",
    opcoes: [
        "Sympathetic",
        "Friendly",
        "Pretended",
        "Sensible"
    ],
    correta: 1,
    explicacao: "Friendly é uma opção comum para “simpático/amigável”. Sympathetic tem outros sentidos."
},
{
    pergunta: "“I realized I had forgotten my keys.” significa:",
    opcoes: [
        "Eu realizei que tinha esquecido minhas chaves.",
        "Eu percebi que tinha esquecido minhas chaves.",
        "Eu desejei esquecer minhas chaves.",
        "Eu consegui esquecer minhas chaves."
    ],
    correta: 1,
    explicacao: "To realize frequentemente significa “perceber”, “dar-se conta”."
},
{
    pergunta: "Como dizer “Ela realizou o sonho de viajar pelo mundo” de forma natural?",
    opcoes: [
        "She realized the dream to travel the world.",
        "She achieved her dream of traveling the world.",
        "She perceived her dream of traveling the world.",
        "She attended her dream of traveling the world."
    ],
    correta: 1,
    explicacao: "Achieve a dream é uma forma natural de dizer “realizar/conquistar um sonho”. Realize também pode ter esse sentido em alguns contextos, mas não deve ser usado automaticamente como tradução de “realizar”."
},
{
    pergunta: "“The company has several policies.” A palavra “policy” significa:",
    opcoes: [
        "Polícia",
        "Política/diretriz",
        "Policial",
        "Político"
    ],
    correta: 1,
    explicacao: "Policy é política no sentido de regra, diretriz ou princípio adotado por uma organização."
},
{
    pergunta: "Qual palavra significa “polícia”?",
    opcoes: [
        "Policy",
        "Politics",
        "Police",
        "Politician"
    ],
    correta: 2,
    explicacao: "Police significa “polícia”. Policy significa política/diretriz."
},
{
    pergunta: "“Politics can be a controversial topic.” A palavra “politics” refere-se a:",
    opcoes: [
        "Polícia",
        "Política como atividade/assunto",
        "Uma regra empresarial",
        "Um policial"
    ],
    correta: 1,
    explicacao: "Politics é política enquanto área, atividade ou assunto. Policy é uma política/diretriz específica."
},
{
    pergunta: "“She works as an editor.” O que ela faz?",
    opcoes: [
        "É editora/profissional de edição",
        "É escritora necessariamente",
        "É dona de uma editora necessariamente",
        "É professora"
    ],
    correta: 0,
    explicacao: "Editor é a pessoa que edita conteúdo. Dependendo do contexto, “editora” como empresa é publishing company/publisher."
},
{
    pergunta: "“The publisher released the book last month.” Quem lançou o livro?",
    opcoes: [
        "A biblioteca",
        "A editora/publicadora",
        "A escola",
        "A leitora"
    ],
    correta: 1,
    explicacao: "Publisher pode ser a editora ou a entidade responsável pela publicação."
},
{
    pergunta: "“The data is stored in the cloud.” O que “data” significa aqui?",
    opcoes: [
        "Data do calendário",
        "Dados/informações",
        "Dia",
        "Agenda"
    ],
    correta: 1,
    explicacao: "Data significa “dados”. Para data do calendário, usamos date."
},
{
    pergunta: "Como perguntar “Qual é a data da reunião?”",
    opcoes: [
        "What is the data of the meeting?",
        "What is the date of the meeting?",
        "What is the diary of the meeting?",
        "What is the agenda date?"
    ],
    correta: 1,
    explicacao: "Date é “data” no calendário. Data significa “dados”."
},

{
    pergunta: "“I keep a diary.” significa:",
    opcoes: [
        "Eu mantenho um diário.",
        "Eu tenho uma agenda de compromissos necessariamente.",
        "Eu trabalho diariamente.",
        "Eu tenho um dicionário."
    ],
    correta: 0,
    explicacao: "Diary pode significar diário pessoal. Em alguns usos britânicos também pode ser agenda, mas não corresponde automaticamente ao português “diário” em todos os contextos."
},
{
    pergunta: "“Let's discuss the agenda for today's meeting.” O que “agenda” significa aqui?",
    opcoes: [
        "Um caderno onde anoto compromissos",
        "A pauta da reunião",
        "Um diário pessoal",
        "Um calendário"
    ],
    correta: 1,
    explicacao: "Agenda em inglês frequentemente significa “pauta”, lista de assuntos ou objetivos de uma reunião."
},
{
    pergunta: "Você quer dizer “Anotei o compromisso na minha agenda”. Qual opção é natural?",
    opcoes: [
        "I wrote the appointment on the meeting agenda.",
        "I put the appointment in my planner.",
        "I put the appointment in my lecture.",
        "I wrote the appointment in my fabric."
    ],
    correta: 1,
    explicacao: "Planner é uma opção comum para a agenda usada para organizar compromissos."
},
{
    pergunta: "“The mayor announced a new project.” Quem fez o anúncio?",
    opcoes: [
        "O maior",
        "O prefeito",
        "O gerente",
        "O policial"
    ],
    correta: 1,
    explicacao: "Mayor significa “prefeito”. “Maior” pode ser bigger, larger, greatest etc., dependendo do contexto."
},
{
    pergunta: "“This is a major problem.” A palavra “major” significa:",
    opcoes: [
        "Prefeito",
        "Maior/importante/principal",
        "Menor",
        "Municipal"
    ],
    correta: 1,
    explicacao: "Major pode significar grande, importante ou principal, dependendo do contexto. Mayor é prefeito."
},
{
    pergunta: "“Push the door.” O que você deve fazer?",
    opcoes: [
        "Puxar a porta",
        "Empurrar a porta",
        "Fechar a porta",
        "Trancar a porta"
    ],
    correta: 1,
    explicacao: "Push significa “empurrar”. Pull significa “puxar”."
},
{
    pergunta: "A placa diz “PULL”. O que você faz?",
    opcoes: [
        "Empurra",
        "Puxa",
        "Espera",
        "Gira"
    ],
    correta: 1,
    explicacao: "Pull significa “puxar”. É o oposto de push."
},
{
    pergunta: "“I need to borrow your pen.” significa:",
    opcoes: [
        "Preciso emprestar minha caneta para você.",
        "Preciso pegar sua caneta emprestada.",
        "Preciso comprar sua caneta.",
        "Preciso devolver sua caneta."
    ],
    correta: 1,
    explicacao: "Borrow é pegar algo emprestado. Lend é emprestar algo para outra pessoa."
},
{
    pergunta: "Como dizer “Posso te emprestar meu livro”?",
    opcoes: [
        "I can borrow you my book.",
        "I can lend you my book.",
        "I can pretend you my book.",
        "I can attend you my book."
    ],
    correta: 1,
    explicacao: "Lend significa dar algo emprestado. Borrow significa pegar emprestado."
},
{
    pergunta: "“Can I borrow your charger?” A pessoa quer:",
    opcoes: [
        "Emprestar o carregador dela para você",
        "Pegar seu carregador emprestado",
        "Comprar seu carregador",
        "Consertar seu carregador"
    ],
    correta: 1,
    explicacao: "Borrow = pegar emprestado. Pense na direção: a coisa vem para quem está pedindo."
},

{
    pergunta: "“Please lend me your charger.” significa:",
    opcoes: [
        "Por favor, pegue meu carregador emprestado.",
        "Por favor, me empreste seu carregador.",
        "Por favor, venda seu carregador.",
        "Por favor, carregue meu celular."
    ],
    correta: 1,
    explicacao: "Lend = emprestar para alguém. Lend me your charger = me empreste seu carregador."
},
{
    pergunta: "“I'm looking for a job.” significa:",
    opcoes: [
        "Estou olhando para um trabalho.",
        "Estou procurando emprego.",
        "Estou trabalhando agora.",
        "Estou deixando meu emprego."
    ],
    correta: 1,
    explicacao: "Look for significa “procurar”. Look at significa “olhar para”."
},
{
    pergunta: "Qual frase significa “Olhe para esta foto”?",
    opcoes: [
        "Look for this photo.",
        "Look at this photo.",
        "Look after this photo.",
        "Look like this photo."
    ],
    correta: 1,
    explicacao: "Look at = olhar para. Look for = procurar."
},
{
    pergunta: "“She looks like her mother.” significa:",
    opcoes: [
        "Ela procura a mãe.",
        "Ela olha para a mãe.",
        "Ela se parece com a mãe.",
        "Ela cuida da mãe."
    ],
    correta: 2,
    explicacao: "Look like significa “parecer-se com” alguém ou algo."
},
{
    pergunta: "“Can you look after my cat?” significa:",
    opcoes: [
        "Você pode procurar meu gato?",
        "Você pode olhar fixamente para meu gato?",
        "Você pode cuidar do meu gato?",
        "Você pode desenhar meu gato?"
    ],
    correta: 2,
    explicacao: "Look after significa “cuidar de”. Look for seria procurar."
},
{
    pergunta: "“I missed the bus.” significa:",
    opcoes: [
        "Eu senti saudade do ônibus.",
        "Eu perdi o ônibus.",
        "Eu encontrei o ônibus.",
        "Eu dirigi o ônibus."
    ],
    correta: 1,
    explicacao: "Miss pode significar perder uma oportunidade, transporte, aula etc. Também pode significar sentir falta, dependendo do contexto."
},
{
    pergunta: "“I miss my family.” significa:",
    opcoes: [
        "Eu perdi minha família.",
        "Eu sinto falta da minha família.",
        "Eu encontrei minha família.",
        "Eu evito minha família."
    ],
    correta: 1,
    explicacao: "Com pessoas, I miss... frequentemente significa “sinto falta/saudade de...”."
},
{
    pergunta: "Qual frase significa “Perdi minhas chaves”?",
    opcoes: [
        "I missed my keys.",
        "I lost my keys.",
        "I lacked my keys.",
        "I failed my keys."
    ],
    correta: 1,
    explicacao: "Lose é usado para perder um objeto. Miss não substitui “perder” em todos os contextos."
},
{
    pergunta: "“She passed the exam.” significa:",
    opcoes: [
        "Ela passou pela prova fisicamente.",
        "Ela foi aprovada na prova.",
        "Ela perdeu a prova.",
        "Ela entregou a prova."
    ],
    correta: 1,
    explicacao: "Pass an exam significa ser aprovado em uma prova."
},
{
    pergunta: "“He failed the test.” significa:",
    opcoes: [
        "Ele faltou à prova.",
        "Ele foi reprovado/não passou na prova.",
        "Ele terminou a prova cedo.",
        "Ele corrigiu a prova."
    ],
    correta: 1,
    explicacao: "Fail a test significa não passar ou ser reprovado."
},

{
    pergunta: "“I'm embarrassed.” significa:",
    opcoes: [
        "Estou embaraçada fisicamente.",
        "Estou com vergonha/constrangida.",
        "Estou grávida.",
        "Estou brava."
    ],
    correta: 1,
    explicacao: "Embarrassed significa “envergonhado” ou “constrangido”."
},
{
    pergunta: "“That was an embarrassing situation.” A situação foi:",
    opcoes: [
        "Embaraçada com fios",
        "Constrangedora",
        "Emocionante",
        "Perigosa"
    ],
    correta: 1,
    explicacao: "Embarrassing significa “constrangedor”, aquilo que causa vergonha."
},
{
    pergunta: "“She is pregnant.” significa:",
    opcoes: [
        "Ela está constrangida.",
        "Ela está preparada.",
        "Ela está grávida.",
        "Ela está preocupada."
    ],
    correta: 2,
    explicacao: "Pregnant significa “grávida”. Embarrassed significa “constrangida/envergonhada”."
},
{
    pergunta: "“He has a strong accent.” significa que ele tem:",
    opcoes: [
        "Um acento gráfico forte",
        "Um sotaque forte",
        "Uma voz necessariamente alta",
        "Uma gramática ruim"
    ],
    correta: 1,
    explicacao: "Accent pode significar “sotaque”. O acento gráfico de uma palavra pode ser chamado de accent mark."
},
{
    pergunta: "“This word has an accent mark.” significa que a palavra tem:",
    opcoes: [
        "Um sotaque",
        "Uma marca de acentuação",
        "Uma pronúncia britânica",
        "Uma tradução"
    ],
    correta: 1,
    explicacao: "Accent mark refere-se ao sinal gráfico. Accent sozinho também pode se referir ao sotaque."
},
{
    pergunta: "“She gave me some advice.” significa:",
    opcoes: [
        "Ela me deu um aviso.",
        "Ela me deu um conselho.",
        "Ela me deu uma propaganda.",
        "Ela me deu uma notícia."
    ],
    correta: 1,
    explicacao: "Advice significa “conselho”. Para aviso/advertência, dependendo do contexto, podemos usar warning ou notice."
},
{
    pergunta: "Qual frase significa “Ele me avisou sobre o problema”?",
    opcoes: [
        "He advised me the problem.",
        "He warned me about the problem.",
        "He noticed me the problem.",
        "He pretended me the problem."
    ],
    correta: 1,
    explicacao: "Warn someone about something significa avisar/alertar alguém sobre algo."
},
{
    pergunta: "“I noticed a mistake in the document.” significa:",
    opcoes: [
        "Eu noticiei um erro.",
        "Eu percebi/notei um erro.",
        "Eu avisei um erro.",
        "Eu corrigi necessariamente o erro."
    ],
    correta: 1,
    explicacao: "Notice como verbo pode significar “notar” ou “perceber”."
},
{
    pergunta: "“Did you notice anything strange?” significa:",
    opcoes: [
        "Você noticiou algo estranho?",
        "Você percebeu/notou algo estranho?",
        "Você avisou algo estranho?",
        "Você escreveu algo estranho?"
    ],
    correta: 1,
    explicacao: "To notice = notar/perceber. “Noticiar” costuma exigir outras construções, como report."
},
{
    pergunta: "“The news was surprising.” A palavra “news” significa:",
    opcoes: [
        "Novos",
        "Notícia/notícias",
        "Novidade como adjetivo",
        "Jornal físico necessariamente"
    ],
    correta: 1,
    explicacao: "News significa notícia/notícias. Apesar de terminar em -s, normalmente é tratado como substantivo incontável singular em inglês."
},

{
    pergunta: "Qual frase está correta?",
    opcoes: [
        "The news are good.",
        "The news is good.",
        "The news be good.",
        "The news were a good."
    ],
    correta: 1,
    explicacao: "News normalmente recebe verbo no singular: The news is good."
},
{
    pergunta: "“I read an article about climate change.” A palavra “article” significa:",
    opcoes: [
        "Artigo",
        "Artista",
        "Arte",
        "Artesanato"
    ],
    correta: 0,
    explicacao: "Article pode significar “artigo”, inclusive um texto publicado. O contexto determina outros sentidos possíveis."
},
{
    pergunta: "“The application deadline is Friday.” Nesse contexto, “application” é:",
    opcoes: [
        "Um aplicativo de celular",
        "Uma inscrição/candidatura",
        "Uma aplicação financeira necessariamente",
        "Uma explicação"
    ],
    correta: 1,
    explicacao: "Application pode significar inscrição ou candidatura. App é a forma comum para aplicativo de celular."
},
{
    pergunta: "Você está se candidatando a uma universidade. “Submit your application” significa:",
    opcoes: [
        "Baixe seu aplicativo.",
        "Envie sua candidatura/inscrição.",
        "Apague sua inscrição.",
        "Aplique uma regra."
    ],
    correta: 1,
    explicacao: "Nesse contexto, application é a candidatura ou inscrição."
},
{
    pergunta: "“I downloaded a new app.” O que foi baixado?",
    opcoes: [
        "Uma inscrição",
        "Um aplicativo",
        "Uma candidatura",
        "Uma aplicação de prova"
    ],
    correta: 1,
    explicacao: "App é abreviação comum de application no sentido de aplicativo de software."
},
{
    pergunta: "“The medicine had no effect.” significa:",
    opcoes: [
        "O remédio não teve efeito.",
        "O remédio não teve defeito.",
        "O remédio não foi eficaz necessariamente porque estava vencido.",
        "O remédio não foi fabricado."
    ],
    correta: 0,
    explicacao: "Effect significa “efeito”. Não confunda effect com defect, que significa defeito."
},
{
    pergunta: "“The product has a defect.” significa:",
    opcoes: [
        "O produto tem um efeito.",
        "O produto tem um defeito.",
        "O produto é eficiente.",
        "O produto foi devolvido necessariamente."
    ],
    correta: 1,
    explicacao: "Defect significa “defeito”. Effect significa “efeito”."
},
{
    pergunta: "“The medicine affected my sleep.” O verbo “affected” significa:",
    opcoes: [
        "Efetuou",
        "Afetou/influenciou",
        "Defeituou",
        "Evitou"
    ],
    correta: 1,
    explicacao: "Affect costuma ser verbo e significa afetar/influenciar. Effect é frequentemente substantivo: efeito."
},
{
    pergunta: "Complete: “The new rule had a big ___ on students.”",
    opcoes: [
        "affect",
        "effect",
        "defect",
        "event"
    ],
    correta: 1,
    explicacao: "Have an effect on = ter um efeito sobre. Aqui precisamos do substantivo effect."
},
{
    pergunta: "“The event starts at 7.” significa:",
    opcoes: [
        "O eventual começa às 7.",
        "O evento começa às 7.",
        "O efeito começa às 7.",
        "A reunião terminou às 7."
    ],
    correta: 1,
    explicacao: "Event significa evento ou acontecimento. Não confunda com eventually, que significa por fim/com o tempo."
},

{
    pergunta: "“He is an expert in digital marketing.” significa:",
    opcoes: [
        "Ele é esperto em marketing digital.",
        "Ele é especialista em marketing digital.",
        "Ele é experiente necessariamente em qualquer área.",
        "Ele é professor de marketing."
    ],
    correta: 1,
    explicacao: "Expert significa “especialista”. “Esperto” pode ser smart, clever etc., dependendo do contexto."
},
{
    pergunta: "Qual palavra corresponde melhor a “esperto/inteligente”?",
    opcoes: [
        "Expert",
        "Smart",
        "Eventually",
        "Large"
    ],
    correta: 1,
    explicacao: "Smart pode significar esperto/inteligente. Expert é especialista."
},
{
    pergunta: "“It's a large apartment.” significa:",
    opcoes: [
        "É um apartamento largo.",
        "É um apartamento grande/espaçoso.",
        "É um apartamento comprido.",
        "É um apartamento luxuoso necessariamente."
    ],
    correta: 1,
    explicacao: "Large significa grande. “Largo” em português normalmente exige outras palavras em inglês, como wide."
},
{
    pergunta: "Como dizer “A rua é muito larga”?",
    opcoes: [
        "The street is very large.",
        "The street is very wide.",
        "The street is very long.",
        "The street is very broaded."
    ],
    correta: 1,
    explicacao: "Wide significa “largo” quando falamos de largura. Large significa grande."
},
{
    pergunta: "“The table is two meters long.” Aqui, “long” indica:",
    opcoes: [
        "Largura",
        "Comprimento",
        "Altura",
        "Peso"
    ],
    correta: 1,
    explicacao: "Long está relacionado ao comprimento. Wide está relacionado à largura."
},
{
    pergunta: "“The door is one meter wide.” significa que a porta tem:",
    opcoes: [
        "Um metro de largura",
        "Um metro de altura",
        "Um metro de comprimento vertical",
        "Um metro de profundidade"
    ],
    correta: 0,
    explicacao: "Wide descreve largura. One meter wide = um metro de largura."
},
{
    pergunta: "“I need to charge my phone.” O verbo “charge” significa aqui:",
    opcoes: [
        "Cobrar dinheiro",
        "Carregar a bateria",
        "Acusar alguém",
        "Todas as opções são sentidos possíveis, mas aqui é carregar a bateria"
    ],
    correta: 3,
    explicacao: "Charge tem vários sentidos. No contexto de phone, significa carregar a bateria."
},
{
    pergunta: "“They charged me $20.” significa:",
    opcoes: [
        "Eles carregaram minha bateria com 20 dólares.",
        "Eles me cobraram 20 dólares.",
        "Eles me emprestaram 20 dólares.",
        "Eles perderam 20 dólares."
    ],
    correta: 1,
    explicacao: "Charge someone an amount significa cobrar determinada quantia de alguém."
},
{
    pergunta: "“I'm saving money for a trip.” significa:",
    opcoes: [
        "Estou salvando dinheiro de um perigo.",
        "Estou economizando/guardando dinheiro para uma viagem.",
        "Estou gastando dinheiro em uma viagem.",
        "Estou pedindo dinheiro para viajar."
    ],
    correta: 1,
    explicacao: "Save money significa economizar ou guardar dinheiro."
},
{
    pergunta: "“Save the document before closing it.” significa:",
    opcoes: [
        "Economize o documento.",
        "Salve o documento.",
        "Imprima o documento.",
        "Compartilhe o documento."
    ],
    correta: 1,
    explicacao: "Em contexto digital, save significa salvar um arquivo ou documento."
},

{
    pergunta: "“She graduated from university last year.” significa:",
    opcoes: [
        "Ela começou a universidade no ano passado.",
        "Ela se formou na universidade no ano passado.",
        "Ela mudou de universidade.",
        "Ela deu aula na universidade."
    ],
    correta: 1,
    explicacao: "Graduate from university significa formar-se/concluir a universidade."
},
{
    pergunta: "“He has a degree in biology.” Nesse contexto, “degree” significa:",
    opcoes: [
        "Grau de temperatura",
        "Diploma/título acadêmico",
        "Degrau",
        "Nota de prova"
    ],
    correta: 1,
    explicacao: "Degree pode significar formação/título acadêmico. Também pode indicar graus de temperatura ou ângulo em outros contextos."
},
{
    pergunta: "“It's 30 degrees outside.” Aqui, “degrees” significa:",
    opcoes: [
        "Diplomas",
        "Graus de temperatura",
        "Níveis escolares",
        "Degraus"
    ],
    correta: 1,
    explicacao: "Degree muda de sentido conforme o contexto. Com temperatura, significa “grau”."
},
{
    pergunta: "“She received a scholarship.” significa:",
    opcoes: [
        "Ela recebeu uma bolsa de estudos.",
        "Ela recebeu uma mochila escolar.",
        "Ela recebeu um salário.",
        "Ela recebeu um diploma."
    ],
    correta: 0,
    explicacao: "Scholarship significa bolsa de estudos/auxílio acadêmico, não uma bolsa física."
},
{
    pergunta: "Você quer dizer “Comprei uma bolsa nova”. Qual opção pode funcionar para uma bolsa de mão?",
    opcoes: [
        "I bought a new scholarship.",
        "I bought a new handbag.",
        "I bought a new college.",
        "I bought a new lecture."
    ],
    correta: 1,
    explicacao: "Handbag é bolsa de mão. Scholarship é bolsa de estudos."
},
{
    pergunta: "“The chef prepared dinner.” Quem preparou o jantar?",
    opcoes: [
        "O chefe da empresa",
        "O cozinheiro/chef",
        "O cliente",
        "O garçom"
    ],
    correta: 1,
    explicacao: "Chef é cozinheiro profissional/chef de cozinha. “Chefe” em ambiente de trabalho costuma ser boss ou manager."
},
{
    pergunta: "Como dizer “Meu chefe está em uma reunião”?",
    opcoes: [
        "My chef is in a meeting.",
        "My boss is in a meeting.",
        "My cooker is in a meeting.",
        "My customer is in a meeting."
    ],
    correta: 1,
    explicacao: "Boss significa chefe. Chef é profissional de cozinha."
},
{
    pergunta: "“The waiter brought the menu.” Quem trouxe o cardápio?",
    opcoes: [
        "O cozinheiro",
        "O garçom",
        "O cliente",
        "O chefe da empresa"
    ],
    correta: 1,
    explicacao: "Waiter significa garçom. Waitress ainda existe para garçonete, embora server seja uma alternativa comum e neutra."
},
{
    pergunta: "“Please wait here.” O verbo “wait” significa:",
    opcoes: [
        "Servir",
        "Esperar",
        "Pesar",
        "Atender"
    ],
    correta: 1,
    explicacao: "Wait significa esperar. Apesar de waiter ser “garçom”, o verbo wait não significa “servir”."
},
{
    pergunta: "Você completou as 90 perguntas! Qual é a tradução correta de “Actually, learning false friends can be fun”?",
    opcoes: [
        "Atualmente, aprender falsos cognatos pode ser divertido.",
        "Na verdade, aprender falsos cognatos pode ser divertido.",
        "Eventualmente, aprender falsos cognatos pode ser divertido.",
        "Finalmente, aprender falsos cognatos foi divertido."
    ],
    correta: 1,
    explicacao: "Actually = “na verdade”. E agora essa pegadinha já perdeu os dentes. 🐱✨"
}
],
    frances: [{
    pergunta: "Você lê: « J'attends le bus. » O que « attendre » significa?",
    opcoes: [
        "Atender",
        "Esperar",
        "Entender",
        "Entrar"
    ],
    correta: 1,
    explicacao: "Attendre significa “esperar”. Para “atender” alguém, o francês usa outras construções, como s'occuper de quelqu'un, servir ou répondre, dependendo do contexto."
},
{
    pergunta: "Como dizer « Estou esperando minha amiga »?",
    opcoes: [
        "J'attends mon amie.",
        "J'entends mon amie.",
        "J'attire mon amie.",
        "J'assiste mon amie."
    ],
    correta: 0,
    explicacao: "Attendre = esperar. « J'attends mon amie » significa “Estou esperando minha amiga”."
},
{
    pergunta: "« J'entends un bruit. » significa:",
    opcoes: [
        "Eu entendo um barulho.",
        "Eu espero um barulho.",
        "Eu ouço um barulho.",
        "Eu atendo um barulho."
    ],
    correta: 2,
    explicacao: "Entendre significa “ouvir”. Apesar da semelhança, não significa “entender”."
},
{
    pergunta: "Qual verbo significa « entender/compreender » em francês?",
    opcoes: [
        "Entendre",
        "Attendre",
        "Comprendre",
        "Prétendre"
    ],
    correta: 2,
    explicacao: "Comprendre significa “entender/compreender”. Entendre significa “ouvir”."
},
{
    pergunta: "« Je comprends la question. » significa:",
    opcoes: [
        "Eu compro a questão.",
        "Eu compreendo a questão.",
        "Eu escuto a questão.",
        "Eu respondo à questão."
    ],
    correta: 1,
    explicacao: "Comprendre significa compreender ou entender."
},
{
    pergunta: "« Pourtant, il a accepté. » O que « pourtant » significa?",
    opcoes: [
        "Portanto",
        "Porém / no entanto",
        "Por enquanto",
        "Por isso"
    ],
    correta: 1,
    explicacao: "Pourtant significa “porém”, “contudo” ou “no entanto”. É uma pegadinha clássica para quem fala português."
},
{
    pergunta: "Qual opção completa melhor: « Il était fatigué. ___, il a continué. »",
    opcoes: [
        "Pourtant",
        "Donc",
        "Parce que",
        "Depuis"
    ],
    correta: 0,
    explicacao: "Pourtant introduz contraste: “Ele estava cansado. Mesmo assim/no entanto, continuou.”"
},
{
    pergunta: "Você quer dizer « portanto ». Qual palavra francesa funciona nesse contexto?",
    opcoes: [
        "Pourtant",
        "Donc",
        "Attendre",
        "Hasard"
    ],
    correta: 1,
    explicacao: "Donc pode significar “portanto”, “então”. Pourtant significa “porém/no entanto”."
},
{
    pergunta: "« Elle prétend connaître la vérité. » O verbo « prétendre » significa aqui:",
    opcoes: [
        "Pretender fazer algo",
        "Afirmar / alegar",
        "Fingir",
        "Perguntar"
    ],
    correta: 1,
    explicacao: "Prétendre pode significar “afirmar”, “alegar” ou “sustentar que algo é verdade”. Não corresponde automaticamente ao português “pretender”."
},
{
    pergunta: "Como dizer « Pretendo viajar no próximo ano » de forma natural?",
    opcoes: [
        "Je prétends voyager l'année prochaine.",
        "J'ai l'intention de voyager l'année prochaine.",
        "J'attends voyager l'année prochaine.",
        "J'entends voyager l'année prochaine."
    ],
    correta: 1,
    explicacao: "Avoir l'intention de é uma maneira natural de expressar “pretender/ter a intenção de”."
},

{
    pergunta: "« Finalement, nous sommes restés à la maison. » significa:",
    opcoes: [
        "Finalmente, depois de uma longa espera necessariamente",
        "No fim das contas, ficamos em casa.",
        "Finalizamos nossa casa.",
        "Ficamos temporariamente em casa."
    ],
    correta: 1,
    explicacao: "Finalement muitas vezes significa “no fim das contas”, “por fim”. O sentido depende do contexto."
},
{
    pergunta: "« Éventuellement, nous pouvons changer la date. » Aqui, « éventuellement » significa:",
    opcoes: [
        "Eventualmente, de vez em quando",
        "Possivelmente / se for necessário",
        "Finalmente",
        "Imediatamente"
    ],
    correta: 1,
    explicacao: "Éventuellement costuma expressar possibilidade: “possivelmente”, “talvez”, “se for o caso”."
},
{
    pergunta: "Qual frase transmite a ideia de « Podemos, talvez, sair mais cedo »?",
    opcoes: [
        "On peut éventuellement partir plus tôt.",
        "On peut actuellement partir plus tôt.",
        "On peut pourtant partir plus tôt.",
        "On peut depuis partir plus tôt."
    ],
    correta: 0,
    explicacao: "Éventuellement pode indicar uma possibilidade, equivalente a “talvez/possivelmente”, conforme o contexto."
},
{
    pergunta: "« Actuellement, j'habite à Lyon. » significa:",
    opcoes: [
        "Na verdade, moro em Lyon.",
        "Atualmente, moro em Lyon.",
        "Eventualmente, moro em Lyon.",
        "Antigamente, morava em Lyon."
    ],
    correta: 1,
    explicacao: "Actuellement significa “atualmente”. Aqui francês e português realmente combinam."
},
{
    pergunta: "« En fait, je préfère le thé. » significa:",
    opcoes: [
        "Atualmente, prefiro chá.",
        "Na verdade, prefiro chá.",
        "Finalmente, prefiro chá.",
        "Talvez eu prefira chá."
    ],
    correta: 1,
    explicacao: "En fait é muito usado com o sentido de “na verdade”, “na realidade”."
},
{
    pergunta: "« Il a embrassé sa mère. » significa:",
    opcoes: [
        "Ele embaraçou a mãe.",
        "Ele abraçou necessariamente a mãe.",
        "Ele beijou a mãe.",
        "Ele encontrou a mãe."
    ],
    correta: 2,
    explicacao: "Embrasser significa “beijar”. A semelhança com “embaraçar” é uma armadilha."
},
{
    pergunta: "Qual verbo francês significa « abraçar »?",
    opcoes: [
        "Embrasser",
        "Serrer dans ses bras",
        "Embarrasser",
        "Attendre"
    ],
    correta: 1,
    explicacao: "Serrer quelqu'un dans ses bras significa literalmente apertar alguém nos braços, isto é, abraçar."
},
{
    pergunta: "« Cette question m'embarrasse. » significa:",
    opcoes: [
        "Essa questão me abraça.",
        "Essa questão me deixa constrangido / me causa dificuldade.",
        "Essa questão me beija.",
        "Essa questão me interessa."
    ],
    correta: 1,
    explicacao: "Embarrasser pode significar constranger, incomodar ou colocar alguém em dificuldade."
},
{
    pergunta: "« Je suis embarrassé. » significa:",
    opcoes: [
        "Estou abraçado.",
        "Estou constrangido / sem jeito.",
        "Estou irritado.",
        "Estou apaixonado."
    ],
    correta: 1,
    explicacao: "Être embarrassé significa estar constrangido, sem jeito ou em uma situação embaraçosa."
},
{
    pergunta: "« Elle porte une robe rouge. » O que ela está usando?",
    opcoes: [
        "Uma roupa vermelha qualquer",
        "Um vestido vermelho",
        "Um roupão vermelho",
        "Uma saia vermelha"
    ],
    correta: 1,
    explicacao: "Robe em francês significa “vestido”. Para roupa de forma geral, usamos vêtement."
},

{
    pergunta: "Qual palavra francesa significa « roupa/peça de roupa » de forma geral?",
    opcoes: [
        "Robe",
        "Vêtement",
        "Costume",
        "Livre"
    ],
    correta: 1,
    explicacao: "Vêtement significa peça de roupa. Robe significa vestido."
},
{
    pergunta: "« Il porte un costume noir. » O que ele provavelmente está usando?",
    opcoes: [
        "Uma fantasia preta",
        "Um terno preto",
        "Um costume cultural necessariamente",
        "Uma camiseta preta"
    ],
    correta: 1,
    explicacao: "Costume em francês pode significar “terno”, especialmente um conjunto masculino formal."
},
{
    pergunta: "« J'ai acheté un livre. » O que foi comprado?",
    opcoes: [
        "Algo livre",
        "Um livro",
        "Uma libra",
        "Uma livraria"
    ],
    correta: 1,
    explicacao: "Livre, como substantivo masculino, significa “livro”."
},
{
    pergunta: "Como dizer « Eu sou livre » em francês?",
    opcoes: [
        "Je suis livre.",
        "Je suis libre.",
        "Je suis libraire.",
        "Je suis liberté."
    ],
    correta: 1,
    explicacao: "Libre, com B, significa “livre”. Livre, com V, significa “livro” quando é substantivo."
},
{
    pergunta: "« Elle travaille dans une librairie. » Onde ela trabalha?",
    opcoes: [
        "Em uma biblioteca",
        "Em uma livraria",
        "Em uma gráfica",
        "Em uma escola"
    ],
    correta: 1,
    explicacao: "Librairie significa “livraria”. Biblioteca em francês é bibliothèque."
},
{
    pergunta: "Como dizer « biblioteca » em francês?",
    opcoes: [
        "Librairie",
        "Bibliothèque",
        "Liberté",
        "Libraire"
    ],
    correta: 1,
    explicacao: "Bibliothèque significa biblioteca. Librairie é livraria."
},
{
    pergunta: "« Le libraire m'a recommandé ce roman. » Quem recomendou o romance?",
    opcoes: [
        "O bibliotecário",
        "O livreiro",
        "O escritor",
        "O professor"
    ],
    correta: 1,
    explicacao: "Libraire é livreiro/livreira, a pessoa que trabalha ou administra uma livraria."
},
{
    pergunta: "« La salle est au premier étage. » O que « étage » significa?",
    opcoes: [
        "Estágio",
        "Andar de um edifício",
        "Estado",
        "Estante"
    ],
    correta: 1,
    explicacao: "Étage significa “andar/piso” de um edifício. Estágio profissional é stage."
},
{
    pergunta: "« Je fais un stage dans une entreprise. » significa:",
    opcoes: [
        "Estou fazendo um andar em uma empresa.",
        "Estou fazendo um estágio em uma empresa.",
        "Estou montando um palco na empresa.",
        "Estou estudando o estado da empresa."
    ],
    correta: 1,
    explicacao: "Stage pode significar estágio, treinamento ou período de formação prática."
},
{
    pergunta: "Você está procurando o terceiro andar. Qual palavra deve procurar nas placas?",
    opcoes: [
        "Stage",
        "Étage",
        "État",
        "Salle"
    ],
    correta: 1,
    explicacao: "Étage = andar de edifício. Stage = estágio/treinamento."
},

{
    pergunta: "« La salle est fermée. » O que « salle » significa?",
    opcoes: [
        "Sala",
        "Salgada",
        "Suja",
        "Saída"
    ],
    correta: 0,
    explicacao: "Salle significa “sala”. Não confunda com sale, com apenas um L."
},
{
    pergunta: "« La cuisine est sale. » significa:",
    opcoes: [
        "A cozinha é uma sala.",
        "A cozinha está suja.",
        "A cozinha está salgada.",
        "A cozinha está vazia."
    ],
    correta: 1,
    explicacao: "Sale significa “sujo/suja”. Salle, com dois L, significa sala."
},
{
    pergunta: "Qual opção significa « uma sala limpa »?",
    opcoes: [
        "Une sale propre",
        "Une salle propre",
        "Une salle salée",
        "Une sale salle"
    ],
    correta: 1,
    explicacao: "Salle = sala. Propre = limpo neste contexto. Sale = sujo."
},
{
    pergunta: "« J'ai mal à l'épaule. » Onde a pessoa sente dor?",
    opcoes: [
        "Na coluna",
        "No ombro",
        "Na cabeça",
        "No pescoço"
    ],
    correta: 1,
    explicacao: "Épaule significa “ombro”."
},
{
    pergunta: "« Nous nous reposons à l'ombre. » Onde eles estão descansando?",
    opcoes: [
        "No ombro",
        "Na sombra",
        "Na praia",
        "No quarto"
    ],
    correta: 1,
    explicacao: "Ombre significa “sombra”. Ombro é épaule."
},
{
    pergunta: "Qual palavra significa « sombra »?",
    opcoes: [
        "Épaule",
        "Ombre",
        "Chambre",
        "Hasard"
    ],
    correta: 1,
    explicacao: "Ombre = sombra. A semelhança visual com “ombro” pode enganar."
},
{
    pergunta: "« J'ai réservé une chambre à l'hôtel. » O que foi reservado?",
    opcoes: [
        "Uma câmara",
        "Um quarto",
        "Uma sala de reuniões",
        "Um andar inteiro"
    ],
    correta: 1,
    explicacao: "Chambre significa “quarto”, especialmente quarto de dormir ou de hotel."
},
{
    pergunta: "Qual frase significa « Meu quarto é pequeno »?",
    opcoes: [
        "Ma chambre est petite.",
        "Mon quartier est petit.",
        "Ma salle est sale.",
        "Mon étage est petit."
    ],
    correta: 0,
    explicacao: "Chambre é quarto. « Ma chambre est petite » = “Meu quarto é pequeno”."
},
{
    pergunta: "« J'habite dans un quartier calme. » significa:",
    opcoes: [
        "Moro em um quarto tranquilo.",
        "Moro em um bairro tranquilo.",
        "Moro em um prédio tranquilo.",
        "Moro em uma sala tranquila."
    ],
    correta: 1,
    explicacao: "Quartier significa “bairro” ou região de uma cidade."
},
{
    pergunta: "Qual palavra você usaria para « bairro »?",
    opcoes: [
        "Chambre",
        "Quartier",
        "Étage",
        "Salle"
    ],
    correta: 1,
    explicacao: "Quartier = bairro. Chambre = quarto."
},

{
    pergunta: "« Nous avons mangé sur le balcon. » Onde eles comeram?",
    opcoes: [
        "No balcão de uma loja",
        "Na varanda/sacada",
        "No banco",
        "Na cozinha"
    ],
    correta: 1,
    explicacao: "Balcon significa “varanda/sacada”. Não corresponde automaticamente ao português “balcão”."
},
{
    pergunta: "« Le chat dort sur le canapé. » Quem está dormindo?",
    opcoes: [
        "Uma conversa online",
        "Um gato",
        "Um cachorro",
        "Uma criança"
    ],
    correta: 1,
    explicacao: "Chat em francês significa “gato”. A pronúncia é aproximadamente /ʃa/."
},
{
    pergunta: "« J'ai adopté un chaton. » O que foi adotado?",
    opcoes: [
        "Uma conversa",
        "Um gatinho",
        "Um cachorro",
        "Um pato"
    ],
    correta: 1,
    explicacao: "Chaton significa “gatinho/filhote de gato”."
},
{
    pergunta: "« Ma femme est française. » significa:",
    opcoes: [
        "Minha fêmea é francesa.",
        "Minha esposa é francesa.",
        "Minha família é francesa.",
        "Minha filha é francesa."
    ],
    correta: 1,
    explicacao: "Femme pode significar “mulher” e, em contextos como « ma femme », “esposa”."
},
{
    pergunta: "« Cette femme travaille ici. » significa:",
    opcoes: [
        "Esta esposa trabalha aqui necessariamente.",
        "Esta mulher trabalha aqui.",
        "Esta família trabalha aqui.",
        "Esta menina trabalha aqui."
    ],
    correta: 1,
    explicacao: "Femme também significa “mulher”. O contexto determina se a tradução é mulher ou esposa."
},
{
    pergunta: "« Il a mis son casque. » O que ele colocou?",
    opcoes: [
        "Um casco",
        "Um capacete",
        "Um casaco",
        "Um cachecol"
    ],
    correta: 1,
    explicacao: "Casque significa “capacete”. Também pode ser usado para certos tipos de fones de ouvido."
},
{
    pergunta: "« J'écoute de la musique avec un casque. » O que « casque » significa aqui?",
    opcoes: [
        "Capacete de bicicleta necessariamente",
        "Fone de ouvido/headset",
        "Casaco",
        "Caixa de som"
    ],
    correta: 1,
    explicacao: "Casque pode designar fones de ouvido, especialmente os que ficam sobre a cabeça."
},
{
    pergunta: "« Le gâteau est délicieux. » O que está delicioso?",
    opcoes: [
        "O gato",
        "O bolo",
        "O prato",
        "O café"
    ],
    correta: 1,
    explicacao: "Gâteau significa “bolo”. Apesar da aparência, não tem relação com “gato”."
},
{
    pergunta: "Você está em uma pâtisserie e pede « un gâteau au chocolat ». O que receberá?",
    opcoes: [
        "Um gato de chocolate",
        "Um bolo de chocolate",
        "Um pão de chocolate necessariamente",
        "Um café com chocolate"
    ],
    correta: 1,
    explicacao: "Un gâteau au chocolat = um bolo de chocolate."
},
{
    pergunta: "« Le pâtissier prépare la pâte. » O que « pâte » significa nesse contexto?",
    opcoes: [
        "Pata de animal",
        "Massa",
        "Pote",
        "Prato"
    ],
    correta: 1,
    explicacao: "Pâte pode significar massa, como massa de bolo, pão ou macarrão."
},

{
    pergunta: "« Le chien s'est blessé à la patte. » O que « patte » significa?",
    opcoes: [
        "Massa",
        "Pata",
        "Prato",
        "Pele"
    ],
    correta: 1,
    explicacao: "Patte significa “pata”. Pâte, com acento circunflexo, pode significar massa."
},
{
    pergunta: "Qual opção significa « massa de pizza »?",
    opcoes: [
        "Patte à pizza",
        "Pâte à pizza",
        "Pata de pizza",
        "Plat à pizza"
    ],
    correta: 1,
    explicacao: "Pâte à pizza significa massa de pizza."
},
{
    pergunta: "« Je voudrais un verre d'eau. » O que a pessoa quer?",
    opcoes: [
        "Ver água",
        "Um copo de água",
        "Um vidro de água necessariamente",
        "Uma garrafa de água"
    ],
    correta: 1,
    explicacao: "Verre pode significar copo ou vidro, dependendo do contexto. « Un verre d'eau » = um copo de água."
},
{
    pergunta: "Como dizer « ver » em francês?",
    opcoes: [
        "Verre",
        "Voir",
        "Regard",
        "Boire"
    ],
    correta: 1,
    explicacao: "Voir é o verbo “ver”. Verre é copo/vidro."
},
{
    pergunta: "« Je veux voir ce film. » significa:",
    opcoes: [
        "Quero um copo desse filme.",
        "Quero ver esse filme.",
        "Quero beber durante esse filme.",
        "Quero vender esse filme."
    ],
    correta: 1,
    explicacao: "Voir significa “ver”."
},
{
    pergunta: "« Il boit du jus d'orange. » O que ele está bebendo?",
    opcoes: [
        "Um juiz de laranja",
        "Suco de laranja",
        "Chá de laranja",
        "Água de laranja"
    ],
    correta: 1,
    explicacao: "Jus significa “suco”. « Jus d'orange » = suco de laranja."
},
{
    pergunta: "« C'est exquis ! » significa:",
    opcoes: [
        "Isso é esquisito!",
        "Isso é delicioso/refinado!",
        "Isso é horrível!",
        "Isso é estranho!"
    ],
    correta: 1,
    explicacao: "Exquis é um elogio. Significa algo como delicioso, requintado ou excelente."
},
{
    pergunta: "Você experimenta uma sobremesa excelente. Qual comentário combina?",
    opcoes: [
        "C'est exquis !",
        "C'est bizarre !",
        "C'est sale !",
        "C'est hasard !"
    ],
    correta: 0,
    explicacao: "Exquis pode ser usado para elogiar algo delicioso ou refinado."
},
{
    pergunta: "Como dizer « Isso é estranho/esquisito »?",
    opcoes: [
        "C'est exquis.",
        "C'est bizarre.",
        "C'est libre.",
        "C'est propre."
    ],
    correta: 1,
    explicacao: "Bizarre significa estranho/esquisito. Exquis significa delicioso/requintado."
},
{
    pergunta: "« J'ai rencontré Paul par hasard. » significa:",
    opcoes: [
        "Encontrei Paul por azar.",
        "Encontrei Paul por acaso.",
        "Encontrei Paul atrasado.",
        "Encontrei Paul de propósito."
    ],
    correta: 1,
    explicacao: "Par hasard significa “por acaso”. Hasard está ligado à ideia de acaso, não simplesmente ao português “azar”."
},

{
    pergunta: "Qual expressão significa « por acaso »?",
    opcoes: [
        "Par hasard",
        "Par malheur",
        "Pourtant",
        "Depuis"
    ],
    correta: 0,
    explicacao: "Par hasard = por acaso."
},
{
    pergunta: "« Malheureusement, il pleut. » significa:",
    opcoes: [
        "Por acaso, está chovendo.",
        "Infelizmente, está chovendo.",
        "Felizmente, está chovendo.",
        "Provavelmente, está chovendo."
    ],
    correta: 1,
    explicacao: "Malheureusement significa “infelizmente”."
},
{
    pergunta: "« Quelle est votre adresse ? » O que estão perguntando?",
    opcoes: [
        "Qual é o seu adereço?",
        "Qual é o seu endereço?",
        "Qual é a sua idade?",
        "Qual é a sua profissão?"
    ],
    correta: 1,
    explicacao: "Adresse significa “endereço”."
},
{
    pergunta: "« J'ai envoyé le colis à la mauvaise adresse. » significa:",
    opcoes: [
        "Enviei o pacote com o adereço errado.",
        "Enviei o pacote para o endereço errado.",
        "Enviei o pacote para a pessoa errada necessariamente.",
        "Não enviei o pacote."
    ],
    correta: 1,
    explicacao: "Adresse = endereço."
},
{
    pergunta: "« J'envie sa liberté. » O verbo « envier » significa:",
    opcoes: [
        "Enviar",
        "Invejar",
        "Convidar",
        "Evitar"
    ],
    correta: 1,
    explicacao: "Envier significa “invejar”. Para enviar, usamos envoyer."
},
{
    pergunta: "Como dizer « Vou enviar uma mensagem »?",
    opcoes: [
        "Je vais envier un message.",
        "Je vais envoyer un message.",
        "Je vais éviter un message.",
        "Je vais inviter un message."
    ],
    correta: 1,
    explicacao: "Envoyer significa “enviar”. Envier significa “invejar”."
},
{
    pergunta: "« Elle m'a envoyé une photo. » significa:",
    opcoes: [
        "Ela invejou minha foto.",
        "Ela me enviou uma foto.",
        "Ela evitou uma foto.",
        "Ela viu minha foto."
    ],
    correta: 1,
    explicacao: "Envoyer = enviar."
},
{
    pergunta: "« Cette publicité attire l'attention. » O verbo « attirer » significa:",
    opcoes: [
        "Atirar",
        "Atrair",
        "Retirar",
        "Atrasar"
    ],
    correta: 1,
    explicacao: "Attirer significa “atrair”. Para atirar/disparar, um verbo comum é tirer."
},
{
    pergunta: "« Ne tirez pas ! » em um contexto de arma significa:",
    opcoes: [
        "Não atraiam!",
        "Não atirem!",
        "Não retirem!",
        "Não atrasem!"
    ],
    correta: 1,
    explicacao: "Tirer pode significar atirar/disparar, além de outros sentidos conforme o contexto."
},
{
    pergunta: "Uma porta tem a instrução « TIREZ ». O que você deve fazer?",
    opcoes: [
        "Empurrar",
        "Puxar",
        "Atirar na porta",
        "Fechar"
    ],
    correta: 1,
    explicacao: "Em uma porta, tirer significa “puxar”. O contexto manda no significado."
},

{
    pergunta: "A outra porta diz « POUSSEZ ». O que você deve fazer?",
    opcoes: [
        "Puxar",
        "Empurrar",
        "Fechar",
        "Girar"
    ],
    correta: 1,
    explicacao: "Pousser significa “empurrar”. Uma dupla útil: TIREZ = puxe; POUSSEZ = empurre."
},
{
    pergunta: "« Il pousse la porte. » significa:",
    opcoes: [
        "Ele puxa a porta.",
        "Ele empurra a porta.",
        "Ele pinta a porta.",
        "Ele fecha a porta."
    ],
    correta: 1,
    explicacao: "Pousser = empurrar."
},
{
    pergunta: "« Fermez la porte, s'il vous plaît. » significa:",
    opcoes: [
        "Firam a porta, por favor.",
        "Fechem a porta, por favor.",
        "Empurrem a porta, por favor.",
        "Abram a porta, por favor."
    ],
    correta: 1,
    explicacao: "Fermer significa “fechar”."
},
{
    pergunta: "Qual verbo significa « fechar »?",
    opcoes: [
        "Fermer",
        "Blesser",
        "Ouvrir",
        "Attirer"
    ],
    correta: 0,
    explicacao: "Fermer = fechar. Ouvrir = abrir."
},
{
    pergunta: "« Il s'est blessé au bras. » significa:",
    opcoes: [
        "Ele fechou o braço.",
        "Ele machucou o braço.",
        "Ele abraçou alguém.",
        "Ele lavou o braço."
    ],
    correta: 1,
    explicacao: "Se blesser significa machucar-se/ferir-se."
},
{
    pergunta: "« Quel est votre prénom ? » O que estão perguntando?",
    opcoes: [
        "Seu sobrenome",
        "Seu primeiro nome",
        "Seu apelido",
        "Seu nome completo necessariamente"
    ],
    correta: 1,
    explicacao: "Prénom é o primeiro nome/nome próprio. Nom de famille é sobrenome."
},
{
    pergunta: "Como perguntar o « sobrenome » de alguém?",
    opcoes: [
        "Quel est votre prénom ?",
        "Quel est votre nom de famille ?",
        "Quel est votre surnom ?",
        "Quelle est votre adresse ?"
    ],
    correta: 1,
    explicacao: "Nom de famille significa sobrenome."
},
{
    pergunta: "« Ses amis l'appellent Doudou. C'est son surnom. » O que « surnom » significa?",
    opcoes: [
        "Sobrenome",
        "Apelido",
        "Primeiro nome",
        "Nome de solteiro"
    ],
    correta: 1,
    explicacao: "Surnom significa “apelido”. Não é sobrenome."
},
{
    pergunta: "Qual palavra significa « apelido »?",
    opcoes: [
        "Prénom",
        "Surnom",
        "Nom de famille",
        "Adresse"
    ],
    correta: 1,
    explicacao: "Surnom = apelido."
},
{
    pergunta: "« Le garçon joue dans le jardin. » Quem está brincando?",
    opcoes: [
        "O garçom",
        "O menino",
        "O gerente",
        "O cozinheiro"
    ],
    correta: 1,
    explicacao: "Garçon significa “menino/garoto”. Em restaurantes, « garçon ! » ficou associado historicamente ao garçom, mas não é a palavra neutra que você deve usar para chamar um atendente hoje."
},

{
    pergunta: "Como dizer « garçom/atendente » em francês de forma adequada?",
    opcoes: [
        "Garçon, obrigatoriamente",
        "Serveur",
        "Garçom",
        "Serviceur"
    ],
    correta: 1,
    explicacao: "Serveur significa garçom/atendente de restaurante. Para uma mulher, serveuse."
},
{
    pergunta: "« Le serveur apporte l'addition. » O que o atendente traz?",
    opcoes: [
        "Uma adição matemática",
        "A conta",
        "O cardápio",
        "Uma gorjeta"
    ],
    correta: 1,
    explicacao: "Addition, em restaurante, significa “conta”."
},
{
    pergunta: "Você terminou de comer e diz « L'addition, s'il vous plaît. » O que está pedindo?",
    opcoes: [
        "Mais comida",
        "A conta",
        "Uma calculadora",
        "Uma mesa"
    ],
    correta: 1,
    explicacao: "« L'addition, s'il vous plaît » é uma maneira comum de pedir a conta."
},
{
    pergunta: "« Depuis trois ans, j'habite ici. » significa:",
    opcoes: [
        "Depois de três anos, moro aqui.",
        "Moro aqui há três anos.",
        "Morarei aqui daqui a três anos.",
        "Morei aqui durante exatamente três anos e fui embora."
    ],
    correta: 1,
    explicacao: "Depuis indica uma ação ou situação iniciada no passado que continua no presente: “há três anos”."
},
{
    pergunta: "Complete: « J'apprends le français ___ six mois. »",
    opcoes: [
        "depuis",
        "pourtant",
        "hasard",
        "éventuellement"
    ],
    correta: 0,
    explicacao: "Depuis é usado para indicar há quanto tempo algo que ainda continua começou."
},
{
    pergunta: "« Je suis resté ici pendant deux heures. » O que « pendant » indica?",
    opcoes: [
        "Um pingente",
        "Durante um período",
        "Desde um ponto no passado",
        "Uma possibilidade"
    ],
    correta: 1,
    explicacao: "Pendant significa “durante” quando indica duração."
},
{
    pergunta: "Qual frase significa « Estudei durante duas horas »?",
    opcoes: [
        "J'ai étudié pendant deux heures.",
        "J'ai étudié depuis deux heures hier.",
        "J'ai étudié pourtant deux heures.",
        "J'ai étudié hasard deux heures."
    ],
    correta: 0,
    explicacao: "Pendant deux heures = durante duas horas."
},
{
    pergunta: "« Il est resté chez lui. » significa:",
    opcoes: [
        "Ele é um restaurante na casa dele.",
        "Ele ficou na casa dele.",
        "Ele voltou para a casa dele necessariamente.",
        "Ele comprou uma casa."
    ],
    correta: 1,
    explicacao: "Rester significa “ficar/permanecer”."
},
{
    pergunta: "« Il reste trois places. » significa:",
    opcoes: [
        "Há/restam três lugares.",
        "Ele fica em três lugares.",
        "Há três restaurantes.",
        "Faltam três horas."
    ],
    correta: 0,
    explicacao: "Rester também pode significar “restar/sobrar”. O contexto muda a tradução."
},
{
    pergunta: "Última do ciclo! « En fait, j'ai appris beaucoup de choses. » significa:",
    opcoes: [
        "Atualmente, aprendi poucas coisas.",
        "Na verdade, aprendi muitas coisas.",
        "Eventualmente, esqueci muitas coisas.",
        "Finalmente, aprendi uma coisa."
    ],
    correta: 1,
    explicacao: "En fait = “na verdade” e beaucoup de = “muito/muitos”. Você fechou os 90 desafios de francês. 🥐✨"
}
]

};

const DESAFIOS_POR_DIA = 3;

const CONFIG = {

    ingles: {
        card: "dashboard-ingles",
        nome: "English Lab"
    },

    frances: {
        card: "dashboard-frances",
        nome: "Le Coin Français"
    }

};


let idiomaAtual = null;
let perguntaAtual = null;
let indicePerguntaAtual = 0;
let respondeuPergunta = false;

function dataDeHoje() {

    const hoje = new Date();

    const ano = hoje.getFullYear();

    const mes = String(
        hoje.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        hoje.getDate()
    ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}


function dataDeOntem() {

    const ontem = new Date();

    ontem.setDate(
        ontem.getDate() - 1
    );

    const ano = ontem.getFullYear();

    const mes = String(
        ontem.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        ontem.getDate()
    ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function chave(idioma, tipo) {

    return `uhmActually_${idioma}_${tipo}`;
}

function lerNumero(idioma, tipo) {

    const valor = localStorage.getItem(
        chave(idioma, tipo)
    );

    if (valor === null) {
        return 0;
    }

    const numero = Number(valor);

    if (Number.isNaN(numero)) {
        return 0;
    }

    return numero;
}

function salvarNumero(idioma, tipo, valor) {

    localStorage.setItem(
        chave(idioma, tipo),
        String(valor)
    );
}

function carregarData(idioma) {

    return localStorage.getItem(
        chave(idioma, "data")
    );
}

function salvarData(idioma, data) {

    localStorage.setItem(
        chave(idioma, "data"),
        data
    );
}

function carregarProgresso(idioma) {

    return lerNumero(
        idioma,
        "progresso"
    );
}

function salvarProgresso(idioma, valor) {

    salvarNumero(
        idioma,
        "progresso",
        valor
    );
}

function carregarFeitosHoje(idioma) {

    const ultimaData = carregarData(idioma);

    // Se a última atividade não foi hoje,
    // começa novamente em 0/3.

    if (ultimaData !== dataDeHoje()) {
        return 0;
    }

    return lerNumero(
        idioma,
        "feitosHoje"
    );
}

function salvarFeitosHoje(idioma, valor) {

    salvarNumero(
        idioma,
        "feitosHoje",
        valor
    );
}

function completouDesafiosDeHoje(idioma) {

    return (
        carregarFeitosHoje(idioma)
        >=
        DESAFIOS_POR_DIA
    );
}

function carregarOfensiva(idioma) {

    return lerNumero(
        idioma,
        "ofensiva"
    );
}

function atualizarOfensiva(idioma) {

    const hoje = dataDeHoje();

    const ontem = dataDeOntem();

    const chaveUltimaOfensiva = chave(
        idioma,
        "ultimaOfensiva"
    );

    const ultimaOfensiva =
        localStorage.getItem(
            chaveUltimaOfensiva
        );

    let ofensiva =
        carregarOfensiva(idioma);


    if (ultimaOfensiva === hoje) {

        return ofensiva;
    }

    if (ultimaOfensiva === ontem) {

        ofensiva += 1;

    } else {

        ofensiva = 1;
    }

    salvarNumero(
        idioma,
        "ofensiva",
        ofensiva
    );

    localStorage.setItem(
        chaveUltimaOfensiva,
        hoje
    );

    return ofensiva;
}

function criarOrdemAleatoria(total) {

    const ordem = [];

    for (let i = 0; i < total; i++) {

        ordem.push(i);
    }

    for (
        let i = ordem.length - 1;
        i > 0;
        i--
    ) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [
            ordem[i],
            ordem[j]
        ] = [
            ordem[j],
            ordem[i]
        ];
    }


    return ordem;
}


function carregarOrdem(idioma) {

    const banco = bancos[idioma];

    if (!banco) {
        return [];
    }


    const salva = localStorage.getItem(
        chave(idioma, "ordem")
    );


    if (salva) {

        try {

            const ordem = JSON.parse(salva);

            if (
                Array.isArray(ordem)
                &&
                ordem.length === banco.length
            ) {

                return ordem;
            }

        } catch (erro) {

            console.warn(
                "Não foi possível carregar a ordem salva.",
                erro
            );
        }
    }


    const novaOrdem =
        criarOrdemAleatoria(
            banco.length
        );


    localStorage.setItem(
        chave(idioma, "ordem"),
        JSON.stringify(novaOrdem)
    );


    return novaOrdem;
}

function obterPerguntaAtual(idioma) {

    const banco = bancos[idioma];

    if (
        !banco
        ||
        banco.length === 0
    ) {

        return null;
    }


    const progresso =
        carregarProgresso(idioma);


    if (
        progresso >= banco.length
    ) {

        return null;
    }


    const ordem =
        carregarOrdem(idioma);


    const indiceReal =
        ordem[progresso];


    if (
        indiceReal === undefined
    ) {

        return null;
    }


    indicePerguntaAtual =
        indiceReal;


    return banco[indiceReal];
}

function mostrarPagina(nome) {

    const paginas =
        document.querySelectorAll(
            ".pagina"
        );


    paginas.forEach(
        pagina => {

            pagina.classList.remove(
                "ativa"
            );

        }
    );


    const paginaDestino =
        document.getElementById(nome);


    if (paginaDestino) {

        paginaDestino.classList.add(
            "ativa"
        );
    }


    fecharMenu();


    if (
        nome === "ingles"
        ||
        nome === "frances"
    ) {

        iniciarQuiz(nome);

    } else if (
        nome === "home"
    ) {

        atualizarDashboard();
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function alternarMenu() {

    const menu =
        document.querySelector(
            ".menu"
        );


    if (!menu) {
        return;
    }


    menu.classList.toggle(
        "aberto"
    );
}


function fecharMenu() {

    const menu =
        document.querySelector(
            ".menu"
        );


    if (!menu) {
        return;
    }


    menu.classList.remove(
        "aberto"
    );
}

function irParaAulas() {

    mostrarPagina("home");


    setTimeout(
        () => {

            const aulas =
                document.getElementById(
                    "aulas"
                );


            if (aulas) {

                aulas.scrollIntoView({
                    behavior: "smooth"
                });
            }

        },
        100
    );
}

function iniciarQuiz(idioma) {

    idiomaAtual = idioma;

    respondeuPergunta = false;


    const banco =
        bancos[idioma];


    if (
        !banco
        ||
        banco.length === 0
    ) {

        mostrarBancoVazio(idioma);

        return;
    }


    const progresso =
        carregarProgresso(idioma);


    if (
        progresso >= banco.length
    ) {

        mostrarFimDoCiclo();

        return;
    }

    if (
        completouDesafiosDeHoje(idioma)
    ) {

        mostrarDesafioConcluido();

        return;
    }


    mostrarPergunta();
}

function mostrarBancoVazio(idioma) {

    const container =
        obterContainerQuiz(idioma);


    if (!container) {

        console.warn(
            "Container do quiz não encontrado."
        );

        return;
    }


    container.innerHTML = `

        <div class="quiz-final">

            <div class="quiz-final-emoji">
                🧩
            </div>

            <h2>
                Banco de perguntas vazio
            </h2>

            <p>
                As perguntas deste idioma
                ainda precisam ser adicionadas
                ao arquivo <strong>script.js</strong>.
            </p>

        </div>

    `;
}

function obterContainerQuiz(idioma) {

    return (
        document.getElementById(
            `quiz-${idioma}`
        )
        ||
        document.getElementById(
            `conteudo-${idioma}`
        )
        ||
        document.querySelector(
            `#${idioma} .quiz`
        )
        ||
        document.querySelector(
            `#${idioma} .quiz-container`
        )
        ||
        document.querySelector(
            `#${idioma} .conteudo-quiz`
        )
    );
}

function mostrarPergunta() {

    if (!idiomaAtual) {
        return;
    }


    const banco =
        bancos[idiomaAtual];


    if (
        !banco
        ||
        banco.length === 0
    ) {

        mostrarBancoVazio(
            idiomaAtual
        );

        return;
    }


    const progresso =
        carregarProgresso(
            idiomaAtual
        );


    if (
        progresso >= banco.length
    ) {

        mostrarFimDoCiclo();

        return;
    }


    if (
        completouDesafiosDeHoje(
            idiomaAtual
        )
    ) {

        mostrarDesafioConcluido();

        return;
    }


    perguntaAtual =
        obterPerguntaAtual(
            idiomaAtual
        );


    if (!perguntaAtual) {

        mostrarFimDoCiclo();

        return;
    }


    respondeuPergunta = false;


    const container =
        obterContainerQuiz(
            idiomaAtual
        );


    if (!container) {

        console.warn(
            `Container do quiz de ${idiomaAtual} não encontrado.`
        );

        return;
    }


    const feitosHoje =
        carregarFeitosHoje(
            idiomaAtual
        );


    const numeroDoDia =
        feitosHoje + 1;


    const total =
        banco.length;


    const numeroTotal =
        progresso + 1;


    const opcoes =
        perguntaAtual.opcoes || [];


    container.innerHTML = `

        <div class="quiz-card">

            <div class="quiz-topo">

                <span class="quiz-dia">

                    Desafio de hoje:
                    ${numeroDoDia}
                    de
                    ${DESAFIOS_POR_DIA}

                </span>

                <span class="quiz-total">

                    ${numeroTotal}/${total}

                </span>

            </div>


            <div class="quiz-barra">

                <div
                    class="quiz-barra-preenchida"
                    style="
                        width:
                        ${
                            total > 0
                            ?
                            (progresso / total) * 100
                            :
                            0
                        }%
                    "
                ></div>

            </div>


            <h2 class="quiz-pergunta">

                ${perguntaAtual.pergunta || ""}

            </h2>


            <div class="quiz-opcoes">

                ${

                    opcoes.map(
                        (opcao, indice) => `

                            <button
                                class="quiz-opcao"
                                onclick="responder(${indice}, this)"
                            >

                                ${opcao}

                            </button>

                        `
                    ).join("")

                }

            </div>


            <div
                id="quiz-feedback"
                class="quiz-feedback"
            ></div>

        </div>

    `;
}

function responder(indice, botao) {

    if (
        respondeuPergunta
        ||
        !perguntaAtual
    ) {

        return;
    }


    respondeuPergunta = true;


    const correta =
        Number(
            perguntaAtual.correta
        );


    const acertou =
        indice === correta;


    const botoes =
        document.querySelectorAll(
            `#${idiomaAtual} .quiz-opcao`
        );


    botoes.forEach(
        (item, i) => {

            item.disabled = true;


            if (i === correta) {

                item.classList.add(
                    "correta"
                );

            } else if (
                i === indice
            ) {

                item.classList.add(
                    "errada"
                );
            }

        }
    );

    if (
        botao
        &&
        !acertou
    ) {

        botao.classList.add(
            "errada"
        );
    }

    const feedback =
        document.getElementById(
            "quiz-feedback"
        );


    if (!feedback) {
        return;
    }

    const explicacao =
        perguntaAtual.explicacao || "";


    const feitosDepois =
        carregarFeitosHoje(
            idiomaAtual
        ) + 1;


    const textoBotao =
        feitosDepois < DESAFIOS_POR_DIA
        ?
        "Próximo desafio"
        :
        "Concluir dia";


    feedback.innerHTML = `

        <div
            class="
                feedback-caixa
                ${
                    acertou
                    ?
                    "feedback-correto"
                    :
                    "feedback-errado"
                }
            "
        >

            <h3>

                ${
                    acertou
                    ?
                    "Acertou! ✨"
                    :
                    "Quase! 👀"
                }

            </h3>


            <p>

                ${explicacao}

            </p>


            <button
                class="botao-principal"
                onclick="finalizarDesafio()"
            >

                ${textoBotao}

            </button>

        </div>

    `;
}

function finalizarDesafio() {

    if (!idiomaAtual) {
        return;
    }


    const banco =
        bancos[idiomaAtual];


    if (
        !banco
        ||
        banco.length === 0
    ) {

        return;
    }


    let progresso =
        carregarProgresso(
            idiomaAtual
        );


    let feitosHoje =
        carregarFeitosHoje(
            idiomaAtual
        );


    progresso += 1;

    feitosHoje += 1;


    salvarProgresso(
        idiomaAtual,
        progresso
    );


    salvarData(
        idiomaAtual,
        dataDeHoje()
    );


    salvarFeitosHoje(
        idiomaAtual,
        feitosHoje
    );

    if (
        progresso >= banco.length
    ) {

        // Se o banco acabar antes de chegar exatamente a 3,
        // ainda consideramos o dia concluído.

        if (
            feitosHoje < DESAFIOS_POR_DIA
        ) {

            salvarFeitosHoje(
                idiomaAtual,
                DESAFIOS_POR_DIA
            );
        }


        atualizarOfensiva(
            idiomaAtual
        );


        atualizarDashboard();


        mostrarFimDoCiclo();

        return;
    }

    if (
        feitosHoje < DESAFIOS_POR_DIA
    ) {

        mostrarPergunta();

        atualizarDashboard();

        return;
    }

    atualizarOfensiva(
        idiomaAtual
    );

    atualizarDashboard();


    mostrarDesafioConcluido();
}

function mostrarDesafioConcluido() {

    if (!idiomaAtual) {
        return;
    }


    const container =
        obterContainerQuiz(
            idiomaAtual
        );


    if (!container) {
        return;
    }


    const ofensiva =
        carregarOfensiva(
            idiomaAtual
        );


    const progresso =
        carregarProgresso(
            idiomaAtual
        );


    const total =
        bancos[idiomaAtual]
        ?
        bancos[idiomaAtual].length
        :
        0;


    container.innerHTML = `

        <div class="quiz-final">

            <div class="quiz-final-emoji">
                🔥
            </div>


            <h2>
                Desafios de hoje concluídos!
            </h2>


            <p>

                Você completou os
                ${DESAFIOS_POR_DIA}
                desafios de hoje.

            </p>


            <div class="quiz-resumo">

                <div class="quiz-resumo-item">

                    <strong>
                        ${ofensiva}
                    </strong>

                    <span>
                        🔥 ofensiva
                    </span>

                </div>


                <div class="quiz-resumo-item">

                    <strong>
                        ${progresso}/${total}
                    </strong>

                    <span>
                        progresso
                    </span>

                </div>

            </div>


            <p class="quiz-volte">

                Volte amanhã para continuar. 🌙

            </p>


            <button
                class="botao-secundario"
                onclick="mostrarPagina('home')"
            >

                Voltar ao início

            </button>

        </div>

    `;
}

function mostrarFimDoCiclo() {

    if (!idiomaAtual) {
        return;
    }

    const container =
        obterContainerQuiz(
            idiomaAtual
        );

    if (!container) {
        return;
    }

    const banco =
        bancos[idiomaAtual];

    const total =
        banco
        ?
        banco.length
        :
        0;

    const ofensiva =
        carregarOfensiva(
            idiomaAtual
        );

    container.innerHTML = `

        <div class="quiz-final">

            <div class="quiz-final-emoji">
                🏆
            </div>

            <h2>
                Você completou o ciclo!
            </h2>

            <p>

                Você chegou ao final de
                <strong>
                    ${total}/${total}
                </strong>
                desafios.

            </p>

            <p>

                Ofensiva atual:
                <strong>
                    🔥 ${ofensiva}
                </strong>

            </p>

            <button
                class="botao-principal"
                onclick="reiniciarCiclo()"
            >

                Começar um novo ciclo

            </button>


            <button
                class="botao-secundario"
                onclick="mostrarPagina('home')"
            >

                Voltar ao início

            </button>

        </div>

    `;
}

function reiniciarCiclo() {

    if (!idiomaAtual) {
        return;
    }

    const banco =
        bancos[idiomaAtual];

    if (!banco) {
        return;
    }

    salvarProgresso(
        idiomaAtual,
        0
    );


    const novaOrdem =
        criarOrdemAleatoria(
            banco.length
        );


    localStorage.setItem(
        chave(
            idiomaAtual,
            "ordem"
        ),
        JSON.stringify(
            novaOrdem
        )
    );

    if (
        completouDesafiosDeHoje(
            idiomaAtual
        )
    ) {

        mostrarDesafioConcluido();

        atualizarDashboard();

        return;
    }


    iniciarQuiz(
        idiomaAtual
    );


    atualizarDashboard();
}

function atualizarDashboard() {

    Object.keys(CONFIG).forEach(
        idioma => {

            atualizarCardDashboard(
                idioma
            );

        }
    );
}

function atualizarCardDashboard(idioma) {

    const configuracao =
        CONFIG[idioma];

    if (!configuracao) {
        return;
    }

    const card =
        document.getElementById(
            configuracao.card
        );

    if (!card) {
        return;
    }

    const banco =
        bancos[idioma] || [];

    const total =
        banco.length;

    const progresso =
        carregarProgresso(
            idioma
        );

    const feitosHoje =
        carregarFeitosHoje(
            idioma
        );

    const ofensiva =
        carregarOfensiva(
            idioma
        );

    const concluidoHoje =
        completouDesafiosDeHoje(
            idioma
        );

    const textoProgresso =
        card.querySelector(
            ".dashboard-progresso-texto"
        );

    if (textoProgresso) {

        textoProgresso.textContent =
            `${progresso}/${total}`;
    }

    const barra =
        card.querySelector(
            ".dashboard-barra-preenchida"
        );

    if (barra) {

        const porcentagem =
            total > 0
            ?
            Math.min(
                100,
                (progresso / total) * 100
            )
            :
            0;


        barra.style.width =
            `${porcentagem}%`;
    }

    const textoOfensiva =
        card.querySelector(
            ".dashboard-ofensiva"
        );


    if (textoOfensiva) {

        textoOfensiva.textContent =
            `🔥 ${ofensiva}`;
    }

    const status =
        card.querySelector(
            ".dashboard-status"
        );


    if (status) {

        if (total === 0) {

            status.textContent =
                "Em breve";

        } else if (
            progresso >= total
        ) {

            status.textContent =
                "Ciclo completo 🏆";

        } else if (
            concluidoHoje
        ) {

            status.textContent =
                "Concluído hoje ✓";

        } else if (
            feitosHoje > 0
        ) {

            status.textContent =
                `${feitosHoje}/${DESAFIOS_POR_DIA} hoje`;

        } else {

            status.textContent =
                "Disponível hoje";
        }
    }

    const botao =
        card.querySelector(
            "button"
        );


    if (botao) {

        if (total === 0) {

            botao.textContent =
                "Em breve";

            botao.disabled = true;

        } else if (
            progresso >= total
        ) {

            botao.textContent =
                "Ver resultado";

            botao.disabled = false;

        } else if (
            concluidoHoje
        ) {

            botao.textContent =
                "Concluído hoje";

            botao.disabled = false;

        } else if (
            feitosHoje > 0
        ) {

            botao.textContent =
                `Continuar ${feitosHoje}/${DESAFIOS_POR_DIA}`;

            botao.disabled = false;

        } else {

            botao.textContent =
                "Começar";

            botao.disabled = false;
        }
    }
}

function liberarHoje(idioma) {

    localStorage.removeItem(
        chave(
            idioma,
            "data"
        )
    );


    localStorage.removeItem(
        chave(
            idioma,
            "feitosHoje"
        )
    );


    atualizarDashboard();


    console.log(
        `Desafios de ${idioma} liberados novamente.`
    );
}

function resetarProgresso() {

    const idiomas = [
        "ingles",
        "frances"
    ];


    idiomas.forEach(
        idioma => {

            localStorage.removeItem(
                chave(
                    idioma,
                    "progresso"
                )
            );


            localStorage.removeItem(
                chave(
                    idioma,
                    "data"
                )
            );


            localStorage.removeItem(
                chave(
                    idioma,
                    "ordem"
                )
            );


            localStorage.removeItem(
                chave(
                    idioma,
                    "ofensiva"
                )
            );


            localStorage.removeItem(
                chave(
                    idioma,
                    "feitosHoje"
                )
            );


            localStorage.removeItem(
                chave(
                    idioma,
                    "ultimaOfensiva"
                )
            );

        }
    );


    idiomaAtual = null;

    perguntaAtual = null;

    indicePerguntaAtual = 0;

    respondeuPergunta = false;


    atualizarDashboard();


    console.log(
        "Todo o progresso foi resetado."
    );
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarDashboard();

    }
);