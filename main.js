// Validação e feedback do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const feedback = document.getElementById("feedback");

  if (!nome || !email || !mensagem) {
    feedback.innerText = "Preencha todos os campos!";
    feedback.style.color = "red";
    return;
  }

  feedback.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
  feedback.style.color = "green";
  this.reset();
});

// Mostrar / ocultar detalhes
document.querySelectorAll(".ver-mais").forEach(btn => {
  btn.addEventListener("click", function() {
    const detalhes = this.previousElementSibling;
    detalhes.classList.toggle("d-none");
  });
});

// Botão voltar ao topo
const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {
  topo.style.display = window.scrollY > 300 ? "block" : "none";
});

topo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
