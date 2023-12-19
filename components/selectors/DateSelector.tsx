import React,{useState} from "react"
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useStyles } from "../../config/GlobalStyles"

interface DatePickerProps{
    label : string
    pickerFunc? : (date:Date) => void | null
}


export const DatePicker : React.FC<DatePickerProps> = ({label, pickerFunc}) => {
    const themeStyles = useStyles()
    const [visible, setVisible] = useState(false)
    const [date, setDate] = useState("FECHA")
    function validateDate(date : Date) {
        let message : string = ""
        let day : number = date.getDate()
        let month : string = date.toLocaleString('default', {month: 'long'})
        let numericMonth : number = date.getMonth()
        let year : number = date.getFullYear()
        
        let currentDate : Date = new Date()
        let currentDay : number = currentDate.getDate()
        let currentNumericMonth : number = currentDate.getMonth()
        let currentYear : number = currentDate.getFullYear()
        if (day > currentDay && numericMonth == currentNumericMonth) {
            Alert.alert("El día no puede ser mayor al día actual.")
        }
        else if (numericMonth > currentNumericMonth){
            Alert.alert("El mes no puede ser mayor al actual.")
        }
        else if(year > currentYear){
            Alert.alert("El año no puede ser mayor al año actual.")
        }
        else{
            message = day + " " + month + " " + year
            return message
        }
        return message = "Fecha inválida"
    }
    function showPicker() {
        setVisible(true)
    }
    function hidePicker(){
        setVisible(false);
    }
    
    function handleConfirm(date : Date){
        hidePicker()
        let result = validateDate(date)
        setDate(result)
        pickerFunc && pickerFunc(date)
    }
    return(
        <>
        <TouchableOpacity onPress={showPicker}>
            <Text style={{color: themeStyles.fontColor, fontSize: 15}}>{label}</Text>
            <View style={Styles.content}>
                <Text style={{color: themeStyles.fontColor, fontSize: 20}}>{date}</Text>
            </View>
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={visible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
        />
        </>
    )
}

const Styles = StyleSheet.create({
    content:{
        borderWidth: 1,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#5fb2f9',
        borderBottomColor: '#5fb2f9'
    }
})