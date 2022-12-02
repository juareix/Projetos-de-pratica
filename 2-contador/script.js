let cont = 0;
let valor = document.querySelector('span')

function verificarCor(cont){
    if(cont > 0){
        valor.innerText = cont;
        document.querySelector('span').style.color = 'green'
    }
    else if(cont < 0){
        valor.innerText = cont;
        document.querySelector('span').style.color = 'red'
    }
    else{
        document.querySelector('span').style.color = 'black'
        valor.innerText = cont;
    }
}

function encrementar(){
    cont ++;
    verificarCor(cont);
};

function decrementar(){
    cont --;
    verificarCor(cont);
};

function reset(){
    cont = 0;
    valor.innerText = cont;
    document.querySelector('span').style.color = 'black'
};


