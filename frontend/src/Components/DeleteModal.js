import React from 'react';
import Modal from './ModalComponent';
import {
  Box,
  Divider,
  Alert,
  AlertIcon,
  HStack,
  Button,
} from '@chakra-ui/react';

function DeleteModal({ isOpen, onClose, size, label, loading, delFunc, id }) {
  return (
    <Modal label={label} size={size} isOpen={isOpen} onClose={onClose}>
      <Divider my='1rem' />
      <Box>
        <Alert status='warning' borderRadius='10px' height='7vh'>
          <AlertIcon />
          Are you sure you want to process with this action?
        </Alert>

        <HStack alignItems='center' justifyContent='space-between' my='2rem'>
          borderRadius='10px'
          <Button
            height='3rem'
            width='auto'
            minW='30%'
            borderRadius='10px'
            onClick={onClose}>
            Cancel
          </Button>
          <Button
            height='3rem'
            width='auto'
            borderRadius='10px'
            minW='30%'
            bg='red.500'
            _hover={{ bg: 'red.600' }}
            _active={{ bg: 'red.600', outline: 'none' }}
            _focus={{ bg: 'red.600', outline: 'none' }}
            color='#fff'
            onClick={() => {
              delFunc(id);
            }}
            isDisabled={loading}
            isLoading={loading}
            type='submit'>
            Process to delete
          </Button>
        </HStack>
      </Box>
    </Modal>
  );
}

export default DeleteModal;
