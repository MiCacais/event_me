import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    events: [],
    message: null
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

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CREATE_EVENT_START: return createEventStart( state, action );
        case actionTypes.CREATE_EVENT_SUCCESS: return createEventSuccess( state, action )
        case actionTypes.CREATE_EVENT_FAIL: return createEventFail( state, action );
        case actionTypes.FETCH_EVENTS_START: return fetchEventsStart( state, action );
        case actionTypes.FETCH_EVENTS_SUCCESS: return fetchEventsSuccess( state, action );
        case actionTypes.FETCH_EVENTS_FAIL: return fetchEventsFail( state, action );
        default: return state;
    }
};

export default reducer;