import React,{useState, useEffect} from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { ModalForm } from "../components/modals/ClientModalForm";
import { CommonInput } from "../components/inputs/Commoninput";
import { LabeledSelector } from "../components/selectors/LabeledSelector";
import { CommonInstructionItem } from "../components/Instructions/CommonInsturcionItem";
import { ButtonInstructionItem } from "../components/Instructions/ButtonInstItem";
import { useStyles } from "../config/GlobalStyles";
import { useNavigation } from '@react-navigation/native'

export const InstructionsView : React.FC = () => {
    const navigation = useNavigation()
    const themeStyles = useStyles()
    const [modal, setModal] = useState(false)
    useEffect(() => {
        setModal(true)
    }, [])
    const filtros = ["TODO","PENDIENTE","PAGADO"] //? Arrayy para cargar valores en el select.
    //? Inicialización de estados
    const [codigo, setCodigo] = useState({CommonInput:''})
    const [cliente, setCliente] = useState({CommonInput:'CLIENTE'})
    const [mostrar, setMostrar] = useState(filtros[1])
    function changeCodigo(text:string) {
        setCodigo({...codigo, CommonInput:text})
    }
    function changeClient(text:string) {
        setCliente({...cliente, CommonInput:text})
    }
    function verModal() {
        setModal(true)
    }
    function cerrarModal(){
        setModal(false)
    }
    function saludar(){
        navigation.navigate("Busqueda de Clientes")
    }
    const modalElements = [
        <CommonInput key={0} textValue={codigo.CommonInput} placeholder='Código' changeFunc={changeCodigo}/>,
        <CommonInput key={1} textValue={cliente.CommonInput} placeholder='Cliente' changeFunc={changeClient}/>,
        <LabeledSelector key={2} label='Mostrar' data={filtros} defaultVal={mostrar}/>
    ]
    return(
        <View style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <Text style={[Styles.viewTitle, {color: themeStyles.resaltadoSecundario}]}>Instrucciones</Text>
            <ButtonInstructionItem text="Instrucción con botón" iconName="Filter" buttonColor="#005494" btnFunc={verModal}/>
            <CommonInstructionItem text="Instrucción 1"/>
            <ModalForm show={modal} hide={cerrarModal} childrens={modalElements} modalTitle="Filtros" btnFunc={saludar}/>
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