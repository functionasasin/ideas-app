import { useState } from "react"
import Fab from "@mui/material/Fab"
import AddIcon from '@mui/icons-material/Add'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#a855f7',
        },
        '&:hover fieldset': {
            borderColor: '#9333ea',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#a855f7',
        },
    },
    '& .MuiInputBase-input': {
        fontSize: '1.25rem',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#a855f7',
    }
})

const NewIdea = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div>
            <Fab
                aria-label="add"
                onClick={handleClickOpen}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#a855f7',
                    color: 'white',
                }}
            >
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ textAlign: 'center', fontWeight: '600' }} className="text-purple-700">Submit a New Idea</DialogTitle>
                <DialogContent>
                    <CustomTextField
                        autoFocus
                        margin="dense"
                        id="idea"
                        label="Your Idea"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: '#a855f7' }}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose} style={{ color: '#a855f7' }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default NewIdea