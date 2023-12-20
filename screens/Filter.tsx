import React, {useState} from "react"
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native"
import { Plus, Minus } from "lucide-react-native"
import { LabeledSelector } from "../components/selectors/LabeledSelector"
import { useStyles } from "../config/GlobalStyles"
import { ConfButton } from "../components/buttons/configButton"

const type = {add : "Add", delete : "del"} 
interface FilterButtonProps{
    btnType : keyof typeof type
    children : React.ReactElement
    isEnable : boolean
    btnFunc : () => void
}

const FilterButton : React.FC<FilterButtonProps> = ({btnType, children, isEnable, btnFunc}) => {
    let btnStyles = {}
    switch (btnType) {
        case 'add':
            btnStyles = Styles.addBtn
            break;
        case 'delete':
            btnStyles = Styles.delBtn
            break
    }
    isEnable ? null : btnStyles = Styles.unableBtn
    function enableAction() {
        isEnable ? btnFunc() : null
    }
    return(
        <TouchableOpacity style={[Styles.filterButton, btnStyles]} onPress={enableAction}>
            {children}
        </TouchableOpacity>
    )
}

export const FilterView: React.FC = () => {
    const themeStyles = useStyles();
    const [filtros, setFiltros] = useState(1)
    const [enable, setEnable] = useState(true)

    //TODO: Agregar las opciones por un objeto y cambiar su disponibilidad dinámicamente para evitar repeticiones.

    function selectedFilter(selection : string) {
        if (selection == "TODOS") {
            setEnable(false)
            setFiltros(1)
        }
        else{setEnable(true)}
    }

    const filtrosComponents = Array.from({ length: filtros }, (_, index) => (
        <LabeledSelector key={index} label={`CONDICIÓN ${index + 1}`} data={["TODOS", "OTROS"]} placeholder="ELIJA FILTRO" onSelect={selectedFilter}/>
    ));


    function addFilter() {
        if (filtros == 4) {
            Alert.alert("Máximo número de filtros alcanzado")
        }
        else{
            setFiltros((prevFiltros) => prevFiltros + 1)
        }
    }

    function deleteFilter() {
        setFiltros((prevFiltros) => Math.max(prevFiltros - 1, 1)) //? Asegura que haya al menos un componente
    }

    return (
        <ScrollView style={{ backgroundColor: themeStyles.backgroundColor }}>
            <View style={Styles.ButtonsContainer}>
                <FilterButton btnType='add' children={<Plus color="#fff" size={30} />} btnFunc={addFilter} isEnable={enable}/>
                <FilterButton btnType='delete' children={<Minus color="#fff" size={30} />} btnFunc={deleteFilter} isEnable={enable}/>
                <TouchableOpacity style={Styles.showBtn}>
                    <Text style={{ color: '#fff' }}>Mostrar Artículos</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 15 }}>
                {filtrosComponents}
            </View>
        </ScrollView>
    );
};


const Styles = StyleSheet.create({
    ButtonsContainer:{
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15,
    },
    showBtn:{
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5fb2f9',
        padding: 10
    },
    filterButton:{
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtn:{
        backgroundColor: '#5fb85f'
    },
    delBtn:{
        backgroundColor: '#d85350'
    },
    unableBtn:{
        backgroundColor: '#8f8f8f'
    }
})