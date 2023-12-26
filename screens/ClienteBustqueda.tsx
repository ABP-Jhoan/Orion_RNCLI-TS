import React,{useEffect, useState} from "react";
import { View, ScrollView, Text, StyleSheet, KeyboardAvoidingView} from "react-native";
import { MoveUp } from "lucide-react-native";
import { useStyles } from "../config/GlobalStyles";
import { CommonInput } from "../components/inputs/Commoninput";
import { FloatFunctionButton } from "../components/buttons/FloatFunctionButton";
import { ClientItem } from "../components/listItems/ClientItem";
import data from '../data/clientes.json'
import { ModalAlert } from "../components/modals/ModalAlert";
import { CounterFooter } from "../components/Footers/DataCounter";
import { useRoute } from "@react-navigation/native"
import DotLoader from "../components/loaders/Loaders";

interface HeaderProp {
    dataState?: [] | null;
}
  
const Header: React.FC<HeaderProp> = ({ dataState }) => {
    const themeStyles = useStyles();

    if (dataState?.length == null) {
        return (
        <View style={{ padding: 20, justifyContent: "center", alignItems: "center" }}>
            <MoveUp color={themeStyles.fontColor} />
            <Text style={{ color: themeStyles.fontColor }}>POR FAVOR INGRESE UN VALOR</Text>
            <Text style={{ color: themeStyles.fontColor }}>EN ALGUNO DE LOS CAMPOS DE BÚSQUEDA</Text>
        </View>
        );
    } else if (dataState?.length === 0) {
        return (
        <View style={{ padding: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: themeStyles.fontColor }}>NO existen datos con los FILTROS APLICADOS.</Text>
        </View>
        );
    } else {
        return null;
    }
};
  
export const BusquedaView: React.FC = () => {
    //? Manejo del estado de carga
    const [isLoading, setIsLoading] = useState(true)

    //? Constantes de estilos globales, rutas y parámetro de ruta si se ingresó un código.
    const themeStyles = useStyles();
    const route : any = useRoute()
    let clientCode = route.params?.codigo

    //? Estado del modal y filtros.
    const [modal, setModal] = useState(false);
    const [filteredClients, setFilteredClients] = useState(null || Object);

    //? Estados para elmanejo de inputs.
    const [socialApellido, setSocialApellido] = useState({ CommonInput: '' });
    const [contacto, setContacto] = useState({ CommonInput: '' });
    const [identificacion, setIdentificacion] = useState({ CommonInput: '' });
    function handlesocialApellido(text: string) {
      setSocialApellido({ CommonInput: text });
    }
    function handleContacto(text: string) {
      setContacto({ CommonInput: text });
    }
    function handleIdentificacion(text: string) {
      setIdentificacion({ CommonInput: text });
    }

    //? Si se ingresó un código al pulsar el botón del modal, se hará la búsqueda y mostrará el resultado.
    useEffect(() => {
        setIsLoading(false)
        if (clientCode.CommonInput !== "") {
            const filteredData = data.filter((item) => {
                return item.id === parseInt(clientCode.CommonInput);
            });
    
            setFilteredClients(filteredData);
        }
    }, [clientCode]);
    
    //? Función para buscar los clientes a través de un filtrado del array que los contiene.
    function buscarCliente() {
        let social = socialApellido.CommonInput.toLowerCase();
        let contact = contacto.CommonInput.toLowerCase();
        let identi = identificacion.CommonInput.toLowerCase();

        //? Manejo de los campos vacíons.
        if (filteredClients == null && social === '' && contact === '' && identi === '') {
            setModal(true);
            return;
        }

        const filteredData = data.filter((item) => {
            const nombre = item.nombre.toLowerCase();
            const telf = item.telf.toString().toLowerCase();
            const identification = item.id.toString()

            return (
                (social !== '' && nombre.includes(social)) ||
                (contact !== '' && telf.includes(contact)) ||
                (identi !== '' && (identification.includes(identi)))
            );
        });
        setFilteredClients(filteredData)

        if (filteredClients?.length > 0) {
            setFilteredClients(null)
        }
    }
  
    function cerrarModal() {
      setModal(false);
    }
  
    function resultados() {
      if (filteredClients && filteredClients.length > 0) {
        return (
          <View style={{flex: 1}}>
            <ScrollView>
                {filteredClients.map((item : any) => (
                <ClientItem
                    key={item.id}
                    id={item.id}
                    clientName={item.nombre}
                    telf={item.telf}
                    backGroundColor="#fff"
                    route={"Resumen Cliente"}
                />
                ))}
            </ScrollView>
            <CounterFooter total={filteredClients.length}/>
          </View>
        );
      }
  
      return null;
    }
    
    function renderFilters() {
        if (!filteredClients?.length) {
            return(
                <View style={{padding: 15}}>
                    <CommonInput textValue={socialApellido.CommonInput} placeholder="Razón Social/Apellido" changeFunc={handlesocialApellido} />
                    <CommonInput textValue={contacto.CommonInput} placeholder="Contacto" changeFunc={handleContacto} />
                    <CommonInput textValue={identificacion.CommonInput} placeholder="Identificación" changeFunc={handleIdentificacion} />
                </View>
            )
        }
        else{
            return null
        }
    }
  
    return (
        isLoading ? <DotLoader/> :(
        <KeyboardAvoidingView style={[Styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
            {renderFilters()}
            <Header dataState={filteredClients}/>
            {resultados()}
            {modal && (
                <ModalAlert
                    show={modal}
                    hide={cerrarModal}
                    type="Warning"
                    message="Por favor digite un valor válido en alguno de los campos de búsqueda."
                    title="Error de búsqueda"
                />
            )}
            <FloatFunctionButton iconName="Search2" buttonColor="#5fb2f9" btnFunc={buscarCliente}/>
        </KeyboardAvoidingView>)
    );
};
  

const Styles = StyleSheet.create({
    container:{
        padding: 0,
        flex: 1
    }
})