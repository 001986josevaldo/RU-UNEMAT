const servicos = document.querySelectorAll('.servico');
let atual = 0;

function mostrarProximo() {
  servicos[atual].classList.remove('ativo');
  atual = (atual + 1) % servicos.length;
  servicos[atual].classList.add('ativo');
  servicos.forEach((s, index) => {
    s.style.transform = `translateX(-${atual * 100}%)`;
  });
}

setInterval(mostrarProximo, 3000);
