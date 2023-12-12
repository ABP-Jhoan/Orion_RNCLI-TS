import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { iconMap } from '../../assets/icons/Icons'
import { ArrowRight } from 'lucide-react-native'
import { useStyles } from '../../config/GlobalStyles'

interface NavIconButtonProps{
    iconName: keyof typeof iconMap
    btnText: string
    route: string
    backGroundColor: string
}

export const NavIconButton : React.FC<NavIconButtonProps> = ({iconName = "Def", btnText = "New Button", backGroundColor, route}) => {
    const themeStyles = useStyles()
    const navigate = useNavigation()
    const Icon = iconMap[iconName]
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigate.navigate(route)}>
            <View style={[styles.iconContainer, {backgroundColor: backGroundColor}]}>
                <Icon style={styles.icon} size={40}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.btnText, {color: themeStyles.fontColor}]}>{btnText}</Text>
                <ArrowRight color={themeStyles.fontColor}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 90,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer:{
        width: '75%',
        height: '70%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#8f8f8f8f',
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnText:{
        fontSize: 20,
    },
    iconContainer:{
        borderRadius: 50,
        backgroundColor: '#3ea',
        margin: 10
    },
    icon:{
        width: 50,
        color: '#fff',
        margin: 10
    },
})