import React, { useState } from 'react'
import {
    TextField,
    Button,
    Typography,
    Paper
} from '@mui/material'
import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    const [postsData, setPostsData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>

            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >

                <Typography variant='h6'>Creating a Memory</Typography>

                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postsData.creator}
                    onChange={(e) => setPostsData({ ...postsData, creator: e.target.value })}
                />

                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postsData.creator}
                    onChange={(e) => setPostsData({ ...postsData, creator: e.target.value })}
                />

            </form>

        </Paper >

    )
}

export default Form