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
  } from '@gluestack-ui/themed';
import { useAppSelector, useAppDispatch } from '../../config/Redux/hooks'
import { showModal } from '../../config/Redux/Slices/ShowModelSlice'
import { View } from 'react-native'

interface ClientModalFormProps{
  modalTitle : string
  childrens : React.ReactElement[]
  btnFunc? : (text : string) => void
}

export const ModalForm : React.FC<ClientModalFormProps> = ({modalTitle, childrens, btnFunc}) => {
    const show = useAppSelector((state) => state.showModal.show)
    const dispatch = useAppDispatch()
    return(
        <AlertDialog
            isOpen={show}
            onClose={() => {
                dispatch(showModal(false))
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
            <Button
              style={{borderRadius: 5, backgroundColor: '#215877'}}
              size="md"
              mr="$3"
              onPress={() => {
                dispatch(showModal(false))
                btnFunc && btnFunc()
              }}
            >
              <ButtonText>Aplicar filtros</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}