import {StyleSheet, View} from 'react-native'
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectIcon, Icon, ChevronDownIcon } from '@gluestack-ui/themed';

interface selectorProps{
    onSelect : (text: string) => void
}

export const Selector : React.FC<selectorProps> = ({onSelect}) => {
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
                <SelectItem label="DEMO" value="DEMO" />
                <SelectItem label="0001" value="0001" />
                <SelectItem label="2024" value="2024" />
            </SelectContent>
            </SelectPortal>
        </Select>
    )
}

const styles = StyleSheet.create({
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
    }
  })