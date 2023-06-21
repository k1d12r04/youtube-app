import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { Videos } from './';
import { fetchFromAPI } from './../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search Results for:{' '}
        <span style={{ color: '#f31503' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
