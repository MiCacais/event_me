import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    events: [],
    event: [],
    message: null,
    messageUpdate: null
};

const fetchEventsStart = ( state, action ) => {
    return updateObject( state );
};

const fetchEventsSuccess = ( state, action ) => {
    return updateObject( state, {
        events: action.events
    } );
};

const fetchEventsFail = ( state, action ) => {
    return updateObject( state );
};

const createEventStart = ( state, action ) => {
    return updateObject( state );
};

const createEventSuccess = ( state, action ) => {
    return updateObject( state, {
        message: action.message
    } );
};

const createEventFail = ( state, action ) => {
    return updateObject( state );
};

const deleteEventFail = ( state, action ) => {
    return updateObject( state );
};

const deleteEventSuccess = ( state, action ) => {
    const updatedEvents = state.events.filter(e => e.id !== action.eventId);
    return updateObject( state, {
        message: action.message,
        events: updatedEvents
    } );
};

const updateEventSuccess = ( state, action ) => {
    return updateObject( state, {
        messageUpdate: action.message
    } );
};

const updateEventFail = ( state, action ) => {
    return updateObject( state );
};

const fetchEventSuccess = ( state, action ) => {
    return updateObject( state, {
        event: action.event
    } );
};

const fetchEventFail = ( state, action ) => {
    return updateObject( state );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CREATE_EVENT_START: return createEventStart( state, action );
        case actionTypes.CREATE_EVENT_SUCCESS: return createEventSuccess( state, action )
        case actionTypes.CREATE_EVENT_FAIL: return createEventFail( state, action );
        case actionTypes.FETCH_EVENTS_START: return fetchEventsStart( state, action );
        case actionTypes.FETCH_EVENTS_SUCCESS: return fetchEventsSuccess( state, action );
        case actionTypes.FETCH_EVENTS_FAIL: return fetchEventsFail( state, action );
        case actionTypes.DELETE_EVENT_FAIL: return deleteEventFail( state, action );
        case actionTypes.DELETE_EVENT_SUCCESS: return deleteEventSuccess( state, action );
        case actionTypes.UPDATE_EVENT_SUCCESS: return updateEventSuccess( state, action );
        case actionTypes.UPDATE_EVENT_FAIL: return updateEventFail( state, action );
        case actionTypes.FETCH_EVENT_SUCCESS: return fetchEventSuccess( state, action );
        case actionTypes.FETCH_EVENT_FAIL: return fetchEventFail( state, action );
        default: return state;
    }
};

export default reducer;