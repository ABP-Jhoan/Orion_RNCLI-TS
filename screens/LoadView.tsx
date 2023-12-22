import React,{useState, useEffect} from "react"
import { View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { LoaderView } from "../components/loaders/LoadingScreen"
import { Search } from "lucide-react-native";
import { SearchInput } from "../components/inputs/SearchInput";
import { ModalForm } from "../components/modals/ClientModalForm";

export const Vista : React.FC = () => {
    const navigation = useNavigation()
    const [modal, setModal] = useState(false)
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}} onPress={verModal}><Search color="#fff" size={30}/></TouchableOpacity>
            ),
        })
        
    }, [navigation])
    function verModal() {
        setModal(true)
    }
    function cerrarModal(){
        setModal(false)
    }
    const ModalContent = [<SearchInput key={0} btnFunc={cerrarModal}/>]
    return(
        <View style={{flex: 1}}>
            <LoaderView/>
            <ModalForm show={modal} hide={cerrarModal} childrens={ModalContent} modalTitle="Buscar" filterButton={false}/>
        </View>
    )
}