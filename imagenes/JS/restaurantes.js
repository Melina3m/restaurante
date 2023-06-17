const Restaurantes = [
    {
        Img: "https:th
        Nombre: "Pacífico Mar",
        Direccion: "Av. 85 #45-85 B.quilla",
        Descripcion: "Deliciosa comida de mar",
    },
    {
        Img: "https://th.bing.com/th/id/OIP.Wz5eo_PMmywvDJOFU6xphgHaJC?pid=ImgDet&rs=1",
        Alt: "Error",
        Nombre: "Italiano 65",
        Direccion: "Av. 45 #1-85 Medellin",
        Descripcion: "Deliciosa comida italiana",
    },
    {
        Img: "https://th.bing.com/th/id/OIP.Am60nr8KyTdm6HzLJmAsTwHaD5?pid=ImgDet&rs=1",
        Alt: "Error",
        Nombre: "Fritos y más",
        Direccion: "Calle 45 Medellín",
        Descripcion: "Comida rápida",
    },
    {
        Img: "https://th.bing.com/th/id/OIP.54jviRopMcGACmSki_QQhAHaE8?pid=ImgDet&rs=1",
        Alt: "Error",
        Nombre: "Pollo Frito",
        Direccion: "Cra 32 #56-89",
        Descripcion: "Lo mejor del pollo frito",
    }
];

let card = document.getElementById("card-template");

Restaurantes.map((x) => {
    card.innerHTML += `
    <div class="col">
    <div class="card">
      <img src="${x.Img}" class="card-img-top" alt="${x.Alt}">
      <div class="card-body">
        <h5 class="card-title text-center">${x.Nombre}</h5>
        <p class="card-text text-center">${x.Direccion}</p>
        <p class="card-text text-center"><small class="text-muted">${x.Descripcion}</small></p>
        </div>
    </div>
  </div>
  `;
});