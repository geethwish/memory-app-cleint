import { useEffect} from 'react';
import {
    Container,
    AppBar,
    Typography,
    Grow,
    Grid
} from '@mui/material';
import { useDispatch } from 'react-redux'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import useStyles from './styles';
import './App.css';

import memories from './images/memories.png';
import { getPosts } from './actions/posts';


function App() {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getPosts());

    }, [])


    return (
        <Container maxWidth="lg">

            <AppBar
                position="static"
                color="inherit"
                className={classes.appBar}
            >

                <Typography variant="h2" align='center'>
                    Memories
                </Typography>

                <img
                    src={memories}
                    alt={'memories'}
                    height="60"
                    className={classes.image}
                />

                <Grow>

                    <Container>

                        <Grid
                            container
                            justifyContent={"space-between"}
                            alignItems="stretch"
                            spacing={3}
                        >

                            <Grid item xs={12} sm={7}>

                                <Posts />

                            </Grid>

                            <Grid item xs={12} sm={5}>

                                <Form />

                            </Grid>

                        </Grid>
                    </Container>
                </Grow>

            </AppBar>

        </Container>
    );
}

export default App;
