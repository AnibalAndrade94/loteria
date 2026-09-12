# Lotería de Table Topics

App de Angular para sacar cartas de lotería al azar durante la sesión de
Table Topics de Toastmasters. Cada carta muestra su imagen y la pregunta
que le corresponde.

## Requisitos

- Node **14.21.3** (ya está pineado en `.nvmrc` y en `engines` de
  `package.json` para que no choque con tus otros proyectos que usan
  versiones más viejas).
- Angular CLI **15.x** (compatible con Node 14; es la última versión de
  Angular que todavía soporta Node 14).

## Cómo correrla

```bash
# si usas nvm-windows, asegúrate de estar en la versión correcta:
nvm use 14.21.3

npm install
npm start
```

Luego abre http://localhost:4200

## Cómo agregar tus cartas reales

Todo el contenido de la baraja vive en un solo archivo:
`src/app/data/cards.data.ts`

Por cada carta hay un objeto con:

```ts
{ id: 1, name: 'El Sol', image: 'assets/cards/01-el-sol.jpg', question: '...' }
```

1. Copia la foto/escaneo de cada carta física a `src/assets/cards/`.
2. En `cards.data.ts`, actualiza `image` con el nombre real del archivo.
3. Actualiza `question` con la pregunta que escribiste en esa carta.
4. Puedes agregar, quitar o reordenar cartas libremente; la app se ajusta
   sola al número de cartas que haya en el arreglo.

Si todavía no tienes la imagen de una carta, no pasa nada: la app muestra
un placeholder con el nombre de la carta mientras tanto.

## Cómo funciona el sorteo

- Al dar clic en "Sacar carta" se elige una carta al azar **sin
  repetir** hasta que se agote el mazo completo.
- Cuando el mazo se agota, se reinicia automáticamente para una nueva
  ronda (evitando repetir la carta que acaba de salir).
- "Reiniciar mazo" regresa todo a cero en cualquier momento.
