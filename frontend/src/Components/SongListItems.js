import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditSongModal from './modals/EditSongModal';

function SongListItems({ songs, song }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: delOpen,
    onOpen: openDel,
    onClose: closeDel,
  } = useDisclosure();

  const [loading, setLoading] = useState(false);

  const deleteSong = async (id) => {
    try {
      setLoading(true)
      const config = { headers: { 'Content-Type': 'application/json' } };
      const { data = {} } = await axios.delete(`/api/songs/${id}`, config);

      songs.length && songs.filter((item) => item._id !== data.song._id);

      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw new Error(error);
    }
  };
  return (
    <>
      <DeleteModal isOpen={delOpen} onClose={closeDel} label='Delete song' />
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
            <Heading size='lg'>{song?.title}</Heading>
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
              borderRadius='10px'
              colorScheme='blue'>
              Edit
            </Button>

            <HStack>
              <Button
                height='3rem'
                width='auto'
                minWidth='20%'
                onClick={openDel}
                borderRadius='10px'>
                Delete
              </Button>
              <Button
                height='3rem'
                width='auto'
                minWidth='20%'
                onClick={onOpen}
                borderRadius='10px'
                colorScheme='blue'>
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
