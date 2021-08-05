import { useState, useEffect, useCallback } from 'react';
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import 'antd/dist/antd.css';
import ControlBar from './Components/ControlBar';
import axios from 'axios';
import SongList from './Components/SongList';

function App() {
  // fetch songs
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSongs = useCallback(async () => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      setLoading(true);
      const { data = {} } = await axios.get('/api/songs/', config);
      setSongs(data.songs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  return (
    <Box>
      <Box width='100%' height='40vh'>
        <Image
          src='/images/hero.jpg'
          alt='hero'
          objectFit='cover'
          width='100%'
          height='100%'
          objectPosition='center'
        />
      </Box>
      <Box width={['100%', '100%', '90%', '80%']} mx='auto' my='1rem'>
        <ControlBar songs={songs} setSongs={setSongs} />
        <SongList songs={songs} setSongs={setSongs} />

        {!songs.length && loading && (
          <Center alignItems='center' justifyContent='center'>
            <Heading size='md'>Loading ....</Heading>
          </Center>
        )}
        {!songs.length && !loading && (
          <Center alignItems='center' justifyContent='center'>
            <Heading size='md'>No songs available</Heading>
          </Center>
        )}
      </Box>
    </Box>
  );
}

export default App;
