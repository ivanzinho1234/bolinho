class consultarReservas {
  constructor(nome) {
    this.nome = nome;
    this.hospedes = JSON.parse(localStorage.getItem('hospedes')) || [];
    this.quartos = JSON.parse(localStorage.getItem('quartos')) || [];
    this.reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  }


  consultarReservas() {
    const reservasSalvas = localStorage.getItem('reservas');
    return reservasSalvas ? JSON.parse(reservasSalvas) : [];
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const hotel = new Hotel("NomeDoSeuHotel");
  const listaDeReservas = hotel.consultarReservas();
  const elementoParaExibir = document.getElementById('listaDeReservas');
  if (elementoParaExibir) {
    if (listaDeReservas && listaDeReservas.length > 0) {
      let htmlReservas = '<ul>';
      listaDeReservas.forEach(reserva => {
        htmlReservas += `<li>
          Hóspedes: ${JSON.stringify(reserva.hospedes)},
          Quartos: ${JSON.stringify(reserva.quartos)},
          Check-in: ${reserva.dataCheckIn},
          Check-out: ${reserva.dataCheckOut}
        </li>`;
      });
      htmlReservas += '</ul>';
      elementoParaExibir.innerHTML = htmlReservas;
    } else {
      elementoParaExibir.innerHTML = '<p>Nenhuma reserva encontrada.</p>';
    }
  }
});
t