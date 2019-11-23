function pegarNomes(){
    var dados = document.getElementsByClassName('ui__blueLink');
    var nome = [];
    var i = 0;
    while ( dados.length > i ){
        if (dados[i].parentElement.className != 'clanWarHistory__row'){
            nome.push(dados[i].text);
        } 
        i = i + 1;
    }
    i = 0;
    const nomes = [ ...new Set( nome ) ];
    return nomes;
}

function nomesBanimento(){
    var delet = document.getElementsByClassName('clanWarHistory__modalOverlay');
    var j = 9;
    while (j >= 4){
        delet[j].remove();
        j = j - 1;
    }
    var dados = document.getElementsByClassName('ui__blueLink');
    var nome = [];
    var i = 0;
    while ( dados.length > i ){
        if (dados[i].parentElement.className != 'clanWarHistory__row'){
            nome.push(dados[i].text);
        } 
        i = i + 1;
    }
    i = 0;
    const nomes = [ ...new Set( nome ) ];

    var membros = ["Thiago", "Tom", "AleKami", "krattos", "Chipset", "JEFIN", "aldo x perdedor", "Luana Freitas", "XERIFE WOODY", "marinsrafael", "Luthi", "Pedro Brenha", "TumTumQue", "Lukeba", "coqumelo mtd", "lordcrj", "LuKami", "Ronaldo", "gus", "junior", "lincoln", "mateus", "Chico Rei", "GeanR7", "PANDAMTLOKO99", "Yuri!", "Thiaguinho", "NykeBoy", "Uchiha Itachi", "CELTIC GUARDIAN", "The Best", "Patrick M.", "Mortadela", "FranTart", "Fiwick", "Ghost", "Gabriela", "maathewsinho", "zero", "Thainá", "gutroyale", "Dani.Gold", "sampa", "meI2604"]
    
    var banir = [];
    membros.forEach(function (element, index, array) {
        if(nomes.indexOf(element) == -1)
        banir.push(element);
    });
    clear()
    console.log('Não participou das ultimas 4 Guerras ou entrou recentemente!')
    j = 0;
    while (j < banir.length){
        console.log(banir[j]);
        j++;
    }
}