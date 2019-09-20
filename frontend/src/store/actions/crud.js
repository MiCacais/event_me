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

export const fetchEvents = ( token, client, uid ) => {
    return dispatch => {
        dispatch(fetchEventsStart());
        const queryParams = token + "&client=" + client + "&uid=" + uid;
        axios.get( 'http://localhost:5000/api/v1/events?access-token=' + queryParams)
            .then( res => {
                dispatch(fetchEventsSuccess(res.data.data));
            } )
            .catch( err => {
                dispatch(fetchEventsFail(err));
            } );
    };
};

export const createEventSuccess = ( message ) => {
    return {
        type: actionTypes.CREATE_EVENT_SUCCESS,
        message: message
    };
};

export const createEventFail = ( error ) => {
    return {
        type: actionTypes.CREATE_EVENT_FAIL,
        error: error
    };
}

export const createEventStart = () => {
    return {
        type: actionTypes.CREATE_EVENT_START
    };
};

export const craeteEvent = ( name, description, eventStart, eventEnd, picture, userId, token, client, uid ) => {
    return dispatch => {
        dispatch( createEventStart() );
        const newEvent = {
            "name": name,
            "description": description,
            "event_start": eventStart,
            "event_end": eventEnd,
            "picture": picture,
            "user_id": userId
        }
        const queryParams = token + "&client=" + client + "&uid=" + uid;
        axios.post( 'http://localhost:5000/api/v1/events?access-token=' + queryParams, newEvent)
            .then( response => {
                dispatch( createEventSuccess( response.data.message ) );
            } )
            .catch( error => {
                dispatch( createEventFail( error ) );
            } );
    };
};

export const deleteEventSuccess = ( message, eventId ) => {
    return {
        type: actionTypes.DELETE_EVENT_SUCCESS,
        message: message,
        eventId: eventId
    };
};

export const deleteEventFail = ( error ) => {
    return {
        type: actionTypes.DELETE_EVENT_FAIL,
        error: error
    };
}

export const deleteEvent = ( eventId, token, client, uid ) => {
    return dispatch => {
        const queryParams = '?access-token=' + token + "&client=" + client + "&uid=" + uid;
        axios.delete( 'http://localhost:5000/api/v1/events/' + eventId + queryParams)
            .then( res => {
                dispatch(deleteEventSuccess(res.data.data, eventId));
            } )
            .catch( err => {
                dispatch(deleteEventFail(err));
            } );
    };
};

export const updateEventSuccess = ( message ) => {
    return {
        type: actionTypes.UPDATE_EVENT_SUCCESS,
        message: message
    };
};

export const updateEventFail = ( error ) => {
    return {
        type: actionTypes.UPDATE_EVENT_FAIL,
        error: error
    };
}

export const updateEvent = ( name, description, eventStart, eventEnd, picture, eventId, token, client, uid ) => {
    return dispatch => {
        dispatch( createEventStart() );
        const updatedEvent = {
            "name": name,
            "description": description,
            "event_start": eventStart,
            "event_end": eventEnd,
            "picture": picture
        }
        const queryParams = '?access-token=' + token + "&client=" + client + "&uid=" + uid;
        axios.put( 'http://localhost:5000/api/v1/events/' + eventId + queryParams, updatedEvent)
            .then( response => {
                dispatch( updateEventSuccess( response.data.message ) );
            } )
            .catch( error => {
                dispatch( updateEventFail( error ) );
            } );
    };
};

export const fetchEventSuccess = ( event ) => {
    return {
        type: actionTypes.FETCH_EVENT_SUCCESS,
        event: event
    };
};

export const fetchEventFail = ( error ) => {
    return {
        type: actionTypes.FETCH_EVENT_FAIL,
        error: error
    };
}

export const fetchEvent = ( eventId, token, client, uid ) => {
    return dispatch => {
        const queryParams = '?access-token=' + token + "&client=" + client + "&uid=" + uid;
        axios.get( 'http://localhost:5000/api/v1/events/' + eventId + queryParams)
            .then( response => {
                dispatch( fetchEventSuccess( response.data.data ) );
            } )
            .catch( error => {
                dispatch( fetchEventFail( error ) );
            } );
    };
};