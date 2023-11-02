import { useState } from 'react';
import {StyleSheet, View} from 'react-native'
import { Box, Text, Button, ButtonText } from '@gluestack-ui/themed';
import {DefCard, DemoCard} from './Display'
import {Selector} from '../selectors/Selector'

export const BoxComp : React.FC = () => {
  const licences = ["DEMO", "0001", "0002"]
  const [tipoLicencia, setTipoLicencia] = useState('');
  function saludar() {
    alert(tipoLicencia)
  }
  function cambiarLicencia(value : string) {
    setTipoLicencia(value)
  }
  return(
    <View>
      <Box bg="$primary500" p="$5" backgroundColor='#fff' style={styles.boxContainer}>
        <Text color="#8f8f8f8f">LICENCIA ACTUAL</Text>
        <View>
            <Selector data={licences} onSelect={cambiarLicencia}/>
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