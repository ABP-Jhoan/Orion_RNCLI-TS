import React from 'react'
import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogBody,
    Button,
    ButtonText,
    Text,
    HStack,
    Heading
  } from '@gluestack-ui/themed'
import { iconMap } from '../../assets/icons/Icons'

const types = {Success: "Success", Danger: "Danger", Warning: "Warning", Info: "Info"}

interface ModalAlertProps{
  show: boolean
  hide: () => void
  type: keyof typeof types
  title: string
  message: string
}

export const ModalAlert : React.FC<ModalAlertProps> = ({show, hide, type, title, message}) => {
    let iconName : string = 'def'
    let iconColor : string = '#fff'
    switch (type) {
      case 'Success':
        iconName = 'Success'
        iconColor = '#5eb85f'
        break;
      case 'Warning':
        iconName = 'Warning'
        iconColor = '#fcba03'
        break
      case 'Danger':
        iconName = 'Danger'
        iconColor = '#fc1803'
        break
      case 'Info':
        iconName = 'Info'
        iconColor = '#5294ff'
        break
    }
    const Icon = iconMap[iconName]
    return(
      <AlertDialog
            isOpen={show}
            onClose={() => {
                hide()
            }}
        >
        <AlertDialogBackdrop />
        <AlertDialogContent style={{borderRadius: 5}}>
          <AlertDialogHeader borderBottomWidth="$0">
            <HStack space="sm" alignItems="center">
              <Icon color={iconColor} size={20}/>
              <Heading size="md">{title}</Heading>
            </HStack>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              {message}
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <Button
              style={{borderRadius: 5, backgroundColor: '#215877'}}
              size="md"
              mr="$3"
              onPress={() => {hide()}}
            >
              <ButtonText>Entendido</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}