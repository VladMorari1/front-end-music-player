import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/action-creators/track";

const Index = () => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={"Track list"}>
            <Grid container justifyContent='center'>
                <Card style={{width: 900 ,padding:'10px'}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track list</h1>
                            <Button onClick={(e) => {
                                e.stopPropagation();
                                router.push('/tracks/create')
                            }}>
                                Upload
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    store => async () => {
        // @ts-ignore
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetchTracks());

        return {props: {}}
    }
);

