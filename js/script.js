
const formContacto = document.querySelector(".contact-form");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");
const mensajeForm = document.getElementById("form-mensaje");
const btnModo = document.getElementById("btn-modo");
const tarjetasProyecto = document.querySelectorAll(".project-card");


// =========================================
// CONTADOR DE VISITAS (localStorage)
// =========================================
function actualizarContadorVisitas() {
  let visitas = localStorage.getItem("contadorVisitas");

  if (visitas === null) {
    visitas = 0;
  } else {
    visitas = parseInt(visitas);
  }

  visitas = visitas + 1;
  localStorage.setItem("contadorVisitas", visitas);

  return visitas;
}




// =========================================
// submit en el formulario de contacto
// Valida y muestra mensaje de confirmación o error
// =========================================
formContacto.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita que la página se recargue

  const resultado = validarFormulario(
    inputNombre.value,
    inputEmail.value,
    inputMensaje.value
  );

  // Manipulación del DOM: cambiar texto y clase del mensaje
  mensajeForm.textContent = resultado.texto;

  if (resultado.valido) {
    mensajeForm.classList.add("exito");
    mensajeForm.classList.remove("error");

    // Guardamos el nombre del visitante en localStorage
    localStorage.setItem("nombreVisitante", inputNombre.value.trim());

    formContacto.reset();
  } else {
    mensajeForm.classList.add("error");
    mensajeForm.classList.remove("exito");
  }
});


function validarFormulario(nombre, email, mensaje) {
  if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
    return { valido: false, texto: "Por favor completa todos los campos antes de enviar." };
  } else {
    return { valido: true, texto: "¡Gracias por tu mensaje, " + nombre + "! Te responderé pronto." };
  }
}


// =========================================
// DOM
// =========================================
function aplicarModoClaro(activar) {
  if (activar) {
    document.body.classList.add("modo-claro");
    btnModo.textContent = "☀️ Modo";
  } else {
    document.body.classList.remove("modo-claro");
    btnModo.textContent = "🌙 Modo";
  }
}


btnModo.addEventListener("click", function () {
  const modoActivo = document.body.classList.contains("modo-claro");
  const nuevoModo = !modoActivo;

  aplicarModoClaro(nuevoModo);

  // Persistencia de datos con localStorage
  localStorage.setItem("modoClaro", nuevoModo ? "si" : "no");
});


// =========================================
//     aplicarModoClaro
// =========================================
document.addEventListener("DOMContentLoaded", function () {
  // Recuperar preferencia de modo claro/oscuro
  const modoGuardado = localStorage.getItem("modoClaro");

  if (modoGuardado === "si") {
    aplicarModoClaro(true);
  } else {
    aplicarModoClaro(false);
  }
    
 // Recuperar el nombre del visitante y saludarlo
  const nombreGuardado = localStorage.getItem("nombreVisitante");

  if (nombreGuardado) {
    const heroDesc = document.querySelector(".hero-visitante");
    if (heroDesc) {
      heroDesc.textContent = "¡Qué bueno verte de nuevo, " + nombreGuardado + "!";
    }
  }
 
    console.log("Huellita1");
    
    // Actualizar y mostrar el contador de visitas
  const totalVisitas = actualizarContadorVisitas();
  const contadorElemento = document.getElementById("contador-visitas");
  if (contadorElemento) {
    contadorElemento.textContent = "Visitas a esta página: " + totalVisitas;
  }
     console.log("Huellita2");
    
  
});

// =========================================
// Mouseover / mouseout en las tarjetas de proyecto
// 
// =========================================
tarjetasProyecto.forEach(function (tarjeta) {
  tarjeta.addEventListener("mouseover", function () {
    tarjeta.classList.add("resaltado");
  });

  tarjeta.addEventListener("mouseout", function () {
    tarjeta.classList.remove("resaltado");
  });
});






