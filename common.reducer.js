import { COMMON_ACTIONS } from './common.actions';

const initialState = {
    data: null,
};

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_ACTIONS.SALON_INFO_RECEIVED:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};