# Documentación provisional para la app de Orión ![Orion logo](./android/app/src/main/res/mipmap-mdpi/ic_launcher.png)

La aplicación de Orión no había recibido actualizaciones desde hace aproximadamente 3 años, razón por la cual se decidió "actualizar" la misma haciendola desde cero con las tecnologías, librerías y metodologías actuales.

## Dependencias ⏬

A continuación se relacionan las librerías que continúan y que NO continúan con base al archivo `package.json`, así como las alternativas:

- ✔️ La librería continúa porque se le ha seguido dando soporte o su última actualización tiene un tiempo < 12 meses.
- ❌ La librería NO continúa porque está deprecada o su última actualización tiene un tiempo > 12 meses.

### DEPENDENCIAS

| Dependencias actuales              | Alternativa o remplazo
| ---------------------              | ------------------- 
| lodash                             | Typescript          
| native-base                        | gluestack-ui        
| prop-types                         | Nativo de Typescript
| react-moment                       | ✔️                  
| react-native-charts-wrapper        | react-native-gifted-charts |
| react-native-display               | ❌ Sin alternativa |
| react-native-floating-action       | react-native-reanimated   |
| react-native-gesture-handler       | ✔️
| react-native-image-picker          | ✔️
| react-native-indicators            | ❌ Sin alternativa
| react-native-modal-datetime-picker | ✔️
| react-native-modalbox              | ❌ gluestack tiene un componente |
| react-native-pure-jwt              | ✔️
| react-native-reanimated            | ✔️
| react-native-safe-area-view        | react-native-safe-area-context
| react-native-slider                | @react-native-community/slider
| react-native-swipeout              | ❌ Sin alternativa
| react-native-vector-icons          | lucide-react-native con react-native-svg
| react-native-walkthrough-tooltip   | ✔️
| react-native-webview               | ✔️
| react-navigation                   | @react-navigation/native
| react-navigation-drawer            | @react-navigation/drawer
| react-navigation-stack             | @react-navigation/stack
| react-redux                        | 
| redux                              | Redux Toolkit
| redux-thunk                        | 
| redux-persist                      | @react-native-async-storage/async-storage
| rn-fetch-blob                      | react-native-blob-util ó react-native-fs

## ASPECTOS QUE SUFRIERON CAMBIOS 🔄

### Administrador del estado global de la app

**V1.0.2**: Se usaba `Redux` y otro conjunto de dependencias por separado para manejar el estado global de la aplicación.

**V2.0.0**: Se usará `Redux Toolkit`, esta solución hace que trabajar con Redux sea más facil, eficiente y se reduzca el código necesario.

> [!NOTE]
> Se consideró usar `Zustand`, pero según las comparativas, este es mejor para proyectos pequeños; siendo la app de Orión un proyecto mayor, se opta por `Redux Toolkit`.

### Routing 🔀

**V1.0.2**: En versiones anteriores del proyecto, la navegación y las rutas se resolvían desde un solo archivo donde convergían todos los tipos de navegación (basada en botones dentro de cada vista, basada en pestañas y basada en botones desde una sidebar).

**V2.0.0**: En esta versión se separarán los tipos de navegación por componente e importandolos en el componente `NavigationContainer` en el documento `routes.tsx`, esto con el objetivo de hacerlo más claro y segmentado.
La estructura es la siguiente:

```text
src
└── config
    └── routing
        ├── drawerNavigation
        |   └── DrawerNavigation.tsx
        ├── tabNavigation
        |   └── TabNavigation.tsx
        └── routes.tsx
```

> [!NOTE]
> La navegación básica se quedará en un solo archivo donde serán importadas las navegaciones especiales (por pestañas y sidebar) porque son vistas.

**Rutas dinámicas:**

El enrutamiento dinámico con React Navigation en su versión 6 es de la siguiente manera:

1. Cuando se use este tipo de navegación es importante añadir el parámetro en el método navigate("ruta", {nombreParametro: valor})
2. Para usar los parámetros:
```
import { useRoute } from "@react-navigation/native"

const Nombre = useRoute()
const {nombreParametro} = Nombre.params

Si es un valor individual solo se usa el nombre del parámetro
Si lo que se pasa es un objeto, se usa convencionalmente (nombreParametro.valor)
```

### Peticiones http

Para esta version de la App, se usa la biblioteca Axios para realizar las consultas http para obtener datos desde la API de Orion y otras operaciones como el inicio de sesión. Esto, en conjunto con los hooks de React y métodos de JS .then, .catch y .finally permite un manejo del estado de carga más facil.

```
Ejemplo de fetching de datos y control del estado de carga:

// Estado para el manejo de la carga, seteado por defecto en true.
const [isLoading, setIsLoading] = useState<boolean>(true)
const [data, setData] = useState<string[]>([]) // Estado para los datos, vacío por defecto.

// Hook useEfect que hará la petición una vez que se cargue la vista y empieza a hacer el fetching de datos
useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
        .then((response) => {setData(response.data)})  // Guardando la data y cambiando su estado.
        .catch((error) => console.log(error))          // Caso de error.
        .finally(() => setIsLoading(false))            // Cuando se termina de cargar los datos, cambia el  estado de carga a false.
},[])
<View style={{flex: 1}}>
    // Ternaria que ayuda al renderizado condicional dependiendo del estado de carga.
    {isLoading
        ? <DotLoader/>
        : <InventoryView children={currentlyVisibleComponents} listados={currentlyVisibleComponents.length} total={data.length} scroll={handleScroll}/>}
</View>
```

### Paginación

La paginación se maneja por ahora con un componente llamado `ListViewer` que funciona en conjunto con un custom hook llamado `usePagination` y carga diferida de elementos a través de `lazy` de React.

> [!NOTE]
> El componente necesita ser mejorado para que sea más facil de usar a la hora de desarrollar.

**Funcionamiento de la paginación:**

**Importación del componente a mostrar en la lista:**
```
Para componentes creados en el mismo archivo

const ComponentAlias = lazy(() => Promise.resolve({default: ComponentName}))
```
1. **Uso del custom hook y definición del array de componentes:**
```
const [data, setData] = useState([]) // Definir el array que guarda los datos.
const [visibleItems, handleScroll] = usePagination() // Uso del Custom Hook
const currentlyVisibleComponents = data.slice(0, visibleItems).map((item) => (
    <SimpleListItem
        key={item.codigo}
        nombre={item.nombre}
        codigo={item.codigo}
        route={item.codigo}
    />
))
```
2. **Uso del componente ListViewer:**
```
<ListViewer children={currentlyVisibleComponents} listados={currentlyVisibleComponents.length} total={data.length} scroll={handleScroll}/>
```

### Iconos 🚸

**V1.0.2**: Se utilizaba la librería `react-native-vector-icons`, la cual resulta tediosa de configurar y usar según lo visto en la documentación de la librería.

**V2.0.0**: Se utilizará `lucide-react-native` que trabaja en conjunto con la nueva librería `gluestack-ui` que reemplazó a `react-base`, junto con otras de sus dependencias como `react-native-svg` que es la que permite el uso de iconos vectoriales.

Adicional a lo anterior, se creó un archivo donde se importan todos los iconos de la librería en `assets/icons/Icons.tsx` y se agregan SOLO LOS QUE SE USARÁN en la app, esto con el objetivo de hacer más facil la busqueda del icono requerido, su uso es el siguiente:

- Como una prop:

```
import {iconMap} from '../../config/icons/Icons'

interface <componentName>Props{
    iconName: keyof typeof iconMap
}

DENTRO del componente donde será usado.
const Icon = iconMap[iconName] //"iconName" es el nombre de la prop.

<Icon style={styles.icon} size={iconSize}/> //"styles" son estilos dados en donde se utilice y "iconSize" es una prop para definir el tamaño del icono.
```

- Como atributo de un objeto (Ver el ejemplo dentro de la navegación de tipo sidebar "DrawerNavigation"):

```
import { iconMap } from '../assets/icons/Icons'

{
    attribute: iconMap.<iconName>
}
```

> [!NOTE]
> Para usar iconos muy puntuales de un componente como un SELECTOR, se importa directamente desde la librería `@gluestack-ui/themed`.
> Si no se conoce el nombre exacto del icono, pueden verse todos en la página de la librería [Lucide React Icons](https://lucide.dev/icons/)

### Diseño

El diseño solo cambió en el "borderRadius" de los componentes a 5 puntos, para darle uniformidad al diseño de la aplicación.

## Esquema de colores 🌈

### Colores principales (Modo claro)

Colores que se usan a lo largo de toda la app en "modo claro":

- Color principal: ![#fff](https://placehold.co/10x10/fff/fff.png)`#fff`
- Color secundario (azul) : ![#215877](https://placehold.co/10x10/215877/215877.png)`#215877`
- Color de enlaces  y texto resaltado: ![#5294ff](https://placehold.co/10x10/5294ff/5294ff.png)`#5294ff`

**Modo oscuro**

Los colores del "modo oscuro" fueron modificados por motivos estéticos, ya que una escala de grises es poco accesible y queda obsoleta.

> [!NOTE]
> Estos esquemas de colores pueden verse en el archivo `src/config/GlobalStyles.tsx`.

### Otros colores

Colores que se usan en la app, pero en componentes más pequeños o con menos frecuencia:

- ![#5eb85f](https://placehold.co/10x10/5eb85f/5eb85f.png)`#5eb85f`
- ![#6fb9c3](https://placehold.co/10x10/6fb9c3/6fb9c3.png)`#6fb9c3`

### Botones

Observando el esquema de colores que usan los botones a lo largo de la aplicación podemos inferir varios tipos y el color que los distinguen:

**Botones de funcionamiento:**

Son botones que ejecutan una función o invocan otros componentes, estos se usan en las vistas donde se necesitan ya que no cuentan con navegación, estos botones son los siguientes:

1. **Configuración:** se refiere a botones que realizan algún cambio en la aplicación, ya sea a nivel de comportamiento, visual o en el estado global. Estos se distinguen con el color ![#5eb85f](https://placehold.co/10x10/5eb85f/5eb85f.png)`#5eb85f` y se encuentran en la vista donde se hace la configuración.

2. **Visualización:** se refiere a botones que muestran información a traves de un modal, toast, alerta o para navegar a otras rutas que consuman datos de una vista previa (caso de los filtros). Estos se distinguen con el color ![#5fb2f9](https://placehold.co/10x10/5fb2f9/5fb2f9.png)`#5fb2f9`.

3. **Acciones:** se refiere a botones secundarios y pequeños como los que se encuentran en los swipeButtons, botones de 'Aceptar'/'Cancelar' o en el botón de inicio de sesión.

- ![#215877](https://placehold.co/10x10/215877/215877.png)`#215877`(principal (en el login) y swap buttons).
- ![#5fb85f](https://placehold.co/10x10/5fb85f/5fb85f.png)`#5fb85f`(add y confirm buttons).
- ![#d85350](https://placehold.co/10x10/d85350/d85350.png)`#d85350`(delete y cancel buttons).

**Botones de navegación:**

Son botones que sirven para navegar entre vistas, estos carecen de color de fondo, pueden tener o no un icono y van generalmente en los menús, estos se encuentran en el archivo `/src/components/Buttons/NavIconButton.tsx`.

## Prácticas seguidas o recomendaciones 👍

A continuación algunas prácticas que se pueden tener en cuenta a la hora de escribir código y componentes en la aplicación:

### **Crear un componente**

**Nombres descriptivos entre padres e hijos:** Entre componentes que tienen relacion de "padre" e "hijos", por ejemplo:

```
Componente del archivo SwipeButtons
Padre:
    SwipeButton
Hijo:
    SwipeActionButton
```

**Definiendo las props:** Cuando se crea un componente en TSX deben definirse los tipos de datos de cada prop, teniendo esto en cuenta se define un nombre para la interface que va a contenerlas de la siguiente forma:

```
interface <ComponentName>Props{
    Prop : propType
}
```

**Creando el componente y sus métodos:** Para diferenciar el componente de los métodos, se propone diferenciarlos por sintaxis así:

- Para el componente:

```
const ComponentName : React.FC<ComponentNameProps> = ({props}) => {}
```

- Para los métodos dentro del componente:

```
const ComponentName : React.FC<ComponentNameProps> = ({props}) => {
    function functionName(){}
}
```

