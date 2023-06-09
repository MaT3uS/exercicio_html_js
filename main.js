const numeroA = document.getElementById('numero_a');
const numeroB = document.getElementById('numero_b');
const form = document.getElementById('formValida');

function numeroBmaiorA() {
  if (numeroB.value > numeroA.value) {
    let menssagemSucesso = 'B está corretamente maior que A';
    return menssagemSucesso;
  } else {
    let menssagemErro = 'B está incorretamente maior ou igual que A';
    return menssagemErro;
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert(numeroBmaiorA());
});
