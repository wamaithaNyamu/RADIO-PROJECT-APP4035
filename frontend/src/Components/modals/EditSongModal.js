import React, { useState } from 'react';
import SongForm from '../forms/SongForm';
import ModalComponent from '../ModalComponent';
import axios from 'axios';

function EditSongModal({ onClose, isOpen, song, songs }) {
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

      songs.length &&
        songs.map((song) => {
          if (song._id === data.song._id) {
            song = data.song;
          }
          return song;
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
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
