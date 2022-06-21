var personagens = [
    {"Nacao": "Hobbit", "Casa": "O Condado", "Descricao": "Os hobbits pés-peludos são o tipo mais comum de hobbit. São morenos, preferem planícies e regiões banhadas por rios. Os cascalvas tem a pele e o cabelo mais claros, são mais altos e mais esguios que os outros tipos de hobbit, preferem bosques e florestas para morar além de serem descendentes de elfos. Outros hobbits dizem que estes têm 'sangue de fada', por conta de sua ascendência. Os grados são tipos de hobbit mais robustos e frequentemente cultivam barbas. São mais próximos aos  anões,  e  Sméagol  costumava  ser  um  cascalva  antes  de  ser  corrompido  pelo anel.", "PersonagensdaSaga":  ["Bilbo Bolseiro", "Samwise Gamgee", "Frodo Bolseiro", "Peregrin Tûk", "Rosinha Villa"], "Imagem": "https://static3.tcdn.com.br/img/img_prod/460977/action_figure_bilbo_baggins_the_hobbit_escala_1_4_neca_apenas_venda_online_53069_1_20201211173118.jpg"},
    {"Nacao": "Cavaleiro de Rohan", "Casa": "Abismo de Helm", "Descricao": "Durante a XIII século de Terceira Idade (TA), os governantes de Gondor formaram uma aliança estreita com os habitantes do território do norte deRhovanion, um pai de três pessoas Casas do Edain da Primeira Era. Estes homens foram dizimados pela  Grande  Peste  de  1636  TA,  e  ainda  mais  pelas  invasões  dos  carrinhos  de Pessoas-de-no final do XX século. Após essas invasões, alguns desses homens, liderados por um certo Frumgar, migraram para o vale superior do Anduin em 1977 TA. No local, eles entraram em conflito com os Anões sobre o compartilhamento do tesouro do dragão Scatha, morto por Fram, filho de Frumgar. Esses homens, que tomaram o nome de Éothéod, viveram por vários séculos ao redor das nascentes do Anduin, mas se tornaram cada vez mais numerosos e se sentiam confinados em suas terras.  Apesar  do  afastamento,  eles  mantiveram  laços  com  Gondor,  e  quando  o Administrador Cirion se viu atacado por hordas de Orientais e Orcs, em 2510 AT, ele chamou Eorl, o Jovem, o novo Senhor dos Éothéod. Ele chegou inesperadamente e venceu a batalha decisiva dos Campos de Celebrant.", "PersonagensdaSaga": ["Théoden", "Théodred", "Deorwine"], "Imagem": "http://1.bp.blogspot.com/-QBXZzRzjp9c/VgmJK_IjoCI/AAAAAAAAEgs/l6XFNZ9hkzs/s1600/165201650912cc8ddc6e588a71278693.jpg"},
    {"Nacao": "Orc Snaga", "Casa": "Cirith Ungol", "Descricao": "Orc de Mordor, Snaga ficava na Torre de Cirith Ungol. Ele foi um dos únicos sobreviventes da briga entre Orcs da Torre liderados por Shagrat e os Orcs de Minas Morgul liderados por Gorbag em 14 de março de 3019. Sam Gamgi encontrou Snaga nas escadas, e o Orc o confundiu com o Grande Elfo Guerreiro e fugiu. Sam o seguiu e ouviu uma discussão entre Snaga e Shagrat. Shagrat ordenou que Snaga fosse ao encontro de Lugburz (em Barad-dur) com notícias que eles haviam capturado um Pequenino. Snaga recusou, e Shagrat o perseguiu, mas foi distraído quando eles descobriram que Gorbag continuava vivo. Snaga foi para a câmera no topo da Torre, onde Frodo Bolseiro estava sendo mantido como prisioneiro. Quando Sam o encontrou, Snaga estava batendo em Frodo com uma corda. Sam atacou Snaga e o Orc caiu através do alçapão e morreu.", "PersonagensdaSaga": ["Ungol", "Shagrat", "Gorbag"], "Imagem": "http://tolkiengateway.net/w/images/thumb/a/a1/Randy_Gallegos_and_Quinton_Hoover_-_Gallegos.jpg/250px-Randy_Gallegos_and_Quinton_Hoover_-_Gallegos.jpg"},
    {"Nacao": "Uruk-hai", "Casa": "Portão Negro", "Descricao": "A pele dos Uruk-hai é marrom escura, até avermelhada, e seu sangue é preto; eles não têm medo da dor e podem até suportar a tortura sem vacilar. Eles são conhecidos por suas habilidades de combate e por correrem longas distâncias quando perseguem suas presas.", "PersonagensdaSaga": ["Azog", "Bolg", "Saruman"], "Imagem": "https://static.wikia.nocookie.net/lotr/images/4/4d/CDA44071-BE09-48D9-9A19-6DAD50CF0C2B.jpeg/revision/latest?cb=20200327083442"},
    {"Nacao": "Guerreiro de Gondor", "Casa": "Minas Tirith", "Descricao": "O Guerreiro é, segundo a definição do RPG, o especialista em combate. Desde o jovem guarda da aldeia mais simples ao poderoso rei bárbaro. Todos são guerreiros. Em O Senhor dos Anéis podemos listar vários guerreiros, mas aqui vamos nos concentrar em alguns arquétipos. Para começar, vamos analisar Gimli. Nada mais típico em RPG do que o anão porradeiro. E é exatamente isso que Gimli é: um guerreiro anão clichê. Armado de machado e protegido por uma armadura, Gimli está sempre na linha de frente das batalhas decepando seus adversários. Durante a passagem pelas Minas Moria, vemos a habilidade do anão em utilizar duas armas, muito comum entre guerreiros do RPG.", "PersonagensdaSaga": ["Gimli", "Baromir"], "Imagem": "https://1.bp.blogspot.com/-zlLLwi7TS34/YJW3qp_RquI/AAAAAAACH1g/4vL5zksCiMg6HzT9eJZsBws7P1V2U-mKgCLcBGAsYHQ/s795/Boromir_13.jpg"},
    {"Nacao": "Elfo da Floresta", "Casa": "Floresta das Trevas", "Descricao": "Elfos da Floresta são um povo mágico e selvagem, de ferocidade e destreza sobrenatural, que domam e se tornam parte das florestas que habitam.", "PersonagensdaSaga": ["Théoden", "Théodred", "Deorwine"], "Imagem": "https://static.wikia.nocookie.net/dd-5-edicao-brasil/images/9/9e/Elfos_da_floresta.jpg/revision/latest?cb=20180203163535&path-prefix=pt-br"},
    {"Nacao": "Elfo de Lothlórien", "Casa": "Caras Galadhon", "Descricao": "Além de Lothlórien, no entanto, o reino pode ainda ser chamado apenas de Lórien, já que Lothlórien significa Lórien da Flor. No entanto, Lórien era na verdade o reino do vala Irmo, que mora em Aman, as Terras Imortais.", "PersonagensdaSaga": ["Noldor", "Teleri"], "Imagem": "http://pm1.narvii.com/6842/6fb3abfe5f3f8a6cfb51532ffcb5f796038b30d6v2_00.jpg"},
    {"Nacao": "Anão", "Casa": "Colinas de Ferro", "Descricao": "Eles são guerreiros indomáveis, fortes e resistentes. Os reinos dos anões são poderosas cidadelas nas montanhas ou em minas. Sendo habilidosos com armas pesadas, como martelos em geral, eles são robustos, severos, poderosos como uma rocha e se prendem às suas crenças e ancestrais.", "PersonagensdaSaga": ["Moria", "Dwarf", "Deorwine"], "Imagem": "https://pm1.narvii.com/6411/c10a24c4f9f8ab6bdb2e4e4e9acb7252852ceb04_hq.jpg"}
];

function personagenscaracter() {
    console.log("clicou em 'personagenscaracter'");
    escrevaHtml(personagens);
}

function personagenscaracter_TUDOJUNTO() {
    console.log ("clicou em 'personagenscaracterjunto'");
    var meuNovoConteudo = "";
    for (let i = 0; i < personagens.length; i++) {
        meuNovoConteudo += "<li>" + personagens[i].Nacao + "</li>";
    }

    meuNovoConteudo += "<ul>" + meuNovoConteudo + "</ul>";

    var elemento = document.getElementById('ivi');
    elemento.innerHTML = "aeiou";
}

function escrevaHtml(arrayPersonagens1) {
    arrayPersonagens = arrayPersonagens1.sort();
    var meuNovoConteudo = "<table>"; 
    for (let i = 0; i < arrayPersonagens.length; i++) {
        meuNovoConteudo += "<tr>";
        meuNovoConteudo += "<td>" + arrayPersonagens[i].Nacao + "</td>";
        meuNovoConteudo += "<td>" + arrayPersonagens[i].Casa + "</td>";
        meuNovoConteudo += "<p>" + arrayPersonagens[i].Descricao + "</p>";
        meuNovoConteudo += "<td>" + arrayPersonagens[i].PersonagensdaSaga + "</td>";
        meuNovoConteudo += "<img>" + arrayPersonagens[i].Imagem + "</img>";
        meuNovoConteudo += "</tr>";
    }
    meuNovoConteudo += "</table>";
    meuNovoConteudo += "<p>Quantidade: " + arrayPersonagens.length + "</p>";

    var elemento = document.getElementById('ivi');
    elemento.innerHTML = meuNovoConteudo;
}