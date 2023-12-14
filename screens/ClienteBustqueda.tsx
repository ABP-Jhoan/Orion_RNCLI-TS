import React,{useState} from "react";
import { View, ScrollView, Text, StyleSheet, KeyboardAvoidingView} from "react-native";
import { MoveUp } from "lucide-react-native";
import { useStyles } from "../config/GlobalStyles";
import { CommonInput } from "../components/inputs/Commoninput";
import { FloatFunctionButton } from "../components/buttons/FloatFunctionButton";
import { ClientItem } from "../components/listItems/ClientItem";
import data from '../data/clientes.json'
import { ModalAlert } from "../components/modals/ModalAlert";
import { CounterFooter } from "../components/Footers/DataCounter";

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
            <Text style={{ color: themeStyles.fontColor }}>NO existe datos con los FILTROS APLICADOS.</Text>
        </View>
        );
    } else {
        return null;
    }
};
  
export const BusquedaView: React.FC = () => {
    const themeStyles = useStyles();

    const [modal, setModal] = useState(false);
    const [filteredClients, setFilteredClients] = useState(null);
    const [renderList, setRenderList] = useState(false);
  
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
  
    function buscarCliente() {
        let social = socialApellido.CommonInput.toLowerCase();
        let contact = contacto.CommonInput.toLowerCase();
        let identi = identificacion.CommonInput.toLowerCase();

        if (social === '' && contact === '' && identi === '') {
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

        setFilteredClients(filteredData);
        setRenderList(true);
    }
  
    function cerrarModal() {
      setModal(false);
    }
  
    function resultados() {
      if (filteredClients && filteredClients.length > 0) {
        return (
          <View style={{flex: 1}}>
            <ScrollView>
                {filteredClients.map((item) => (
                <ClientItem
                    key={item.id}
                    id={item.id}
                    clientName={item.nombre}
                    telf={item.telf}
                    backGroundColor="#fff"
                    route="Resumen Cliente"
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
        if (filteredClients?.length == null) {
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
        </KeyboardAvoidingView>
    );
};
  

const Styles = StyleSheet.create({
    container:{
        padding: 0,
        flex: 1
    }
})