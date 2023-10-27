import { useState } from 'react';
import react, {StyleSheet, View} from 'react-native'
import { Box, Text } from '@gluestack-ui/themed';
import {Picker} from '@react-native-picker/picker';

export const BoxComp : React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return(
    <Box bg="$primary500" p="$5" backgroundColor='#fff' style={styles.boxContainer}>
      <Text color="#8f8f8f8f">LICENCIA ACTUAL</Text>
      <View style={styles.selector}>
        <Picker
          style={styles.selector}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="csharp" />
        </Picker>
      </View>
    </Box>
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
    borderWidth: 1
  }
})