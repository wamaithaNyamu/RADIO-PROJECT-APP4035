import {
  Box,
  Heading,
  Button,
  useDisclosure,
  HStack,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import AddSongModal from './modals/AddSongModal';

function ControlBar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <AddSongModal isOpen={isOpen} onClose={onClose} />
      <Box
        height='10vh'
        padding='10px'
        as={HStack}
        alignItems='center'
        justifyContent='space-between'>
        <Heading>Our music playlist</Heading>
        <Button
          borderRadius='10px'
          width='auto'
          bg='blue.500'
          _hover={{ bg: 'blue.600' }}
          _active={{ bg: 'blue.600', outline: 'none' }}
          _focus={{ bg: 'blue.600', outline: 'none' }}
          height='3rem'
          color='#fff'
          onClick={onOpen}>
          Add new song
        </Button>
      </Box>
      <Divider />
    </>
  );
}

export default ControlBar;
