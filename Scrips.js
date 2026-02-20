// 1) getElementById -> `h1#titulo`
const titulo = document.getElementById('titulo');
titulo.addEventListener('click', () => titulo.classList.toggle('resaltado'));

// 2) querySelector -> primer `.cambio` (aquí el `p`)
const primerCambio = document.querySelector('.cambio');
primerCambio.addEventListener('click', () => primerCambio.textContent = 'Párrafo cambiado');

// 3) querySelectorAll -> todos los `.cambio` (p y div)
const todosCambio = document.querySelectorAll('.cambio');
todosCambio.forEach(el => el.style.backgroundColor = '#f0f8ff');

// 4) getElementsByClassName -> elementos con class `item` (button, input)
const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  const tag = items[i].tagName;
  if (tag === 'INPUT' || tag === 'BUTTON') continue;
  items[i].addEventListener('click', () => {
    const val = items[i].value !== undefined ? items[i].value : items[i].textContent;
    alert('Item clic: ' + val);
  });
}

// 5) botón -> usar getElementById para mayor fiabilidad
const boton = document.getElementById('boton');
if (boton) {
  boton.addEventListener('click', () => {
    const cajaEl = document.getElementById('caja');
    if (cajaEl) cajaEl.classList.toggle('oculto');
  });
}

// 6) getElementById -> input text (mostrar en pantalla dentro de #caja)
const entrada = document.getElementById('entrada');
const caja = document.getElementById('caja');
entrada.addEventListener('input', () => {
  if (caja) caja.textContent = entrada.value;
});

// 7) getElementsByTagName -> imagen (usar tag name para demostrar otra forma)
const imgs = document.getElementsByTagName('img');
const imagenes = ['mopkid.jpeg', 'swampert.jpeg', 'mega swampert.png', 'marshomp.png'];
let indice = 0;
if (imgs.length > 0) {
  imgs[0].style.cursor = 'pointer';
  imgs[0].addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;
    imgs[0].src = imagenes[indice];
  });
}

// 8) getElementById -> enlace (prevenir comportamiento)
const enlace = document.getElementById('enlace');
enlace.addEventListener('click', e => { e.preventDefault(); alert('Enlace bloqueado'); });

// adicional: select usando querySelector y mostrar selección
const selector = document.querySelector('#selector');
selector.addEventListener('change', () => primerCambio.textContent = 'Seleccionaste: ' + selector.value);
