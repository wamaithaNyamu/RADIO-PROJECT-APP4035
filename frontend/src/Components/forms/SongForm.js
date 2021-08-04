import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';

function SongForm({ submit, setValue, value, edit, loading, onClose }) {
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  return (
    <Box as='form' onSubmit={submit}>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          value={value.title}
          name='title'
          height='3rem'
          onChange={handleChange}
          placeholder='Song title e.g better'
        />
      </FormControl>
      <FormControl isRequired my='0.5rem'>
        <FormLabel>Artist</FormLabel>
        <Input
          value={value.artist}
          name='artist'
          height='3rem'
          onChange={handleChange}
          placeholder='Song artist e.g Khalid'
        />
      </FormControl>
      <FormControl my='.5rem' isRequired>
        <FormLabel>Year</FormLabel>
        <Input
          value={value.year}
          name='year'
          height='3rem'
          type='text'
          onChange={handleChange}
          placeholder='Song release year e.g 2018 '
        />
      </FormControl>
      <FormControl>
        <FormLabel>Art</FormLabel>
        <Input
          value={value.art}
          name='art'
          type='text'
          height='3rem'
          onChange={handleChange}
          placeholder='Song art url'
        />
      </FormControl>

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
          bg='blue.500'
          _hover={{ bg: 'blue.600' }}
          _active={{ bg: 'blue.600', outline: 'none' }}
          _focus={{ bg: 'blue.600', outline: 'none' }}
          color='#fff'
          isDisabled={loading}
          isLoading={loading}
          type='submit'>
          {edit ? 'Edit song' : 'Create song'}
        </Button>
      </HStack>
    </Box>
  );
}

export default SongForm;
