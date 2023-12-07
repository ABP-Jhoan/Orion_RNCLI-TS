//? Librerías y componentes propios de React
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { LogOut, Option, UserCircle2 } from 'lucide-react-native';
//? Componentes propios
import { DataList } from '../screens/ProductsView'
import { Home as Inicio } from '../menu/Home'
import { TabContainer } from './TabContainer'
import { iconMap } from '../assets/icons/Icons'
import { UsersView } from '../screens/Users'
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
    },
    {
        name: 'Usuarios',
        component: UsersView,
        icon: iconMap.Users
    }
]

//? interfaces que define las props
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

const HeaderContainer : React.FC<StackProps> = ({navigation, setIsLoggedIn}) => {
    //? Bloque manejador del estado del enlace en el sidebar
    const [isActive, setIsActive] = useState('Home')  //? Se define el estado por defecto con 'Home' porque es la "página" inicial.
    function activateBackground(route : string) {
        setIsActive(route)
        navigation.navigate(route)
    }
    //? ---------------------------------------------------
    function logOut(){
        setIsLoggedIn(false)
    }
    return(
        <DrawerContentScrollView>
            <Header/>
            {routeItemsList.map((screen) => 
                <DrawerItem
                    key={screen.name}
                    label={screen.name}
                    onPress={() => activateBackground(screen.name)}
                    icon={(icono) => <screen.icon {...icono}/>}
                    focused={isActive == screen.name}
                    activeBackgroundColor='#215877'
                    //inactiveTintColor={themeStyles.drawerItemFontColor}
                    activeTintColor='#fff'
                    style={styles.routeItem}
                />
            )}
            <DrawerItem label="Cerrar Sesión" onPress={logOut} icon={(icon) => <LogOut color='#000' size={20}/>}/>
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator()

export const DrawNavigation : React.FC<StackProps> = ({navigation, setIsLoggedIn}) => {
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={() => ({
                overlayColor:'#21587777',
                headerStyle: {backgroundColor: '#215877'},
                headerTintColor: '#fff',
                drawerStyle: {backgroundColor: '#fff'}
            })}
            drawerContent={(headerContainer) => <HeaderContainer navigation={navigation} setIsLoggedIn={setIsLoggedIn}/>}
    >
            <Drawer.Screen name={'Home'} component={Inicio}/>
            <Drawer.Screen name={'Products'} component={DataList}/>
            <Drawer.Screen name={'Configurar licencia'} component={TabContainer}/>
            <Drawer.Screen name={'Usuarios'} component={UsersView}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    areaView:{
      padding: 20
    },
    badge:{
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        position: 'relative',
        top: -10,
        backgroundColor: '#215877'
    },
    routeItem:{
        borderRadius: 0,
        width: '100%'
    }
});