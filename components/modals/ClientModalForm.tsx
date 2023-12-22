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
    Heading
  } from '@gluestack-ui/themed'
import { View } from 'react-native'

interface ClientModalFormProps{
  modalTitle : string
  childrens : React.ReactElement[]
  btnFunc? : () => void
  show : boolean
  hide : () => void
  filterButton? : boolean
}

export const ModalForm : React.FC<ClientModalFormProps> = ({show, hide, modalTitle, childrens, btnFunc, filterButton}) => {
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
            <Heading size="md" style={{flex: 1, textAlign: 'center'}}>{modalTitle}</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <View>
              {childrens}
            </View>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            {filterButton ? 
            <Button
              style={{borderRadius: 5, backgroundColor: '#215877'}}
              size="md"
              mr="$3"
              onPress={() => {
                hide()
                btnFunc && btnFunc()
              }}
            >
              <ButtonText>Aplicar filtros</ButtonText>
            </Button> : null
            }
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}