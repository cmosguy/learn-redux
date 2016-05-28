// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state
// action, store ---> ok we will do next step ---> update store

// every time you dispatch an action every reducer will run

//es6 default parameters will set a default
function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    return state;
}

export default posts;
