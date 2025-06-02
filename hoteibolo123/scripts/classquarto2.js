class Quarto {
    constructor(numero, tipo, diaria, disponibilidade) {
        this.numero = numero;
        this.tipo = tipo;
        this.diaria = diaria;
        this.disponibilidade = disponibilidade;
    }
}
    
    document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('novohospedeform'); 
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = document.getElementById('numero').value;
    const tipo = document.getElementById('tipo').value;
    const diaria = document.getElementById('diaria').value;
    const disponibilidade = document.getElementById('disponibilidade').value;

    const novoquarto = new Quarto(numero, tipo, diaria, disponibilidade);

    const quartos = JSON.parse(localStorage.getItem('quartos')) || [];

    quartos.push(novoquarto);

    // Salva no LocalStorage com a chave 'hospedes'
    localStorage.setItem('quartos', JSON.stringify(quartos));

    alert('quarto cadastrado com sucesso!');
    form.reset();
  });
});


