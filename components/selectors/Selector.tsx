import {StyleSheet, View} from 'react-native'
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectIcon, Icon, ChevronDownIcon } from '@gluestack-ui/themed';

interface selectorProps{
    data : string[]
    onSelect : (text: string) => void
}

export const Selector : React.FC<selectorProps> = ({data, onSelect}) => {
    return(
        <Select style={styles.selector} onValueChange={onSelect}>
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
                {data.map((licencia, index) => (
                    <SelectItem key={index} label={licencia} value={licencia}/>
                ))}
            </SelectContent>
            </SelectPortal>
        </Select>
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