import React, { useState } from 'react';
import SongForm from '../forms/SongForm';
import ModalComponent from '../ModalComponent';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

function EditSongModal({ onClose, isOpen, song, songs=[], setSongs }) {
  const toast = useToast();

  const [value, setValue] = useState({
    title: song?.title,
    artist: song?.artist,
    year: song?.year,
    art: song?.art,
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      // call the add song function
      const update = {
        ...value,
      };
      const config = { headers: { 'Content-Type': 'application.json' } };

      const { data = {} } = await axios.put(
        `/api/songs/${song?._id}`,
        update,
        config
      );

      const updates =
        songs.length &&
        songs.map((song) => {
          if (song._id === data.song._id) {
            song = data.song;
          }
          return song;
        });

      setSongs(updates);
      setLoading(false);

      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: 'Error Alert',
        description: 'Something went wrong, try again',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      onClose();
      return;
    }
  }
  return (
    <ModalComponent
      onClose={onClose}
      isOpen={isOpen}
      label={`Edit ${song.title}`}
      size='md'>
      <SongForm
        value={value}
        setValue={setValue}
        submit={handleSubmit}
        loading={loading}
        onClose={onClose}
        edit
      />
    </ModalComponent>
  );
}

export default EditSongModal;
