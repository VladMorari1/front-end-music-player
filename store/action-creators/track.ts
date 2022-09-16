import {Dispatch} from "react";
import {TrackAction, TrackActionTypes} from "../../types/track";
import axios from "axios";
import {BACKEND_URL} from "../../constants/constants";

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get(`${BACKEND_URL}tracks`)
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Произошла ошибка при загрузке треков'})
        }
    }
}