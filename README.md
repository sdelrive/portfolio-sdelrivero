# Portfolio — Santiago del Rivero

Sitio personal bilingüe (español / inglés) hecho con React 19, TypeScript y Vite.

## Cómo levantarlo

Requiere Node 20 o superior.

```bash
npm install
npm run dev
```

El sitio queda en http://localhost:5173.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Chequea los tipos y genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de `dist/` |
| `npm run lint` | Corre ESLint |

## Estructura

- `src/i18n/translations.ts`: todos los textos del sitio, en español e inglés.
- `src/constants.ts`: datos de contacto.
- `src/components/`: secciones y componentes de la página.
- `public/`: imágenes.
