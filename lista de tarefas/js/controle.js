let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

//codigo que adiciona a tarefa
function addTarefa(){
    //pega valor do input
    let valorInput = input.value;

    // se não for vazio nem nulo nem vazio
    if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador
        //usa a carse para colocar html detro da função
        let novoItem = `<div id = "${contador}"class="item">
            <div onclick = "marcarTarefa(${contador})" class="item-icone">
                <i id = "icone_${contador}" class="icone">O</i>
            </div>
            <div onclick = "marcarTarefa(${contador})" class="item-nome">
               ${valorInput}
            </div>
            <div class="item-button">
                <button onclick="deletar(${contador})" class="delete">Deletar</button>
            </div>
        </div>`

        // adiciona item no main
        main.innerHTML += novoItem

        //zerar os campos
        input.value = "";
        input.focus
    }
}

//deletar
function deletar(id){
    //pega o id do item
    var tarefa = document.getElementById(id);
    //deleta o item com o id pego
    tarefa.remove();
}

//usado para quando clicar em uma tarefa ele a mudar
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    //adiciona classe ao item selecionado
    if (classe =="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('icone');
        icone.classList.add('icone_checado');

        //joga pro final da fila
        item.parentNode.appendChild(item)
    }else{//desmarca o item
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('icone_checado');
        icone.classList.add('icone');
    }
}


//Ao precionar entre envia uma nova tarefa
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})