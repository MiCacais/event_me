import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchEventsSuccess = ( events ) => {
    return {
        type: actionTypes.FETCH_EVENTS_SUCCESS,
        events: events
    };
};

export const fetchEventsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_EVENTS_FAIL,
        error: error
    };
};

export const fetchEventsStart = () => {
    return {
        type: actionTypes.FETCH_EVENTS_START
    };
};

export const fetchEvents = ( token ) => {
    return dispatch => {
        dispatch(fetchEventsStart());
        axios.get( '/api/v1/.json?auth=' + token)
            .then( res => {
                const fetchedEvents = [];
                for ( let key in res.data ) {
                    fetchedEvents.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchEventsSuccess(fetchedEvents));
            } )
            .catch( err => {
                dispatch(fetchEventsFail(err));
            } );
    };
};