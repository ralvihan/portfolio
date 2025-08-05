// components/ImageAvatars.jsx
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ImageAvatars = () => {
    return (
        <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="assets/her.jpg"
        sx={{ width: 30, height: 30 }} />
        </Stack>
    );
};

export default ImageAvatars;
