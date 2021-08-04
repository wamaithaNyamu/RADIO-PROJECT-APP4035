import React, { Suspense } from 'react';
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import SongListItem from './SongListItems';

function SongList({ songs }) {
  const popularSongs = songs.length && songs.slice(0, 5);
  const restSongs = songs.length && songs.slice(5, songs.length);
  return (
    <Box my='1rem'>
      <Box my='1rem'>
        <Heading
          size='md'
          my='1rem'
          fontStyle='italic'
          textDecoration='underline'>
          Popular by rating
        </Heading>
        <Grid gap='1rem' templateColumns='repeat(2, 1fr)'>
          {popularSongs.length &&
            popularSongs.map((song) => (
              <Suspense id={song._id} fallback={<h4>loading ....</h4>}>
                <SongListItem song={song} />
              </Suspense>
            ))}
        </Grid>
      </Box>
      <Box my='1rem'>
        <Heading size='md' fontStyle='italic' textDecoration='underline'>
          All Songs
        </Heading>
        <Grid gap='1rem' my='1rem' templateColumns='repeat(2, 1fr)'>
          {restSongs.length &&
            restSongs.map((song) => (
              <Suspense id={song._id} fallback={<h4>loading ....</h4>}>
                <SongListItem song={song} />
              </Suspense>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default SongList;
