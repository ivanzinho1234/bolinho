class Reserva {
  constructor(hospedes, quartos, dataCheckIn, dataCheckOut) {
    this.hospedes = hospedes;
    this.quartos = quartos;
    this.dataCheckIn = dataCheckIn;
    this.dataCheckOut = dataCheckOut;
    this.reservas = [];
  }

  carregarDados() {
    try {
      const hospedesSalvos = localStorage.getItem('hospedes');
      this.hospedes = hospedesSalvos ? JSON.parse(hospedesSalvos) : [];

      const quartosSalvos = localStorage.getItem('quartos');
      this.quartos = quartosSalvos ? JSON.parse(quartosSalvos) : [];
    } catch (error) {
      console.error("Erro ao carregar dados do localStorage:", error);
      this.hospedes = [];
      this.quartos = [];
    }
  }

  adicionarReserva() {
    const reservasSalvas = localStorage.getItem('reservas');
    const listaDeReservas = reservasSalvas ? JSON.parse(reservasSalvas) : [];

    listaDeReservas.push({
      hospedes: this.hospedes,
      quartos: this.quartos,
      dataCheckIn: this.dataCheckIn,
      dataCheckOut: this.dataCheckOut
    });

    localStorage.setItem('reservas', JSON.stringify(listaDeReservas));
  }
}


const novaReserva = new Reserva(
  '2025-07-10',
  '2025-07-15'
);

novaReserva.carregarDados();

novaReserva.adicionarReserva();


function carregarExibirReservas() {
  const reservasSalvas = localStorage.getItem('reservas');
  if (reservasSalvas) {
    const listaDeReservas = JSON.parse(reservasSalvas);
    console.log("Reservas Salvas:", listaDeReservas);
  } else {
    console.log("Nenhuma reserva encontrada no localStorage.");
  }
}

