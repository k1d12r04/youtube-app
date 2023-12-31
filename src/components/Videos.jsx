import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {!videos?.length && <h3>Loading...</h3>}
      {videos?.length &&
        videos?.length > 0 &&
        videos.map((item, index) => (
          <Box key={index}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
