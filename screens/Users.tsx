import React, {Suspense} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import { SwipeActionButton, UserSwipeButton } from './SwapButtonsView'
import data from '../data/usuarios.json'
import { usePagination } from '../components/listViewers/logic'
import { ListFooter } from '../components/Footers/ListFooter'
import DotLoader from '../components/loaders/Loaders'

export const UsersView : React.FC = () => {
    function something() {
        alert('Nada')
    }

    const [visibleItems, handleScroll] = usePagination()
    const array = [
        <SwipeActionButton key={0} icon='Config' btnText='CONFIG'/>,
        <SwipeActionButton key={1} icon='Search' btnText='SEARCH' btnFunc={something}/>
    ]
    const currentlyVisibleComponents = data.slice(0, visibleItems).map((item) => (
        <UserSwipeButton
            key={item.id}
            iconName='User'
            user={item.name}
            role={item.role}
            status={item.status}
            actionButtons={array}
        />
    ));
    return(
        <>
            <ScrollView
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
            <Suspense fallback={<DotLoader />}>
                {currentlyVisibleComponents}
            </Suspense>
            </ScrollView>
            <ListFooter mostrados={currentlyVisibleComponents.length} total={data.length}/>
        </>
    )
}