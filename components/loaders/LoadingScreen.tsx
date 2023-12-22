import React,{useState, useEffect} from "react";
import axios from "axios";
import { Text, View, StyleSheet } from "react-native";
import DotLoader from "./Loaders";
import { usePagination } from "../listViewers/logic";
import InventoryView from "../listViewers/SimpleListViewer";

export const LoaderView : React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<string[]>([])
    const [visibleItems, handleScroll] = usePagination()
    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((response) => {setData(response.data)})
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    })
    const currentlyVisibleComponents = data.slice(0, visibleItems).map((item) => (
        <View style={Styles.cont} key={item.id}>
            <Text>{item.title}</Text>
        </View>
      ))
    return(
        <View style={{flex: 1}}>
            {isLoading
                ? <DotLoader/>
                : <InventoryView children={currentlyVisibleComponents} listados={currentlyVisibleComponents.length} total={data.length} scroll={handleScroll}/>}
        </View>
    )
}

const Styles = StyleSheet.create({
    cont:{
        height: 30,
        backgroundColor: '#adc123',
        margin: 10
    }
})