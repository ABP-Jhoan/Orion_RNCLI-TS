import { useState } from 'react';
import {StyleSheet, View} from 'react-native'
import { Box, Text, Button, ButtonText, Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectIcon, Icon, ChevronDownIcon } from '@gluestack-ui/themed';
import {DefCard, DemoCard} from './Display'

export const BoxComp : React.FC = () => {
  const [tipoLicencia, setTipoLicencia] = useState('');
  function saludar() {
    alert('Hola')
  }
  function cambiarLicencia(value : string) {
    setTipoLicencia(value)
  }
  return(
    <View>
      <Box bg="$primary500" p="$5" backgroundColor='#fff' style={styles.boxContainer}>
        <Text color="#8f8f8f8f">LICENCIA ACTUAL</Text>
        <View>
           <Select style={styles.selector} onValueChange={cambiarLicencia}>
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
                  <SelectItem label="DEMO" value="DEMO" />
                  <SelectItem label="0001" value="0001" />
                  <SelectItem label="2024" value="2024" />
                </SelectContent>
              </SelectPortal>
            </Select>
        </View>
        {tipoLicencia == 'DEMO' ? <DemoCard/> : <DefCard/>}
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