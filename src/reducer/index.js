import { actionConstants } from '../constants';

const InitialState = {};

const { TEST_ACTION_CONSTANT } = actionConstants;

const reducer = ( state = InitialState, action) => {
    switch(action.type){
        case TEST_ACTION_CONSTANT:
            console.log(`Test action ${TEST_ACTION_CONSTANT} fired`);
            return state;

        default:
            return state;
    };
};

export default reducer;