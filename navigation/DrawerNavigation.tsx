//? Librerías y componentes propios de React
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { LogOut, UserCircle2 } from 'lucide-react-native';
//? Componentes propios
import { DataList } from '../listadoProductos/ProductsView'
import { Home as Inicio } from '../menu/Home'
import { TabContainer } from './TabContainer'
import { iconMap } from '../assets/icons/Icons'

//? Array de vistas que irán en el sidebar, con la siguiente estructura:
/**
 * ? name: El nombre con el que aparecerá en el sideBar.
 * ? component: La vista a la que dirijirá.
 * ? icon: El icono que tendrá el enlace.
 */
const routeItemsList = [
    {
        name: 'Home',
        component: Inicio,
        icon: iconMap.Home
    },
    {
        name: 'Products',
        component: DataList,
        icon: iconMap.Reports
    },
    {
        name: 'Configurar licencia',
        component: TabContainer,
        icon: iconMap.Config
    }
]

//? interface que define las props
interface StackProps{
    navigation : NavigationProp<ParamListBase>
    setIsLoggedIn : (logged : boolean) => void
}

//? Componente header del sidebar, no se exporta porque se usará aquí mismo.
const Header : React.FC = () => {
    return(
        <View style={styles.badge}>
            <UserCircle2 color='#fff' size={125} strokeWidth={1}/>
            <Text style={{color:'#fff', fontSize: 20}}>xxxx</Text>
        </View>
    )
}

const headerContainer : React.FC<StackProps> = ({navigation, setIsLoggedIn}) => {
    const logOut = () => {
        alert('que pollas?')
        //setIsLoggedIn(false)
    }
    return(
        <DrawerContentScrollView>
            <Header/>
            {routeItemsList.map((screen) => 
                <DrawerItem
                    key={screen.name}
                    label={screen.name}
                    onPress={() => navigation.navigate(screen.name)}
                    icon={(icono) => <screen.icon {...icono}/>}
                />
            )}
            <DrawerItem label="Cerrar Sesión" onPress={() => logOut} icon={(icon) => <LogOut color='#000' size={20}/>}/>
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator()

export const DrawNavigation : React.FC = () => {
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={() => ({
                overlayColor:'#21587777',
            })}
            drawerContent={headerContainer}
        >
            <Drawer.Screen name={'Home'} component={Inicio}/>
            <Drawer.Screen name={'Products'} component={DataList}/>
            <Drawer.Screen name={'Configurar licencia'} component={TabContainer}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    areaView:{
      padding: 20
    },
    texto:{color:'#000'}
    ,badge:{
        width: '100%',
        height: 200,
        backgroundColor: '#1b5378',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        position: 'relative',
        top: -10
    },
});