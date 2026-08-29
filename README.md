# Portafolio CR

**Estudiante:** Clara Rodríguez Rodríguez

## Descripción

Portafolio web personal desarrollado con HTML y CSS, como parte de la actividad
"Desarrollo de un portafolio personal utilizando HTML, CSS y GitHub". El sitio
resume las actividades que me gusta hacer y sirve como práctica de la
estructura de páginas web con HTML, incluyendo secciones sobre mí, mis
habilidades, proyectos y una forma de contacto.

## Tecnologías utilizadas

- HTML5 (etiquetas semánticas: header, nav, main, section, article, footer)
- CSS3 (Flexbox, variables CSS, pseudoclase :hover)
- Git y GitHub para control de versiones

## Estructura del proyecto


portafolioCR/
├── index.html
├── css/
│ └── styles.css
├── images/
│ ├── hamburguesa.jpg
│ ├── running.jpg
│ └── Yisus.jpg
│ └── avatar.jpg
├── js/
│ └── script.js
└── README.md

## Funcionalidades de JavaScript (Actividad Integradora 2)

En esta segunda entrega se incorporó interactividad al portafolio mediante un
archivo externo `script.js`, enlazado a `index.html`. Las funcionalidades
implementadas son:

- **Modo claro / oscuro:** un botón en el header permite alternar el tema del
  sitio. La preferencia se guarda en `localStorage` y se mantiene al recargar
  o volver a abrir la página.
- **Validación del formulario de contacto:** al enviar el formulario, se
  valida que los campos Nombre, Correo electrónico y Mensaje no estén vacíos.
  Si falta algún dato se muestra un mensaje de error; si todo es correcto, se
  muestra un mensaje de confirmación personalizado con el nombre ingresado.
- **Saludo personalizado:** el nombre ingresado en el formulario se guarda en
  `localStorage` y, en visitas posteriores, se muestra un saludo
  personalizado ("¡Qué bueno verte de nuevo, [nombre]!") en la sección de
  inicio.
- **Contador de visitas:** cada vez que se carga la página se incrementa un
  contador guardado en `localStorage`, visible en el pie de página.
- **Efecto hover en proyectos:** al pasar el mouse sobre las tarjetas de
  proyectos se agrega una clase CSS que resalta la tarjeta (mouseover /
  mouseout).

### Persistencia con localStorage

El proyecto utiliza `localStorage` para guardar y recuperar tres datos:
la preferencia de modo claro/oscuro (`modoClaro`), el nombre del último
visitante (`nombreVisitante`) y el número de visitas (`contadorVisitas`).
Estos valores se leen al cargar la página y generan cambios visibles en la
interfaz (tema aplicado, saludo personalizado y contador actualizado).



## Cómo visualizar el proyecto

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador (doble clic, o clic derecho →
   "Abrir con" → tu navegador).
3. También puedes verlo publicado en GitHub Pages en el siguiente enlace:
   https://github.com/crodriguezecotec/portafolioCR/`

## Autor

Clara Rodríguez Rodríguez — [github.com/crodriguezecotec](https://github.com/crodriguezecotec)


