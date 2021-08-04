import React from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
} from '@chakra-ui/react';

function ModalComponent({ children, label, isOpen, onClose, size = 'md' }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
      <ModalOverlay />
      <ModalContent borderRadius='10px' bg='#fff'>
        <ModalCloseButton />
        <ModalHeader my='.5rem'>{label}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
