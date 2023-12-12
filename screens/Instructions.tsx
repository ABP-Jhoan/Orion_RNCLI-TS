import React,{useState, useEffect} from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { ModalForm } from "../components/modals/ClientModalForm";
import { CommonInput } from "../components/inputs/Commoninput";
import { LabeledSelector } from "../components/selectors/LabeledSelector";
import { CommonInstructionItem } from "../components/Instructions/CommonInsturcionItem";
import { ButtonInstructionItem } from "../components/Instructions/ButtonInstItem";
import { useStyles } from "../config/GlobalStyles";
import { useDispatch } from "react-redux";
import { showModal } from "../config/Redux/Slices/ShowModelSlice";
import { useNavigation } from '@react-navigation/native'

export const InstructionsView : React.FC = () => {
    const navigation = useNavigation()
    const themeStyles = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showModal(true))
    }, [])
    const filtros = ["TODO","PENDIENTE","PAGADO"] //? Arrayy para cargar valores en el select.
    //? Inicialización de estados
    const [codigo, setCodigo] = useState({CommonInput:''})
    const [cliente, setCliente] = useState({CommonInput: 'CLIENTE'})
    const [mostrar, setMostrar] = useState(filtros[1])
    function handleCode(text : string){
        setCodigo({CommonInput: text})
    }
    function handleClient(text : string) {
        setCliente({CommonInput: text})
    }
    function verModal() {
        dispatch(showModal(true))
    }
    function saludar(){
        navigation.navigate("Busqueda de Clientes")
    }
    const modalElements = [
        <CommonInput key={0} textValue={codigo.CommonInput} placeholder='Código' changeFunc={handleCode}/>,
        <CommonInput key={1} textValue={cliente.CommonInput} placeholder='Something' changeFunc={handleClient}/>,
        <LabeledSelector key={2} label='Mostrar' data={filtros} defaultVal={mostrar}/>
    ]
    return(
        <View style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <Text style={[Styles.viewTitle, {color: themeStyles.resaltadoSecundario}]}>Instrucciones</Text>
            <ButtonInstructionItem text="Instrucción con botón" iconName="Filter" buttonColor="#005494" btnFunc={verModal}/>
            <CommonInstructionItem text="Instrucción 1"/>
            <ModalForm childrens={modalElements} modalTitle="Filtros" btnFunc={saludar}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1
    },
    viewTitle: {
        fontSize: 20,
        marginBottom: 30
    }
})