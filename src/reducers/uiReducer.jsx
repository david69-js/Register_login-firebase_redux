import { types } from "../types/types";

const initialState = {
    loading: false,
    messageError: null
}
const UiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                messageError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                messageError: null
            }    
        default:
            return state;
    }
}

export default UiReducer
