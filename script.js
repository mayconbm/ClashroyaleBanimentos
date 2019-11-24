function pegarNomes(){
    //Coleta dos dados principal para consulta no site statsroyale
    var dados = document.getElementsByClassName('ui__blueLink');
    var nome = [];
    var i = 0;
    //Cria uma nova lista sem os dados dos clas participantes das guerras
    while ( dados.length > i ){
        if (dados[i].parentElement.className != 'clanWarHistory__row'){
            nome.push(dados[i].text);
        } i = i + 1;
    }
    //Cria uma array somente com os nomes dos integrantes
    const nomes = [ ...new Set( nome ) ];
    //Limpa console para melhor vizualização
    clear()
    return nomes;
}
function nomesBanimento(){
    //Coleta os dados das guerras para limitar as consultas apenas para as ultimas guerras
    var delet = document.getElementsByClassName('clanWarHistory__modalOverlay');
    var j = 9;
    //Quantas guerras sera consultada 'qntGuerra' - max 10 guerras
    var qntGuerra = 4;
    //Remove as guerras que não entraram para consulta
    while (j >= qntGuerra){
        delet[j].remove();
        j = j - 1;
    }
    //Executa função pegar nomes para consultar dados para banimento
    var nomes = pegarNomes();
    // Membros atualmente no clã, necessario atualizar com a funcao pegarNomes() como no video exemplo.
    var membros = ["Thiago", "Tom", "AleKami", "krattos", "Chipset", "JEFIN", "aldo x perdedor", "Luana Freitas", "XERIFE WOODY", "marinsrafael", "Luthi", "Pedro Brenha", "TumTumQue", "Lukeba", "coqumelo mtd", "lordcrj", "LuKami", "Ronaldo", "gus", "junior", "lincoln", "mateus", "Chico Rei", "GeanR7", "PANDAMTLOKO99", "Yuri!", "Thiaguinho", "NykeBoy", "Uchiha Itachi", "CELTIC GUARDIAN", "The Best", "Patrick M.", "Mortadela", "FranTart", "Fiwick", "Ghost", "Gabriela", "maathewsinho", "zero", "Thainá", "gutroyale", "Dani.Gold", "sampa", "meI2604"]
    
    var banir = [];
    //Cria uma array com os nomes dos membros menos os nomes dos participantes das guerras (membros inativos nas guerras)
    membros.forEach(function (element, index, array) {
        if(nomes.indexOf(element) == -1)
        banir.push(element);
    });
    //Limpa console para melhor vizualização
    clear()
    //Mostra nos console os nomes dos membros que devem ser banidos/rebaixados
    console.log('Não participou das ultimas 4 Guerras ou entrou recentemente!')
    j = 0;
    while (j < banir.length){
        console.log(banir[j]);
        j++;
    }
}
//Limpa console para melhor vizualização
clear()