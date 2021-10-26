let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome Inválido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome válido";
    txt.style.color = "green";
    nomeOk = true;
  }
}
function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "Email Inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "Email válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}
function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Número de caracter excêdido";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}
function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}

function zoom() {
  mapa.style.width = "800px";
  mapa.style.length = "800px";
}
function normal() {
  mapa.style.width = "400px";
  mapa.style.length = "300px";
}
