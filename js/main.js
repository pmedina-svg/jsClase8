const registroSesion = document.querySelector("#intro");
const astronauta = document.querySelector("#intro input");
const inicioSession = document.querySelector("#intro form");
const nombreSesion = document.querySelector(".datos-perfil span")

inicioSession.addEventListener("submit", function(event){
    event.preventDefault();
    const nombreAstronauta = astronauta.value;
    localStorage.setItem('Astronauta', nombreAstronauta);
    const nombreRegistrado = localStorage.getItem('Astronauta');
    nombreSesion.innerHTML = nombreRegistrado;
    registroSesion.style.display = "none";
});

const nombreGuardado = localStorage.getItem("Astronauta");

if (nombreGuardado){
    nombreSesion.innerHTML = nombreGuardado;
    registroSesion.style.display = "none";
}

const verSesion = document.querySelector("#perfil");

verSesion.addEventListener("click", function(){
    const totalKm = misionesLanzadas.reduce((total, mision) => total + mision.distancia, 0);
    const totalTiempo = misionesLanzadas.reduce((total, mision) => total + mision.distancia/ mision.velocidad, 0);
    const modalSesion = document.querySelector(".modalSesion");
    modalSesion.innerHTML = `<div class="modal">
                            <button>X</button>
                            <img src="./assets/avatar.webp" alt="imagen astronauta">
                            <div class="datos-perfil">
                            <h2>Astronauta: <span>${localStorage.getItem("Astronauta")}</span></h2>
                            <ul>
                                <li>Total Misiones: ${misionesLanzadas.length > 0 ? misionesLanzadas.length : 0}</li>
                                <li>Kilometros recorridos: ${totalKm > 0 ? totalKm : 0} km</li>
                                <li>Tiempo de viaje: ${totalTiempo > 0 ? convertirDuracion(totalTiempo) : 0}</li>
                            </ul>
                            <a><p>cerrar sesion</p></a>
                            </div>
                            </div>`;
    modalSesion.style.display = "flex";

    const cerrarModal = modalSesion.querySelector("button");
    cerrarModal.addEventListener("click", function(){
        modalSesion.style.display = "none";
    });

    const cerrarSesion = modalSesion.querySelector("a");

    cerrarSesion.addEventListener("click", function(){
        localStorage.clear();
        location.reload();
    });
    
});



const viajesEspaciales = [
    { destino: "Luna", url: "./assets/luna.webp", distancia: 384400, velocidad: 40000, categoria: "Satelite", mensaje: "No saltes tanto, porque en la Luna pesas 6 veces menos que en la Tierra." },
    { destino: "Marte", url: "./assets/marte.webp", distancia: 225000000, velocidad: 60000, categoria: "Planeta", mensaje: "¿Sabías que en Marte un día dura casi lo mismo que en la Tierra? Exactamente 24 horas y 39 minutos." },
    { destino: "Venus", url: "./assets/venus.webp", distancia: 41000000, velocidad: 40000, categoria: "Planeta", mensaje: "Bienvenido a Venus, ponte bloqueador porque es el planeta más caliente del Sistema Solar." },
    { destino: "Jupiter", url: "./assets/jupiter.webp", distancia: 628000000, velocidad: 50000, categoria: "Planeta", mensaje: "Júpiter es tan grande que cabrían más de mil Tierras dentro de él." },
    { destino: "Saturno", url: "./assets/saturno.webp", distancia: 1280000000, velocidad: 80000, categoria: "Planeta", mensaje: "Saturno es famoso por sus impresionantes anillos formados principalmente por hielo y roca." },
    { destino: "Europa", url: "./assets/europa.webp", distancia: 628000000, velocidad: 80000, categoria: "Satelite", mensaje: "Europa es una de las lunas de Júpiter y los científicos creen que podría tener un océano bajo su superficie, llevaste caña de pescar?" },
    { destino: "Titan", url: "./assets/titan.webp", distancia: 1280000000, velocidad: 80000, categoria: "Satelite", mensaje: "Titán tiene una atmósfera muy densa y lagos de metano líquido en su superficie, no te tires al agua."},
    { destino: "Pluton", url: "./assets/pluton.webp", distancia: 5900000000, velocidad: 100000, categoria: "Planeta Enano", mensaje: "Plutón fue considerado un planeta hasta 2006, cuando pasó a ser clasificado como planeta enano o como Satélite, ya no recuerdo bien." },
    { destino: "Sol", url: "./assets/sol.webp", distancia: 149600000, velocidad: 120000, categoria: "Estrella", mensaje: "¡Cuidado! no debiste ir a allí, te confiaste demasiado" },
    { destino: "Ganimedes", url: "./assets/ganimedes.webp", distancia: 628000000, velocidad: 80000, categoria: "Satelite", mensaje: "¿Sabías que Ganimedes es la luna más grande del Sistema Solar? Incluso es más grande que Mercurio." },
    { destino: "Ceres", url: "./assets/ceres.webp", distancia: 414000000, velocidad: 50000, categoria: "Planeta Enano", mensaje: "Cuidado con aterrizar! Ceres tiene una montaña de unos 4.000 metros de altura y está cubierto de cráteres." },
    { destino: "Eris", url: "./assets/eris.webp", distancia: 10100000000, velocidad: 100000, categoria: "Planeta Enano", mensaje: "Eris está tan lejos del Sol que su temperatura puede bajar hasta unos -230 °C. Espero que hayas llevado un buen abrigo." },
];

// const misionesLanzadas = [];
let misionesLanzadas = JSON.parse(localStorage.getItem("misiones")) || [];


// // funcion para convertir el calculo de horas a años - dias - horas
function convertirDuracion(horasTotales){
    const horasAnio = 365 * 24;
    const anios = parseInt(horasTotales / horasAnio);
    const horasRestantes = horasTotales % horasAnio;
    const dias = parseInt(horasRestantes / 24);
    const horas = parseInt(horasRestantes % 24);
    
    return anios + " años, " + dias + " días y " + horas + " horas";
}

const contenedorCategorias = document.querySelector("#listaCategorias");
const contenedorDestinos = document.querySelector("#listaDestinos");
const configuracion = document.querySelector(".configuracionDestino");
const controles = document.querySelector(".controlVelocidad");
const contadorMisiones = document.querySelector("tbody");
const modalMision = document.querySelector(".modalMision");


// en function mostrarMision presenté muchas dificultades: 1. al eliminar o me eliminaba el último desde cualquier button, o dejaban de funcionar los botones en todos los TR menos en el último. solución: crear id, pero, eso no fue suficiente, ya que para que al eliminar no borrara el ultimo tuve que no incluir en tr.mision-id dentro del innerHTML sino que por separado. 2. repetición de IDS: una vez logrado el eliminar por id ocurrio lo siguiente, teniendo id=1, 2, 3, 4, eliminaba ids 2 y 4, refrescaba, volvia a lanzar misiones y se me repetian id 3 (que ya existia porque no habia eliminado anteriormente). Solución: tras varios intentos investigué y encontré Date.now() que genera id unicos con fecha y hora (milisegundos).

function mostrarMision(nuevaMision){
    const {id, destino, velocidad, distancia, duracion} = nuevaMision;
    
    const historialMisiones = document.createElement("tr");
    historialMisiones.className = `mision-${id}`;
    historialMisiones.innerHTML = `<td>${destino}</td>
                                   <td>${velocidad}</td>
                                   <td>${distancia}</td>
                                   <td>${duracion}</td>
                                   <td><button class="btn-eliminar"><img src="./assets/trash-can.png"></button></td>`;
    
    contadorMisiones.appendChild(historialMisiones);
    
    const botonEliminar = historialMisiones.querySelector(".btn-eliminar");
    
    botonEliminar.addEventListener("click", function(){
        misionesLanzadas = misionesLanzadas.filter(mision => mision.id !== id);
        localStorage.setItem("misiones", JSON.stringify(misionesLanzadas));
        
        historialMisiones.remove(); 
    });
}

misionesLanzadas.forEach(nuevaMision => {
    mostrarMision(nuevaMision);
});

contenedorCategorias.innerHTML= `<button class="activo">Planeta</button>
                                <button>Planeta Enano</button>
                                <button>Satelite</button>
                                <button>Estrella</button>`;

const botonesCategorias = contenedorCategorias.querySelectorAll("button");

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", function(){

        botonesCategorias.forEach(boton => boton.classList.remove("activo"));
        boton.classList.add("activo");
        

        const categoriaSeleccionada = boton.textContent.toLowerCase();
        const destinosFiltrados = viajesEspaciales.filter(viaje => viaje.categoria.toLowerCase() === categoriaSeleccionada);

        mostrarDestinos(destinosFiltrados);
    });
});


function mostrarDestinos(destinos){
    contenedorDestinos.innerHTML = "";

    destinos.forEach(viaje => {
        let contenedor = document.createElement("div");
        contenedor.className = "card";
        contenedor.innerHTML += `<img src="${viaje.url}" alt="${viaje.destino}">
        <h3>${viaje.destino}</h3>
        <p>${viaje.categoria}</p>
        <p><span>${viaje.distancia} km</span></p>
        <button>Seleccionar</button>
        `;

        let boton = contenedor.querySelector("button");

        boton.addEventListener("click", function(){

            const duracionConvertido = convertirDuracion(viaje.distancia / viaje.velocidad);

            configuracion.innerHTML = `<h4>Destino Seleccionado: ${viaje.destino}</h4>
            <div class="info-destino">
                <div class="col-destino">
                <img src="${viaje.url}" alt="${viaje.destino}">
                </div>
                <div class="col-destino">
                    <h3>${viaje.destino}</h3>
                    <p>${viaje.categoria}</p>
                    <p>Distancia desde la tierra: ${viaje.distancia} km</p>
                    <p>Velocidad actual: <span class="velocidad">${viaje.velocidad}</span> km/h</p>
                    <p>Duración del viaje: <span class="duracion">${duracionConvertido}</span></p>
                </div>
            </div>`;

            controles.innerHTML = `<p>Velocidad de la nave (km/h)</p>
                                    <input type="number" value="${viaje.velocidad}">
                                    <div class="opcionesBotones">
                                    <button>🚀 Lanzar misión</button>
                                    </div>`

            const inputVelocidad = controles.querySelector("input");
            const botonLanzar = controles.querySelector("button");

            botonLanzar.addEventListener("click", function(){               

                const nuevaMision = {
                    id: Date.now(),
                    destino: viaje.destino,
                    velocidad: viaje.velocidad,
                    distancia: viaje.distancia,
                    duracion: convertirDuracion (viaje.distancia / viaje.velocidad)
                }

                misionesLanzadas.push(nuevaMision);
                localStorage.setItem("misiones", JSON.stringify(misionesLanzadas));

                mostrarMision(nuevaMision);


                modalMision.innerHTML = `<div class="modal">
                            <img src="./assets/lanzamiento.gif" alt="lanzamiento ${nuevaMision.destino}" >
                            <h3>misión lanzada con éxito</h3>
                            <ul>
                                <li>Destino: ${nuevaMision.destino}</li>
                                <li>Velocidad: ${nuevaMision.velocidad} </li>
                                <li>Tiempo de viaje: ${nuevaMision.duracion}</li>
                            </ul>
                            <p><strong>Torre de control dice:</strong> "${viaje.mensaje}"</p>
                            <button>Volver al centro de control</button>
                        </div>`;
                modalMision.style.display = "flex";

                const btnVolver = modalMision.querySelector("button");

                btnVolver.addEventListener("click", function(){
                    modalMision.style.display = "none";
                });

            });

            inputVelocidad.addEventListener("keyup", function(){

                viaje.velocidad = parseInt(inputVelocidad.value);

                const duracion = configuracion.querySelector(".duracion");
                const velocidad = configuracion.querySelector(".velocidad");

                duracion.textContent = convertirDuracion(viaje.distancia / viaje.velocidad);
                velocidad.textContent = viaje.velocidad;
            });
            

        });

        contenedorDestinos.appendChild(contenedor);
    });
}

mostrarDestinos(viajesEspaciales.filter(viaje => viaje.categoria === "Planeta"));