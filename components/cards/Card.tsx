import { useState } from 'react';
import {StyleSheet, View} from 'react-native'
import { Box, Text, Button, ButtonText, Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectIcon, Icon, ChevronDownIcon } from '@gluestack-ui/themed';
//import {ConfCard} from './Display'

export const BoxComp : React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  function saludar() {
    alert('Hola')
  }
  return(
    <View>
      <Box bg="$primary500" p="$5" backgroundColor='#fff' style={styles.boxContainer}>
        <Text color="#8f8f8f8f">LICENCIA ACTUAL</Text>
        <View>
           <Select style={styles.selector}>
              <SelectTrigger style={styles.trigger}>
                <SelectInput placeholder="Select option" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop/>
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Red" value="red" />
                  <SelectItem label="Blue" value="blue" />
                  <SelectItem label="Black" value="black" />
                  <SelectItem label="Pink" value="pink" isDisabled={true} />
                  <SelectItem label="Green" value="green" />
                </SelectContent>
              </SelectPortal>
            </Select>
        </View>
      </Box>
      <Button
            style={styles.boton}
            isDisabled={false}
            isFocusVisible={false}
            onPress={saludar}
            >
            <ButtonText>INICIAR</ButtonText>
            </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer:{
    borderColor: '#8f8f8f8f',
    borderWidth: 3,
  },
  selector:{
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#8f8f8f8f',
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 15
  },
  trigger:{
    borderColor: 'none',
    borderWidth: 0,
  },
  boton:{
      height: 50,
      backgroundColor: '#5eb85f',
      borderRadius: 0,
      marginTop: 20
  }
})