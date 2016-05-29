// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state
// action, store ---> ok we will do next step ---> update store

// every time you dispatch an action every reducer will run

//es6 default parameters will set a default
function posts(state = [], action) {
    // console.log('the post will change');
    // console.log(state, action);

    switch (action.type) {
        case 'INCREMENT_LIKES' :
            //retunr the updated state
            console.log('incrementing likes');
            const i = action.index;
            return [
                //es6: before the one we are updating
                ...state.slice(0, i),
                //after the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ];
        default:
            return state;
    }
}

export default posts;
