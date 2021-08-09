var botao_ativar = window.document.getElementById('ativar');
var botao_logar = window.document.querySelector("#logar");
var div_animar = window.document.querySelector("#modal");
var input_nome = window.document.getElementById('nome');
var input_email = window.document.getElementById('email');
var div_load = window.document.querySelector("#load");


botao_ativar.addEventListener('click', () => {
    div_animar.classList.toggle('animar');
});

botao_logar.addEventListener('click', () => {
    if(input_email.value != '' && input_nome.value != ''){
        div_load.classList.toggle('animar2');
    } 
});



