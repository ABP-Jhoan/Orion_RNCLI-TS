import {StyleSheet, View, Text} from 'react-native'
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectIcon, Icon, ChevronDownIcon } from '@gluestack-ui/themed';

interface LabeledSelectorProps{
    label : string
    defaultVal? : string
    data : string[]
    onSelect? : (text: string) => void
}

export const LabeledSelector : React.FC<LabeledSelectorProps> = ({label, defaultVal = '', data, onSelect}) => {
    return(
        <View style={{marginTop: 15}}>
            <Text>{label}</Text>
            <Select style={styles.selector} onValueChange={onSelect} defaultValue={defaultVal}>
                <SelectTrigger style={styles.trigger}>
                <SelectInput placeholder="Seleccione una opción" />
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
                        {data.map((licencia, index) => (
                            <SelectItem key={index} label={licencia} value={licencia}/>
                        ))}
                    </SelectContent>
                </SelectPortal>
            </Select>
        </View>
    )
}

const styles = StyleSheet.create({
    selector:{
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#8f8f8f8f',
      borderWidth: 1,
      marginBottom: 15,
      marginTop: 15
    },
    trigger:{
      borderColor: 'none',
      borderWidth: 0,
    }
  })