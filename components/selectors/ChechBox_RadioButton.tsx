import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon, CheckIcon} from '@gluestack-ui/themed'

interface CheckboxProps{
    label : string
    onCheck : (text: string) => void
}

export const OrionCheckBox : React.FC<CheckboxProps> = ({label, onCheck}) => {
    const [checked, setChecked] = useState(false)
    function checkear(){
        if (checked) {
            setChecked(false)
        }
        else{
            setChecked(true)
            onCheck('')
        }
    }
    return(
        <View style={styles.checkContainer}>
            <Checkbox size="md" isInvalid={false} isDisabled={false} value={label} aria-label={label} onChange={checkear}>
                <CheckboxIndicator mr="$2" style={checked ? styles.checkStyle : null}>
                    <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>{label}</CheckboxLabel>
            </Checkbox>
        </View>
    )
}

const styles = StyleSheet.create({
    checkContainer:{
        padding: 15
    },
    checkStyle:{
        borderColor: '#5FB85F',
        backgroundColor: '#5FB85F'
    }
})