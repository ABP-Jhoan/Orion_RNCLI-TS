import React from "react"
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { Search } from "lucide-react-native"

interface SearchInputProps{
    textValue? : string
    placeholder? : string
    changeFunc? : () => void
    btnFunc : () => void
}

export const SearchInput : React.FC<SearchInputProps> = ({textValue, placeholder, changeFunc, btnFunc}) => {
    return(
        <View style={Styles.container}>
            <TextInput
                style={Styles.input}
                value={textValue}
                placeholder={placeholder}
                onChange={changeFunc}
            />
            <TouchableOpacity style={Styles.searchButton} onPress={btnFunc}>
                <Search color="#fff" size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input:{
        width: '70%',
        backgroundColor: '#ddd',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 0,
        borderBottomRightRadius : 0,
        borderBottomLeftRadius : 10,
        marginLeft: 5
    },
    searchButton:{
        width: 50,
        backgroundColor: '#5fb2f9',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius : 0,
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 0,
        marginRight: 5
    }
})