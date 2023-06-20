import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from './../utils/constants';

const VideoCard = ({ video }) => {
  const videoId = video.id.videoId;
  const snippet = video.snippet;

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  );
};

export default VideoCard;
