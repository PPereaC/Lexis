# Instrucciones para usar tu PWA en Android

## ✅ Configuración completada

Tu aplicación React ahora es una **Progressive Web App (PWA)** que se puede instalar en Android.

## 📱 Cómo instalar en Android

### Opción 1: Desplegar en producción (Recomendado)

1. **Despliega tu app** (ya tienes configurado GitHub Pages):
   ```bash
   npm run deploy
   ```

2. **Abre la URL en Chrome/Edge en tu Android**:
   - Visita: `https://tu-usuario.github.io/Agon/`

3. **Instala la app**:
   - Chrome mostrará un banner "Agregar a pantalla de inicio"
   - O toca el menú (⋮) → "Agregar a pantalla de inicio"
   - O toca el menú (⋮) → "Instalar aplicación"

### Opción 2: Probar localmente

1. **Inicia el servidor de preview**:
   ```bash
   npm run preview
   ```

2. **Conecta tu Android por USB** y habilita depuración USB

3. **Usa Chrome Remote Debugging**:
   - En Chrome desktop: `chrome://inspect`
   - Selecciona tu dispositivo
   - Abre `localhost:4173` en el navegador del móvil
   - Instala desde ahí

### Opción 3: Usar ngrok para probar sin USB

1. **Instala ngrok** (si no lo tienes):
   ```bash
   # Descarga desde https://ngrok.com/download
   ```

2. **Inicia el servidor**:
   ```bash
   npm run preview
   ```

3. **En otra terminal, crea un túnel**:
   ```bash
   ngrok http 4173
   ```

4. **Abre la URL de ngrok en tu Android** y sigue los pasos de instalación

## 🎨 Personalizar iconos (Opcional pero recomendado)

Actualmente usa el logo de Vite. Para usar tu propio logo:

1. Crea un icono cuadrado (PNG, 512x512px mínimo)

2. Genera los tamaños necesarios en: https://www.pwabuilder.com/imageGenerator

3. Descarga y coloca en `public/`:
   - `pwa-192x192.png`
   - `pwa-512x512.png`

4. Actualiza `vite.config.js` líneas 26-43 para usar `.png` en lugar de `.svg`

5. Recompila:
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Características de tu PWA

- ✅ Funciona offline (caché automático)
- ✅ Se instala como app nativa
- ✅ Icono en pantalla de inicio
- ✅ Pantalla completa (sin barra del navegador)
- ✅ Actualizaciones automáticas

## 📝 Archivos generados

- `dist/manifest.webmanifest` - Configuración de la PWA
- `dist/sw.js` - Service Worker para caché offline
- `dist/registerSW.js` - Registro del Service Worker

## 🚀 Comandos útiles

```bash
# Desarrollo
npm run dev

# Compilar PWA
npm run build

# Probar PWA localmente
npm run preview

# Desplegar a GitHub Pages
npm run deploy
```

## ⚠️ Notas importantes

- Las PWA solo funcionan con **HTTPS** (o localhost para desarrollo)
- GitHub Pages usa HTTPS automáticamente
- En Android, Chrome y Edge tienen mejor soporte para PWA
- La instalación solo aparece si la app cumple los criterios PWA (manifest + service worker + HTTPS)
