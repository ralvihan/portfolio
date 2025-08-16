import * as React from 'react';
import Stack from '@mui/material/Stack';

const ImageAvatars = () => {
    return (
        <Stack direction="row" spacing={2}>
            <div className="w-[30px] h-[30px] flex items-center justify-center">
                {/* Logo light mode */}
                <img
                    src="/logo_black.svg"
                    alt="Logo Black"
                    className="block dark:hidden max-w-full max-h-full"
                />

                {/* Logo dark mode */}
                <img
                    src="/logo_white.svg"
                    alt="Logo White"
                    className="hidden dark:block max-w-full max-h-full"
                />
            </div>
        </Stack>
    );
};

export default ImageAvatars;
