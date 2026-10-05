
//Simludaor Teenage Babe

//Datos de ingresos habilitados
const ingresosFree = [
    { id: 101, password: 101000},
    { id: 102, password: 101001},
    { id: 103, password: 101002},
    { id: 104, password: 101003},
]

//Menu
const teenageBabe = [ 
    { item: 'Inicio', subitem: [' Lista', ' Calendario']}, 
    { item: 'Notificaciones', subitem:[' Ingresos', ' Egresos', ' Sin Registro']},  
    { item: 'Contactos', subitem: [' Empresa', ' Referentes', ' Coordinadores']},
    { item: 'Manual', subitem: [' Preguntas Frecuentes']}
];


//Agregue un mensaje de bienvenida
const mainIncio = document.querySelector('main');
const mensajeInicio = document.querySelector('p');
mensajeInicio.textContent = "Bienvenidos!!! Para ingresar coloque su ID y su Contraseña."
mainIncio.prepend(mensajeInicio);

//menu desplegable
const boxIngreso = document.querySelector("#box-seccion");
function processMenu(opciones) {
    boxIngreso.innerHTML = "";
    opciones.forEach((opciones) => {
    const subitemsHTML = opciones.subitem
    .map((sub) => `<li><a href="#">${sub.trim()}</a></li>`)
    .join("");

    const bloqueMenu = `
    <details class="menu-item">
    <summary>${opciones.item}</summary>
    <ul class="submenu">
    ${subitemsHTML}
    </ul>
    </details>
    `;
    boxIngreso.innerHTML += bloqueMenu;
});
}


//Aqui trabajo mi acceso con los datos necesarios para cada id y password
const inputID = document.getElementById('ID');
const inputPassword = document.getElementById('password');
const ingreso = document.getElementById('boton');
//buscador 
const cajaBuscador = document.getElementById("container-buscador")
const itemBusqueda = document.getElementById("buscador-Item");

ingreso.addEventListener('click', function acceso(ciclo){

    ciclo.preventDefault();

    processMenu(teenageBabe);

const ingresoId = Number(inputID.value); 
const ingresoPassword = Number(inputPassword.value);

const usuariosHabilitados = ingresosFree.find((user) => user.id === ingresoId)

                if (usuariosHabilitados && usuariosHabilitados.password === ingresoPassword){

                    const mainMensaje = document.querySelector('main');
                    mainMensaje.innerHTML = ""; 
                    //indicaciones del buscador
                    cajaBuscador.style.display = "flex"; 

        itemBusqueda.addEventListener("input", () => {
        const texto = itemBusqueda.value.toLowerCase().trim();
        const filtro = teenageBabe.filter((lista) =>{
        const searchItem = lista.item.toLowerCase().includes(texto);
        const searchSubitem = lista.subitem.some((sub) =>
        sub.toLowerCase().includes(texto)
        );
        return searchItem || searchSubitem;
        });

        processMenu(filtro);
});
                        if (ingresoId === 101 && ingresoPassword === 101000){

                            const menuAna = teenageBabe.concat({ item:'Avanzados', subitem: ['Restricciones', 'Configuraciones']});
                            processMenu(menuAna);

                            const mensajePrivado = document.createElement('h4');
                            mensajePrivado.className = "para-Ana"; 
                            mensajePrivado.textContent = 'Bienvenida Ana. Tu ingreso contará con la sección Avanzadas y Restricciones para tu configuración personal.';
    
                            mainMensaje.appendChild(mensajePrivado);

                                }else if (ingresoId === 102 && ingresoPassword === 101001){

                                    const menuEmpresa = teenageBabe.concat({ item: 'Informes', subitem: ['Grupos', 'Novedades']});
                                    processMenu(menuEmpresa);

                                            const mainMensaje = document.querySelector('main');
                                            mainMensaje.className = "mensaje-general"; 
                                            mainMensaje.innerHTML = ' ¡Bienvenido a Teenage Babe! En tu menu principal tendás el item de Informes donde podras ver las actualizaciones de las novedades diarias.';

                                        } else if ( ingresoId === 103 || ingresoId === 104) {

                                            processMenu(teenageBabe);

                                            const mainMensaje = document.querySelector('main');
                                            mainMensaje.className = "mensaje-general";
                                            mainMensaje.innerHTML = '¡Bienvenido a Teenage Babe!';

                                            } else{

                                            const mainAviso= document.querySelector('main');
                                            mainAviso.className = "mensaje-general";
                                            mainAviso.innerHTML = "Ingreso denegado. Ingrese nuevamente más tarde.";
                                            } 
                                            
                                        } else {
                                            boxIngreso.innerHTML = "ACCESO DENEGADO: Los datos ingresados son incorrectos.";
}
});

//Datos de la Lista

const peopleList = localStorage.getItem("Datos Lista");

if(!peopleList){

const listPeople = [
    { numero: 501, nombre: 'Isabel M.', telefono: '+5492546554522554'},
    { numero: 505, nombre: 'Gaston H', telefono: '+5492546554522555'},
    { numero: 210, nombre: 'Martin A', telefono: '+5492546554522556'},
    { numero: 898, nombre: 'Lucas S.', telefono: '+5492546554522557'},
    { numero: 323, nombre: 'Marina Z.', telefono: '+5492546554522558'}
];

localStorage.setItem("Datos Lista", JSON.stringify(listPeople));
}
const tabla1 = document.getElementById("lista-general");

function tablaActual() {
    tabla1.innerHTML = "";
    
const datosPeople = localStorage.getItem("Datos Lista");
    if (!datosPeople) return;
    const listaPeople = JSON.parse(datosPeople);

    listaPeople.forEach((persona, index) => {
    const bloquePeople = `
        <tr class="menu-item">
        <th>${persona.numero}</th>
        <th>${persona.nombre}</th>
        <td class="datos">
        <a href="#">${persona.telefono.trim()}</a>
        </td>
        <td>
        <button onclick="borrarPeople(${index})">X</button>
        </td>
        </tr>
    `;
    tabla1.innerHTML += bloquePeople;
    });
}

    document.addEventListener("click", (e) => {
    if (e.target.textContent === "Lista") {
    
    e.preventDefault(); 
    
    const seccionTabla = document.getElementById("container-tabla");
    const nuevoIngreso = document.querySelector(".formPeople")
    if (seccionTabla) {
        if (seccionTabla.style.display === "block"){
        seccionTabla.style.display = "none";

        if(nuevoIngreso) nuevoIngreso.style.display = "none";

        localStorage.setItem("verTabla", "no");

    }else{
        seccionTabla.style.display = "block";
        tablaActual();

        if(nuevoIngreso) nuevoIngreso.style.display = "block";
}
}
}
});

localStorage.setItem("verTabla", "no");

//funcion para borrar
function borrarPeople(fila) {
    const listaActual = JSON.parse(localStorage.getItem("Datos Lista"));

        listaActual.splice(fila, 1);

        localStorage.setItem("Datos Lista", JSON.stringify(listaActual));

    tablaActual();
}

//form para agregar nuevos datos 
function añadirPeople() {
    const newPeople = {
    numero: document.getElementById("nuevoNumero").value.trim(),
    nombre: document.getElementById("nuevoNombre").value.trim(),
    telefono: document.getElementById("nuevoTelefono").value.trim()
    };

    const { numero, nombre, telefono } = newPeople;

    if (!numero || !nombre || !telefono) {
    alert("Por favor, completa todos los campos");
    return;
    }

const listaActual = JSON.parse(localStorage.getItem("Datos Lista")) || [];
listaActual.push(newPeople);

localStorage.setItem("Datos Lista", JSON.stringify(listaActual));

alert(`¡Se agregó ${numero}, ${nombre} y ${telefono}!`);

tablaActual();

document.getElementById("nuevoNumero").value = "";
document.getElementById("nuevoNombre").value = "";
document.getElementById("nuevoTelefono").value = "";
};

window.añadirPeople = añadirPeople;




