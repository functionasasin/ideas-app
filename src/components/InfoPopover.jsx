import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const InfoPopover = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'info-popover' : undefined;

    return (
        <div>
            <Button
                onClick={handleClick}
                style={{
                    marginLeft: '16px',
                    width: '30px',
                    height: '30px',
                    minWidth: 'unset',
                    minHeight: 'unset',
                    borderRadius: '50%',
                    padding: '0',
                    backgroundColor: '#a855f7',
                    color: 'white',
                }}
                sx={{
                    '&:active': {
                        backgroundColor: '#9333ea',
                    },
                }}
            >
                <InfoOutlinedIcon style={{ fontSize: '42px' }} />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 0.6 }}>
                    Click the "+" icon to add an idea to the board
                </Typography>
            </Popover>
        </div>
    )
}

export default InfoPopover