import React from 'react'
import { Alert, View } from 'react-native'
import { SwipeActionButton, UserSwipeButton } from './SwapButtonsView'
import data from '../data/usuarios.json'
import { useRoute, useNavigation } from '@react-navigation/native'
import { usePagination } from '../components/listViewers/logic'
import InventoryView from '../components/listViewers/SimpleListViewer'
import { FloatButton, FloatActionButton } from '../components/buttons/FloatingButton'
import { useStyles } from '../config/GlobalStyles'

export const UsersView : React.FC = () => {
    const themeStyles = useStyles()
    const navigation = useNavigation()
    const route = useRoute()
    const routeName = route.name
    function something() {
        Alert.alert('Nada')
    }

    const [visibleItems, handleScroll] = usePagination()
    const swipeActione = [
        <SwipeActionButton key={0} icon='Config' btnText='CONFIG'/>,
        <SwipeActionButton key={1} icon='Search' btnText='SEARCH' btnFunc={something}/>
    ]
    const floatActions = [
        <FloatActionButton key={0} btnText='Nuevo usuario' iconName='User' color='#5eb85f' />,
        <FloatActionButton key={1} btnText='Refrescar' iconName='Reload' color='#0380fc' btnFunc={() => navigation.navigate(routeName)}/>
    ]
    const currentlyVisibleComponents = data.slice(0, visibleItems).map((item) => (
        <UserSwipeButton
            key={item.id}
            iconName='User'
            user={item.name}
            role={item.role}
            status={item.status}
            actionButtons={swipeActione}
        />
    ));
    return(
        <View style={{backgroundColor: themeStyles.backgroundColor, flex:1}}>
            <InventoryView children={currentlyVisibleComponents} listados={currentlyVisibleComponents.length} total={data.length} scroll={handleScroll}/>
            <FloatButton actionButtons={floatActions}/>
        </View>
    )
}