import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  useDisclosure,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditSongModal from './modals/EditSongModal';

function SongListItems({ songs, song, setSongs }) {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: delOpen,
    onOpen: openDel,
    onClose: closeDel,
  } = useDisclosure();

  const [loading, setLoading] = useState(false);

  const deleteSong = async (id) => {
    try {
      setLoading(true);
      const config = { headers: { 'Content-Type': 'application/json' } };
      await axios.delete(`/api/songs/${id}`, config);

      const filtered = songs.length && songs.filter((item) => item._id !== id);

      console.log(filtered);

      setSongs(filtered);
      setLoading(false);
      closeDel();
    } catch (error) {
      setLoading(false);
      toast({
        title: 'Error Alert',
        description: 'Something went wrong, try again',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      closeDel();
      return;
    }
  };
  return (
    <>
      <DeleteModal
        isOpen={delOpen}
        onClose={closeDel}
        label='Delete song'
        loading={loading}
        delFunc={deleteSong}
        id={song?._id}
      />
      <EditSongModal isOpen={isOpen} onClose={onClose} song={song} />
      <Box
        height='auto'
        minHeight='15vh'
        as={HStack}
        spacing='6'
        shadow='sm'
        p='10px'
        borderRadius='10px'
        bg='gray.50'>
        <Image
          src={song?.art}
          fallbackSrc='https://via.placeholder.com/200.png/fff/eee'
          width='30%'
          height='100%'
          objectFit='cover'
          borderRadius='10px'
        />

        <VStack
          ml='1rem'
          width='100%'
          alignItems='flex-start'
          justifyContent='space-between'
          height='100%'>
          <VStack alignItems='flex-start' justifyContent='flex-start'>
            <Heading fontSize='1.5rem'>{song?.title}</Heading>
            <Text color='#444' fontSize='1.2rem'>
              Artist &bull; {song?.artist}
            </Text>
            <Text color='#555' fontSize='1rem'>
              Release &bull; {song?.year}
            </Text>
          </VStack>

          <HStack
            alignItems='center'
            justifyContent='space-between'
            width='100%'>
            <Button
              height='3rem'
              width='auto'
              minWidth='20%'
              onClick={onOpen}
              fontSize='0.9rem'
              borderRadius='10px'
              colorScheme='blue'>
              Edit
            </Button>

            <HStack>
              <Button
                height='3rem'
                width='auto'
                fontSize='0.9rem'
                minWidth='20%'
                onClick={openDel}
                borderRadius='10px'>
                Delete
              </Button>
              <Button
                height='3rem'
                width='auto'
                minWidth='20%'
                fontSize='0.9rem'
                borderRadius='10px'
                colorScheme='teal'>
                Add rating
              </Button>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

export default SongListItems;
