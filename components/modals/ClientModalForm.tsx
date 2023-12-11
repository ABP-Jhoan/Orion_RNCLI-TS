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
  } from '@gluestack-ui/themed';
import { useAppSelector, useAppDispatch } from '../../config/Redux/hooks'
import { showModal } from '../../config/Redux/Slices/ShowModelSlice';
import { View } from 'react-native';

export const ClientModalForm : React.FC = () => {
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
            <Heading size="md" style={{flex: 1, textAlign: 'center'}}>Filtros</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <View>
              Genial,haz configurado un modal que puede llamarse desde cualquier parte de la app.
            </View>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <Button
              style={{borderRadius: 5, backgroundColor: '#215877'}}
              size="md"
              mr="$3"
              onPress={() => {
                dispatch(showModal(false))
              }}
            >
              <ButtonText>Aplicar filtros</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}