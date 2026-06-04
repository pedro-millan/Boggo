# Boggo Fresh Bagel — Web Estática

> Sitio web para **Boggo Fresh Bagel**, restaurante físico especializado en bagels de inspiración retro diner americano. Desarrollado en HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias externas.

---

## Páginas

| Archivo | Descripción |
|---|---|
| `index.html` | Home — hero, carta destacada, manifiesto, club y smoothies |
| `carta.html` | Carta completa organizada por categorías con tabs |
| `reserva.html` | Formulario de reserva de mesa |
| `club.html` | Club Boggo — simulador de puntos y merchandising |
| `faq.html` | Preguntas frecuentes |
| `encuentranos.html` | Ubicación, horario y contacto |
| `privacidad.html` | Política de privacidad |

---

## Tecnologías

- **HTML5** semántico con atributos de accesibilidad (`aria-*`, roles)
- **CSS3** — diseño responsive, animaciones, `position: fixed`, grid y flexbox
- **JavaScript** vanilla — renderizado dinámico de carta, formulario de reserva con validación, navbar inteligente, lightbox de productos y animaciones reveal con IntersectionObserver

---

## Estructura

```
boggo_site/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── fonts/
│   │   ├── Comfortaa.woff2
│   │   └── RETRO-STAR-REGULAR.woff2
│   ├── img/
│   │   ├── brand/
│   │   ├── extras/
│   │   └── products/
│   ├── js/
│   │   ├── data.js        ← Datos de carta y merchandising
│   │   ├── main.js        ← Lógica principal
│   │   └── script.js      ← Patches y lightbox
│   └── video/
├── index.html
├── carta.html
├── reserva.html
├── club.html
├── faq.html
├── encuentranos.html
└── privacidad.html
```

---

## Uso local

Abre directamente en el navegador:

```bash
open index.html
```

O levanta un servidor local para evitar restricciones CORS:

```bash
python3 -m http.server 5500
```

Luego visita `http://localhost:5500`

---

## Notas

- El formulario de reserva es una simulación frontend; los datos se guardan en `localStorage`. Para producción requiere conexión a un backend real.
- La navbar se oculta al hacer scroll hacia abajo y reaparece al subir desde cualquier posición.
- Las fuentes `Comfortaa` y `RETRO-STAR-REGULAR` se sirven localmente desde `/assets/fonts/`.
