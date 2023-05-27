import { Avatar } from '@mui/material';

interface CustomAvatarProps {
  src: string;
  alt?: string;
}

function CustomAvatar({ src, alt }: CustomAvatarProps) {
  return (
    <Avatar sx={{width:50,height:50}} src={src} alt={alt} />
  );
}

export default CustomAvatar;