var btn_criar = document.getElementById('criar')
var form1 = document.getElementById('form1')
var form2 = document.getElementById('form2')
var form3 = document.getElementById('form3')
var form4 = document.getElementById('form4')
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')

btn_criar.addEventListener('click', function(){
    createLabel();
    createInput();
});

//<label for="incluir">Incluir este personagem na batalha</label>
function createLabel()
{
    var elemento = document.createElement('label');
    elemento.setAttribute('for', 'incluir');
    elemento.textContent = 'Incluir este personagem na batalha';

    box1.appendChild(elemento);
}

//<input type="checkbox" id="incluir" name="incluir">
function createInput()
{
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'checkbox');
    elemento.setAttribute('name', 'incluir');
    elemento.setAttribute('id', 'incluir');

    box1.appendChild(elemento);
}

//<label for="nome_responsavel">Nome</label>
function createLabel()
{
    var elemento = document.createElement('label');
    elemento.setAttribute('for', 'nome_responsavel');
    elemento.textContent = 'Nome';

    box2.appendChild(elemento);
}

//<input type="text" id="nome_responsavel" name="nome_responsavel">
function createInput()
{
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'nome_responsavel');
    elemento.setAttribute('id', 'nome_responsavel');

    box2.appendChild(elemento);
}

//<label for="anao">Anão</label>
function createLabel()
{
    var elemento = document.createElement('label');
    elemento.setAttribute('for', 'anao');
    elemento.textContent = 'Anão';

    box3.appendChild(elemento);
}

//<input type="radio" id="anao" name="nacao" value="anao" checked>
function createInput()
{
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'radio');
    elemento.setAttribute('name', 'nacao');
    elemento.setAttribute('id', 'anao');
    elemento.setAttribute('value', 'anao');

    box3.appendChild(elemento);
}