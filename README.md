# Documento informativo provisional de Orión
La aplicación de Orión no había recibido actualizaciones desde hace un tiempo (3 años aproximadamente), por esa razón se decidió hacer una "actualización" de la misma creandola desde cero con las tecnologías, librerías y metodologías actuales.

A continuación se relacionan las librerías que continúan y que NO continúan con base al archivo "package.json", así como las alternativas:

✔️ La librería continúa porque se le ha seguido dando soporte o su última actualización tiene un tiempo < 12 meses
❌ La libreía NO continúa porque está deprecada o su última actualización tiene un tiempo > 12 meses

### DEPENDENCIAS USANDAS ACTUALMENTE

- lodash ❌ 🔄Usando Typescript
- native-base ❌ 🔄Cambiar. La documentación sugiere usar ✔️gluestack-ui
- prop-types ❌ 🔄Nativo de Typescript
- react-moment ✔️
- react-native-charts-wrapper ❌ 🔄Cambiar por chart.js
- react-native-display ❌
- react-native-floating-action ❌ 🔄Cambiar por react-native-reanimated
- react-native-gesture-handler ✔️
- react-native-image-picker ✔️
- react-native-indicators ❌ 🔄Cambiar por react-native-loader-kit
- react-native-modal-datetime-picker ✔️
- react-native-modalbox ❌ 🔄Cambiar por @whitespectre/rn-modal-presenter
- react-native-orientation-locker ❓
- react-native-pure-jwt ✔️
- react-native-reanimated ✔️
- react-native-safe-area-view ❌Deprecado 🔄Cambiar por react-native-safe-area-context
- react-native-slider ❌ 🔄Cambiar por @react-native-community/slider
- react-native-swipeout ❌ 🔄Cambiar por rn-swipe-action-button
- react-native-vector-icons ✔️
- react-native-walkthrough-tooltip ✔️
- react-native-webview ✔️
- react-navigation ❌Deprecado 🔄Cambiar por @react-navigation/native
- react-navigation-drawer ❌Deprecado 🔄Cambiar por @react-navigation/drawer
- react-navigation-stack ❌Deprecado 🔄Cambiar por @react-navigation/stack
- react-redux ✔️
- redux ✔️
- redux-persist ❌ 🔄Cambiar por una base de datos local
- redux-thunk ✔️
- rn-fetch-blob ❌ 🔄Cambiar por react-native-blob-util ó react-native-fs

### DEPENDENCIAS NUEVAS
react-native-alert-notification 🆕Nueva dependecia para mostrar alertas.
@react-native/material-top-tabs Y react-native-tab-view 🆕Nuevas dependecias para la navegación basada en pestañas.

## ASPECTOS QUE SUFRIERON CAMBIOS

### **Routing**
**V1.0.2**: En versiones anteriores del proyecto, la navegación y las rutas se resolvían desde un solo archivo donde convergían todos los tipos de navegación (basada en botones dentro de cada vista, basada en pestañas y basada en botones desde una sidebar).

**V2.0.0**: En esta versión se separarán los tipos de navegación por componente e importandolos en el componente `NavigationContainer` en el documento `NavigationStack`, esto con el objetivo de hacerlo más claro y segmentado.