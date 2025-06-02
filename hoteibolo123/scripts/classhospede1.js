
class Hospede {
  constructor(nome, cpf, email, telefone) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('novohospedeform'); 

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const novoHospede = new Hospede(nome, cpf, email, telefone);

    const hospedes = JSON.parse(localStorage.getItem('hospedes')) || [];

    hospedes.push(novoHospede);

    localStorage.setItem('hospedes', JSON.stringify(hospedes));

    alert('Hóspede cadastrado com sucesso!');
    form.reset();
  });
});
