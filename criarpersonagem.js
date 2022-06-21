var btn_criar = document.getElementById('criar')
var form1 = document.getElementById('form1')
var box = document.getElementById('box')


document.getElementById('criar').addEventListener('click', chamaformulario);

function chamaformulario() {
    console.log ('estou sendo clicado') 

    let formulario = `<form id="form2">
    <input type="checkbox" id="incluir" name="incluir">
    <label for="incluir">Incluir este personagem na batalha</label>
    <br>
    <label for="nome_responsavel">Nome</label>
    <input type="text" id="nome_responsavel" name="nome_responsavel">
<div style="margin-left:15px;">
<th>Nação</th>
</div>
<table width="370px">
<tr>
<td>
<input type="radio" id="anao" name="nacao" value="anao" checked>
    <label for="anao">Anão</label>
</td>
<td>
    <input type="radio" id="elfo da Floresta" name="nacao" value="elfo da Floresta">
    <label for="elfo da floresta">Elfo da Floresta</label>
    </td>
</tr>
<tr>
<td>
<input type="radio" id="hobitt" name="nacao" value="hobitt">
    <label for="hobbit">Hobbit</label>               
</td>
    <td>
    <input type="radio" id="elfo de Lothorien" name="nacao" value="elfo de Lothorienn">
    <label for="elfo de Lothorien">Elfo de Lothorien</label>               
</tr>
<tr>
<td>
<input type="radio" id="cavaleiro de Rohan" name="nacao" value="cavaleiro de Rohan">
    <label for="cavaleiro de Rohan">Cavaleiro de Rohan</label>
</td>
<td>
<input type="radio" id="orc Snagna" name="nacao" value="orc Snagna">  
    <label for="Orc Snagna">Orc Snagna</label>
</td>
</tr>
<tr>
<td>
    <input type="radio" id="cavaleiro de gondor" name="nacao" value="cavaleiro de Gondor">
    <label for="cavaleiro de Gondor">Cavaleiro de Gondor</label>
</td>
<td>
<input type="radio" id="uruk-hai" name="nacao" value="uruk-hai">
    <label for="uruk-hai">Uruk-hai</label>            
</td>
</tr>
</table>
<div style="margin: -250px 125px 0px 160px; float:right">
<th>Habilidades</th>
<table>
<tr>
<td><label for="força">Força</label></td>
<td><input type="number" name="habilidades" value="20" style="width:100px; text-align:center; border-radius:10px" ></td>
</tr>
<tr>
<td><label for="precisao">Precisão</label></td>
<td><input type="number" name="habilidades" value="20" style="width:100px; text-align:center; border-radius:10px"></td>
</tr>
<tr>
<td><label for="velocidade">Velocidade</label>
<td><input type="number" name="habilidades" value="20" style="width:100px; text-align:center; border-radius:10px"></td>
</tr>
<tr>
<td><label for="armadura">Armadura</label>
<td><input type="number" name="habilidades" value="20" style="width:100px; text-align:center; border-radius:10px"></td>
</tr>
<tr>
<td><label for="Recuperacao">Recuperação</label>
<td><input type="number" name="habilidades" value="20" style="width:100px; text-align:center;border-radius:10px"></td>
</tr>
</table>
<br>
<button id="criar" type="button">Criar Personagem</button>
</div>
</form>
    `
    for(var i = 1; i <= 8; i++) {
        //document.getElementById('per1').innerHTML += `<h3>Personagem ${i}</h3> ${formulario}`
        document.getElementById('box').innerHTML += `<h3>Personagem ${i}</h3> ${formulario}`
    }
}

