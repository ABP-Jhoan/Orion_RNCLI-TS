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
import { Check } from 'lucide-react-native';
import { useAppSelector, useAppDispatch } from '../../config/Redux/hooks'
import { showModal } from '../../config/Redux/Slices/ShowModelSlice';

export const ModalView : React.FC = () => {
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
            <HStack space="sm" alignItems="center">
              <Check color='#5eb85f' size={20}/>
              <Heading size="md">Order placed</Heading>
            </HStack>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              Genial,haz configurado un modal que puede llamarse desde cualquier parte de la app.
            </Text>
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
              <ButtonText>Okay</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}