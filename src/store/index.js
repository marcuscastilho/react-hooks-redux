import { createStore } from 'redux';

const INITIAL_STATE = {
    data:[
        'React Native',
        'React JS',
        'Node JS'
    ],
}

function courses(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_COURSE':
            if(!state.data.includes(action.title)) return { ...state, data: [...state.data, action.title]};
            return state
        default:
            return state;
    }
}

const store = createStore(courses);


export default store;