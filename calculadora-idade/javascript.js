let div = document.querySelector('.resultado');
let divErr = document.querySelector('.error');
let resultadoAno = document.querySelector('.resultadoAno');
let resultadoDia = document.querySelector('.resultadoDia');
let resultadoMes = document.querySelector('.resultadoMes');
let caixa = document.querySelector('.caixa');

function conta() {
let dia = parseInt(document.querySelector('.dia').value);
let mes = parseInt(document.querySelector('.mes').value);
let ano = parseInt(document.querySelector('.ano').value);
let line = document.querySelector('.line');
let hoje = new Date();
let hojeAno = hoje.getFullYear();
let hojeDia = hoje.getDate();
let hojeMes = hoje.getMonth() + 1;
let year =  hojeAno - ano;
  
if(hojeMes >= mes){
  var month = hojeMes - mes;
}  else{
  year -= 1;
  var month =  (12 - mes) + hojeMes;
}
if(hojeDia >= dia){
  var day = hojeDia - dia;
}  else{
  year -= 0;
  var day = dia - hojeDia;
}
     if(isNaN(dia) || isNaN(mes) || isNaN(ano)){
    div.style.display = "none";
    divErr.style.display = "block";
    divErr.innerHTML= "Prencha os campos corretamente!"
 } else if(dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano > 2023){
    div.style.display = "none";
    divErr.style.display = "block";
    caixa.style.border = "none"
    divErr.innerHTML= "Prencha os campos corretamente!";
 }
  else {
    divErr.style.display = "none";
    div.style.display = "flex";
    caixa.style.borderRadius = "4 0 4rem 0"
    resultadoAno.innerHTML= year;
    resultadoMes.innerHTML= month ;
    resultadoDia.innerHTML= day;
  }

}
function handleKeyPress(e){
 let key=e.keyCode || e.which;
  if (key==13){
     conta();
  }
}