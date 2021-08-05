import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import SongForm from '../forms/SongForm';
import ModalComponent from '../ModalComponent';

function AddSongModal({ onClose, isOpen, setSongs, songs }) {
  const toast = useToast();
  const [value, setValue] = useState({
    title: '',
    artist: '',
    year: '',
    art: '',
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      // call the add song function
      const newSong = {
        ...value,
      };

      const config = { headers: { 'Content-Type': 'application/json' } };

      const { data = {} } = await axios.post(`/api/songs/`, newSong, config);

      setSongs([data.song, ...songs]);

      setLoading(false);
      onClose()
    } catch (error) {
      setLoading(false);
      toast({
        title: 'Error Alert',
        description: 'Something went wrong, try again',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });

      return;
    }
  }

  return (
    <ModalComponent
      onClose={onClose}
      isOpen={isOpen}
      label='Add new song'
      size='md'>
      <SongForm
        value={value}
        setValue={setValue}
        submit={handleSubmit}
        loading={loading}
        onClose={onClose}
      />
    </ModalComponent>
  );
}

export default AddSongModal;
