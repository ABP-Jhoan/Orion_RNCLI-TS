import React, { lazy } from 'react'
import { View, Text } from 'react-native'
import data from '../data/inventario.json'
import { InventoryView } from '../components/listViewers/SimpleListViewer'
import { usePagination } from '../components/listViewers/logic'
import { ReloadFloatButton } from '../components/buttons/FloatingButton'
import { useRoute, useFocusEffect } from '@react-navigation/native'
import ReloadButton from '../components/buttons/Reload'

//? Componente que será importado de manera diferida.
const SimpleListItem = lazy(() => import('../components/listItems/SimpleListAlert'))

interface SomeElementProps{
  Name : string
  Group : string
}
const SomeElement : React.FC<SomeElementProps> = ({Name, Group}) => {
  return(
    <View>
      <Text>{Name}</Text>
      <Text>{Group}</Text>
    </View>
  )
}

export const ListView: React.FC = () => {
  const route = useRoute()
  const routeName = route.name
  //? Custom Hook para paginación (evitar boilerPlate).
  const [visibleItems, handleScroll] = usePagination()
  
  const currentlyVisibleComponents = data.slice(0, visibleItems).map((item) => (
    <SimpleListItem
      key={item.id}
      PName={item.nombre}
      Codigo={item.codigo}
      Grupo={item.grupo}
      UE={item.UE}
      Bodega={item.bodega}
      Stock={item.stock}
      Alerta={item.alerta}
    />
  ))

  return (
    <View style={{flex: 1}}>
      <InventoryView children={currentlyVisibleComponents} listados={currentlyVisibleComponents.length} total={data.length} scroll={handleScroll}/>
      <ReloadFloatButton ruta={routeName}/>
    </View>
  )
}
